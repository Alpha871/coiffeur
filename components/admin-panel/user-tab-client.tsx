"use client";
import { Ban, CheckCircle2, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { takeFirstLastLetters } from "@/utils/utils";
import {
  handleBanUser,
  handleImpersonateUser,
  handleRemoveUser,
  handleRevokeSessions,
  handleUnbanUser,
  ListUsersType,
} from "@/oop/infrastructure/user-action";

import { UserRole } from "@/oop/domain/person";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSession } from "@/lib/auth-client";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface UserTabProps {
  users: ListUsersType;
}

function UserTabClient({ users }: UserTabProps) {
  const session = useSession();
  const [isPending, startTransition] = useTransition();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handlingBanUser = (userId: string) => {
    startTransition(async () => {
      const result = await handleBanUser(userId);
      if (result.success) {
        toast.success("User has been banned successfully.");
      } else {
        toast.error("Failed to ban user.");
      }
    });
  };

  const handlingUnbanUser = (userId: string) => {
    startTransition(async () => {
      const result = await handleUnbanUser(userId);
      if (result.success) {
        toast.success("User has been unbanned successfully.");
      } else {
        toast.error("Failed to unban user.");
      }
    });
  };

  const handlingRevokeSessions = (userId: string) => {
    startTransition(async () => {
      const result = await handleRevokeSessions(userId);
      if (result.success) {
        toast.success("User sessions have been revoked successfully.");
      } else {
        toast.error("Failed to revoke user sessions.");
      }
    });
  };

  const handlingImpersonateUser = (userId: string) => {
    startTransition(async () => {
      const result = await handleImpersonateUser(userId);
      if (result.success) {
        toast.success("User has been impersonated successfully.");
      } else {
        toast.error("Failed to impersonate user.");
      }
    });
  };

  const handlingRemoveUser = (userId: string) => {
    setOpenConfirmation(true);
    startTransition(async () => {
      const result = await handleRemoveUser(userId);
      if (result.success) {
        toast.success("User has been removed successfully.");
      } else {
        toast.error("Failed to remove user.");
      }

      setOpenConfirmation(false);
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.users.map((user) => {
            const isSelf = session.data?.user.id === user.id;
            return (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.image || undefined} />
                      <AvatarFallback>
                        {takeFirstLastLetters(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.role === UserRole.ADMIN
                        ? "default"
                        : user.role === UserRole.USER
                        ? "orange"
                        : "outline"
                    }
                    className="text-[0.7rem] font-medium"
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.banned ? "destructive" : "activeStatus"}
                    className={
                      user.role === "Active"
                        ? "border-green-500 text-green-600 dark:text-green-400"
                        : ""
                    }
                  >
                    {user.banned ? "Banned" : "Active"}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {user.createdAt.toDateString()}
                </TableCell>

                <TableCell className="text-right">
                  {!isSelf && (
                    <AlertDialog
                      open={openConfirmation}
                      onOpenChange={setOpenConfirmation}
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer"
                          >
                            <MoreHorizontal className="cursor-pointer text-right" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => handlingImpersonateUser(user.id)}
                            className="cursor-pointer"
                            disabled={isPending}
                          >
                            Impersonate
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handlingRevokeSessions(user.id)}
                            className="cursor-pointer"
                            disabled={isPending}
                          >
                            Revoke Sessions
                          </DropdownMenuItem>
                          {user.banned ? (
                            <DropdownMenuItem
                              onClick={() => handlingUnbanUser(user.id)}
                              className="cursor-pointer"
                              disabled={isPending}
                            >
                              Unban User
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem
                              onClick={() => handlingBanUser(user.id)}
                              className="cursor-pointer"
                              disabled={isPending}
                            >
                              Ban User
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />

                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem
                              variant="destructive"
                              className="cursor-pointer"
                              disabled={isPending}
                            >
                              Delete User
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete User</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this user? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel disabled={isPending}>
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <Button
                              onClick={() => handlingRemoveUser(user.id)}
                              className="cursor-pointer bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              disabled={isPending}
                            >
                              {isPending ? "Deleting..." : "Delete"}
                            </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserTabClient;
