"use client";

import { CalendarClock, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import Modal from "../common/modal";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { CancelAppointment } from "@/oop/infrastructure/appointment-actions";
import { Spinner } from "../ui/spinner";
import { AppointmentStatus } from "@/generated/prisma";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface ApptCardProps {
  title: string;
  stylist: string;
  date: string;
  meta: string;
  appointmentId: string;
  salonId: string;
  status: string;
  stylistId: string;
  salonName: string;
}

export function ApptCardInfo({
  salonId,
  appointmentId,
  title,
  stylist,
  date,
  meta,
  status,
  stylistId,
  salonName,
}: ApptCardProps) {
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [pendingAction, setPendingAction] = useState<
    "cancel" | "reschedule" | null
  >(null);

  const handleCancel = () => {
    setPendingAction("cancel");
    startTransition(async () => {
      try {
        await CancelAppointment(appointmentId, salonId);
        toast.success("Your appointment has been cancelled.");
        setCancelModalOpen(false);
        setPendingAction(null);
      } catch (error) {
        console.error("Error cancelling appointment:", error);
        toast.error(
          "There was an error cancelling your appointment. Please try again."
        );
      }
    });
  };

  return (
    <>
      <Modal
        open={cancelModalOpen}
        onOpenChange={setCancelModalOpen}
        title="Cancel Appointment"
      >
        <div>
          <p>Are you sure you want to cancel this appointment?</p>
          <div className="flex justify-end mt-6 gap-4">
            <Button
              variant="outline"
              onClick={() => setCancelModalOpen(false)}
              disabled={isPending || pendingAction === "cancel"}
            >
              Close
            </Button>
            <Button
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={handleCancel}
              disabled={isPending || pendingAction === "cancel"}
            >
              {isPending && pendingAction === "cancel" && (
                <Spinner className="mr-2" />
              )}
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={rescheduleModalOpen}
        onOpenChange={setRescheduleModalOpen}
        title="Reschedule Appointment"
      >
        <div>
          <p>Rescheduling functionality coming soon!</p>
          <div className="flex justify-end mt-6 gap-4">
            <Button
              variant="outline"
              onClick={() => setRescheduleModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg p-6 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-primary dark:text-text-main-dark">
              {title}
            </h3>
            <p className="text-sm flex flex-col text-text-secondary-light dark:text-text-secondary-dark">
              <span>at {salonName}</span>

              <Link
                href={`/worker/${stylistId}`}
                className=" underline-offset-4 hover:underline"
              >
                {" "}
                with {stylist}
              </Link>
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{date}</p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {meta}
            </p>
            <Badge
              variant={
                status === AppointmentStatus.APPROVED
                  ? "green"
                  : status === AppointmentStatus.PENDING
                  ? "orange"
                  : "default"
              }
            >
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex gap-3 mt-4 border-t border-border-light dark:border-border-dark pt-4">
          {(status === AppointmentStatus.APPROVED ||
            status === AppointmentStatus.PENDING) && (
            <div className="w-full flex gap-2 items-center justify-end">
              <Button
                className="bg-primary text-white hover:bg-primary/90 p-1"
                onClick={() => setRescheduleModalOpen(true)}
                disabled={isPending || pendingAction === "reschedule"}
              >
                <CalendarClock className="mr-2 h-4 w-4" /> Reschedule
              </Button>
              <Button
                className=" bg-red-500 text-white hover:bg-red-600 p-1"
                onClick={() => setCancelModalOpen(true)}
                disabled={isPending || pendingAction === "cancel"}
              >
                {isPending && pendingAction === "cancel" ? (
                  <Spinner className="mr-2" />
                ) : (
                  <XCircle className="mr-2 h-4 w-4" />
                )}
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
