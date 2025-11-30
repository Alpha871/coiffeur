"'use server';";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authClient } from "@/lib/auth-client";
import { BetterAuthActionButton } from "../common/beter-auth-action-button";
import { CreateInviteButton } from "./create-invitation-button";

import {
  cancelInvitation,
  getInvitations,
} from "@/oop/infrastructure/user-repository";
import { InvitationStatus } from "better-auth/plugins";
import { PendingInvites } from "./staff-management-client";

interface InvitesTabProps {
  pendingInvites: PendingInvites[];
  // organizationId: string;
  setPendingInvites: React.Dispatch<React.SetStateAction<PendingInvites[]>>;
}

export function InvitesTab({
  pendingInvites,
  setPendingInvites,
}: InvitesTabProps) {
  function cancelInvitation(invitationId: string) {
    const data = authClient.organization.cancelInvitation({ invitationId });
    const updatedInvites = pendingInvites?.filter(
      (invite) => invite.id !== invitationId
    );
    setPendingInvites(updatedInvites);
    return data;
  }

  return (
    <div className="space-y-8">
      <div className="justify-end flex">
        <CreateInviteButton setPendingInvites={setPendingInvites} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pendingInvites?.map((invitation) => (
            <TableRow key={invitation.id}>
              <TableCell>{invitation.email}</TableCell>
              <TableCell>
                <Badge variant="outline">{invitation.role}</Badge>
              </TableCell>
              <TableCell>
                {new Date(invitation.expiresAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <BetterAuthActionButton
                  variant="destructive"
                  size="sm"
                  action={() => cancelInvitation(invitation.id)}
                >
                  Cancel
                </BetterAuthActionButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
