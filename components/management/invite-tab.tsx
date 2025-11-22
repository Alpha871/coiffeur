"use client";

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
import { PendingInvites } from "@/app/(salon)/salon/[id]/staff-management/page";

interface InvitesTabProps {
  pendingInvites: PendingInvites;
}

export function InvitesTab({ pendingInvites }: InvitesTabProps) {
  function cancelInvitation(invitationId: string) {
    return authClient.organization.cancelInvitation({ invitationId });
  }

  return (
    <div className="space-y-8">
      <div className="justify-end flex">
        <CreateInviteButton />
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
