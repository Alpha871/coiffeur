"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

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
