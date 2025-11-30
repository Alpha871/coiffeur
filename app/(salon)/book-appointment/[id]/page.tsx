import { Suspense } from "react";
import BookAppointmentClient from "./_components/book-appointment-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSalonById } from "@/oop/infrastructure/salon-repository";
import { timeToString } from "@/lib/utils";

async function BookAppointment({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(
      "/authentication?callbackUrl=" +
        encodeURIComponent(`/book-appointment/${id}`)
    );
  }

  const salonby = await getSalonById(id);

  if (!salonby || !salonby.organization) {
    redirect("/salons");
  }

  const salonServices =
    salonby.salonServices.map((salonService) => ({
      id: salonService.service.id,
      label: salonService.service.name,
      group: salonService.service.name.split(" ")[0] + " Services",
      duration: salonService.service.durationMin,
      price: salonService.service.price,
      image: salonService.service.image,
    })) || [];

  const salonStaff =
    salonby.organization.members.map((member) => ({
      id: member.id,
      name: member.user.name,
      avatar: member.user.image,
      role: member.role === "member" ? "Stylist" : member.role,
      specialties: member.specialties.map((specialty) => ({
        id: specialty.service.id,
        name: specialty.service.name,
      })),
      availabilities: member.availabilities.map((availability) => ({
        dayOfWeek: availability.dayOfWeek,
        startTime: availability.startTime,
        endTime: availability.endTime,
        closed: availability.isClosed,
      })),
      appointments: member.appointments.map((appointment) => ({
        id: appointment.id,
        startsAt: appointment.startsAt,
        endsAt: appointment.endsAt,
        notes: appointment.notes,
        status: appointment.status,
      })),
    })) || [];

  return (
    <Suspense>
      <BookAppointmentClient
        salonServices={salonServices}
        salonStaff={salonStaff}
      />
    </Suspense>
  );
}

export default BookAppointment;
