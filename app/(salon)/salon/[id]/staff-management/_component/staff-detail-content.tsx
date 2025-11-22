import { InvitesTab } from "@/components/management/invite-tab";
import { StaffDetailTabs } from "./staff-detail-tabs";
import { PendingInvites, Staff } from "../page";
import { authClient } from "@/lib/auth-client";

export function StaffDetailContent({
  activeId,
  active,
  setStaff,
  staff,
  setActiveId,
  pendingInvites,
}: {
  activeId: string;
  active: Staff | undefined;
  setStaff: React.Dispatch<React.SetStateAction<Staff[]>>;
  staff: Staff[];
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
  pendingInvites: PendingInvites;
}) {
  if (activeId === "invites") {
    return <InvitesTab pendingInvites={pendingInvites} />;
  }

  if (active) {
    return (
      <StaffDetailTabs
        active={active}
        staff={staff}
        setStaff={setStaff}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    );
  }

  return (
    <p className="text-sm text-muted-foreground">
      Choose a staff member to edit details.
    </p>
  );
}
