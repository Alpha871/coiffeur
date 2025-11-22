import { ScheduleForm } from "@/components/management/schedule-form";
import { SpecialtiesForm } from "@/components/management/specialties-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Staff } from "../page";
import { PersonalInfoForm } from "@/components/management/personal-form";
import z from "zod";

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

export function StaffDetailTabs({
  active,
  setStaff,
  activeId,
  setActiveId,
  staff,
}: {
  active: Staff;
  setStaff: React.Dispatch<React.SetStateAction<Staff[]>>;
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
  staff: Staff[];
}) {
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
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Personal Info</TabsTrigger>
        <TabsTrigger value="skills">Specialties</TabsTrigger>
        <TabsTrigger value="schedule">Work Schedule</TabsTrigger>
      </TabsList>

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

      <TabsContent value="skills" className="mt-6">
        <SpecialtiesForm
          skills={active.skills}
          primarySkill={active.primarySkill}
          notes={active.notes}
          onSave={handleSaveSpecialties}
        />
      </TabsContent>

      <TabsContent value="schedule" className="mt-6">
        <ScheduleForm schedule={active.schedule} onSave={handleSaveSchedule} />
      </TabsContent>
    </Tabs>
  );
}
