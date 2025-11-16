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

/* ------------------------ utility functions ------------------------ */
function generateId() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
  } catch {}
  return Math.random().toString(36).slice(2);
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}

/* ------------------------ types and constants ------------------------ */
type AppointmentStatus =
  | "scheduled"
  | "confirmed"
  | "in-progress"
  | "completed"
  | "cancelled"
  | "no-show";

interface Appointment {
  id: string;
  clientName: string;
  clientPhone?: string;
  clientEmail?: string;
  staffId: string;
  staffName: string;
  service: string;
  startTime: Date;
  endTime: Date;
  duration: number; // in minutes
  status: AppointmentStatus;
  notes?: string;
  price?: number;
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

interface Staff {
  id: string;
  name: string;
  color: string;
}

const STAFF_LIST: Staff[] = [
  { id: "1", name: "Ayşe Yılmaz", color: "#3B82F6" },
  { id: "2", name: "Fatma Kaya", color: "#EF4444" },
  { id: "3", name: "Mehmet Öztürk", color: "#10B981" },
];

const SERVICES = [
  "Haircut",
  "Hair Color",
  "Highlights",
  "Balayage",
  "Blowout",
  "Barbering",
  "Nails",
  "Makeup",
  "Skincare",
];

const STATUS_COLORS: Record<
  AppointmentStatus,
  { bg: string; border: string; text: string }
> = {
  scheduled: { bg: "#E3F2FD", border: "#2196F3", text: "#1976D2" },
  confirmed: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  "in-progress": { bg: "#FFF3E0", border: "#FF9800", text: "#F57C00" },
  completed: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  cancelled: { bg: "#FFEBEE", border: "#F44336", text: "#D32F2F" },
  "no-show": { bg: "#FCE4EC", border: "#E91E63", text: "#C2185B" },
};

// Sample appointments data
const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: "1",
    clientName: "Emma Wilson",
    clientPhone: "+1 555 0123",
    staffId: "1",
    staffName: "Ayşe Yılmaz",
    service: "Haircut",
    startTime: new Date(2024, 11, 15, 10, 0),
    endTime: new Date(2024, 11, 15, 11, 0),
    duration: 60,
    status: "confirmed",
    price: 50,
  },
  {
    id: "2",
    clientName: "Sarah Johnson",
    clientPhone: "+1 555 0456",
    staffId: "2",
    staffName: "Fatma Kaya",
    service: "Hair Color",
    startTime: new Date(2024, 11, 15, 14, 0),
    endTime: new Date(2024, 11, 15, 16, 0),
    duration: 120,
    status: "scheduled",
    price: 120,
  },
  {
    id: "3",
    clientName: "Mike Brown",
    clientPhone: "+1 555 0789",
    staffId: "3",
    staffName: "Mehmet Öztürk",
    service: "Barbering",
    startTime: new Date(2024, 11, 16, 9, 30),
    endTime: new Date(2024, 11, 16, 10, 15),
    duration: 45,
    status: "confirmed",
    price: 35,
  },
];

/* ------------------------ calendar utility functions ------------------------ */
function convertAppointmentToEvent(appointment: Appointment): CalendarEvent {
  const staff = STAFF_LIST.find((s) => s.id === appointment.staffId);
  const statusColor = STATUS_COLORS[appointment.status];

  return {
    id: appointment.id,
    title: `${appointment.clientName} - ${appointment.service}`,
    start: appointment.startTime.toISOString(),
    end: appointment.endTime.toISOString(),
    backgroundColor: statusColor.bg,
    borderColor: statusColor.border,
    textColor: statusColor.text,
    extendedProps: {
      type: "appointment",
      appointment,
      staffId: appointment.staffId,
      status: appointment.status,
    },
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
    startTime: newStart,
    endTime: newEnd || addMinutes(newStart, duration),
    duration,
  };
}

function createNewAppointment(
  clientName: string,
  staffId: string,
  service: string,
  startTime: Date,
  duration: number = 60
): Appointment {
  const staff = STAFF_LIST.find((s) => s.id === staffId);

  return {
    id: generateId(),
    clientName,
    staffId,
    staffName: staff?.name || "Unknown Staff",
    service,
    startTime,
    endTime: addMinutes(startTime, duration),
    duration,
    status: "scheduled",
  };
}

function filterAppointmentsByDate(
  appointments: Appointment[],
  targetDate: Date
): Appointment[] {
  return appointments.filter((apt) => isSameDay(apt.startTime, targetDate));
}

