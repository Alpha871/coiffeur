import AppSidebar from "@/components/common/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import {
  ActiveCurrentSalonOrganizationId,
  getSalonById,
} from "@/actions/salon-actions";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const salon = await getSalonById(id);

  if (!salon) redirect("/");

  await ActiveCurrentSalonOrganizationId(
    salon.organizationId as string,
    salon.organization?.slug as string
  );

  if (!session || salon.userId !== session.user.id) {
    return (
      <div className="m-4  border bg-white shadow mx-auto p-4 max-w-xl rounded-2xl">
        <h1 className="p-4 text-xl font-semibold">Unauthorized</h1>
        <p className="p-4">You do not have access to this salon.</p>
        <Link className="m-4  text-blue-500 hover:underline" href="/">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          salonId={id}
          salonName={salon.name}
          salonLogoUrl={salon.organization?.logo}
        />
        <SidebarInset>
          <div className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
          </div>
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default layout;
