"use client";

import {
  AlertCircle,
  RefreshCcw,
  XCircle,
  Hourglass,
  CheckCircle2,
  LayoutDashboard,
  Globe,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import Link from "next/link";

import { useState } from "react";
import { organization } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateSalonOrganizationId } from "@/oop/infrastructure/salon-actions";
import { useConfirm } from "@/hooks/use-confirm";
import { format } from "date-fns";

interface StatusCardProps {
  status: "PENDING" | "REJECTED" | "APPROVED";
  name: string;
  reason?: string;
  organizationId?: string | null;
  salonId: string;
  createdAt: Date;
}

export default function StatusCard({
  status,
  name,
  reason,
  organizationId,
  salonId,
  createdAt,
}: StatusCardProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [ConfirmDialog, confirm] = useConfirm(
    "Confirm Your Application",
    "Your salon application has been approved. To complete the process, please create an organization for your salon. This will allow you to manage your salon's settings and access the dashboard."
  );

  const router = useRouter();

  if (!salonId) {
    router.push("/request-salon");
  }

  const formattedDate = format(new Date(createdAt), "dd/MM/yyyy");
  const formattedTime = format(new Date(createdAt), "HH:mm:ss");

  const handleOrganizationCreationApproved = async () => {
    const ok = await confirm();
    if (!ok) {
      return;
    }

    const slug = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    if (organizationId) {
      return;
    }

    const res = await organization.create({
      name,
      slug,
    });

    if (res.error) {
      toast.error(res.error.message || "Failed to create organization");
    } else {
      // setIsModalOpen(false);
      await updateSalonOrganizationId(salonId, res.data.id);
      await organization.setActive({ organizationId: res.data.id });
      toast.success("Organization created successfully!");
      setIsConfirming(true);
      router.push(`/salon/${salonId}/dashboard`);
    }
  };

  const STATUS_CONFIG = {
    PENDING: {
      iconBg: "bg-amber-100 dark:bg-amber-500/20",
      icon: <Hourglass className="h-8 w-8 text-amber-500" />,
      title: "Your Application Is Pending",
      description:
        "Your application is currently being reviewed. Please wait patiently.",
      showAlert: false,
      footer: (
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-500 dark:text-gray-400 ">
            Need help?{" "}
            <Link className="text-primary font-medium hover:underline" href="#">
              Contact Support
            </Link>
            .
          </p>
          <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
            <Link href="/" className="flex items-center gap-2 ">
              <Globe className="h-4 w-4" />
              Explore
            </Link>
          </Button>
        </div>
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
        <div className="flex items-center justify-end w-full">
          <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
            <RefreshCcw className="h-4 w-4" />
            Submit New Application
          </Button>
        </div>
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
        <div className="flex items-center justify-end w-full">
          {organizationId ? (
            <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
              <Link
                href={`/salon/${salonId}/dashboard`}
                className="flex items-center gap-2 "
              >
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
          ) : (
            <Button
              className="gap-2 bg-primary text-white hover:bg-primary/90 cursor-pointer"
              onClick={handleOrganizationCreationApproved}
              disabled={isConfirming}
            >
              {isConfirming ? "Confirming..." : "Confirm Your Application"}
            </Button>
          )}
        </div>
      ),
    },
  };

  const cfg = STATUS_CONFIG[status];

  return (
    <>
      {/* <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Approved Salon Application"
        description="Your salon application has been approved. To complete the process, please create an organization for your salon. This will allow you to manage your salon's settings and access the dashboard."
      >
        <Button onClick={handleOrganizationCreationApproved}>
          Confirm your application
        </Button>
      </Modal> */}
      <ConfirmDialog />
      <Card className="shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 rounded-xl">
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
                {formattedDate} — {formattedTime}
              </dd>
            </div>
          </dl>
        </CardContent>

        <CardFooter className="border-t bg-gray-50 dark:bg-gray-800/30 p-6  rounded-b-xl">
          {cfg.footer}
        </CardFooter>
      </Card>
    </>
  );
}
