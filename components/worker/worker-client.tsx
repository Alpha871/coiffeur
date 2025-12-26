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
import { RequestOffForm } from "@/components/worker/request-off-form";
import { HeaderRow } from "../../app/(worker)/worker/[id]/_components/header-row";
import { AppointmentList } from "../../app/(worker)/worker/[id]/_components/appointment-list";
import { MemberStylist, updateUserInfo } from "@/actions/user-actions";
import { takeFirstLastLetters } from "@/utils/utils";
import { changedValues, DAY_ORDER, timeToString } from "@/lib/utils";
import { Appointment, AppointmentView } from "@/lib/validations/appointment";

import { useMemo } from "react";
import AppointmentDetail from "../appointment/appointment-detail";
import { format } from "date-fns";
import { redirect, useParams } from "next/navigation";
import { AppointmentStatus } from "@/generated/prisma";
import { PersonalInfoForm } from "../management/personal-form";
import { toast } from "sonner";
import { PersonInfoFormValues } from "@/lib/validations/staff-management";

export default function WorkerPageClient({
  member,
  appointments,
  currentUserId,
}: {
  member: MemberStylist;
  appointments: AppointmentView[];
  currentUserId: string;
}) {
  const { id: salonId } = useParams();

  const [tab, setTab] = useState<"upcoming" | "history" | "schedule">(
    "upcoming"
  );
  const [openEditModel, setOpenEditModel] = useState(false);
  const [openRequestModel, setOpenRequestModel] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState<
    AppointmentView | undefined
  >();
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredUpcoming = useMemo(() => {
    const upcoming = appointments.filter(
      (a) =>
        (a.status === AppointmentStatus.APPROVED ||
          a.status === AppointmentStatus.PENDING) &&
        a.startsAt >= new Date()
    );
    if (!normalizedQuery) return upcoming;
    return upcoming.filter((a) =>
      [a.customerName, a.service, a.startsAt, a.status].some((v) =>
        v.toString().toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery, appointments]);

  const filteredHistory = useMemo(() => {
    const history = appointments.filter(
      (a) => a.status === AppointmentStatus.COMPLETED || a.startsAt < new Date()
    );
    if (!normalizedQuery) return history;
    return history.filter((a) =>
      [a.customerName, a.service, a.startsAt, a.status].some((v) =>
        v.toString().toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery, appointments]);

  if (!member) {
    redirect("/");
  }

  const availabilities = member.availabilities.map((av) => ({
    day: DAY_ORDER[av.dayOfWeek],
    startTime: timeToString(av.startTime),
    endTime: timeToString(av.endTime),
    dateKey: av.startTime.toISOString().split("T")[0],
    isClosed: av.isClosed,
  }));

  const handleViewDetails = (id: string) => {
    const appointment = filteredUpcoming.find((a) => a.id === id);
    if (appointment) {
      setSelectedAppointment(appointment);
      setOpenDetailsModal(true);
    }
  };

  const updatePersonalInfo = async (values: PersonInfoFormValues) => {
    try {
      const submittedValues = {
        name: values.firstName + " " + values.lastName,
        email: values.email,
        phone: values.phone,
      };

      const changes = changedValues(
        {
          name: member.user.name,
          email: member.user.email || "",
          phone: member.user.phone || "",
        },
        submittedValues
      );

      if (!salonId) {
        toast.error("Salon ID not found");
        return;
      }

      await updateUserInfo(member.user.id, salonId as string, changes);
      toast.success("Personal info updated successfully.");
    } catch (error) {
      console.error("Error updating personal info:", error);
      toast.error("Failed to update personal info.");
    }
  };

  return (
    <>
      <Modal
        open={openEditModel}
        onOpenChange={setOpenEditModel}
        title="Edit Profile"
        size="lg"
      >
        <PersonalInfoForm
          staffId={member.user.id}
          name={member.user.name}
          avatar={member.user.image || ""}
          phone={member.user.phone || ""}
          email={member.user.email || ""}
          onSave={updatePersonalInfo}
        />
      </Modal>
      <Modal
        title="Request Time Off"
        open={openRequestModel}
        onOpenChange={setOpenRequestModel}
        size="lg"
      >
        <RequestOffForm />
      </Modal>

      <Modal
        title="Appointment Details"
        open={openDetailsModal}
        onOpenChange={setOpenDetailsModal}
        size="md"
      >
        <AppointmentDetail selectedAppointment={selectedAppointment} />
      </Modal>

      <div className=" md:mx-56 font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary min-h-screen">
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
                          alt={member.user.name}
                          src={member.user.image || ""}
                        />
                        <AvatarFallback className="border border-blue-800">
                          {takeFirstLastLetters(member.user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">
                          {member.user.name}
                        </h1>
                        <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">
                          {member.role === "owner"
                            ? "Salon Owner"
                            : `Stylist at ${member.organization.name}`}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            On Duty
                          </p>
                        </div>
                      </div>
                    </div>
                    {currentUserId === member.user.id && (
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
                          disabled
                          className="h-11 min-w-[84px] bg-primary text-white hover:bg-primary/90"
                        >
                          Request Time Off
                        </Button>
                      </div>
                    )}
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
                          <AppointmentList
                            items={filteredUpcoming}
                            onViewDetails={handleViewDetails}
                            currentUserId={currentUserId}
                            memberUserId={member.user.id}
                          />
                        </TabsContent>

                        {/* Appointment History */}
                        <TabsContent value="history" className="m-0">
                          <HeaderRow
                            title="History"
                            count={filteredHistory.length}
                          />
                          <AppointmentList
                            items={filteredHistory}
                            onViewDetails={handleViewDetails}
                            currentUserId={currentUserId}
                            memberUserId={member.user.id}
                          />
                        </TabsContent>

                        {/* Work Schedule */}
                        <TabsContent value="schedule" className="m-0">
                          <HeaderRow
                            title="This Week"
                            count={availabilities.length}
                          />
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {availabilities
                              .filter((s) => {
                                if (!normalizedQuery) return true;
                                const hay = `${s.day} ${s.dateKey} ${
                                  s.startTime
                                } ${s.endTime} ${
                                  s.isClosed ? "Off" : "On Duty"
                                }`.toLowerCase();
                                return hay.includes(normalizedQuery);
                              })
                              .map((s) => (
                                <div
                                  key={s.day}
                                  className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6"
                                >
                                  <div className="flex items-baseline justify-between">
                                    <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
                                      {s.day.toUpperCase()}
                                      {/*• {s.dateKey} */}
                                    </p>
                                    <Badge className="bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                                      {s.isClosed ? "Off" : "On Duty"}
                                    </Badge>
                                  </div>
                                  <p className="mt-2 text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                                    {s.startTime} – {s.endTime}
                                  </p>
                                  {/* {s.notes ? (
                                    <p className="mt-1 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                                      {s.notes}
                                    </p>
                                  ) : null} */}
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
                      <CardTitle className="text-lg">Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {member.specialties.length === 0 ? (
                        <p className="text-base text-text-light-secondary dark:text-text-dark-secondary">
                          No specialties listed.
                        </p>
                      ) : (
                        member.specialties.map((spec) => (
                          <Badge
                            key={spec.id}
                            variant="secondary"
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-accent/20 dark:text-accent"
                          >
                            {spec.service.name}
                          </Badge>
                        ))
                      )}
                    </CardContent>
                  </Card>

                  {/* Services I Provide */}
                  {/* <Card className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
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
                  </Card> */}

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
                          {member.user.email}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                        <p className="text-text-light-primary dark:text-text-dark-primary">
                          {member.user.phone}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-text-light-secondary dark:text-text-dark-secondary" />
                        <p className="text-text-light-primary dark:text-text-dark-primary">
                          Joined on{" "}
                          {format(new Date(member.createdAt), "dd MMM, yyyy")}
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
