import AppSidebar from "@/components/common/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar salonId={params.id} />

        <SidebarInset>
          {/* Topbar */}
          <div className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="font-semibold">Appointments</div>
          </div>
          <div className="p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default layout;
