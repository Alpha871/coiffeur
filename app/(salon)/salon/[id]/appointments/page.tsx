import { Spinner } from "@/components/ui/spinner";

import { Suspense } from "react";
import AppointmentClient from "./_components/appointment-client";
import { getAllAppointments } from "@/actions/appointment-actions";
import { getSalonById } from "@/actions/salon-actions";
import { redirect } from "next/navigation";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const appointmentInfos = await getAllAppointments();

  const INITIAL_APPOINTMENTS = appointmentInfos.map((appointment) => ({
    id: appointment.id,
    customerName: appointment.customer.user.name,
    customerAvatar: appointment.customer.user.image,
    duration: appointment.service.durationMin,
    serviceId: appointment.service.id,
    service: appointment.service.name,
    startsAt: appointment.startsAt,
    endsAt: appointment.endsAt,
    status: appointment.status,
    notes: appointment.notes || "",
    price: appointment.price,
    memberId: appointment.memberId,
    memberName: appointment.member.user.name,
    memberAvatar: appointment.member.user.image,
  }));

  const salonby = await getSalonById(id);

  if (!salonby || !salonby.organization) {
    redirect("/");
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
    <Suspense fallback={<Spinner />}>
      <AppointmentClient
        initialAppointments={INITIAL_APPOINTMENTS}
        salonServices={salonServices}
        salonStaff={salonStaff}
      />
    </Suspense>
  );
}

export default page;
