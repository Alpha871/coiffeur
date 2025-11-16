import { NextRequest, NextResponse } from "next/server";
import { Salon } from "@/oop/domain/salon";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // ✅ Check authentication
    const session = await auth.api.getSession(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const salon = new Salon(
      body.salonName,
      body.address,
      body.phone,
      body.email,
      body.description,
      body.openingHours
    );

    // ✅ Save to database
    await prisma.salon.create({
      data: {
        name: salon.name,
        address: salon.address,
        description: salon.description,
        phone: salon.phone,
        email: salon.email,
        availabilities: {
          create:
            salon.openingHours?.map((data, index) => ({
              dayOfWeek: index,
              isClosed: data.isClosed, // ✅ Changed: isClosed not closed
              startTime: data.startTime, // ✅ Changed: already a Date
              endTime: data.endTime, // ✅ Changed: already a Date
            })) || [],
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Salon created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating salon:", error);
    return NextResponse.json(
      { error: "Failed to create salon" },
      { status: 500 }
    );
  }
}
