import { Suspense } from "react";
import SalonPageClient from "./_components/salon-client";
import { getAllSalons } from "@/oop/infrastructure/salon-actions";

async function page() {
  const salons = await getAllSalons();

  console.log(salons);

  return (
    <Suspense>
      <SalonPageClient salons={salons} />
    </Suspense>
  );
}

export default page;
