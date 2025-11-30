"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useEffect } from "react";

import { ChevronRight, Search } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { CreateInviteButton } from "@/components/management/create-invitation-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { authClient } from "@/lib/auth-client";
import { StaffDetailContent } from "@/app/(salon)/salon/[id]/staff-management/_component/staff-detail-content";
import UserButton from "./user-button";
import { getSalonById, SalonById } from "@/oop/infrastructure/salon-repository";

export type PendingInvites = {
  id: string;
  organizationId: string;
  email: string;
  role: string;
  status: "pending" | "accepted" | "rejected" | "canceled";
  inviterId: string;
  expiresAt: Date;
  teamId?: string | null | undefined;
};

/* -------- Types & Constants -------- */
type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type ScheduleDay = { enabled: boolean; start: string; end: string };
type Schedule = Record<DayKey, ScheduleDay>;

export type Staff = {
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

type Org = NonNullable<SalonById["organization"]>;
export type Member = Org["members"][number];

interface StaffManagementContentClientProps {
  members: Org["members"] | null | undefined;
  salonServices: { id: string; name: string }[];
}

export default function StaffManagementContentClient({
  members,
  salonServices,
}: StaffManagementContentClientProps) {
  const [query, setQuery] = useState("");
  const [staff, setStaff] = useState<Member[]>(members || []);
  const [activeId, setActiveId] = useState<string>(members?.[0]?.id ?? "");
  const [pendingInvites, setPendingInvites] = useState<PendingInvites[]>([]);

  const { data: activeOrganization } = authClient.useActiveOrganization();

  const active = staff.find((s) => s.id === activeId);

  useEffect(() => {
    const fetchInvites = async () => {
      if (activeOrganization?.id) {
        const invites = await authClient.organization.listInvitations({
          query: { organizationId: activeOrganization.id },
        });
        const pendingInvites = invites.data?.filter(
          (invite) => invite.status === "pending"
        );
        setPendingInvites(pendingInvites || []);
      }
    };
    fetchInvites();
  }, [activeOrganization?.id]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return staff;
    return staff.filter(
      (s) =>
        s.user.name.toLowerCase().includes(q) ||
        s.role.toLowerCase().includes(q) ||
        s.user.email?.toLowerCase().includes(q)
    );
  }, [query, staff]);

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
            <CreateInviteButton
              type="plus"
              setPendingInvites={setPendingInvites}
              setActiveId={setActiveId}
            />
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ScrollArea className="h-[516px]">
                <div className="px-2 py-2">
                  <button
                    className={cn(
                      "w-full px-4 py-3 flex items-center justify-between gap-4 text-left transition-colors",
                      activeId === "invites"
                        ? "bg-primary/10"
                        : "hover:bg-muted/60 dark:hover:bg-muted/40"
                    )}
                    onClick={() => setActiveId("invites")}
                  >
                    <div className="flex items-center justify-start gap-4">
                      Invites ({pendingInvites?.length || 0})
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 ",
                        activeId === "invites"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                </div>

                <div className="divide-y">
                  {filtered?.map((s) => {
                    const selected = s.id === activeId;
                    return (
                      <UserButton
                        key={s.id}
                        id={s.id}
                        name={s.user.name}
                        role={s.role}
                        imageUrl={s.user.image || ""}
                        setActiveId={setActiveId}
                        selected={selected}
                      />
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
              {activeId === "invites"
                ? "Sent Invitations"
                : active
                ? `Edit ${active.user.name}'s Details`
                : "Select a staff member"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StaffDetailContent
              activeId={activeId}
              active={active}
              setStaff={setStaff}
              // staff={staff}
              salonServices={salonServices}
              // setActiveId={setActiveId}
              // organizationId={activeOrganization?.id || ""}
              pendingInvites={pendingInvites}
              setPendingInvites={setPendingInvites}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
