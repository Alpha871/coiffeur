import { getAllSalonServices } from "@/oop/infrastructure/service-action";
import { Suspense } from "react";
import ManageServicesClient from "./_components/service-management-client";
import { capitalize } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export default async function ServiceManagement({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const services = await getAllSalonServices(id);

  return (
    <Suspense fallback={<Spinner />}>
      <ManageServicesClient
        services={services.map((s) => ({
          id: s.id,
          title: s.service.name,
          category: capitalize(s.service.category),
          durationMin: s.service.durationMin,
          price: s.service.price,
          image: s.service.image || undefined,
          description: s.service.description || undefined,
          createdAt: s.service.createdAt || undefined,
          updatedAt: s.service.updatedAt || undefined,
        }))}
      />
    </Suspense>
  );
}
