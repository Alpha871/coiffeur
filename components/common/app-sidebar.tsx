"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarDays,
  HelpCircle,
  IdCard,
  LayoutDashboard,
  Scissors,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

interface AppSidebarProps {
  salonId: string;
  salonName: string;
  salonLogoUrl: string | undefined | null;
}

export default function AppSidebar({
  salonId,
  salonName,
  salonLogoUrl,
}: AppSidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Sidebar className="w-64 sidebar-surface">
      <SidebarHeader className="border-r-0 px-4 pb-2 pt-4">
        <div className="">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={salonLogoUrl || undefined} alt={salonName} />
              <AvatarFallback className="bg-orange-200 text-orange-800 w-14 h-14 rounded-full inline-flex items-center justify-center font-bold z-100">
                {salonName.charAt(0).toUpperCase() +
                  salonName.charAt(1).toLowerCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-base font-bold">{salonName}</h1>
              <p className="text-sm text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent className="mt-4 flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/salon/${salonId}/dashboard`}
                    aria-current={
                      isActive(`/salon/${salonId}/dashboard`)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive(`/salon/${salonId}/dashboard`) &&
                        "sidebar-item-active"
                    )}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <p className="text-sm font-medium leading-normal">
                      Dashboard
                    </p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/salon/${salonId}/appointments`}
                    aria-current={
                      isActive(`/salon/${salonId}/appointments`)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive(`/salon/${salonId}/appointments`) &&
                        "sidebar-item-active"
                    )}
                  >
                    <CalendarDays className="h-5 w-5" />
                    <p className="text-sm font-semibold leading-normal">
                      Appointments
                    </p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/salon/${salonId}/staff-management`}
                    aria-current={
                      isActive(`/salon/${salonId}/staff-management`)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive(`/salon/${salonId}/staff-management`) &&
                        "sidebar-item-active"
                    )}
                  >
                    <IdCard className="h-5 w-5" />
                    <p className="text-sm font-medium leading-normal">Staff</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={`/salon/${salonId}/services`}
                    aria-current={
                      isActive(`/salon/${salonId}/services`)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive(`/salon/${salonId}/services`) &&
                        "sidebar-item-active"
                    )}
                  >
                    <Scissors className="h-5 w-5" />
                    <p className="text-sm font-medium leading-normal">
                      Services
                    </p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto px-4 pb-4">
        <SidebarMenu className="flex flex-col gap-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="#"
                aria-current={isActive("#") ? "page" : undefined}
                className={cn(
                  "sidebar-item",
                  isActive("#") && "sidebar-item-active"
                )}
              >
                <Settings className="h-5 w-5" />
                <p className="text-sm font-medium leading-normal">Settings</p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="#"
                aria-current={isActive("#") ? "page" : undefined}
                className={cn(
                  "sidebar-item",
                  isActive("#") && "sidebar-item-active"
                )}
              >
                <HelpCircle className="h-5 w-5" />
                <p className="text-sm font-medium leading-normal">Help</p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
