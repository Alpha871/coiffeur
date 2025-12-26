"use client";

import {
  AlertCircle,
  XCircle,
  Hourglass,
  CheckCircle2,
  LayoutDashboard,
  Globe,
  Pencil,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import Link from "next/link";

import { useState } from "react";
import { organization } from "@/lib/auth-client";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
import {
  getSalonByIdwithUserId,
  updateSalonOrganizationId,
} from "@/actions/salon-actions";
import { useConfirm } from "@/hooks/use-confirm";
import { format } from "date-fns";
import Modal from "../common/modal";
import RequestSalonForm from "./request-form";
import { convertOpeningHoursFromDatabase } from "@/lib/utils";

interface StatusCardProps {
  salon: getSalonByIdwithUserId;
}

export default function StatusCard({ salon }: StatusCardProps) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!salon || !salon?.id) {
    redirect("/request-salon");
  }

  const formattedDate =
    salon && format(new Date(salon?.createdAt), "dd/MM/yyyy");
  const formattedTime = salon && format(new Date(salon?.createdAt), "HH:mm:ss");

  const handleOrganizationCreationApproved = async () => {
    if (!salon) return;
    setIsConfirming(true);

    const slug = salon?.name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    if (salon.organizationId) {
      return;
    }

    const res = await organization.create({
      name: salon.name,
      slug,
    });

    if (res.error) {
      toast.error(res.error.message || "Failed to create organization");
    } else {
      // setIsModalOpen(false);
      await updateSalonOrganizationId(salon.id, res.data.id);
      await organization.setActive({ organizationId: res.data.id });

      toast.success("Organization created successfully!");
      router.push(`/salon/${salon.id}/dashboard`);
      setIsConfirming(false);
      setOpenConfirmationModal(false);
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
          <Button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer gap-2 bg-primary text-white hover:bg-primary/90"
          >
            <Pencil className="h-4 w-4" />
            Edit and Reapply
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
          {
            <Button
              className="gap-2 bg-primary text-white hover:bg-primary/90 cursor-pointer"
              onClick={() => setOpenConfirmationModal(true)}
              disabled={openConfirmationModal}
            >
              {isConfirming ? "Confirming..." : "Confirm Your Application"}
            </Button>
          }
        </div>
      ),
    },
    COMPLETED: {
      iconBg: "bg-green-100 dark:bg-green-500/20",
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
      title: "Your Application Is Completed!",
      description:
        "Congratulations! You are now part of our platform. You can access your dashboard.",
      showAlert: false,
      footer: (
        <div className="flex items-center justify-end w-full">
          {salon?.organizationId && (
            <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
              <Link
                href={`/salon/${salon.id}/dashboard`}
                className="flex items-center gap-2 "
              >
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
          )}
        </div>
      ),
    },
  };

  const cfg =
    STATUS_CONFIG[salon?.creationStatus as keyof typeof STATUS_CONFIG];

  return (
    <>
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Edit Your Application"
        size="xl"
        description="Please make the necessary changes to your salon application and resubmit it for review."
      >
        <Card>
          <CardContent>
            <RequestSalonForm
              salonId={salon.id}
              setIsModalOpen={setIsModalOpen}
              type="edit"
              defaultValues={{
                salonName: salon.name,
                address: salon.address,
                phone: salon.phone,
                email: salon.email,
                description: salon.description || "",
                openingHours: salon.availabilities
                  ? convertOpeningHoursFromDatabase(salon.availabilities)
                  : undefined,
              }}
            />
          </CardContent>
        </Card>
      </Modal>
      <Modal
        open={openConfirmationModal}
        onOpenChange={setOpenConfirmationModal}
        title="Confirm Your Application"
        description="Your salon application has been approved. To complete the process, please create an organization for your salon. This will allow you to manage your salon's settings and access the dashboard."
        footer={
          <div className="flex items-center justify-end w-full gap-3">
            <Button
              disabled={isConfirming}
              onClick={() => setOpenConfirmationModal(false)}
              className="cursor-pointermr-3 bg-muted-foreground/10 hover:bg-muted-foreground/20 text-foreground"
            >
              Cancel
            </Button>
            <Button
              disabled={isConfirming}
              className="cursor-pointer gap-2 bg-green-500 text-white hover:bg-green-600/90"
              onClick={handleOrganizationCreationApproved}
            >
              {isConfirming ? "Confirming..." : "Confirm Your Application"}
            </Button>
          </div>
        }
      >
        <div />
      </Modal>

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
                  {salon.rejectionReason ||
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
              <dd className="mt-1 text-gray-900 dark:text-white">{salon.id}</dd>
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
