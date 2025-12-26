"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppointmentFormValues,
  appointmentSchema,
} from "@/lib/validations/appointment";
import { useEffect, useMemo, useState, useTransition } from "react";
import { getMemberById, MemberStylist } from "@/actions/user-actions";
import { AppointmentStatus } from "@/generated/prisma";
import { toast } from "sonner";

import { Spinner } from "../ui/spinner";
import { rescheduleAppointment } from "@/actions/appointment-actions";

interface RescheduleProps {
  appointmentId: string;
  barberId: string;
  defaultDate?: Date;
  serviceDuration: number;
  onClose: () => void;
}

export function RescheduleForm({
  appointmentId,
  barberId,
  defaultDate,
  serviceDuration,
  onClose,
}: RescheduleProps) {
  const [barber, setBarber] = useState<MemberStylist | null>(null);
  const [Loading, setLoading] = useState(false);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function fetchBarber() {
      try {
        setLoading(true);
        const barberdata = await getMemberById(barberId);
        setBarber(barberdata);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load barber data.");
      } finally {
        setLoading(false);
      }
    }
    fetchBarber();
  }, [barberId]);

  const form = useForm<Partial<AppointmentFormValues>>({
    resolver: zodResolver(appointmentSchema.partial()),
    defaultValues: {
      date: defaultDate,
      time: "",
    },
  });

  const selectedDate = form.watch("date");
  const selectedTime = form.watch("time");

  const timeSlotsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];

    let dayOfWeek = selectedDate.getDay() + 1;
    if (dayOfWeek === 7) dayOfWeek = 0;

    const average_time = serviceDuration;

    const filteredAppointmentsForDay = barber?.appointments
      .filter(
        (appointment) =>
          appointment.startsAt.getDay() + 1 === selectedDate.getDay() + 1 &&
          appointment.startsAt.getFullYear() === selectedDate.getFullYear() &&
          appointment.startsAt.getMonth() === selectedDate.getMonth()
      )

      .flat()
      .map((appointment) => ({
        status: appointment.status,
        startsAt:
          appointment.startsAt.getHours() +
          appointment.startsAt.getMinutes() / 60,
        endsAt:
          appointment.endsAt.getHours() + appointment.endsAt.getMinutes() / 60,
      }));

    const hasConflictingAppointment = (startAt: number, endAt: number) => {
      return filteredAppointmentsForDay?.some((appointment) => {
        if (appointment.status !== AppointmentStatus.APPROVED) {
          return false;
        }

        return (
          (startAt >= appointment.startsAt && startAt < appointment.endsAt) ||
          (endAt > appointment.startsAt && endAt <= appointment.endsAt) ||
          (startAt <= appointment.startsAt && endAt >= appointment.endsAt)
        );
      });
    };

    const availabilitiesForDay = barber?.availabilities.filter(
      (av) => av.dayOfWeek === dayOfWeek && !av.isClosed
    );

    if (availabilitiesForDay?.length === 0) return [];

    const slots: { busy: boolean; time: string }[] = [];

    availabilitiesForDay?.forEach((av) => {
      let currentTime = new Date(av.startTime);
      const endTime = new Date(av.endTime);

      while (currentTime < endTime) {
        const startAt = currentTime.getHours() + currentTime.getMinutes() / 60;
        const endAt = startAt + average_time / 60;

        const hasConflicting = hasConflictingAppointment(startAt, endAt);

        if (!hasConflicting) {
          const hours = String(currentTime.getHours()).padStart(2, "0");
          const minutes = String(currentTime.getMinutes()).padStart(2, "0");
          slots.push({ busy: false, time: `${hours}:${minutes}` });
        } else {
          const hours = String(currentTime.getHours()).padStart(2, "0");
          const minutes = String(currentTime.getMinutes()).padStart(2, "0");
          slots.push({ busy: true, time: `${hours}:${minutes}` });
        }

        currentTime = new Date(currentTime.getTime() + average_time * 60000);
      }
    });

    return [...new Set(slots)].sort();
  }, [selectedDate, barber, serviceDuration]);

  if (Loading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spinner />
      </div>
    );
  }

  const onSubmit = async (data: Partial<AppointmentFormValues>) => {
    startTransition(async () => {
      try {
        if (!data.date || !data.time) {
          toast.error("Please select both date and time.");
          return;
        }

        const result = await rescheduleAppointment(
          appointmentId,
          data as AppointmentFormValues
        );
        if (result) {
          toast.success("Appointment rescheduled successfully.");
          onClose();
        }
      } catch (error) {
        toast.error("Failed to reschedule appointment.");
        console.log(error);
      }
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="text-[22px] font-bold tracking-tight">
          Date &amp; Time
        </h2>

        <div className="grid gap-6 rounded-xl border bg-card p-4 lg:grid-cols-2">
          {/* Date Picker */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Pick a date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(d) => field.onChange(d ?? undefined)}
                      disabled={(d) =>
                        d < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Slots */}
          <FormField
            control={form.control}
            name="time"
            render={() => (
              <FormItem>
                <FormLabel>Available Times</FormLabel>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlotsForSelectedDate.map((t) => {
                    const disabled = t.busy;
                    const active = selectedTime === t.time;
                    return (
                      <button
                        type="button"
                        key={t.time}
                        disabled={disabled}
                        onClick={() =>
                          form.setValue("time", t.time, {
                            shouldValidate: true,
                          })
                        }
                        className={cn(
                          "rounded-lg border px-2 py-3 text-center text-sm font-medium transition-all",
                          disabled &&
                            "cursor-not-allowed bg-muted text-muted-foreground opacity-50",
                          !disabled &&
                            !active &&
                            "hover:border-primary hover:bg-primary/5 hover:text-primary",
                          active &&
                            "border-primary bg-primary/20 text-primary font-semibold"
                        )}
                      >
                        {t.time}
                      </button>
                    );
                  })}
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              className="bg-primary text-white hover:bg-primary/90 w-full "
              type="submit"
              disabled={isPending}
            >
              {isPending ? <Spinner /> : "Reschedule"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