function filterAppointmentsByStaff(
  appointments: Appointment[],
  staffId: string
): Appointment[] {
  return appointments.filter((apt) => apt.staffId === staffId);
}

function filterAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentStatus
): Appointment[] {
  return appointments.filter((apt) => apt.status === status);
}

function findAppointmentConflicts(
  appointments: Appointment[],
  newAppointment: Appointment,
  excludeId?: string
): Appointment[] {
  return appointments.filter((apt) => {
    if (apt.id === excludeId) return false;
    if (apt.staffId !== newAppointment.staffId) return false;

    return (
      (newAppointment.startTime >= apt.startTime &&
        newAppointment.startTime < apt.endTime) ||
      (newAppointment.endTime > apt.startTime &&
        newAppointment.endTime <= apt.endTime) ||
      (newAppointment.startTime <= apt.startTime &&
        newAppointment.endTime >= apt.endTime)
    );
  });
}

/* ------------------------ main component ------------------------ */
export default function AppointmentsPage() {
  const [appointments, setAppointments] =
    React.useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [calendarEvents, setCalendarEvents] = React.useState<CalendarEvent[]>(
    []
  );
  const [selectedStatus, setSelectedStatus] = React.useState<
    AppointmentStatus | "all"
  >("all");
  const [selectedStaff, setSelectedStaff] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Update calendar events when appointments change
  React.useEffect(() => {
    let filteredAppointments = [...appointments];

    // Apply filters
    if (selectedStatus !== "all") {
      filteredAppointments = filterAppointmentsByStatus(
        filteredAppointments,
        selectedStatus
      );
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
          apt.clientName.toLowerCase().includes(query) ||
          apt.service.toLowerCase().includes(query) ||
          apt.staffName.toLowerCase().includes(query)
      );
    }

    const events = filteredAppointments.map(convertAppointmentToEvent);
    setCalendarEvents(events);
  }, [appointments, selectedStatus, selectedStaff, searchQuery]);

  // Handle calendar event interactions
  const handleDateSelect = React.useCallback(
    (selectInfo: DateSelectArg) => {
      const title = prompt(
        "Enter appointment details (Client Name - Service):"
      );
      if (title) {
        const [clientName, service] = title.split(" - ");
        if (clientName && service) {
          const newAppointment = createNewAppointment(
            clientName.trim(),
            selectedStaff !== "all" ? selectedStaff : STAFF_LIST[0].id,
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
    [appointments, selectedStaff]
  );

  const handleEventClick = React.useCallback((clickInfo: EventClickArg) => {
    const appointment = clickInfo.event.extendedProps?.appointment;
    if (appointment) {
      // Show appointment details or edit modal
      console.log("Appointment clicked:", appointment);
    }
  }, []);

  const handleEventDrop = React.useCallback((dropInfo: EventDropArg) => {
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

  // Quick actions
  const addQuickAppointment = React.useCallback(() => {
    const now = new Date();
    const roundedTime = new Date(
      Math.ceil(now.getTime() / (30 * 60 * 1000)) * (30 * 60 * 1000)
    );

    const newAppointment = createNewAppointment(
      "Walk-in Client",
      STAFF_LIST[0].id,
      "Haircut",
      roundedTime
    );

    setAppointments((prev) => [...prev, newAppointment]);
  }, []);

  const todayAppointments = filterAppointmentsByDate(appointments, new Date());

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <Button onClick={addQuickAppointment}>
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
            {STAFF_LIST.map((staff) => (
              <SelectItem key={staff.id} value={staff.id}>
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
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="no-show">No Show</SelectItem>
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
                        backgroundColor: STAFF_LIST.find(
                          (s) => s.id === apt.staffId
                        )?.color,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {apt.clientName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {apt.service}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatTime(apt.startTime)} - {formatTime(apt.endTime)}
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
              {STAFF_LIST.map((staff) => (
                <div key={staff.id} className="flex items-center gap-3">
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
                  selectable={true}
                  selectMirror={true}
                  editable={true}
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

                    // Truncate text based on event duration
                    const duration =
                      eventInfo.event.end && eventInfo.event.start
                        ? (eventInfo.event.end.getTime() -
                            eventInfo.event.start.getTime()) /
                          (1000 * 60)
                        : 60;

                    const isShort = duration < 60;
                    const clientName =
                      appointment.clientName.length > 12
                        ? appointment.clientName.substring(0, 12) + "..."
                        : appointment.clientName;
                    const service =
                      appointment.service.length > 15
                        ? appointment.service.substring(0, 15) + "..."
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
