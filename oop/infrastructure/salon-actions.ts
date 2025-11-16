// infrastructure/SalonRepository.ts
"use server";

import prisma from "@/lib/prisma";
import { OpeningHours, userRole } from "../domain/salon";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { clear } from "console";

export type GetPendingSalonRequestByUserId = Awaited<
  ReturnType<typeof getPendingSalonRequestByUserId>
>;

export async function getPendingSalonRequestByUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }

  const requestedSalon = await prisma.salon.findFirst({
    where: { userId: session.user.id },
  });

  return requestedSalon;
}

export async function requestSalon(salon: {
  name: string;
  address: string;
  phone: string;
  email: string;
  description?: string;
  openingHours?: OpeningHours;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.salon.create({
      data: {
        name: salon.name,
        address: salon.address,
        description: salon.description,
        phone: salon.phone,
        email: salon.email,
        userId: session.user.id,

        availabilities: {
          create:
            salon.openingHours?.map((data, index) => ({
              dayOfWeek: index,
              isClosed: data.isClosed,
              startTime: data.startTime,
              endTime: data.endTime,
            })) || [],
        },
      },
    });

    return { success: true, message: "Salon created successfully" };
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create salon");
  }
}

export async function approveSalonRequest(salonId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || session.user.role !== userRole.admin) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.salon.update({
      where: { id: salonId },
      data: {
        creationStatus: "ACCEPTED",
        acceptedAt: new Date(),
        acceptedBy: session.user.id,
      },
    });
    return { success: true, message: "Salon request approved." };
  } catch (error) {
    console.error("Error approving salon request:", error);
    return { success: false, message: "Failed to approve salon request." };
  }
}

export async function rejectSalonRequest(
  salonId: string,

  reason: string
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.salon.update({
      where: { id: salonId },
      data: {
        creationStatus: "REJECTED",
        rejectionReason: reason,
        rejectedAt: new Date(),
        rejectedBy: session.user.id,
      },
    });
    return { success: true, message: "Salon request rejected." };
  } catch (error) {
    console.error("Error rejecting salon request:", error);
    return { success: false, message: "Failed to reject salon request." };
  }
}

export type PendingSalonRequest = Awaited<
  ReturnType<typeof getPendingSalonRequests>
>[number];

export async function getPendingSalonRequests() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.session && session?.user.role !== userRole.admin) {
    throw new Error("Unauthorized");
  }
  return await prisma.salon.findMany({
    where: { creationStatus: "PENDING" },
    include: {
      availabilities: true,
      user: true,
    },
  });
}

export async function getSalonByIdwithUserId(salonId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  return await prisma.salon.findUnique({
    where: { id: salonId },
  });
}

export async function getAllSalons() {
  return await prisma.salon.findMany({
    include: {
      availabilities: true,
    },
  });
}

export async function updateSalonOpeningHours(
  salonId: string,
  openingHours: OpeningHours
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  // Delete existing opening hours
  await prisma.salonAvailability.deleteMany({
    where: { salonId },
  });

  // Create new opening hours
  await prisma.salonAvailability.createMany({
    data: openingHours.map((hours) => ({
      salonId,
      dayOfWeek: hours.dayOfWeek,
      startTime: hours.startTime,
      endTime: hours.endTime,
      isClosed: hours.isClosed,
    })),
  });
}
