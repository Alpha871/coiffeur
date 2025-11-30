"use server";

import prisma from "@/lib/prisma";
import { OpeningHours, userRole } from "../domain/salon";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { FormValues } from "@/components/request-management/request-form";
import { revalidatePath } from "next/cache";
import { CreationStatus, Prisma } from "@/generated/prisma";
import { redirect } from "next/navigation";

export type SalonBy = Awaited<ReturnType<typeof getSalonById>>;

export async function getSalonById(salonId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect(
      "/authentication?callbackUrl=" +
        encodeURIComponent(`/book-appointment/${salonId}`)
    );
  }

  const salon = await prisma.salon.findUnique({
    where: { id: salonId },
    include: {
      availabilities: true,
      organization: {
        include: {
          members: {
            // where: { role: "member" },
            include: {
              user: true,
              availabilities: true,
              specialties: {
                include: {
                  service: true,
                },
              },
              appointments: true,
            },
          },
        },
      },
      salonServices: {
        include: {
          service: true,
        },
      },
    },
  });

  return salon;
}

export async function ActiveCurrentSalonOrganizationId(
  organizationId: string,
  organizationSlug: string
) {
  try {
    await auth.api.setActiveOrganization({
      body: {
        organizationId,
        organizationSlug,
      },
      headers: await headers(),
    });
  } catch (error) {
    console.log("error", error);
  }
}

export async function DeleteSalonById(organizationId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session === null) redirect("/authentication");

  if (session.user.role !== userRole.admin) {
    throw new Error("Unauthorized");
  }

  try {
    await auth.api.deleteOrganization({
      body: {
        organizationId: organizationId,
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });
    revalidatePath("/admin-panel");

    return { success: true, message: "Salon deleted successfully" };
  } catch (error) {
    console.log("error", error);
    return { success: false, message: "Failed to delete salon" };
  }
}

export async function updateSalon(
  salonId: string,
  changedValues: Partial<FormValues>
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session === null) {
    redirect("/authentication");
  }

  try {
    const updateData: Record<string, string> = {};

    if (changedValues.salonName) updateData.name = changedValues.salonName;
    if (changedValues.address) updateData.address = changedValues.address;
    if (changedValues.description)
      updateData.description = changedValues.description;
    if (changedValues.phone) updateData.phone = changedValues.phone;
    if (changedValues.email) updateData.email = changedValues.email;

    updateData.creationStatus = CreationStatus.PENDING;

    await prisma.salon.update({
      where: { id: salonId },
      data: updateData,
    });

    return { success: true, message: "Salon updated successfully" };
  } catch (error) {
    console.log("error", error);
    return { success: false, message: "Failed to update salon" };
  }
}

export type getSalonByUserId = Awaited<ReturnType<typeof getSalonByUserId>>;

export type getSalonByIdwithUserId = Awaited<
  ReturnType<typeof getSalonByIdwithUserId>
>;

export async function getSalonByIdwithUserId(salonId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect(
      "/authentication?callbackUrl=" +
        encodeURIComponent(`/request-salon-management/${salonId}`)
    );
  }

  const requestedSalon = await prisma.salon.findFirst({
    where: { id: salonId, userId: session.user.id },
    include: {
      availabilities: true,
    },
  });

  return requestedSalon;
}

export const updateSalonOrganizationId = async (
  salonId: string,
  organizationId: string
) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session === null) {
    redirect("/authentication");
  }

  try {
    await prisma.salon.update({
      where: { id: salonId },
      data: {
        organizationId: organizationId,
        creationStatus: CreationStatus.COMPLETED,
      },
    });
    revalidatePath(`/request-salon-management/${salonId}`);
    revalidatePath("/admin-panel");
    return { success: true, message: "Salon updated successfully" };
  } catch (error) {
    console.log("error", error);
    return { success: false, message: "Failed to update salon" };
  }
};

