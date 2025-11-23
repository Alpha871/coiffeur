import { getAllSalonServices } from "@/oop/infrastructure/service-action";
import { Suspense } from "react";
import ManageServicesClient from "./_components/service-management-client";

export default async function ServiceManagement({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const services = await getAllSalonServices(id);
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <ManageServicesClient
        services={services.map((s) => ({
          id: s.id,
          title: s.service.name,
          cat: capitalize(s.service.category),
          dur: `${s.service.durationMin} min`,
          price: `$${s.service.price.toFixed(2)}`,
          image: s.service.image || undefined,
        }))}
      />
    </Suspense>
  );
}
