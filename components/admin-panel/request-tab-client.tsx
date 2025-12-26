"use client";

import { CheckCircle2, Loader, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

import {
  approveSalonRequest,
  getPendingSalonRequests,
  rejectSalonRequest,
} from "@/actions/salon-actions";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import Modal from "../common/modal";
import RejectionForm from "./rejection-form";

interface RequestTabProps {
  pendingRequests: Awaited<ReturnType<typeof getPendingSalonRequests>>;
}

function RequestTabClient({ pendingRequests }: RequestTabProps) {
  const [isPending, startTransition] = useTransition();

  const [rejectionModalOpen, setRejectionModalOpen] = useState(false);

  const [selectedRequestId, setSelectedRequestId] = useState<string>(
    pendingRequests[0]?.id
  );
  const selectedRequest = pendingRequests.find(
    (r) => r.id === selectedRequestId
  );

  const approveRequest = (salonId: string) => {
    startTransition(async () => {
      const result = await approveSalonRequest(salonId);

      if (result.success) {
        toast.success("Salon request approved");
      } else {
        toast.error("Failed to approve request");
      }
    });
  };

  const rejectRequest = (salonId: string, reason: string) => {
    startTransition(async () => {
      const result = await rejectSalonRequest(salonId, reason);

      if (result.success) {
        toast.success("Salon request rejected");
        setRejectionModalOpen(false);
      } else {
        toast.error("Failed to reject request");
      }
    });
  };

  if (pendingRequests.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          There are no pending salon requests at the moment.
        </p>
      </div>
    );
  }

  return (
    <>
      <Modal
        open={rejectionModalOpen}
        onOpenChange={setRejectionModalOpen}
        title="Salon Request Rejection"
        description="Provide a reason for rejecting this salon request."
      >
        <RejectionForm
          handlingLoading={isPending}
          rejectSalonRequest={rejectRequest}
          selectedSalonIdId={selectedRequestId}
        />
      </Modal>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left column: list of requests */}
        <div className="border-r lg:col-span-1">
          <div className="border-b px-4 py-4">
            <h3 className="text-lg font-semibold">
              Pending Requests ({pendingRequests.length})
            </h3>
          </div>

          <ScrollArea className="max-h-[calc(100vh-270px)]">
            <ul className="divide-y">
              {pendingRequests.map((req) => {
                const isActive = req.id === selectedRequestId;
                return (
                  <li
                    key={req.id}
                    className={`cursor-pointer px-4 py-4 transition-colors ${
                      isActive
                        ? "bg-primary/10 dark:bg-primary/20"
                        : "hover:bg-muted/60"
                    }`}
                    onClick={() => setSelectedRequestId(req.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {req.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {req.user?.name || "No owner name provided"}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {req.createdAt.toDateString()}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {req.description || "No description provided."}
                    </p>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>

        {/* Right column: request details */}
        <div className="lg:col-span-2 px-6 py-6">
          {selectedRequest ? (
            <>
              <div className="mb-6 flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedRequest.name} – Application Details
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Request date: {selectedRequest.createdAt.toDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => approveRequest(selectedRequest.id)}
                    disabled={isPending}
                    className="cursor-pointer flex h-9 items-center gap-2 bg-green-500 px-4 text-sm font-semibold text-white hover:bg-green-600"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Approve</span>
                  </Button>
                  <Button
                    onClick={() => setRejectionModalOpen(true)}
                    disabled={isPending}
                    className="cursor-pointer flex h-9 items-center gap-2 bg-red-500 px-4 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    <XCircle className="h-4 w-4" />
                    <span>Reject</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Organization info */}
                <section>
                  <h4 className="mb-2 text-base font-semibold">
                    Organization Information
                  </h4>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                    <div>
                      <p className="text-muted-foreground">Shop Name</p>
                      <p className="font-medium">{selectedRequest.name}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tax Number</p>
                      <p className="font-medium">1232314313</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone Number</p>
                      <p className="font-medium">{selectedRequest.phone}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Address</p>
                      <p className="font-medium">{selectedRequest.address}</p>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Owner info */}
                <section>
                  <h4 className="mb-2 text-base font-semibold">
                    Owner Information
                  </h4>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                    <div>
                      <p className="text-muted-foreground">Full Name</p>
                      <p className="font-medium">
                        {selectedRequest.user?.name || "No owner name provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email Address</p>
                      <p className="font-medium">
                        {selectedRequest.user?.email ||
                          "No owner email provided"}
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Additional notes */}
                <section>
                  <h4 className="mb-2 text-base font-semibold">
                    Additional Notes
                  </h4>
                  <p className="rounded-lg border bg-muted/70 p-3 text-sm text-muted-foreground ">
                    {selectedRequest.description ||
                      "No additional notes provided."}
                  </p>
                </section>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Select a request from the list to view its details.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default RequestTabClient;
