"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, Plus, ChevronRight, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PersonalInfoForm } from "@/components/management/personal-form";
import { SpecialtiesForm } from "@/components/management/specialties-form";
import { ScheduleForm } from "@/components/management/schedule-form";

/* -------- Types & Constants -------- */
type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type ScheduleDay = { enabled: boolean; start: string; end: string };
type Schedule = Record<DayKey, ScheduleDay>;

type Staff = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  phone?: string;
  email?: string;
  skills?: string[];
  primarySkill?: string;
  notes?: string;
  schedule?: Schedule;
};

const DAY_ORDER: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function cn(...a: Array<string | false | undefined | null>) {
  return a.filter(Boolean).join(" ");
}

function safeId() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID)
      return crypto.randomUUID();
  } catch {}
  return Math.random().toString(36).slice(2);
}

function defaultSchedule(): Schedule {
  return {
    mon: { enabled: true, start: "09:00", end: "18:00" },
    tue: { enabled: true, start: "09:00", end: "18:00" },
    wed: { enabled: true, start: "09:00", end: "18:00" },
    thu: { enabled: true, start: "09:00", end: "18:00" },
    fri: { enabled: true, start: "09:00", end: "18:00" },
    sat: { enabled: true, start: "09:00", end: "18:00" },
    sun: { enabled: false, start: "09:00", end: "18:00" },
  };
}

const INITIAL_STAFF: Staff[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    role: "Haircut Specialist",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxa7v_jWvvN8LgfHHe2lyfDUKE_FpHyBPWUYs7DtOuaNwK41RlYPy92hDPBGPnT5PfiTDGata5kW3L01HLH2J_h0uyXSZ4tmXB-XO-ets6xKjXyDpftHFzY-3hHAuIesg3sLMnPUBWFNk9RIrCRHuCF6ch6JtTqyDjZs400sGR5C9exYC7UeqBaZHk_LbYK88Qm_jE0qmuo08IQaJL6okNrq5M9cIYrr235or-S8PF0LrYWYGmantV3S16zeykAWo2wCBYZLlP6pU",
    phone: "+90 555 123 4567",
    email: "ayse.yilmaz@example.com",
    skills: ["Haircut", "Blowout"],
    primarySkill: "Haircut",
    notes: "Great with short styles and layers.",
    schedule: defaultSchedule(),
  },
  {
    id: "2",
    name: "Fatma Kaya",
    role: "Color Specialist",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBZfJNCUF_JhwM_iy5toWZ8o4DCCBBt1pUXKvjoyqeo7PJb7BfsE3t9GA8BYtVHuxlZHLTfPNZ03tDN99IK0KYQuwxU22J3PQbw6KMtf00jNb7bv0qUZwV8abK6Y9OE_oVvAfOtl38TzGR4hV88dmsCNgQLzF-uJCYLI1_-nlZpqEyWzGXqStMZaM-TBE_uFzFbWKfqAeDelxlz5KQyRHejwUdJkolPJRsJDv2OWYnCnbvaQhEdVkMtDqyTioDBLqYKEMGlud_0OI",
    skills: ["Hair Color", "Highlights", "Balayage"],
    primarySkill: "Balayage",
    schedule: defaultSchedule(),
  },
  {
    id: "3",
    name: "Mehmet Öztürk",
    role: "Barber",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHePjUhf-DcZtxWE1N5Qc9y4yZUTyljAV85D5DDICUDWDvEA3kakIZWFJIke3iEMgb-Y53W-TBVTZ7WmlteUupGK-zf9aeXikPZ07E4PUgE94MUHWkKjkOFomotghYtWj5NPccL1YtXWas2dsc13iB1tYCTHcr2I43yi7RSVk7CfP7s_SYIY4ivCwLwFWi1PSqa3xrl2GPySGpeQfD4hNfy7zSBpG1Ic2DeZQxPndo8jVQ1L1-juZ77H8IMcLheryLOz9KBa6BC_M",
    skills: ["Barbering"],
    primarySkill: "Barbering",
    schedule: defaultSchedule(),
  },
];

/* -------- Validation Schemas -------- */
const infoSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().optional(),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
});

const specialtiesSchema = z.object({
  skills: z.array(z.string()).min(1, "Select at least one specialty"),
  primarySkill: z.string().min(1, "Select a primary specialty"),
  notes: z.string().max(500, "Max 500 characters").optional().or(z.literal("")),
});

const daySchema = z.object({
  enabled: z.boolean(),
  start: z.string(),
  end: z.string(),
});

const scheduleSchema = z.object({
  mon: daySchema,
  tue: daySchema,
  wed: daySchema,
  thu: daySchema,
  fri: daySchema,
  sat: daySchema,
  sun: daySchema,
});

