import { getPendingSalonRequests } from "@/actions/salon-actions";
import { Suspense } from "react";
import RequestTabClient from "./request-tab-client";

export async function RequestTab() {
  const pendingRequests = await getPendingSalonRequests();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestTabClient pendingRequests={pendingRequests} />
    </Suspense>
  );
}
