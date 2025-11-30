import { Suspense } from "react";
import ClientPageClient from "./_component/profil-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAppointmentsByMemberId } from "@/oop/infrastructure/user-repository";
import { Spinner } from "@/components/ui/spinner";

async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("page session", session);

  if (!session) {
    redirect("/authentication");
  }

  const appointments = await getAppointmentsByMemberId();

  const appointmentsData = appointments?.appointments.map((appointment) => ({
    id: appointment.id,
    salondId: appointment.salonId,
    salonName: appointment.salon.name,
    startsAt: appointment.startsAt,
    status: appointment.status,
    service: appointment.service.name,
    serviceImage: appointment.service.image,
    durationMin: appointment.service.durationMin,
    price: appointment.service.price,
    barber: appointment.member.user.name,
    barberAvatar: appointment.member.user.image,
    barberId: appointment.member.id,
  }));

  // const barber = appointments?.appointments.map((appt) => appt.member);

  return (
    <Suspense fallback={<Spinner />}>
      <ClientPageClient
        name={session.user.name}
        email={session.user.email}
        image={session.user.image}
        phone={undefined}
        appointments={appointmentsData || []}
        // barberIds={barber || []}
      />
    </Suspense>
  );
}

export default page;
