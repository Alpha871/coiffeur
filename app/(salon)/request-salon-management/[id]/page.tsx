"use server";

import * as React from "react";

import { getSalonByIdwithUserId } from "@/oop/infrastructure/salon-actions";
import StatusCard from "@/components/request-management/status-card";
import { redirect } from "next/navigation";

export default async function ApplicationStatusPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const requestedSalon = await getSalonByIdwithUserId(id);

  if (!requestedSalon) {
    return redirect("/salon/request-salon");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* =========================================================
            SCENARIO 1 — PENDING STATUS
        ========================================================= */}

        {requestedSalon && requestedSalon.creationStatus === "PENDING" && (
          <StatusCard
            name={requestedSalon.name}
            organizationId={requestedSalon.organizationId}
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
            name={requestedSalon.name}
            organizationId={requestedSalon.organizationId}
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
            name={requestedSalon.name}
            organizationId={requestedSalon.organizationId}
            status="APPROVED"
            salonId={requestedSalon.id}
            createdAt={new Date(requestedSalon.createdAt)}
          />
        )}
      </div>
    </div>
  );
}
