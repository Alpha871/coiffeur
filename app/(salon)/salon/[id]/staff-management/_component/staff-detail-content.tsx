import { InvitesTab } from "@/components/management/invite-tab";
import { StaffDetailTabs } from "./staff-detail-tabs";

import {
  Member,
  PendingInvites,
} from "@/components/management/staff-management-client";

export function StaffDetailContent({
  activeId,
  active,
  setStaff,
  // staff,
  // setActiveId,
  pendingInvites,
  // organizationId,
  setPendingInvites,
  salonServices,
}: {
  activeId: string;
  active: Member | undefined;
  setStaff: React.Dispatch<React.SetStateAction<Member[]>>;
  // staff: Member[];
  // setActiveId: React.Dispatch<React.SetStateAction<string>>;
  pendingInvites: PendingInvites[];
  // organizationId: string;
  setPendingInvites: React.Dispatch<React.SetStateAction<PendingInvites[]>>;
  salonServices: { id: string; name: string }[];
}) {
  if (activeId === "invites") {
    return (
      <InvitesTab
        pendingInvites={pendingInvites}
        setPendingInvites={setPendingInvites}
      />
    );
  }

  if (active) {
    return (
      <StaffDetailTabs
        key={active.id}
        salonServices={salonServices}
        active={active}
        // staff={staff}
        setStaff={setStaff}
        // activeId={activeId}
        // setActiveId={setActiveId}
      />
    );
  }

  return (
    <p className="text-sm text-muted-foreground">
      Choose a staff member to edit details.
    </p>
  );
}
