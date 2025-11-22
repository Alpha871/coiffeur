import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BarberTab from "./barber-tab";
import { RequestTab } from "./request-tab";
import UserTab from "./user-tab";

export default function AdminPanelTabs() {
  // const { users, salons, requests } = use(dataPromise);

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg">Overview</CardTitle>
          <CardDescription>
            View users, barber shops and incoming requests.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="users" className="cursor-pointer">
              Users
            </TabsTrigger>
            <TabsTrigger value="salons" className="cursor-pointer">
              Barber Shops
            </TabsTrigger>
            <TabsTrigger value="requests" className="cursor-pointer">
              Requests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <UserTab />
          </TabsContent>

          <TabsContent value="salons">
            <BarberTab />
          </TabsContent>

          <TabsContent value="requests">
            <RequestTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
