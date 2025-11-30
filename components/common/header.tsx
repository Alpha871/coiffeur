"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Loader, Menu } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import UserInfo from "../profil/user-info";

function Header() {
  const { data: session, isPending } = useSession();

  return (
    <header className="mx-60 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-b-[#234836] px-4 md:px-10 py-3">
      <div className="flex items-center gap-3 text-gray-900 dark:text-white">
        <div className="size-6 text-primary">
          <svg
            className="h-full w-full"
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          SalonApp
        </h2>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            For Salons
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            For Customers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
        <div>
          {isPending ? (
            <Loader className="animate-spin" />
          ) : session ? (
            // <Button
            //   onClick={() => {
            //     handleLogout();
            //   }}
            //   className="h-10 px-4 rounded-xl bg-primary text-background-dark text-sm font-bold tracking-[0.015em]"
            // >
            //   Logout
            // </Button>
            <UserInfo
              user={{
                id: session?.user?.id,
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image || undefined,
                role: session?.user?.role || "",
              }}
            />
          ) : (
            <Button className="h-10 px-4 rounded-xl bg-primary text-background-dark text-sm font-bold tracking-[0.015em]">
              <Link href="/authentication">Login</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden p-2 text-gray-800 dark:text-white"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
}

export default Header;
