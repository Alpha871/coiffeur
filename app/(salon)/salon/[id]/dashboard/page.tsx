import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import SalonDashboardClient from "./_components/salon-dashboard";
import { getAllAppointments } from "@/actions/appointment-actions";

async function page() {
  // const await = null; // Placeholder to keep this an async function
  const appointments = (await getAllAppointments()).filter(
    (apt) => apt.status == "APPROVED" || apt.status == "COMPLETED"
  );

  const topAppointments = appointments
    .sort(
      (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
    )

    .slice(0, 3)
    .map((appointment) => ({
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
  const bestAppointments = appointments.reduce((acc, appointment) => {
    const memberId = appointment.memberId;
    const existing = acc.find((item) => item.memberId === memberId);

    if (existing) {
      existing.totalPrice += appointment.price;
      existing.appointmentCount += 1;
    } else {
      acc.push({
        memberId,
        memberName: appointment.member.user.name,
        totalPrice: appointment.price,
        appointmentCount: 1,
        image: appointment.member.user.image || null,
      });
    }

    return acc;
  }, [] as Array<{ memberId: string; memberName: string; totalPrice: number; appointmentCount: number; image: string | null }>);

  bestAppointments.sort((a, b) => b.totalPrice - a.totalPrice).slice(0, 3);

  const totalPrice = appointments.reduce(
    (sum, appointment) => sum + appointment.price,
    0
  );

  const totalAppointments = appointments.length;
  const totalCustomers = new Set(appointments.map((apt) => apt.customerId))
    .size;
  const totalStaff = new Set(appointments.map((apt) => apt.memberId)).size;

  return (
    <Suspense fallback={<Spinner />}>
      <SalonDashboardClient
        bestAppointments={bestAppointments}
        topAppointments={topAppointments}
        totalPrice={totalPrice}
        totalAppointments={totalAppointments}
        totalCustomers={totalCustomers}
        totalStaff={totalStaff}
      />
    </Suspense>
  );
}

export default page;
