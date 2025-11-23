"use client";

import { ScheduleForm } from "@/components/management/schedule-form";
import { SpecialtiesForm } from "@/components/management/specialties-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PersonalInfoForm } from "@/components/management/personal-form";
import z from "zod";
import { Member } from "@/components/management/staff-management-client";
import { convertOpeningHoursFromDatabase } from "@/lib/utils";
import { useEffect, useState } from "react";

const infoSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().optional(),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
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

export function StaffDetailTabs({
  active,
  // setStaff,
  // activeId,
  // setActiveId,
  // staff,
  salonServices,
}: {
  active: Member;
  // setStaff: React.Dispatch<React.SetStateAction<Member[]>>;
  // activeId: string;
  // setActiveId: React.Dispatch<React.SetStateAction<string>>;
  // staff: Member[];
  salonServices: string[];
}) {
  // const [activeTab, setActiveTab] = useState("profile");

  // Reset tab when active staff member changes
  // useEffect(() => {
  //   const resetTab = () => setActiveTab("profile");
  //   resetTab();
  // }, [active.id]);

  const MemberSpecialities = active?.specialties.map((spec) => ({
    name: spec.service.name,
    id: spec.id,
    specialty: salonServices.includes(spec.service.name),
  }));

  const availabilities = convertOpeningHoursFromDatabase(active.availabilities);

  const MemeberAvailabity = active?.availabilities;

  function handleDelete(id: string) {
    // setStaff((prev) => prev.filter((s) => s.id !== id));
    // if (id === activeId) {
    //   const next = staff.find((s) => s.id !== id);
    //   setActiveId(next?.id ?? "");
    // }
  }

  function handleSaveInfo(values: z.infer<typeof infoSchema>) {
    // if (!active) return;
    // const fullName = `${values.firstName} ${values.lastName}`.trim();
    // setStaff((prev) =>
    //   prev.map((s) =>
    //     s.id === active.id
    //       ? { ...s, name: fullName, phone: values.phone, email: values.email }
    //       : s
    //   )
    // );
  }

  function handleSaveSpecialties(values: z.infer<typeof specialtiesSchema>) {
    // if (!active) return;
    // setStaff((prev) =>
    //   prev.map((s) =>
    //     s.id === active.id
    //       ? {
    //           ...s,
    //           skills: values.skills,
    //           primarySkill: values.primarySkill,
    //           notes: values.notes,
    //         }
    //       : s
    //   )
    // );
  }

  function handleSaveSchedule(values: z.infer<typeof scheduleSchema>) {
    // if (!active) return;
    // setStaff((prev) =>
    //   prev.map((s) => (s.id === active.id ? { ...s, schedule: values } : s))
    // );
  }

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Personal Info</TabsTrigger>
        <TabsTrigger value="skills">Specialties</TabsTrigger>
        <TabsTrigger value="schedule">Work Schedule</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="mt-6">
        <PersonalInfoForm
          key={active.id}
          staffId={active.id || ""}
          name={active.user.name || ""}
          avatar={active.user.image || ""}
          phone={active.user.phone || ""}
          email={active.user.email}
          onSave={handleSaveInfo}
          onDelete={handleDelete}
        />
      </TabsContent>

      <TabsContent value="skills" className="mt-6">
        <SpecialtiesForm
          key={active.id}
          skills={MemberSpecialities}
          // primarySkill={active.specialties}
          // notes={active.notes}
          onSave={handleSaveSpecialties}
        />
      </TabsContent>

      <TabsContent value="schedule" className="mt-6">
        <ScheduleForm
          key={active.id}
          schedule={availabilities}
          // onSave={handleSaveSchedule}
        />
      </TabsContent>
    </Tabs>
  );
}
