import AdminPanelTabs from "@/components/admin-panel/admin-panel-tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { CreationStatus } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { UserRole } from "@/oop/domain/person";
import { getAllSalons } from "@/oop/infrastructure/salon-repository";
import { listUsers } from "@/oop/infrastructure/user-repository";
import { takeFirstLastLetters } from "@/utils/utils";
import { Loader2Icon, Search } from "lucide-react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";

export async function getAdminPanelDataAction() {
  const users = await listUsers(10, 1);

  const salons = await getAllSalons();

  const requests = salons.filter(
    (s) => s.creationStatus === CreationStatus.PENDING
  );

  const activeSalons = salons.filter(
    (s) => s.creationStatus === CreationStatus.COMPLETED
  );

  return {
    users,
    salons: activeSalons,
    requests,
  };
}

export default async function AdminPanel() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  if (session === null) redirect("/authentication");

  if (!session || session.user.role !== UserRole.ADMIN) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <Link href="/" className="ml-4 text-primary">
          Please log in as an admin.
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground md:mx-50">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-6 py-4">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search users, barber shops or requests..."
            />
          </div>
        </div>

        {/* Admin profile */}
        <div className="ml-4 flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={session?.user.image ?? ""} />
            <AvatarFallback>
              {takeFirstLastLetters(session?.user.name || "")}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-start">
            <span className="text-sm font-semibold">{session?.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {session?.user.email}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
          <p className="text-base text-muted-foreground">
            Manage and monitor system data from here.
          </p>
        </div>

        <AdminPanelTabs />
      </main>
    </div>
  );
}
