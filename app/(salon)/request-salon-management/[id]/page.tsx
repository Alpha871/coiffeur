import * as React from "react";

import { getSalonByIdwithUserId } from "@/oop/infrastructure/salon-actions";
import StatusCard from "@/components/request-management/status-card";

export default async function ApplicationStatusPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("id", params.id);

  const requestedSalon = await getSalonByIdwithUserId(
    "cmi1xhpgj0009z3w93ajl08g9"
  );

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* =========================================================
            SCENARIO 1 — PENDING STATUS
        ========================================================= */}

        {requestedSalon && requestedSalon.creationStatus === "PENDING" && (
          <StatusCard
            status="PENDING"
            salonId={requestedSalon.id}
            createdAt={new Date(requestedSalon.createdAt)}
          />
        )}

        {/* =========================================================
            SCENARIO 2 — REJECTED STATUS
        ========================================================= */}
        {requestedSalon && requestedSalon.creationStatus === "REJECTED" && (
          <StatusCard
            status="REJECTED"
            reason={requestedSalon.rejectionReason || undefined}
            salonId={requestedSalon.id}
            createdAt={new Date(requestedSalon.createdAt)}
          />
        )}

        {/* =========================================================
            SCENARIO 3 — APPROVED STATUS
        ========================================================= */}

        {requestedSalon && requestedSalon.creationStatus === "ACCEPTED" && (
          <StatusCard
            status="APPROVED"
            salonId={requestedSalon.id}
            createdAt={new Date(requestedSalon.createdAt)}
          />
        )}
      </div>
    </div>
  );
}
