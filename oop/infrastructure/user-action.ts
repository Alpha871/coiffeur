"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getAppointmentsByMemberId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const appointments = await prisma.customer.findFirst({
    where: {
      userId: session?.user.id,
    },
    include: {
      appointments: {
        include: {
          member: {
            include: {
              user: true,
            },
          },
          service: true,
          salon: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return appointments;
}

export type MemberStylist = Awaited<ReturnType<typeof getMemberById>>;

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export async function getMemberById(id: string) {
  const member = await prisma.member.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      specialties: {
        include: {
          service: true,
        },
      },
      availabilities: true,
      organization: {
        include: {
          salon: true,
        },
      },
      appointments: {
        include: {
          service: true,
          customer: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  return member;
}

export async function getMemberByUserId(userId: string) {
  const member = await prisma.member.findFirst({
    where: {
      userId: userId,
    },
    include: {
      specialties: true,
      organization: {
        include: {
          salon: true,
        },
      },
    },
  });

  return member;
}

export async function memberAvailability(
  memberId: string,
  salonId: string,
  availabilities: Array<{
    dayOfWeek: number;
    startTime: Date;
    endTime: Date;
    isClosed: boolean;
  }>
) {
  try {
    // Delete existing availabilities for this member
    await prisma.salonAvailability.deleteMany({
      where: {
        memberId: memberId,
        salonId: salonId,
      },
    });

    // Create new availabilities
    const createdAvailabilities = await prisma.salonAvailability.createMany({
      data: availabilities.map((availability) => ({
        salonId,
        memberId,
        dayOfWeek: availability.dayOfWeek,
        startTime: availability.startTime,
        endTime: availability.endTime,
        isClosed: availability.isClosed,
      })),
    });

    revalidatePath(`/salon/${salonId}/staff-management`);
    return createdAvailabilities;
  } catch (error) {
    console.error("Error updating member availability:", error);
    throw error;
  }
}

export async function assignMemberSpecialties(
  memberId: string,
  salonId: string,
  specialties: { id: string; name: string; specialty: boolean }[]
) {
  const selectedSpecialties = specialties
    .filter((s) => s.specialty)
    .map((s) => s.id);

  const updatedMember = await prisma.member.update({
    where: { id: memberId },
    data: {
      specialties: {
        connect: selectedSpecialties.map((serviceId) => ({ id: serviceId })),
      },
    },
  });

  return updatedMember;

  revalidatePath(`/salon/${salonId}/staff-management`);
}
export async function updateUserCurrentInfo(values: {
  name?: string;
  phone?: string;
  email?: string;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const userId = session?.user.id as string;

  if (Object.values(values).some((value) => value !== undefined)) {
    const result = await prisma.user.update({
      where: { id: userId },
      data: {
        ...values,
      },
    });

    revalidatePath(`/profile/${userId}`);

    return result;
  }
}

export async function updateUserInfo(
  userId: string,
  salonId: string,
  values: {
    name?: string;
    phone?: string;
    email?: string;
  }
) {
  if (Object.values(values).some((value) => value !== undefined)) {
    const result = await prisma.user.update({
      where: { id: userId },
      data: {
        ...values,
      },
    });

    revalidatePath(`/salon/${salonId}/staff-management`);
    revalidatePath(`/worker/${salonId}`);

    return result;
  }
}

export const listUsers = async (pageSize: number, currentPage: number) => {
  const users = await auth.api.listUsers({
    query: {
      limit: pageSize,
      offset: (currentPage - 1) * pageSize,
      sortBy: "createdAt",
      sortDirection: "desc",
    },

    headers: await headers(),
  });

  return users;
};

export type ListUsersType = Awaited<ReturnType<typeof listUsers>>;

export async function handleImpersonateUser(userId: string) {
  try {
    await auth.api.impersonateUser({
      body: {
        userId: userId,
      },

      headers: await headers(),
    });
    revalidatePath("/admin-panel");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function handleBanUser(userId: string) {
  try {
    await auth.api.banUser({
      body: {
        userId: userId,
      },

      headers: await headers(),
    });
    revalidatePath("/admin-panel");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function handleUnbanUser(userId: string) {
  try {
    await auth.api.unbanUser({
      body: {
        userId: userId,
      },

      headers: await headers(),
    });
    revalidatePath("/admin-panel");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function handleRevokeSessions(sessionToken: string) {
  try {
    await auth.api.revokeUserSession({
      body: {
        sessionToken: sessionToken,
      },

      headers: await headers(),
    });
    revalidatePath("/admin-panel");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function handleRemoveUser(userId: string) {
  try {
    await auth.api.removeUser({
      body: {
        userId: userId,
      },

      headers: await headers(),
    });
    revalidatePath("/admin-panel");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function sendInvitation(
  email: string,
  role: "admin" | "member",
  salonId: string,
  organizationId: string
) {
  try {
    const result = await auth.api.createInvitation({
      body: {
        email,
        role,
        organizationId,
      },
      headers: await headers(),
    });

    revalidatePath(`/salon/${salonId}/staff-management`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getInvitations(organizationId: string) {
  try {
    const data = await auth.api.listInvitations({
      query: {
        organizationId,
      },
      headers: await headers(),
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function cancelInvitation(
  invitationId: string
): Promise<{ error: null | { message?: string } }> {
  try {
    const data = await auth.api.cancelInvitation({
      body: {
        invitationId,
      },
      headers: await headers(),
    });

    if (!data) {
      return { error: { message: "Cancellation failed" } };
    }

    revalidatePath("/management/invites");
    return { error: null }; // ← Add this return
  } catch (error) {
    console.log(error);
    return {
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
  }
}
