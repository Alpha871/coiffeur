"use client";

import { ScheduleForm } from "@/components/management/schedule-form";
import { SpecialtiesForm } from "@/components/management/specialties-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PersonalInfoForm } from "@/components/management/personal-form";
import z from "zod";
import { Member } from "@/components/management/staff-management-client";
import { changedValues, convertOpeningHoursFromDatabase } from "@/lib/utils";

import {
  PersonInfoFormValues,
  SpecialtiesFormValues,
} from "@/lib/validations/staff-management";
import {
  assignMemberSpecialties,
  updateUserInfo,
} from "@/oop/infrastructure/user-action";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export function StaffDetailTabs({
  active,
  setStaff,
  // activeId,
  // setActiveId,
  // staff,
  salonServices,
}: {
  active: Member;
  setStaff: React.Dispatch<React.SetStateAction<Member[]>>;
  // activeId: string;
  // setActiveId: React.Dispatch<React.SetStateAction<string>>;
  // staff: Member[];
  salonServices: { id: string; name: string }[];
}) {
  // const [activeTab, setActiveTab] = useState("profile");

  // Reset tab when active staff member changes
  // useEffect(() => {
  //   const resetTab = () => setActiveTab("profile");
  //   resetTab();
  // }, [active.id]);

  const { id: salonId } = useParams();

  const MemberSpecialities = salonServices.map((spec) => ({
    id: spec.id,
    name: spec.name,
    specialty: active.specialties.some((s) => s.id === spec.id),
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

  async function handleSaveInfo(values: Partial<PersonInfoFormValues>) {
    if (!active) return;
    const edittingValues = {
      name:
        values.firstName &&
        values.lastName &&
        `${values.firstName} ${values.lastName}`,

      phone: values.phone,
      email: values.email,
    };

    const existingValues = {
      name: active.user.name ?? undefined,
      phone: active.user.phone ?? undefined,
      email: active.user.email ?? undefined,
    };

    const changes = changedValues<{
      name?: string;
      phone?: string;
      email?: string;
    }>(existingValues, edittingValues);

    try {
      const result = await updateUserInfo(
        active.user.id,
        salonId as string,
        changes
      );

      if (!result) return;

      setStaff((prev) =>
        prev.map((s) =>
          s.user.id === result.id
            ? {
                ...s,
                user: {
                  ...s.user,
                  name: result.name,
                  image: result.image,
                  phone: result.phone,
                  email: result.email,
                },
              }
            : s
        )
      );
      toast.success("Personal info updated successfully");
    } catch (error) {
      console.error("Failed to save personal info:", error);
      toast.error("Failed to update personal info");
    }
  }

  async function handleSaveSpecialties(values: SpecialtiesFormValues) {
    if (!active) return;

    try {
      const result = await assignMemberSpecialties(
        active.id,
        salonId as string,
        values.skills
      );

      // setStaff((prev) =>
      //   prev.map((s) =>
      //     s.id === active.id
      //       ? {
      //           ...s,
      //           specialties: s.specialties.map((spec) => ({
      //             ...spec,
      //             result,
      //           })),
      //           notes: values.notes,
      //         }
      //       : s
      //   )
      // );
      toast.success("Specialties updated successfully");
    } catch (error) {
      console.error("Failed to save specialties:", error);
      toast.error("Failed to update specialties");
    }
  }

  // function handleSaveSchedule(values: z.infer<typeof scheduleSchema>) {
  //   // if (!active) return;
  //   // setStaff((prev) =>
  //   //   prev.map((s) => (s.id === active.id ? { ...s, schedule: values } : s))
  //   // );
  // }

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
          salonId={salonId as string}
          memberId={active.id}
          // onSave={handleSaveSchedule}
        />
      </TabsContent>
    </Tabs>
  );
}