export async function getSalonByUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }

  const requestedSalon = await prisma.salon.findFirst({
    where: { userId: session.user.id },
    include: {
      organization: {
        include: {
          members: true,
        },
      },
    },
  });

  return requestedSalon;
}

export type RequestedSalonType = Awaited<ReturnType<typeof requestSalon>>;

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
    const newSalon = await prisma.salon.create({
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
    revalidatePath("/admin-panel");
    return newSalon;
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
        creationStatus: CreationStatus.APPROVED,
        acceptedAt: new Date(),
        acceptedBy: session.user.id,
      },
    });

    revalidatePath("/admin-panel");
    revalidatePath(`/request-salon-management/${salonId}`);

    return { success: true, message: "Salon request approved." };
  } catch (error) {
    console.error("Error approving salon request:", error);
    return { success: false, message: "Failed to approve salon request." };
  }
}

export async function rejectSalonRequest(salonId: string, reason: string) {
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
        creationStatus: CreationStatus.REJECTED,
        rejectionReason: reason,
        rejectedAt: new Date(),
        rejectedBy: session.user.id,
      },
    });

    revalidatePath("/admin-panel");
    revalidatePath(`/request-salon-management/${salonId}`);

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
  if (!session || session.user.role !== userRole.admin) {
    throw new Error("Unauthorized");
  }
  return await prisma.salon.findMany({
    where: { creationStatus: CreationStatus.PENDING },
    include: {
      availabilities: true,
      user: true,
    },
  });
}

export type SalonById = Prisma.SalonGetPayload<{
  include: {
    availabilities: true;
    organization: {
      include: {
        members: {
          include: {
            user: true;
            availabilities: true;
            specialties: {
              include: {
                service: true;
              };
            };
          };
        };
      };
    };
    salonServices: {
      include: {
        service: true;
      };
    };
  };
}>;

export type SalonListItem = Awaited<ReturnType<typeof getAllSalons>>;

export async function getAllSalons() {
  const salons = await prisma.salon.findMany({
    where: { creationStatus: CreationStatus.COMPLETED },
    include: {
      salonServices: {
        include: {
          service: true,
        },
      },
      organization: true,
    },
  });
  return salons;
}

export async function getCompleteSalons() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || session.user.role !== userRole.admin) {
    throw new Error("Unauthorized");
  }

  return await prisma.salon.findMany({
    where: { creationStatus: CreationStatus.COMPLETED },
    include: {
      availabilities: true,
      user: true,
      salonServices: {
        include: {
          service: true,
        },
      },
      organization: true,
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

export async function getAllSalonsForCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/authentication");
  }

  const salons = await prisma.salon.findMany({
    where: { userId: session.user.id },
    include: {
      salonServices: {
        include: {
          service: true,
        },
      },
    },
  });

  return salons;
}

export async function updateStaffMemberHours(
  memberId: string,
  salonId: string,
  openingHours: OpeningHours
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  // Delete existing availability records for this member
  await prisma.salonAvailability.deleteMany({
    where: { memberId },
  });

  // Create new availability records
  const result = await prisma.salonAvailability.createMany({
    data: openingHours.map((hours) => ({
      memberId,
      salonId: salonId,
      dayOfWeek: hours.dayOfWeek,
      startTime: hours.startTime,
      endTime: hours.endTime,
      isClosed: hours.isClosed,
    })),
  });

  revalidatePath(`/salon/${salonId}/staff-management`);
  revalidatePath(`/salon/${salonId}/appointments`);
  return result;
}

export async function removeSalon(organizationId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session === null) redirect("/authentication");

  const { role } = await auth.api.getActiveMemberRole({
    headers: await headers(),
  });

  if (role !== "owner") {
    throw new Error("Unauthorized");
  }

  const data = await auth.api.deleteOrganization({
    body: {
      organizationId,
    },

    headers: await headers(),
  });

  revalidatePath("/salons");
  redirect("/");

  return data;
}
