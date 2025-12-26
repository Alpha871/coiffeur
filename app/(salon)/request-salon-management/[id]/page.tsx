"use server";

import * as React from "react";

import { getSalonByIdwithUserId } from "@/actions/salon-actions";
import StatusCard from "@/components/request-management/status-card";
import { redirect } from "next/navigation";

export default async function ApplicationStatusPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const requestedSalon = await getSalonByIdwithUserId(id);

  if (!requestedSalon) redirect("/request-salon");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {requestedSalon && <StatusCard salon={requestedSalon} />}
      </div>
    </div>
  );
}
