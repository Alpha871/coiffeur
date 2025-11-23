import Loader from "@/components/common/loader";
import StaffManagementContentClient from "@/components/management/staff-management-client";
import { getSalonById } from "@/oop/infrastructure/salon-actions";

import { Suspense } from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const salon = await getSalonById(id);

  console.log({ salon });

  const members = salon?.organization?.members || [];

  const salonServices =
    salon?.salonServices.map((service) => service.service.name) || [];

  return (
    <Suspense fallback={<Loader />}>
      <StaffManagementContentClient
        members={members}
        salonServices={salonServices}
      />
    </Suspense>
  );
}

export default page;
