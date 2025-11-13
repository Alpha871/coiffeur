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
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  console.log({ pathname });

  return (
    <Sidebar className="w-64 sidebar-surface">
      <SidebarHeader className="border-r-0 px-4 pb-2 pt-4">
        <div className="sidebar-cap">
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-full bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv2ZBxgWu0yPfGzF5mA0kr0nZSj6DBsP9uwkdEfHTa3g6INPTAW9XJrfQ8B58jhWXhGNwdRU0yJbU31TZW0eNu8BMhqw0Mhp2RG_arnZp2rBLHtAsaM1gs5aVXRIeJouv3lDfc4Yv5bx2CAA66OEa90bNf49r0LUI2msOFMBPOdnuiOzze15VYRkgxa4QxfD-XrNIYLwnK_sA6p9JwYSVH7cl3SEiIuRENL7Sszr3I-NGfx54RZG_cxbiyfOxnCR9Aqce63j791S4")',
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-base font-bold">Glamour Salon</h1>
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
                    href="/dashboard"
                    aria-current={isActive("/dashboard") ? "page" : undefined}
                    className={cn(
                      "sidebar-item",
                      isActive("/dashboard") && "sidebar-item-active"
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
                    href="/appointments"
                    aria-current={
                      isActive("/appointments") ? "page" : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive("/appointments") && "sidebar-item-active"
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
                    href="/staff-management"
                    aria-current={
                      isActive("/staff-management") ? "page" : undefined
                    }
                    className={cn(
                      "sidebar-item",
                      isActive("/staff-management") && "sidebar-item-active"
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
                    href="/services"
                    aria-current={isActive("/services") ? "page" : undefined}
                    className={cn(
                      "sidebar-item",
                      isActive("/services") && "sidebar-item-active"
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
