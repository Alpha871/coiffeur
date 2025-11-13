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

export default function SalonDashboardContent() {
  const [range, setRange] = React.useState("30");
  const [search, setSearch] = React.useState("");

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
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbTMwURj6Cy_GVRkgCwPEMye7cCJYEdSN2-Ihf4W5T2LhjNtPBCVUbAiQAQI2J6AqItGlK677RRTadR_3p82NlF0dHAQpFIiF-dBtk2ezq8lslbTztn6_nt_aurQSNm-TsM1waF-sOsPgssrqMsIzIQ-ohSsxI3Nxd1UxBQC8gLr_MkosbYfWDXkQAgyAPG5W-tQjY_HAFwu8VaCbq_SUH7B1jiOcbcDiy6jE8Jw6qAfd2tXpz3BKYblvzK9beAYv5AmVIUDu03mQ" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
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
            value="24"
            delta="+5% from yesterday"
          />
          <StatCard
            label="Revenue (Today)"
            value="$1,850"
            delta="+12% from yesterday"
          />
          <StatCard
            label="Active Staff On Duty"
            value="8"
            delta="+2% from yesterday"
          />
          <StatCard
            label="New Clients (This Week)"
            value="12"
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
                158
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
                $12,450
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
                <Button variant="link" className="text-[#13c8ec] p-0 h-auto">
                  View Full Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Jessica Smith",
                    sub: "Haircut & Blowdry with Alex",
                    time: "10:00 AM",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGwnyDlE0ueleqOLg7kM2Toq5QLu_Qmh0ayJdDibbyiwts9_oV7dNSvs754Y9DDIQXxsAN5ZDTpOrLBskmEaqHqCQemElGnW4VllK_aeMIW-7XPBLZLSh1G7E_BNez9t2qk5Tw15fSHBF3diS51mkf_2cbE_qdQ8EPAqApbXV38qstB9h9Izswrivl_9GDbhvofZLDFHrNhlGYMxlyLbwhtrZ2nEBYOAV10mpXBHCTfr1_pcB6Mrhg4ZM10tDKHaTK9nFpczYq8ks",
                  },
                  {
                    name: "Michael Brown",
                    sub: "Beard Trim with Sarah",
                    time: "10:30 AM",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkVUz3guYnunYfWe-zQgExh33sCnfEW1-g-WleW-HPbhHISIlEK68np9ZByEJqmZqm5QStLZk4qGij7GAAGx0S07e1UR2JOBkyYuljr6slOPagXLGRW8VHQhpEbJQo2popAHEVnRi4vt33JszzpWslsvoSIez9pE2_UEWC6DdH5OoEQCOrREkeDRqPtMGbTWTwX9JtKCRxkTwlfQzH-J8DbPdZGPDB99vbaOyT9AAnSrPWcf8dKVttVQztot9WF_le5hVYSYCFri8",
                  },
                  {
                    name: "Emily White",
                    sub: "Full Color with Alex",
                    time: "11:00 AM",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcBw8fjIuFpQx_S00sipWEwkZkPG7UaLf2gFQlkIS_BbSzg45wwfY3NlSuFrA2pCIpHIzp42pRfEdaUWxUHyuNHHE80z-TID7AUO3_APGFaueBZFDCMqkLiIH0I1jDDPjJVDqkTWIKasd43hSBdMa7DytNxqr2WWAQt1OikP3rNexepFAjmvXkrNjmKflfHBKLf6PydIkR3LNbqfnUb94fI11quqkAGS2yvMYXXU611Bsoqi_vzy4XAuEoX43TTm6wimJ2z1vwneo",
                  },
                ].map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={a.img} />
                      <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {a.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {a.sub}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {a.time}
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
                <Button variant="link" className="text-[#13c8ec] p-0 h-auto">
                  Manage Staff
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Alex Doe",
                    sub: "42 Appointments",
                    amt: "$2,100",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd4ExSdqGXVTsGi38dxh6UvAX_LW7LrOYqAL3dL--IezbUy3_HdzNKf8iY1cjuvFLRtdE0hk8qRvwC80THtUhI9mh3r8fsZo2-eBUTZRNXAVopcTUhXZm9NG-rcRSJr78xH3qj5g4oGFHKui2flL-DjZxtWyc4dp5tZ3CzKCfjd22ngIa1xAzUq9xwzEF1EmcsIuhbc1ZJtOkif4Zd9ElT5YP0kXHBKw7BtAlIMnbF_ZLy6DPDHkZBls0O3w4ggj_FR7CTp853jSw",
                  },
                  {
                    name: "Sarah Paul",
                    sub: "38 Appointments",
                    amt: "$1,950",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmWeQuSoYbEdhfxCaIqKhU4lHBl5F4xVyY_0JkLPX-Uld-q2YwlWVkdTAFBlgIlrkJ0tBk2PGqZniGcs1opWtr4VrWBenflTtRfynMlzNrEYda1o58CsZu2SPaX2BytzZ15GVUDp6UatHQuFiL1FcPG4JA6Er7ummu22gbQU-xKlNbI-HW0h-fPOh_9ztWn2fruXKMbO1Jh1y6JFonzBdm3CFq4gIiZflTmVcQukkySw8eAoExb-ZbPUPBNMp62ov-Pr6uniG24js",
                  },
                  {
                    name: "Jane K.",
                    sub: "35 Appointments",
                    amt: "$1,820",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ7NsA0hoCEx3x6zkqFvHno9YqJywuQHR16vhWKarXjbmdyHJlEQSt62g5iv7l-wEgeNE64UdkaIzw6MiPM7f6FyJBE0dBRTQZzyIpEIkJ8h56wyKwLic4sZl8DKjRFCqztERnjPPZkpl71bel25MwyWjLYtxONL0rXbij1hhxNI40IVR1OfMeW5zLlVP-HzfAwJNCC197rWm16CMOwpQ4qmvzKD8beTbgYcuhKS65abmMFFH9N3Wpn68MTLHn6Dyy4e-daImtKdw",
                  },
                ].map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={s.img} />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {s.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {s.sub}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-green-500">{s.amt}</p>
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
