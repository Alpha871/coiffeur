"use server";
import { Salon } from "@/oop/domain/salon";
import prisma from "./prisma";
import { auth } from "./auth";
import { headers } from "next/headers";

export const createSalonAction = async (salon: Salon) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(), // you need to pass the headers object.
    });
    if (!session) {
      throw new Error("Unauthorized");
    }

    // Save to database
    await prisma.salon.create({
      data: {
        name: salon.name,
        address: salon.address,
        description: salon.description,
        phone: salon.phone,
        email: salon.email,
        availabilities: {
          create:
            salon.openingHours?.map((data) => ({
              dayOfWeek: data.dayOfWeek,
              isClosed: data.isClosed,
              startTime: data.startTime,
              endTime: data.endTime,
            })) || [],
        },
      },
    });

    return { success: true, message: "Salon requested successfully" };
  } catch (error) {
    console.log("error", error);
    return { success: false, message: "Failed to request salon" };
  }
};
