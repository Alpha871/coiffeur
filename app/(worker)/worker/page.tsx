"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, CalendarDays, CheckCircle2, Search } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/common/modal";
import { EmployeeForm } from "@/components/worker/employee-form";
import { RequestOffForm } from "@/components/worker/request-off-form";
type Appointment = {
  id: string;
  name: string;
  service: string;
  when: string; // display string (e.g., "Today, 2:00 PM")
  dateKey: string; // normalized date for filtering/sorting (YYYY-MM-DD)
  avatar: string;
};

type Shift = {
  day: string; // Mon, Tue, ...
  dateKey: string; // YYYY-MM-DD
  hours: string; // e.g., "09:00–17:00"
  notes?: string;
};

const UPCOMING: Appointment[] = [
  {
    id: "1",
    name: "Anna Williams",
    service: "Full Color",
    when: "Today, 2:00 PM",
    dateKey: "2025-11-12",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOs_Eupnm0Yu5a2hZeinE-82tS2rI0FIGwMKPaR5CzaoV19s27h47jBPpQN4-391E6pxeoNBrDqsxczcL6-RYMzT62fxWLrFewQrZqXLytVClTAtTltCcxj7C0wMU6G5xX5nUlnvSDOAzMQYnvJfd7fbOf_8ZFfQXYj4OVhJn966Bv3NzIAOeQ_p2DEe3hVuTtmHMICrWzfBo735_4SH3hZOm5Bq-ZfF-7h7s1RKcAC3-T4rBymAYGlAHUMBzYkfNEsfesS0YU5Sk",
  },
  {
    id: "2",
    name: "David Smith",
    service: "Men's Haircut",
    when: "Today, 3:30 PM",
    dateKey: "2025-11-12",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD67BwC214NQOjtkrB-p0oBj5k9VSxcpPNS1J3-gqNH_y8jAQ-jvUXjlzJKVMZNye4FEmgbvA7ZbuNcovDGWaZJnT2UViTAxCNx6beB-EZUTRtLk8t5XHWim49ypHBL6IaSC0-q8rPvEKWPnIRuPICnJ_9pL82XS5OHGsF_10rHRto31NW88_QAbybqxiHxVdcr2lYFsa3uT6UsnFlJpNhqvrOSNg1QHQ6si5sfvb6EGo4lrl2K7zd3Dm--sMv2p61DX6EBD2NRArc",
  },
  {
    id: "3",
    name: "Olivia Chen",
    service: "Balayage",
    when: "Tomorrow, 10:00 AM",
    dateKey: "2025-11-13",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBE70CmZ-pK0n051SzNtdUNzU9CD5qMhTV5skWVzVALRCo4mABtqHMW2_x9fW1zn5IcrLiqo9Kn2vS8iZqVMVl0DIuvJB4krqh0NktfZatVpiZP1ACBxZXc-yN0_H_T6VW00LVIzAnLehVLj2m38t5bj3c1bWEk8vFMW9F19176b6mFaxbApFOqV6DIOQ52GHP9O7w6lHwOqaPihlwBlmOW6yGiVVFR1ruaZAE5Tc415Q2ZlxL_a8Naw2ielnGoxMtjzmrYdZ3IpOE",
  },
];

const HISTORY: Appointment[] = [
  {
    id: "h1",
    name: "Michael Brown",
    service: "Keratin Treatment",
    when: "Nov 08, 11:00 AM",
    dateKey: "2025-11-08",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuADemo_J1",
  },
  {
    id: "h2",
    name: "Sara Johnson",
    service: "Women's Haircut & Style",
    when: "Nov 05, 4:30 PM",
    dateKey: "2025-11-05",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuADemo_J2",
  },
  {
    id: "h3",
    name: "Ethan Lee",
    service: "Fade + Beard",
    when: "Oct 31, 1:15 PM",
    dateKey: "2025-10-31",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuADemo_J3",
  },
];

