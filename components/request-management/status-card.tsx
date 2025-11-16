"use client";

import {
  AlertCircle,
  RefreshCcw,
  XCircle,
  Hourglass,
  CheckCircle2,
  LayoutDashboard,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import Link from "next/link";

interface StatusCardProps {
  status: "PENDING" | "REJECTED" | "APPROVED";
  reason?: string;
  salonId: string;
  createdAt: Date;
}

export default function StatusCard({
  status,
  reason,
  salonId,
  createdAt,
}: StatusCardProps) {
  /* ==========================
     UI Logic by Status
  =========================== */

  const STATUS_CONFIG = {
    PENDING: {
      iconBg: "bg-amber-100 dark:bg-amber-500/20",
      icon: <Hourglass className="h-8 w-8 text-amber-500" />,
      title: "Your Application Is Pending",
      description:
        "Your application is currently being reviewed. Please wait patiently.",
      showAlert: false,
      footer: (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Need help?{" "}
          <a className="text-primary font-medium hover:underline" href="#">
            Contact Support
          </a>
          .
        </p>
      ),
    },

    REJECTED: {
      iconBg: "bg-red-100 dark:bg-red-500/20",
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      title: "Your Application Was Rejected",
      description:
        "Your application could not be approved for the following reason:",
      showAlert: true,
      footer: (
        <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
          <RefreshCcw className="h-4 w-4" />
          Submit New Application
        </Button>
      ),
    },

    APPROVED: {
      iconBg: "bg-green-100 dark:bg-green-500/20",
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
      title: "Your Application Is Approved!",
      description:
        "Congratulations! You are now part of our platform. You can access your dashboard.",
      showAlert: false,
      footer: (
        <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
          <Link href={`/salon/${salonId}/dashboard`}>
            <LayoutDashboard className="h-4 w-4" />
            Go to Dashboard
          </Link>
        </Button>
      ),
    },
  };

  const cfg = STATUS_CONFIG[status];

  return (
    <Card className="shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 rounded-xl">
      {/* HEADER */}
      <CardHeader className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div
            className={`h-16 w-16 flex items-center justify-center rounded-full ${cfg.iconBg}`}
          >
            {cfg.icon}
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {cfg.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {cfg.description}
            </p>
          </div>
        </div>
      </CardHeader>

      {/* ALERT SECTION (only for REJECTED) */}
      {cfg.showAlert && (
        <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
          <Alert
            variant="destructive"
            className="border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 rounded-lg"
          >
            <AlertCircle className="h-5 w-5 text-red-500" />

            <div>
              <AlertTitle className="font-semibold text-red-800 dark:text-red-300">
                Rejection Reason
              </AlertTitle>

              <AlertDescription className="mt-2 text-red-700 dark:text-red-300/80 text-sm">
                {reason ||
                  "Your tax document is missing. Please complete the required documents and apply again."}
              </AlertDescription>
            </div>
          </Alert>
        </CardContent>
      )}

      {/* DETAILS */}
      <CardContent className="border-t dark:border-gray-700 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Application Details
        </h2>

        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm text-gray-500">Application ID</dt>
            <dd className="mt-1 text-gray-900 dark:text-white">{salonId}</dd>
          </div>

          <div>
            <dt className="text-sm text-gray-500">Submitted On</dt>
            <dd className="mt-1 text-gray-900 dark:text-white">
              {createdAt.toLocaleDateString()} —{" "}
              {createdAt.toLocaleTimeString()}
            </dd>
          </div>
        </dl>
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="border-t bg-gray-50 dark:bg-gray-800/30 p-6 sm:justify-end rounded-b-xl">
        {cfg.footer}
      </CardFooter>
    </Card>
  );
}
