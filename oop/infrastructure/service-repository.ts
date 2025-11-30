"use server";

import { ServiceCategory } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function addService(
  salonId: string,
  name: string,
  category: string,
  durationMin: number,
  price: number,
  description?: string | null,
  image?: string
) {
  const newService = await prisma.salonService.create({
    data: {
      salon: { connect: { id: salonId } },
      service: {
        create: {
          name,
          category: category.toUpperCase() as ServiceCategory,
          durationMin,
          price,
          description,
          image,
        },
      },
    },
    include: {
      service: true,
      salon: true,
    },
  });

  revalidatePath(`/salon/${salonId}/services`);

  return newService;
}

export async function editService(
  serviceId: string,
  name?: string,
  category?: string,
  durationMin?: number,
  price?: number,
  description?: string | null,
  image?: string
) {
  const updatedService = await prisma.salonService.update({
    where: { id: serviceId },
    data: {
      service: {
        update: {
          name,
          category: category?.toUpperCase() as ServiceCategory,
          durationMin,
          price,
          description,
          image,
        },
      },
    },
    include: {
      salon: true,
      service: true,
    },
  });

  revalidatePath(`/salon/${updatedService.salonId}/services`);

  return updatedService;
}

export async function deleteServiceById(serviceId: string) {
  const deletedService = await prisma.salonService.delete({
    where: { id: serviceId },
    include: {
      salon: true,
      service: true,
    },
  });

  revalidatePath(`/salon/${deletedService.salonId}/services`);

  return deletedService;
}

export async function getSalonServiceById(serviceId: string) {
  const salonService = await prisma.salonService.findUnique({
    where: { id: serviceId },
    include: {
      service: true,
    },
  });

  return salonService;
}

export async function getAllSalonServices(salonId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authenticate  ");
  }

  const salonServices = await prisma.salonService.findMany({
    where: { salonId },
    include: {
      service: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return salonServices;
}
