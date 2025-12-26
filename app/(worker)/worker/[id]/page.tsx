import { Suspense } from "react";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getMemberByUserId } from "@/oop/infrastructure/user-repository";

import WorkerPageClient from "@/components/worker/worker-client";
import Link from "next/link";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/authentication");
  }

  const member = await getMemberByUserId(session.user.id);

  if (!member || member.id !== id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-display">
        <p>Access Denied</p>
        <Link href="/">Go to Home</Link>
      </div>
    );
  }
  const appointments = member.appointments.map((appointment) => ({
    id: appointment.id,
    startsAt: appointment.startsAt,
    endsAt: appointment.endsAt,
    notes: appointment.notes,
    status: appointment.status,
    service: appointment.service.name,
    customerName: appointment.customer.user.name,
    customerAvatar: appointment.customer.user.image,
    duration: appointment.duration,
    price: appointment.price,
  }));

  return (
    <Suspense>
      <WorkerPageClient
        member={member}
        appointments={appointments}
        currentUserId={session.user.id}
      />
    </Suspense>
  );
}

export default page;
