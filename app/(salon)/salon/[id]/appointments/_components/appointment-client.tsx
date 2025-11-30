"use client";

import * as React from "react";
import {
  CalendarIcon,
  Search,
  Filter,
  Plus,
  Clock,
  User,
  MapPin,
} from "lucide-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg, EventDropArg } from "@fullcalendar/core";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppointmentStatus } from "@/generated/prisma";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Appointment } from "@/lib/validations/appointment";
import { randomValues, STATUS_COLORS } from "@/lib/utils";
import { format } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { takeFirstLastLetters } from "@/utils/utils";
import Modal from "@/components/common/modal";
import AppointmentForm from "@/components/appointment/appointment-form";
import { SalonServices, SalonStaff } from "@/lib/validations/appointment";

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  extendedProps?: {
    type: "appointment" | "block";
    appointment?: Appointment;
    staffId: string;
    status: AppointmentStatus;
  };
}

function convertEventsToAppointments(events: CalendarEvent[]): Appointment[] {
  return events
    .filter(
      (event) =>
        event.extendedProps?.type === "appointment" &&
        event.extendedProps.appointment
    )
    .map((event) => event.extendedProps!.appointment!);
}

function updateAppointmentTimes(
  appointment: Appointment,
  newStart: Date,
  newEnd?: Date
): Appointment {
  const duration = newEnd
    ? Math.round((newEnd.getTime() - newStart.getTime()) / 60000)
    : appointment.duration;

  return {
    ...appointment,
    startsAt: newStart,
    endsAt: newEnd || addMinutes(newStart, duration),
    duration,
  };
}

function filterAppointmentsByDate(
  appointments: Appointment[],
  targetDate: Date
): Appointment[] {
  return appointments.filter((apt) => isSameDay(apt.startsAt, targetDate));
}

function filterAppointmentsByStaff(
  appointments: Appointment[],
  staffId: string
): Appointment[] {
  return appointments.filter((apt) => apt.memberId === staffId);
}

function filterAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentStatus
): Appointment[] {
  return appointments.filter((apt) => apt.status == status.toUpperCase());
}

function findAppointmentConflicts(
  appointments: Appointment[],
  newAppointment: Appointment,
  excludeId?: string
): Appointment[] {
  return appointments.filter((apt) => {
    if (apt.id === excludeId) return false;
    if (apt.memberId !== newAppointment.memberId) return false;

    return (
      (newAppointment.startsAt >= apt.startsAt &&
        newAppointment.startsAt < apt.endsAt) ||
      (newAppointment.endsAt > apt.startsAt &&
        newAppointment.endsAt <= apt.endsAt) ||
      (newAppointment.startsAt <= apt.startsAt &&
        newAppointment.endsAt >= apt.endsAt)
    );
  });
}

interface AppointmentClientProps {
  initialAppointments: Appointment[];
  salonServices: SalonServices;
  salonStaff: SalonStaff;
}