const WEEK_SCHEDULE: Shift[] = [
  { day: "Mon", dateKey: "2025-11-10", hours: "10:00–18:00" },
  { day: "Tue", dateKey: "2025-11-11", hours: "10:00–18:00" },
  {
    day: "Wed",
    dateKey: "2025-11-12",
    hours: "12:00–20:00",
    notes: "Evening shift",
  },
  { day: "Thu", dateKey: "2025-11-13", hours: "09:00–17:00" },
  { day: "Fri", dateKey: "2025-11-14", hours: "09:00–17:00" },
  { day: "Sat", dateKey: "2025-11-15", hours: "10:00–16:00" },
  { day: "Sun", dateKey: "2025-11-16", hours: "Off", notes: "—" },
];

const EXPERTISE = [
  "Balayage",
  "Vivid Colors",
  "Fades",
  "Keratin Treatments",
  "Scissor Over Comb",
];

const SERVICES = [
  "Men's Haircut",
  "Women's Haircut & Style",
  "Full Color & Highlights",
  "Special Occasion Updo",
];

export default function StylistDashboard() {
  const [tab, setTab] = React.useState<"upcoming" | "history" | "schedule">(
    "upcoming"
  );
  const [openEditModel, setOpenEditModel] = useState(false);
  const [openRequestModel, setOpenRequestModel] = useState(false);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredUpcoming = React.useMemo(() => {
    if (!normalizedQuery) return UPCOMING;
    return UPCOMING.filter((a) =>
      [a.name, a.service, a.when, a.dateKey].some((v) =>
        v.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery]);

  const filteredHistory = React.useMemo(() => {
    if (!normalizedQuery) return HISTORY;
    return HISTORY.filter((a) =>
      [a.name, a.service, a.when, a.dateKey].some((v) =>
        v.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery]);

  return (
    <>
      <Modal
        open={openEditModel}
        onOpenChange={setOpenEditModel}
        title="Edit Profile"
        size="lg"
      >
        <EmployeeForm />
      </Modal>
      <Modal
        title="Request Time Off"
        open={openRequestModel}
        onOpenChange={setOpenRequestModel}
        size="lg"
      >
        <RequestOffForm />
      </Modal>

      <div className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
            <div className="mx-auto flex max-w-7xl flex-col gap-8">
              {/* Profile Header */}
              <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                <CardContent className="p-6">
                  <div className="flex w-full flex-col  gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-5">
                      <Avatar className="h-24 w-24">
                        <AvatarImage
                          alt="Jessica Miller"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaupMYu4-U0IgT2THus-USHXGGWCAJzRgLmi_fr0Zs3JV-tkJupGYj8aEerH0wcfek1v0r6-NKe-F_f9WWnB4LDoNU2EuNRxJeo7Adhyad3-f04J_BAqzHVcCHkVmQ4JCS5fhFXXvIrpEPJ2gQP8jBWZ9ppXOSxEa4wUf1hEsmPdtU_7-ITHXOHi3kVElNvC4EuASK-TO7a-TTjAiocwNLlnNxTuqmPIpU0ZavYDIrq0DWuQNlvX02P70WBN31wVWpx4VT4hBnZ6c"
                        />
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">
                          Jessica Miller
                        </h1>
                        <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">
                          Senior Stylist
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            On Duty
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                      <Button
                        onClick={() => setOpenEditModel(true)}
                        variant="secondary"
                        className="h-11 min-w-[84px] bg-primary/10 text-primary hover:bg-primary/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                      >
                        Edit Profile
                      </Button>
                      <Button
                        onClick={() => setOpenRequestModel(true)}
                        className="h-11 min-w-[84px] bg-primary text-white hover:bg-primary/90"
                      >
                        Request Time Off
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left: Appointments & Schedule */}
                <div className="flex flex-col gap-8 lg:col-span-2">
                  <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                    {/* Wrap header + content in a single Tabs */}
                    <Tabs
                      value={tab}
                      onValueChange={(v) => setTab(v as typeof tab)}
                      className="w-full"
                    >
                      <CardHeader className="border-b border-border-light dark:border-border-dark px-6">
                        <TabsList className="bg-transparent p-0">
                          <TabsTrigger
                            value="upcoming"
                            className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none pb-3 pt-4 font-bold text-sm text-text-light-secondary dark:text-text-dark-secondary"
                          >
                            Upcoming Appointments
                          </TabsTrigger>
                          <TabsTrigger
                            value="history"
                            className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none pb-3 pt-4 font-bold text-sm text-text-light-secondary dark:text-text-dark-secondary"
                          >
                            Appointment History
                          </TabsTrigger>
                          <TabsTrigger
                            value="schedule"
                            className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-primary rounded-none pb-3 pt-4 font-bold text-sm text-text-light-secondary dark:text-text-dark-secondary"
                          >
                            Work Schedule
                          </TabsTrigger>
                        </TabsList>
                      </CardHeader>

                      <CardContent className="p-6">
                        {/* Search Bar (shared) */}
                        <div className="pb-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                            <Input
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              placeholder={
                                tab === "schedule"
                                  ? "Filter by day or date (e.g., Wed, 2025-11-12)"
                                  : "Search by client, service, or date..."
                              }
                              className="h-12 pl-10 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary"
                            />
                          </div>
                        </div>

                        {/* Upcoming Appointments */}
                        <TabsContent value="upcoming" className="m-0">
                          <HeaderRow
                            title="Upcoming"
                            count={filteredUpcoming.length}
                          />
                          <AppointmentList items={filteredUpcoming} />
                        </TabsContent>

                        {/* Appointment History */}
                        <TabsContent value="history" className="m-0">
                          <HeaderRow
                            title="History"
                            count={filteredHistory.length}
                          />
                          <AppointmentList items={filteredHistory} />
                        </TabsContent>

                        {/* Work Schedule */}
                        <TabsContent value="schedule" className="m-0">
                          <HeaderRow
                            title="This Week"
                            count={WEEK_SCHEDULE.length}
                          />
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {WEEK_SCHEDULE.filter((s) => {
                              if (!normalizedQuery) return true;
                              const hay = `${s.day} ${s.dateKey} ${s.hours} ${
                                s.notes ?? ""
                              }`.toLowerCase();
                              return hay.includes(normalizedQuery);
                            }).map((s) => (
                              <div
                                key={s.dateKey}
                                className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4"
                              >
                                <div className="flex items-baseline justify-between">
                                  <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
                                    {s.day} • {s.dateKey}
                                  </p>
                                  <Badge className="bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                                    {s.hours === "Off" ? "Off" : "On Duty"}
                                  </Badge>
                                </div>
                                <p className="mt-2 text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                                  {s.hours}
                                </p>
                                {s.notes ? (
                                  <p className="mt-1 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                                    {s.notes}
                                  </p>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </CardContent>
                    </Tabs>
                  </Card>
                </div>

                {/* Right: Skills & Details */}
                <div className="flex flex-col gap-8 lg:col-span-1">
                  {/* My Expertise */}
                  <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                    <CardHeader>
                      <CardTitle className="text-lg">My Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {EXPERTISE.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-accent/20 dark:text-accent"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Services I Provide */}
                  <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Services I Provide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-base text-text-light-secondary dark:text-text-dark-secondary">
                      {SERVICES.map((svc) => (
                        <div key={svc} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent" />
                          <span>{svc}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Personal Details */}
                  <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Personal Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                        <p className="text-text-light-primary dark:text-text-dark-primary">
                          jessica.miller@salon.co
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                        <p className="text-text-light-primary dark:text-text-dark-primary">
                          (555) 123-4567
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                        <p className="text-text-light-primary dark:text-text-dark-primary">
                          Start Date: June 15, 2021
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// --- Small presentational helpers ------------------------------------------------
function HeaderRow({ title, count }: { title: string; count: number }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h4 className="text-sm font-bold tracking-wide text-text-light-secondary dark:text-text-dark-secondary">
        {title}
      </h4>
      <Badge className="bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
        {count}
      </Badge>
    </div>
  );
}

function AppointmentList({ items }: { items: Appointment[] }) {
  if (!items.length) {
    return (
      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
        No items found.
      </p>
    );
  }
  return (
    <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
      {items.map((a) => (
        <div
          key={a.id}
          className="flex items-center justify-between gap-4 py-4"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage alt={a.name} src={a.avatar} />
              <AvatarFallback>
                {a.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
                {a.name} - {a.service}
              </p>
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                {a.when}
              </p>
            </div>
          </div>
          <Button
            variant="link"
            className="font-bold text-primary dark:text-accent"
          >
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
}
