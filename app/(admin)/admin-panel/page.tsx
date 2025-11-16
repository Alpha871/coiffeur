"use client";

import { Link, Loader, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import UserTab from "@/components/admin-panel/user-tab";
import RequestTab from "@/components/admin-panel/request-tab";
import BarberTab from "@/components/admin-panel/barber-tab";
import { useSession } from "@/lib/auth-client";

const users = [
  {
    name: "Ahmet Yılmaz",
    email: "ahmet.yılmaz@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdQak_qmOvDJwIpbuHWieUUYav0WJQF5vBw-imLCqvC9FD-i9xU5_H6lSt3bPrpor1SiQo3aZN-ca_Y6xeSi1F0W8Icq-v5U2xppCgpkhZPxrzQLTj_pVOM-DqvTSMjMJFsbHgrBeMqlM3NPKO6vP7XJ-8aQbTs7EtbNtP125bwfZGsiZ2C0WqPi_Cc0OT-WBuuqz2zhGav1HqyliRdy7OFiVee0dZUA28pHDL09gwX3o-j6YcavV_6-6eikVpsntpzK_YbH8uSk4",
    role: "Salon Owner",
    roleVariant: "default" as const,
    status: "Active",
    statusVariant: "success" as const,
    registeredAt: "2023-10-26",
    banned: false,
  },
  {
    name: "Zeynep Kaya",
    email: "zeynep.kaya@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOuiITUwhqZ7TJNE-evFB89edjP92VVIjHtHStU-oGC-k3_5Tks8T20S6kXE9Nd2gZdXukdZ9rEXIJXNKDQxw6kkVSWqpxGIJaQAXxSvjAqszETuGT0Wz-RrH07dJ_XeQmfTbRNFrNyZTY1DWQEYEw-U8l-jbdlQN40x-tRN7DyaXiTnt23fTavd1zeVBVW6Uis57xcGjRifSy0263_EiiwoiBteffV-BifbWDEeoBESqzgWc3oOMB3zrPyp9VBcxblfKral1BPvg",
    role: "Customer",
    roleVariant: "secondary" as const,
    status: "Active",
    statusVariant: "success" as const,
    registeredAt: "2023-10-25",
    banned: false,
  },
  {
    name: "Mustafa Can",
    email: "mustafa.can@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL6yQTRGXD_ILrrTMd9ajv5AS64T3m0mjAY6uBtD_V8Q1QuSgrGRx3nj7XXKFL_g0M8LvpEuC9HQGFodukeEq_jUwPFIzEFLW2GzuKFNv1fyg8l9Jca-XHZeenwsRlNebT99NarcNnpkC_OgLVqOEZ5RrvW0AsUAEud13lJinhr3TBOcczYE7qIUQjVyHQ_tDjjOtGG4WAixCpB6jitKtczzHjfQDniNWLANkua1pZP5O2QodTtyYU0fTOyHl0dW6M422BkgZ8TLA",
    role: "Admin",
    roleVariant: "outline" as const,
    status: "Active",
    statusVariant: "success" as const,
    registeredAt: "2023-01-15",
    banned: false,
  },
  {
    name: "Elif Şahin",
    email: "elif.sahin@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeMfJF6v-JAM6O7PPNrv0RHaq2YqHzI2p_Y2Tmrtlk0GX2KsH5vC4gR2FR6nzZxj2HXH8ruc27pp-mAacfK0zTayvOP_dG0oF1gPctZTz-hPeTX-zRNOT2aXEvCH80y2wcC1XhlyDg4M3cHM8Rot4s8O3vKZBRlPkio5_wzf2BSnVPEEfcAl1B1AIfVkmPYIfMQ7BfKHaW8hxVyXiPApuU53hlFzaQ9hhRXF8d9LLEQNF9R_ZefjXrCwCZ4m_ORZH84-enL-Cq_oI",
    role: "Salon Owner",
    roleVariant: "default" as const,
    status: "Banned",
    statusVariant: "destructive" as const,
    registeredAt: "2023-10-22",
    banned: true,
  },
];

type Request = {
  id: string;
  shopName: string;
  ownerName: string;
  createdAgo: string;
  shortDescription: string;
  requestDateLabel: string;
  taxNumber: string;
  phoneNumber: string;
  address: string;
  ownerEmail: string;
  notes: string;
};

const requests: Request[] = [
  {
    id: "barbers-club",
    shopName: "Barber's Club",
    ownerName: "Ahmet Yılmaz",
    createdAgo: "2 days ago",
    shortDescription: "Waiting for approval for new shop registration...",
    requestDateLabel: "October 24, 2023",
    taxNumber: "1234567890",
    phoneNumber: "+90 555 123 45 67",
    address: "Example District, Atatürk Avenue No:123/A, Beşiktaş, Istanbul",
    ownerEmail: "ahmet.yilmaz@example.com",
    notes:
      "We have 5 staff members in our shop. We would like to join the system as soon as possible. Thank you.",
  },
  {
    id: "gold-shears",
    shopName: "Gold Shears",
    ownerName: "Mehmet Öztürk",
    createdAgo: "5 days ago",
    shortDescription: "Waiting for approval for new shop registration...",
    requestDateLabel: "October 21, 2023",
    taxNumber: "9876543210",
    phoneNumber: "+90 532 987 65 43",
    address: "Sample Street No:45, Kadıköy, Istanbul",
    ownerEmail: "mehmet.ozturk@example.com",
    notes:
      "We are a new barbershop focused on premium services. We are excited to use your platform.",
  },
];

type BarberShop = {
  id: string;
  name: string;
  ownerName: string;
  registeredAt: string;
  phoneNumber: string;
  address: string;
  weekdayHours: string;
  weekendHours: string;
  services: string[];
};

const barberShops: BarberShop[] = [
  {
    id: "barbers-club",
    name: "Barber's Club",
    ownerName: "Ahmet Yılmaz",
    registeredAt: "October 26, 2023",
    phoneNumber: "+90 555 123 45 67",
    address: "Example District, Atatürk Avenue No:123/A, Beşiktaş, Istanbul",
    weekdayHours: "09:00 - 21:00",
    weekendHours: "10:00 - 19:00",
    services: [
      "Haircut",
      "Beard Shave",
      "Hair Wash",
      "Hair Coloring",
      "Skin Care",
    ],
  },
  {
    id: "gold-shears",
    name: "Gold Shears",
    ownerName: "Mehmet Öztürk",
    registeredAt: "October 20, 2023",
    phoneNumber: "+90 532 987 65 43",
    address: "Sample Street No:45, Kadıköy, Istanbul",
    weekdayHours: "09:00 - 20:00",
    weekendHours: "10:00 - 18:00",
    services: ["Haircut", "Beard Shave", "Hair Wash"],
  },
  {
    id: "kings-cut",
    name: "King's Cut",
    ownerName: "Mustafa Kaya",
    registeredAt: "September 10, 2023",
    phoneNumber: "+90 544 321 65 43",
    address: "Central Avenue No:10, Şişli, Istanbul",
    weekdayHours: "09:00 - 22:00",
    weekendHours: "10:00 - 20:00",
    services: ["Haircut", "Beard Shave", "Hot Towel", "Skin Care"],
  },
];

export default function AdminPanel() {
  const { data: userInfo, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (!userInfo || userInfo.user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <Link href="/" className="ml-4 text-primary">
          Please log in as an admin.
        </Link>
      </div>
    );
  }

  function takeFirstLastLetters(name: string) {
    const names = name.split(" ");
    let initials = names[0].charAt(0);
    if (names.length > 1) {
      initials += names[names.length - 1].charAt(0);
    }
    return initials.toUpperCase();
  }

  return (
    <div className="min-h-screen bg-background text-foreground md:mx-50">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-6 py-4">
        {/* Search */}
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
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGqNAlOoP221UTOD5pwNqrdqbT3eDoMhQnGw1nJDo-iuro7GpXFRwXN9nM_9wUDoGzgIO5d0XGL36cJlYI9iXQVJgIB_KPi094wVUNqyW0Hgjw9DZjkQPPPcpb2nXb-nmWYJ_JROTXDUj3WpELZIhXQfjXTF7AmA1f_tloXUWhrkLR7oaUQ4gAZ3aBcI7SqRTmEwegb8tRxIH3oRbOk-dcbyGZKYfFEb4uGNOTPTCSGBDXHriNz-xneQ0ZSlpXBQEfzo1wnL9TQkE" />
            <AvatarFallback>
              {takeFirstLastLetters(userInfo.user.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-start">
            <span className="text-sm font-semibold">{userInfo.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {userInfo.user.email}
            </span>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="px-6 py-6">
        {/* Heading */}
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
          <p className="text-base text-muted-foreground">
            Manage and monitor system data from here.
          </p>
        </div>

        {/* Card with Tabs */}
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
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="salons">Barber Shops</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
              </TabsList>

              {/* USERS TAB */}
              <TabsContent value="users" className="mt-0">
                <UserTab users={users} />
              </TabsContent>

              {/* BARBER SHOPS TAB (from your HTML, Shadcn-ified) */}
              <TabsContent value="salons" className="mt-0">
                <BarberTab barberShops={barberShops} />
              </TabsContent>

              {/* REQUESTS TAB (already implemented) */}
              <TabsContent value="requests" className="mt-4">
                <RequestTab requests={requests} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
