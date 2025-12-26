import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { takeFirstLastLetters } from "@/utils/utils";
import Link from "next/link";
import { userRole } from "@/lib/utils";

function UserInfo({
  user,
}: {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    role: string;
  };
}) {
  const handleLogout = async () => {
    await signOut();
    redirect("/");
  };

  const profileLink =
    user.role === userRole.user
      ? `/profil/${user.id}`
      : user.role === userRole.admin
      ? `/admin-panel`
      : user.role === userRole.employee
      ? `#`
      : "#";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-9 h-9 cursor-pointer">
          <AvatarImage
            alt={user.name}
            src={user.image || undefined}
            className="w-full h-full rounded-full"
          />
          <AvatarFallback className="border border-blue-400 w-full h-full rounded-full">
            {takeFirstLastLetters(user.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={profileLink}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserInfo;
