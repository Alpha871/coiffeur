import { Suspense } from "react";
import Loader from "../common/loader";
import BarberTabClient from "./barber-tab-client";
import { getCompleteSalons } from "@/oop/infrastructure/salon-actions";

async function BarberTab() {
  const baberShops = await getCompleteSalons();

  return (
    <Suspense fallback={<Loader />}>
      <BarberTabClient barberShops={baberShops} />
    </Suspense>
  );
}

export default BarberTab;
