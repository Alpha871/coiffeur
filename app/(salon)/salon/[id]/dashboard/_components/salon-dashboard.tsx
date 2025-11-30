"use client";

import * as React from "react";
import { Search, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatCard } from "@/components/dashboard/stat-card";
import { useSession } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { takeFirstLastLetters } from "@/utils/utils";

export default function SalonDashboardClient({
  bestAppointments,
  topAppointments,
  totalPrice,
  totalAppointments,
  totalCustomers,
  totalStaff,
}: {
  bestAppointments: Array<{
    memberId: string;
    memberName: string;
    totalPrice: number;
    appointmentCount: number;
    image: string | null;
  }>;
  topAppointments: Array<{
    id: string;
    customerName: string;
    customerAvatar: string | null;
    service: string;
    startsAt: Date;
    endsAt: Date;
  }>;
  totalPrice: number;
  totalAppointments: number;
  totalCustomers: number;
  totalStaff: number;
}) {
  const [range, setRange] = useState("30");
  const [search, setSearch] = useState("");
  const { id } = useParams();

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbfc] dark:bg-[#101f22]">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-black/20">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
          Welcome, Admin!
        </h2>
        <div className="flex flex-1 justify-end items-center gap-4 lg:gap-6">
          <div className="relative w-full max-w-[18rem] h-10">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="h-10 pl-9 bg-slate-100 dark:bg-slate-800 border-0 focus-visible:ring-0 text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </header>

      {/* Page Heading */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">
            Dashboard
          </p>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            <Select value={range} onValueChange={setRange}>
              <SelectTrigger className="w-[160px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Today's Appointments"
            value={totalAppointments.toString()}
            delta="+5% from yesterday"
          />
          <StatCard
            label="Revenue (Today)"
            value={`$${totalPrice.toFixed(2)}`}
            delta="+12% from yesterday"
          />
          <StatCard
            label="Active Staff On Duty"
            value={totalStaff.toString()}
            delta="+2% from yesterday"
          />
          <StatCard
            label="New Clients (This Week)"
            value={totalCustomers.toString()}
            delta="-3% from last week"
            deltaColor="text-red-500"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Appointments This Week (bar-like) */}
          <Card className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <CardContent className="p-6">
              <p className="text-slate-900 dark:text-white text-base font-medium">
                Appointments This Week
              </p>
              <p className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight truncate">
                {totalAppointments}
              </p>
              <div className="flex gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  This Week
                </p>
                <p className="text-green-500 text-sm font-medium">+8%</p>
              </div>

              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3 pt-4">
                {[
                  { h: "50%", label: "Mon" },
                  { h: "100%", label: "Tue" },
                  { h: "70%", label: "Wed" },
                  { h: "100%", label: "Thu", solid: true },
                  { h: "20%", label: "Fri" },
                  { h: "60%", label: "Sat" },
                  { h: "50%", label: "Sun" },
                ].map((b) => (
                  <React.Fragment key={b.label}>
                    <div
                      className={`w-full rounded-t-lg ${
                        b.solid ? "bg-[#13c8ec]" : "bg-[#13c8ec]/20"
                      }`}
                      style={{ height: b.h }}
                    />
                    <p className="text-slate-500 dark:text-slate-400 text-[13px] font-bold">
                      {b.label}
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Trends (area line) */}
          <Card className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <CardContent className="p-6">
              <p className="text-slate-900 dark:text-white text-base font-medium">
                Revenue Trends (Last 30 Days)
              </p>
              <p className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight truncate">
                {totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <div className="flex gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Last 30 Days
                </p>
                <p className="text-green-500 text-sm font-medium">+15%</p>
              </div>

              <div className="flex min-h-[180px] flex-1 flex-col justify-end gap-2 pt-4">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-3 0 478 150"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="revenue-gradient"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="149"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#13c8ec" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#13c8ec" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                    fill="url(#revenue-gradient)"
                  />
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#13c8ec"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="flex justify-around">
                  {["Week 1", "Week 2", "Week 3", "Week 4"].map((w) => (
                    <p
                      key={w}
                      className="text-slate-500 dark:text-slate-400 text-[13px] font-bold"
                    >
                      {w}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  Today&apos;s Upcoming Appointments
                </CardTitle>
                <Button
                  variant="link"
                  className="text-[#13c8ec] p-0 h-auto"
                  asChild
                >
                  <Link href={`/salon/${id}/appointments`}>
                    View Full Calendar
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-3">
                {topAppointments.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={a.customerAvatar || undefined} />
                      <AvatarFallback>
                        {takeFirstLastLetters(a.customerName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {a.customerName}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {a.service}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {format(new Date(a.startsAt), "p")}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Staff */}
          <Card className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Top Staff This Month</CardTitle>
                <Button
                  variant="link"
                  className="text-[#13c8ec] p-0 h-auto"
                  asChild
                >
                  <Link href={`/salon/${id}/staff-management`}>
                    Manage Staff
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-3">
                {bestAppointments.map((s) => (
                  <div
                    key={s.memberId}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={s.image || undefined} />
                      <AvatarFallback>
                        {takeFirstLastLetters(s.memberName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {s.memberName}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {s.appointmentCount} Appointments
                      </p>
                    </div>
                    <p className="text-sm font-bold text-green-500">
                      {s.totalPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
