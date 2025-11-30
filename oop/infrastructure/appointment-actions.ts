"use server";

import { AppointmentStatus } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { stringToTime } from "@/lib/utils";
import { AppointmentFormValues } from "@/lib/validations/appointment";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getAllAppointments() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointments = await prisma.appointment.findMany({
    orderBy: {
      startsAt: "asc",
    },
    include: {
      customer: {
        include: {
          user: true,
        },
      },
      member: {
        include: {
          user: true,
        },
      },
      service: true,
    },
  });

  return appointments;
}

export async function ApproveAppointment(
  appointmentId: string,
  salonId: string
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointment = await prisma.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: AppointmentStatus.APPROVED,
    },
  });

  revalidatePath("/worker/" + salonId);

  return appointment;
}

export async function RejectAppointment(
  appointmentId: string,
  salonId: string
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointment = await prisma.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: AppointmentStatus.REJECTED,
    },
  });

  revalidatePath("/worker/" + salonId);

  return appointment;
}

export async function CancelAppointment(
  appointmentId: string,
  salonId: string
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointment = await prisma.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: AppointmentStatus.CANCELLED,
    },
  });

  revalidatePath("/worker/" + salonId);
  revalidatePath("/profil/" + session.user.id);

  return appointment;
}

export async function getAppointmentsByMemberId(memberId: string) {
  const appointments = await prisma.appointment.findMany({
    where: {
      memberId: memberId,
    },
    orderBy: {
      startsAt: "asc",
    },
  });

  revalidatePath("/worker/" + memberId);

  return appointments;
}

export async function bookAppointment(data: AppointmentFormValues) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/authentication?callbackUrl=" + encodeURIComponent("/salons"));
  }

  if (!data.salonId || !data.memberId) {
    throw new Error("Missing required appointment information.");
  }

  const userId = session.user.id;

  let customerId = await prisma.customer
    .findUnique({
      where: { userId: userId },
      select: { id: true },
    })
    .then((customer) => customer?.id);

  if (!customerId) {
    customerId = await prisma.customer
      .create({
        data: {
          userId: userId,
        },
      })
      .then((customer) => customer.id);
  }

  const appointmentStart = stringToTime(data.time, data.date);
  const appointmentEnd = new Date(
    new Date(appointmentStart).getTime() +
      (data.duration ? data.duration * 60000 : 0)
  ).toISOString();

  const existingAppointment = await prisma.appointment.findFirst({
    where: {
      memberId: data.memberId,
      startsAt: {
        equals: appointmentStart,
      },
      endsAt: {
        equals: appointmentEnd,
      },
      status: AppointmentStatus.APPROVED,
    },
  });

  if (existingAppointment) {
    return { success: false, message: "Time slot already booked." };
  }

  const appointment = await prisma.appointment.create({
    data: {
      memberId: data.memberId,
      serviceId: data.serviceId,
      customerId: customerId!,
      startsAt: appointmentStart,
      endsAt: appointmentEnd,
      notes: data.notes || "",
      salonId: data.salonId,
      duration: data.duration || 30,
      price: data.price || 0,
    },
  });

  revalidatePath(`/book-appointment/${data.salonId}`);
  revalidatePath(`/profil/${session.user.id}`);

  return { success: true, appointment };
}

export async function rescheduleAppointment(
  appointmentId: string,
  data: AppointmentFormValues
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointmentStart = stringToTime(data.time, data.date);
  const appointmentEnd = new Date(
    new Date(appointmentStart).getTime() +
      (data.duration ? data.duration * 60000 : 0)
  ).toISOString();

  const existingAppointment = await prisma.appointment.findFirst({
    where: {
      memberId: data.memberId,
      startsAt: {
        equals: appointmentStart,
      },
      endsAt: {
        equals: appointmentEnd,
      },
      status: AppointmentStatus.APPROVED,
    },
  });

  if (existingAppointment) {
    throw new Error("Time slot already booked.");
  }

  const appointment = await prisma.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      startsAt: appointmentStart,
      endsAt: appointmentEnd,
    },
  });

  revalidatePath("/profil/" + session.user.id);
  revalidatePath(`/book-appointment/${data.salonId}`);

  return appointment;
}