/* -------- Main Component -------- */
export default function StaffManagementContent() {
  const [query, setQuery] = useState("");
  const [staff, setStaff] = useState<Staff[]>(INITIAL_STAFF);
  const [activeId, setActiveId] = useState<string>(INITIAL_STAFF[0]?.id ?? "");

  const active = staff.find((s) => s.id === activeId);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return staff;
    return staff.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.role.toLowerCase().includes(q) ||
        s.email?.toLowerCase().includes(q)
    );
  }, [query, staff]);

  /* -------- Handlers -------- */
  function handleAdd() {
    const newItem: Staff = {
      id: safeId(),
      name: "New Staff",
      role: "Role",
      avatar: "https://ui-avatars.com/api/?name=NS&background=137fec&color=fff",
      email: "new.staff@example.com",
      phone: "",
      skills: [],
      primarySkill: "",
      notes: "",
      schedule: defaultSchedule(),
    };
    setStaff((prev) => [newItem, ...prev]);
    setActiveId(newItem.id);
  }

  function handleDelete(id: string) {
    setStaff((prev) => prev.filter((s) => s.id !== id));
    if (id === activeId) {
      const next = staff.find((s) => s.id !== id);
      setActiveId(next?.id ?? "");
    }
  }

  function handleSaveInfo(values: z.infer<typeof infoSchema>) {
    if (!active) return;
    const fullName = `${values.firstName} ${values.lastName}`.trim();
    setStaff((prev) =>
      prev.map((s) =>
        s.id === active.id
          ? { ...s, name: fullName, phone: values.phone, email: values.email }
          : s
      )
    );
  }

  function handleSaveSpecialties(values: z.infer<typeof specialtiesSchema>) {
    if (!active) return;
    setStaff((prev) =>
      prev.map((s) =>
        s.id === active.id
          ? {
              ...s,
              skills: values.skills,
              primarySkill: values.primarySkill,
              notes: values.notes,
            }
          : s
      )
    );
  }

  function handleSaveSchedule(values: z.infer<typeof scheduleSchema>) {
    if (!active) return;
    setStaff((prev) =>
      prev.map((s) => (s.id === active.id ? { ...s, schedule: values } : s))
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Sidebar - Staff List */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative flex-1 h-12">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70" />
              <Input
                className="h-12 pl-9"
                placeholder="Search staff..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button className="h-12 px-4" onClick={handleAdd}>
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ScrollArea className="h-[516px]">
                <div className="divide-y">
                  {filtered.map((s) => {
                    const selected = s.id === activeId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveId(s.id)}
                        className={cn(
                          "w-full px-4 py-3 flex items-center justify-between gap-4 text-left transition-colors",
                          selected
                            ? "bg-primary/10"
                            : "hover:bg-muted/60 dark:hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={s.avatar} alt={s.name} />
                            <AvatarFallback>
                              {s.name
                                .split(" ")
                                .map((p) => p[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p
                              className={cn(
                                "truncate text-base font-medium",
                                selected && "text-primary"
                              )}
                            >
                              {s.name}
                            </p>
                            <p className="truncate text-sm text-muted-foreground">
                              {s.role}
                            </p>
                          </div>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4",
                            selected ? "text-primary" : "text-muted-foreground"
                          )}
                        />
                      </button>
                    );
                  })}
                  {filtered.length === 0 && (
                    <div className="px-4 py-6 text-sm text-muted-foreground">
                      No staff found.
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Detail Tabs */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              {active ? `Edit ${active.name}` : "Select a staff member"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {active ? (
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Personal Info</TabsTrigger>
                  <TabsTrigger value="skills">Specialties</TabsTrigger>
                  <TabsTrigger value="schedule">Work Schedule</TabsTrigger>
                </TabsList>

                {/* Personal Info Tab */}
                <TabsContent value="profile" className="mt-6">
                  <PersonalInfoForm
                    staffId={active.id}
                    name={active.name}
                    avatar={active.avatar}
                    phone={active.phone}
                    email={active.email}
                    onSave={handleSaveInfo}
                    onDelete={handleDelete}
                  />
                </TabsContent>

                {/* Specialties Tab */}
                <TabsContent value="skills" className="mt-6">
                  <SpecialtiesForm
                    skills={active.skills}
                    primarySkill={active.primarySkill}
                    notes={active.notes}
                    onSave={handleSaveSpecialties}
                  />
                </TabsContent>

                {/* Schedule Tab */}
                <TabsContent value="schedule" className="mt-6">
                  <ScheduleForm
                    schedule={active.schedule}
                    onSave={handleSaveSchedule}
                  />
                </TabsContent>
              </Tabs>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose a staff member to edit details.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
