import { Spinner } from "@/components/ui/spinner";

import { Suspense } from "react";
import AppointmentClient from "./_components/appointment-client";
import { getAllAppointments } from "@/oop/infrastructure/appointment-actions";

async function page() {
  const appointmentInfos = await getAllAppointments();

  const INITIAL_APPOINTMENTS = appointmentInfos.map((appointment) => ({
    id: appointment.id,
    customerName: appointment.customer.user.name,
    customerAvatar: appointment.customer.user.image,
    duration: appointment.service.durationMin,
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

  return (
    <Suspense fallback={<Spinner />}>
      <AppointmentClient initialAppointments={INITIAL_APPOINTMENTS} />
    </Suspense>
  );
}

export default page;