export default function AppointmentClient({
  initialAppointments,
  salonServices,
  salonStaff,
}: AppointmentClientProps) {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    AppointmentStatus | "all"
  >("all");
  const [selectedStaff, setSelectedStaff] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [EditApptModalOpen, setEditApptModalOpen] = useState(false);

  const members = useMemo(() => {
    const uniqueMembers = Array.from(
      new Set(
        appointments.map((apt) => ({
          id: apt.memberId,
          name: apt.memberName,
        }))
      )
    );

    return uniqueMembers.map((member) => ({
      ...member,
      color: `hsl(${Math.floor(parseInt(member.id, 36) % 360)}, 70%, 50%)`,
    }));
  }, [appointments]);

  function convertAppointmentToEvent(appointment: Appointment): CalendarEvent {
    const statusColor = STATUS_COLORS[appointment.status];

    return {
      id: appointment.id,
      title: `${appointment.customerName} - ${appointment.service}`,
      start: appointment.startsAt.toISOString(),
      end: appointment.endsAt.toISOString(),
      backgroundColor: statusColor.bg,
      borderColor: statusColor.border,
      textColor: statusColor.text,
      extendedProps: {
        type: "appointment",
        appointment,
        staffId: appointment.memberId,
        status: appointment.status,
      },
    };
  }

  useEffect(() => {
    const action = async () => {
      let filteredAppointments = [...appointments];

      console.log("Selected ", selectedStatus);

      if (selectedStatus !== "all") {
        filteredAppointments = filterAppointmentsByStatus(
          filteredAppointments,
          selectedStatus
        );

        console.log("filteredAppointments", filteredAppointments);
      }

      if (selectedStaff !== "all") {
        filteredAppointments = filterAppointmentsByStaff(
          filteredAppointments,
          selectedStaff
        );
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredAppointments = filteredAppointments.filter(
          (apt) =>
            apt.customerName.toLowerCase().includes(query) ||
            apt.service.toLowerCase().includes(query) ||
            apt.memberName.toLowerCase().includes(query)
        );
      }

      const events = filteredAppointments.map(convertAppointmentToEvent);

      setCalendarEvents(events);
    };
    action();
  }, [appointments, selectedStatus, selectedStaff, searchQuery]);

  // Handle calendar event interactions
  // const handleDateSelect = useCallback(
  //   (selectInfo: DateSelectArg) => {
  //     const title = prompt(
  //       "Enter appointment details (Client Name - Service):"
  //     );
  //     if (title) {
  //       const [clientName, service] = title.split(" - ");
  //       if (clientName && service) {
  //         const newAppointment = createNewAppointment(
  //           clientName.trim(),
  //           selectedStaff !== "all" ? selectedStaff : members[0].id,
  //           service.trim(),
  //           selectInfo.start
  //         );

  //         // Check for conflicts
  //         const conflicts = findAppointmentConflicts(
  //           appointments,
  //           newAppointment
  //         );
  //         if (conflicts.length > 0) {
  //           alert("Time conflict detected! Please choose a different time.");
  //           return;
  //         }

  //         setAppointments((prev) => [...prev, newAppointment]);
  //       }
  //     }
  //     selectInfo.view.calendar.unselect();
  //   },
  //   [appointments, selectedStaff, members]
  // );

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    const appointment = clickInfo.event.extendedProps?.appointment;
  }, []);

  const handleEventDrop = useCallback((dropInfo: EventDropArg) => {
    const appointmentId = dropInfo.event.id;
    const newStart = dropInfo.event.start!;
    const newEnd = dropInfo.event.end;

    setAppointments((prev) =>
      prev.map((apt) => {
        if (apt.id === appointmentId) {
          const updatedAppointment = updateAppointmentTimes(
            apt,
            newStart,
            newEnd || undefined
          );

          // Check for conflicts
          const conflicts = findAppointmentConflicts(
            prev,
            updatedAppointment,
            appointmentId
          );
          if (conflicts.length > 0) {
            alert("Time conflict detected! Reverting changes.");
            dropInfo.revert();
            return apt;
          }

          return updatedAppointment;
        }
        return apt;
      })
    );
  }, []);

  //   const addQuickAppointment = useCallback(() => {
  //     const now = new Date();
  //     const roundedTime = new Date(
  //       Math.ceil(now.getTime() / (30 * 60 * 1000)) * (30 * 60 * 1000)
  //     );

  //     const newAppointment = createNewAppointment(
  //       "Walk-in Client",
  //       STAFF_LIST[0].id,
  //       "Haircut",
  //       roundedTime
  //     );

  //     setAppointments((prev) => [...prev, newAppointment]);
  //   }, []);

  const handleEditAppointment = (appointmentId: string) => {
    const appointment = appointments.find((apt) => apt.id === appointmentId);
    if (appointment) {
      setEditApptModalOpen(true);
    }
  };

  return (
    <>
      <Modal
        open={EditApptModalOpen}
        onOpenChange={setEditApptModalOpen}
        title="Edit Appointment"
        size="full"
      >
        <AppointmentForm
          salonServices={salonServices}
          salonStaff={salonStaff}
          type="edit"
          defaultAppointment={selectedAppointment!}
          onClose={() => setEditApptModalOpen(false)}
          setAppointments={setAppointments}
        />
      </Modal>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          {/* <Button
          // onClick={addQuickAppointment}
          >
            <Plus className="mr-2 h-4 w-4" />
            Quick Appointment
          </Button> */}
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 opacity-70" />
            <Input
              placeholder="Search appointments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
          </div>

          <Select value={selectedStaff} onValueChange={setSelectedStaff}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by staff" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Staff</SelectItem>
              {members.map((staff, index) => (
                <SelectItem key={`${staff.id}-${index}`} value={staff.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: staff.color }}
                    />
                    {staff.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedStatus}
            onValueChange={(value) =>
              setSelectedStatus(value as AppointmentStatus | "all")
            }
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="APPROVED">Approved</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="REJECTED">Rejected</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Today's Overview */}
          <div className="lg:col-span-1">
            {/* Color Legend */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="h-5 w-5" />
                  Status Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(STATUS_COLORS).map(([status, colors]) => (
                  <div key={status} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded border-2"
                      style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.border,
                      }}
                    />
                    <span className="text-sm font-medium">{status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Staff Legend */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Staff
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {members.map((staff, index) => (
                  <div
                    key={`${staff.id}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: staff.color }}
                    />
                    <span className="text-sm">{staff.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Appointment Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg border">
                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    events={calendarEvents}
                    height="auto"
                    slotMinTime="08:00:00"
                    slotMaxTime="20:00:00"
                    slotDuration="00:30:00"
                    allDaySlot={false}
                    weekends={true}
                    //   selectable={true}
                    selectMirror={true}
                    //   editable={true}
                    dayMaxEvents={true}
                    businessHours={{
                      daysOfWeek: [1, 2, 3, 4, 5, 6],
                      startTime: "09:00",
                      endTime: "18:00",
                    }}
                    // select={handleDateSelect}
                    eventClick={handleEventClick}
                    eventDrop={handleEventDrop}
                    eventContent={(eventInfo) => {
                      const appointment =
                        eventInfo.event.extendedProps?.appointment;

                      if (!appointment) return null;

                      const duration =
                        eventInfo.event.end && eventInfo.event.start
                          ? (eventInfo.event.end.getTime() -
                              eventInfo.event.start.getTime()) /
                            (1000 * 60)
                          : 60;

                      const isShort = duration < 60;
                      const clientName = appointment.customerName;

                      const service = appointment.service;

                      const status = appointment.status;
                      const customerAvatar = appointment.customerAvatar;
                      const customerName = appointment.customerName;
                      const stylistName = appointment.memberName;
                      const price = appointment.price;

                      return (
                        <>
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div
                                className="custom-event-content"
                                onClick={() => {
                                  setSelectedAppointment(appointment);
                                  setEditApptModalOpen(true);
                                }}
                              >
                                <div className="custom-event-title">
                                  {isShort
                                    ? clientName
                                    : `${clientName} - ${service}`}
                                </div>
                                {!isShort && (
                                  <div className="custom-event-time">
                                    {format(eventInfo.event.start!, "p")} -{" "}
                                    {format(eventInfo.event.end!, "p")}
                                  </div>
                                )}
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-60">
                              <div className="flex justify-between gap-4">
                                <Avatar className="w-16 h-16">
                                  <AvatarImage src={customerAvatar} />
                                  <AvatarFallback className="w-16 h-16 border border-blue-400">
                                    {takeFirstLastLetters(clientName)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">
                                    {customerName}
                                  </h4>
                                  <p className="text-xs">
                                    {service} with {stylistName}
                                  </p>
                                  <p className="text-xs font-bold">
                                    {format(eventInfo.event.start!, "HH:mm")} -{" "}
                                    {format(eventInfo.event.end!, "HH:mm")} - $
                                    {price}
                                  </p>
                                  <Badge
                                    style={{
                                      backgroundColor:
                                        STATUS_COLORS[
                                          status as AppointmentStatus
                                        ].bg,
                                      borderColor:
                                        STATUS_COLORS[
                                          status as AppointmentStatus
                                        ].border,
                                      color:
                                        STATUS_COLORS[
                                          status as AppointmentStatus
                                        ].text,
                                    }}
                                  >
                                    {status}
                                  </Badge>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </>
                      );
                    }}
                    nowIndicator={true}
                    scrollTime="09:00:00"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
