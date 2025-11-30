"use client";

import { Card, CardContent } from "@/components/ui/card";

import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import RequestSalonForm from "@/components/request-management/request-form";

export default function CreateSalonForm() {
  const session = useSession();

  if (!session) redirect("/authentication");

  // if (session.user?.role === "SALON_OWNER") redirect("/");

  return (
    <main className="w-full py-10 md:py-16">
      <div className="flex flex-col items-center gap-8 px-4">
        {/* Title + description */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Request Your Salon
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Fill in the details below to set up your salon profile.
          </p>
        </div>

        <Card className="w-full max-w-2xl border-gray-200 dark:border-[#234836] bg-white dark:bg-background-dark">
          <CardContent className="p-6 sm:p-8">
            <RequestSalonForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
