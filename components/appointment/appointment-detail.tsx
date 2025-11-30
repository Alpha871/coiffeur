import { takeFirstLastLetters } from "@/utils/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { appointment } from "@/lib/validations/appointment";
import { format } from "date-fns";
import { AppointmentStatus } from "@/generated/prisma";
import { toast } from "sonner";
import {
  ApproveAppointment,
  CancelAppointment,
  RejectAppointment,
} from "@/oop/infrastructure/appointment-repository";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Spinner } from "../ui/spinner";

function AppointmentDetail({
  selectedAppointment,
}: {
  selectedAppointment: appointment | undefined;
}) {
  const { id: salonId } = useParams();
  const [isPending, startTransition] = useTransition();
  const [pendingAction, setPendingAction] = useState<
    "approve" | "reject" | "cancel" | null
  >(null);

  if (!selectedAppointment) {
    return (
      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
        No appointment selected.
      </p>
    );
  }

  const handleApprove = async () => {
    setPendingAction("approve");
    startTransition(async () => {
      try {
        await ApproveAppointment(selectedAppointment.id, salonId as string);
        selectedAppointment.status = AppointmentStatus.APPROVED;
        toast.success("Appointment approved successfully.");
      } catch (error) {
        console.log(error);
        toast.error("Failed to approve appointment.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  const handleReject = async () => {
    setPendingAction("reject");
    startTransition(async () => {
      try {
        await RejectAppointment(selectedAppointment.id, salonId as string);
        selectedAppointment.status = AppointmentStatus.REJECTED;
        toast.success("Appointment rejected successfully.");
      } catch (error) {
        console.log(error);
        toast.error("Failed to reject appointment.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  const handleCancel = async () => {
    setPendingAction("cancel");
    startTransition(async () => {
      try {
        await CancelAppointment(selectedAppointment.id, salonId as string);
        selectedAppointment.status = AppointmentStatus.CANCELLED;
        toast.success("Appointment cancelled successfully.");
      } catch (error) {
        console.log(error);
        toast.error("Failed to cancel appointment.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Customer Info */}
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            alt={selectedAppointment.customerName}
            src={selectedAppointment.customerAvatar || ""}
          />
          <AvatarFallback>
            {takeFirstLastLetters(selectedAppointment.customerName)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary">
            {selectedAppointment.customerName}
          </p>
          <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
            {selectedAppointment.service}
          </p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-text-light-secondary dark:text-text-dark-secondary">
            Date & Time:
          </span>
          <span className="font-medium text-text-light-primary dark:text-text-dark-primary">
            {format(new Date(selectedAppointment.startsAt), "EEE. do, yyyy p")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-light-secondary dark:text-text-dark-secondary">
            Status:
          </span>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {selectedAppointment.status} -{" "}
            {`$${selectedAppointment.price.toFixed(2)}`}
          </Badge>
        </div>
        {selectedAppointment.notes && (
          <div className="flex justify-between">
            <span className="text-text-light-secondary dark:text-text-dark-secondary">
              Notes:
            </span>
            <span className="font-medium text-text-light-primary dark:text-text-dark-primary">
              {selectedAppointment.notes}
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-border-light dark:border-border-dark">
        {selectedAppointment.status === AppointmentStatus.PENDING && (
          <>
            <Button
              variant="default"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              onClick={handleApprove}
              disabled={isPending || pendingAction === "approve"}
            >
              {pendingAction === "approve" && <Spinner />}
              Approve
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={handleReject}
              disabled={isPending || pendingAction === "reject"}
            >
              {pendingAction === "reject" && <Spinner />}
              Reject
            </Button>
          </>
        )}
        {selectedAppointment.status === AppointmentStatus.APPROVED && (
          <Button
            variant="destructive"
            className="ml-auto flex items-center gap-2 border-border-light dark:border-border-dark"
            onClick={handleCancel}
            disabled={isPending || pendingAction === "cancel"}
          >
            {pendingAction === "cancel" && <Spinner />}
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}

export default AppointmentDetail;
