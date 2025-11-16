import { Ban, CheckCircle2, Trash2 } from "lucide-react";
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

interface UserTabProps {
  users: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    roleVariant: "default" | "secondary" | "outline";
    status: string;
    statusVariant: "success" | "destructive";
    registeredAt: string;
    banned: boolean;
  }[];
}

function UserTab({ users }: UserTabProps) {
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
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
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
                    user.roleVariant === "default"
                      ? "default"
                      : user.roleVariant === "secondary"
                      ? "secondary"
                      : "outline"
                  }
                  className="text-[0.7rem] font-medium"
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.statusVariant === "success" ? "outline" : "destructive"
                  }
                  className={
                    user.statusVariant === "success"
                      ? "border-green-500 text-green-600 dark:text-green-400"
                      : ""
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {user.registeredAt}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  {user.banned ? (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-green-600 dark:text-green-400"
                      aria-label="Unban user"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-yellow-600 dark:text-yellow-400"
                      aria-label="Ban user"
                    >
                      <Ban className="h-4 w-4" />
                    </Button>
                  )}

                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-red-600 dark:text-red-500"
                    aria-label="Delete user"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserTab;
