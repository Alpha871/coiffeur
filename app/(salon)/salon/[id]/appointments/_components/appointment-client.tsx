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
import { randomValues } from "@/lib/utils";

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

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

const STATUS_COLORS: Record<
  AppointmentStatus,
  { bg: string; border: string; text: string }
> = {
  // APPROVED: { bg: "#E3F2FD", border: "#2196F3", text: "#1976D2" },
  APPROVED: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  PENDING: { bg: "#FFF3E0", border: "#FF9800", text: "#F57C00" },
  COMPLETED: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  CANCELLED: { bg: "#FFEBEE", border: "#F44336", text: "#D32F2F" },
  REJECTED: { bg: "#FCE4EC", border: "#E91E63", text: "#C2185B" },
};

// Sample appointments data
// const INITIAL_APPOINTMENTS: appointment[] = [
//   {
//     id: "1",
//     clientName: "Emma Wilson",
//     clientPhone: "+1 555 0123",
//     staffId: "1",
//     staffName: "Ayşe Yılmaz",
//     service: "Haircut",
//     startTime: new Date(2024, 11, 15, 10, 0),
//     endTime: new Date(2024, 11, 15, 11, 0),
//     duration: 60,
//     status: "confirmed",
//     price: 50,
//   },
//   {
//     id: "2",
//     clientName: "Sarah Johnson",
//     clientPhone: "+1 555 0456",
//     staffId: "2",
//     staffName: "Fatma Kaya",
//     service: "Hair Color",
//     startTime: new Date(2024, 11, 15, 14, 0),
//     endTime: new Date(2024, 11, 15, 16, 0),
//     duration: 120,
//     status: "scheduled",
//     price: 120,
//   },
//   {
//     id: "3",
//     clientName: "Mike Brown",
//     clientPhone: "+1 555 0789",
//     staffId: "3",
//     staffName: "Mehmet Öztürk",
//     service: "Barbering",
//     startTime: new Date(2024, 11, 16, 9, 30),
//     endTime: new Date(2024, 11, 16, 10, 15),
//     duration: 45,
//     status: "confirmed",
//     price: 35,
//   },
// ];

function convertEventsToAppointments(events: CalendarEvent[]): Appointment[] {
  return events
    .filter(
      (event) =>
        event.extendedProps?.type === "appointment" &&
        event.extendedProps.appointment
    )
    .map((event) => event.extendedProps!.appointment!);
}

function createNewAppointment(
  clientName: string,
  staffId: string,
  service: string,
  start: Date
): Appointment {
  const duration = 60; // Default duration in minutes
  const end = addMinutes(start, duration);

  return {
    id: Math.random().toString(36).substr(2, 9),
    customerName: clientName,
    customerAvatar: null,
    duration,
    service,
    startsAt: start,
    endsAt: end,
    status: AppointmentStatus.PENDING,
    notes: null,
    price: 0,
    memberId: staffId,
    memberAvatar: null,
    memberName: "", // This can be filled in later
  };
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
}

export default function AppointmentClient({
  initialAppointments,
}: AppointmentClientProps) {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    AppointmentStatus | "all"
  >("all");
  const [selectedStaff, setSelectedStaff] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

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

      console.log("events", events);
      setCalendarEvents(events);
    };
    action();
  }, [appointments, selectedStatus, selectedStaff, searchQuery]);

  // Handle calendar event interactions
  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      const title = prompt(
        "Enter appointment details (Client Name - Service):"
      );
      if (title) {
        const [clientName, service] = title.split(" - ");
        if (clientName && service) {
          const newAppointment = createNewAppointment(
            clientName.trim(),
            selectedStaff !== "all" ? selectedStaff : members[0].id,
            service.trim(),
            selectInfo.start
          );

          // Check for conflicts
          const conflicts = findAppointmentConflicts(
            appointments,
            newAppointment
          );
          if (conflicts.length > 0) {
            alert("Time conflict detected! Please choose a different time.");
            return;
          }

          setAppointments((prev) => [...prev, newAppointment]);
        }
      }
      selectInfo.view.calendar.unselect();
    },
    [appointments, selectedStaff, members]
  );

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

  const todayAppointments = filterAppointmentsByDate(appointments, new Date());

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <Button
        // onClick={addQuickAppointment}
        >
          <Plus className="mr-2 h-4 w-4" />
          Quick Appointment
        </Button>
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Today&rsquo;s Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayAppointments.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No appointments today
                </p>
              ) : (
                todayAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center gap-3 p-3 rounded-lg border"
                  >
                    <div
                      className="w-2 h-8 rounded"
                      style={{
                        backgroundColor: members.find(
                          (s) => s.id === apt.memberId
                        )?.color,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {apt.customerName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {apt.service}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatTime(apt.startsAt)} - {formatTime(apt.endsAt)}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {apt.status}
                    </Badge>
                  </div>
                ))
              )}
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
              <style jsx global>{`
                .fc-event {
                  border-radius: 4px !important;
                  border: none !important;
                  font-size: 11px !important;
                  padding: 2px 4px !important;
                  overflow: hidden !important;
                  text-overflow: ellipsis !important;
                  white-space: nowrap !important;
                }

                .fc-event-title {
                  overflow: hidden !important;
                  text-overflow: ellipsis !important;
                  white-space: nowrap !important;
                  display: block !important;
                  max-width: 100% !important;
                }

                .fc-event-time {
                  overflow: hidden !important;
                  text-overflow: ellipsis !important;
                  white-space: nowrap !important;
                  display: block !important;
                  font-size: 10px !important;
                  opacity: 0.8 !important;
                }

                .fc-timegrid-event {
                  border-radius: 3px !important;
                  margin: 1px !important;
                }

                .fc-timegrid-event-harness {
                  margin: 1px !important;
                }

                .custom-event-content {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 100%;
                  font-size: 11px;
                  line-height: 1.2;
                }

                .custom-event-title {
                  font-weight: 500;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 100%;
                  display: block;
                }

                .custom-event-time {
                  font-size: 10px;
                  opacity: 0.7;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 100%;
                  display: block;
                }
              `}</style>

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
                  select={handleDateSelect}
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
                    const clientName =
                      appointment.customerName.length > 12
                        ? appointment.customerName
                        : appointment.customerName;
                    const service =
                      appointment.service.length > 15
                        ? appointment.service
                        : appointment.service;

                    return (
                      <div className="custom-event-content">
                        <div className="custom-event-title">
                          {isShort ? clientName : `${clientName} - ${service}`}
                        </div>
                        {!isShort && (
                          <div className="custom-event-time">
                            {formatTime(eventInfo.event.start!)} -{" "}
                            {formatTime(eventInfo.event.end!)}
                          </div>
                        )}
                      </div>
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
  );
}
