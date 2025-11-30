"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  AppointmentFormValues,
  appointmentSchema,
  SalonServices,
  SalonStaff,
} from "@/lib/validations/appointment";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { CalendarIcon, Search } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ServiceCard } from "@/app/(salon)/book-appointment/[id]/_components/service-card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { AppointmentStatus } from "@/generated/prisma";
import { StaffCard } from "@/app/(salon)/book-appointment/[id]/_components/staff-card";
import { bookAppointment } from "@/oop/infrastructure/appointment-actions";
import { toast } from "sonner";

interface AppointmentFormProps {
  salonServices: SalonServices;
  salonStaff: SalonStaff;
  type?: "add" | "edit";
  defaultValues?: Partial<AppointmentFormValues>;
}

function AppointmentForm({
  salonServices,
  salonStaff,
  type = "add",
  defaultValues,
}: AppointmentFormProps) {
  const [serviceQuery, setServiceQuery] = useState("");
  const [staffQuery, setStaffQuery] = useState("");

  const salonId = useParams().id;
  const router = useRouter();

  const session = useSession();

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      salonId: salonId as string,
      serviceId: defaultValues?.serviceId || "",
      memberId: defaultValues?.memberId || "",
      date: defaultValues?.date || (undefined as unknown as Date),
      time: defaultValues?.time || "",
      notes: defaultValues?.notes || "",
    },
  });

  const selectedServiceId = form.watch("serviceId");
  const selectedStaffId = form.watch("memberId");
  const selectedTime = form.watch("time");
  const selectedDate = form.watch("date");

  const selectedService = useMemo(
    () => salonServices.find((s) => s.id === selectedServiceId),
    [selectedServiceId, salonServices]
  );

  const selectedStaff = useMemo(
    () => salonStaff.find((st) => st.id === selectedStaffId),
    [selectedStaffId, salonStaff]
  );

  const estimatedPrice = selectedService?.price ?? "—";

  // Memoized filtered services
  const filteredServices = useMemo(() => {
    const q = serviceQuery.trim().toLowerCase();
    if (!q) return salonServices;
    return salonServices.filter(
      (s) =>
        s.label.toLowerCase().includes(q) || s.group.toLowerCase().includes(q)
    );
  }, [serviceQuery, salonServices]);

  // Memoized filtered staff
  const filteredStaff = useMemo(() => {
    const q = staffQuery.trim().toLowerCase();
    const salonStaffs = salonStaff.filter((st) =>
      st.specialties.find((s) => s.id === selectedServiceId)
    );
    if (!q) return salonStaffs;

    return salonStaffs?.filter(
      (st) =>
        st.name.toLowerCase().includes(q) || st.role.toLowerCase().includes(q)
    );
  }, [staffQuery, salonStaff, selectedServiceId]);

  const filteredStaffAvailabilities = useMemo(() => {
    return filteredStaff
      .map((st) =>
        st.availabilities.map((av) => ({
          dayOfWeek: av.dayOfWeek,
          startTime: av.startTime,
          endTime: av.endTime,
          closed: av.closed,
        }))
      )
      .flat();
  }, [filteredStaff]);

  const timeSlotsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];

    let dayOfWeek = selectedDate.getDay() + 1;
    if (dayOfWeek === 7) dayOfWeek = 0;

    const average_time = selectedService ? selectedService.duration : 30;

    const filteredAppointmentsForDay = filteredStaff
      .map((st) =>
        st.appointments.filter(
          (appointment) =>
            appointment.startsAt.getDay() + 1 === selectedDate.getDay() + 1 &&
            appointment.startsAt.getFullYear() === selectedDate.getFullYear() &&
            appointment.startsAt.getMonth() === selectedDate.getMonth()
        )
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
      return filteredAppointmentsForDay.some((appointment) => {
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

    const availabilitiesForDay = filteredStaffAvailabilities.filter(
      (av) => av.dayOfWeek === dayOfWeek && !av.closed
    );

    if (availabilitiesForDay.length === 0) return [];

    const slots: { busy: boolean; time: string }[] = [];

    availabilitiesForDay.forEach((av) => {
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
  }, [
    selectedDate,
    filteredStaffAvailabilities,
    selectedService,
    filteredStaff,
  ]);

  async function onSubmit(values: AppointmentFormValues) {
    try {
      values = {
        ...values,
        duration: selectedService ? selectedService.duration : 30,
        price: selectedService ? selectedService.price : 0,
      };

      const result = await bookAppointment(values);
      if (result.success) {
        toast.success("Appointment booked successfully!");
        router.push(`/profil/${session?.data?.user?.id}/`);
        form.reset();
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-cols-4 "
      >
        {/* LEFT: Booking form */}
        <div className=" lg:col-span-3 space-y-12 rounded-xl border bg-card p-4 sm:p-6">
          {/* Step 1 - Service Selection */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-bold tracking-tight">
              1. Service Selection
            </h2>

            <div className="space-y-3 rounded-xl border bg-card p-4">
              <Label htmlFor="service-search" className="sr-only">
                Search services
              </Label>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="service-search"
                  placeholder="Search services…"
                  className="h-12 pl-9"
                  value={serviceQuery}
                  onChange={(e) => setServiceQuery(e.target.value)}
                />
              </div>

              <FormField
                control={form.control}
                name="serviceId"
                render={() => (
                  <FormItem className="overflow-hidden">
                    {/* <SmartCarousel> */}
                    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                      <div>
                        {filteredServices.map((s) => (
                          <div key={s.id} className="flex shrink-0">
                            <ServiceCard
                              service={s}
                              selected={selectedServiceId === s.id}
                              onSelect={() =>
                                form.setValue("serviceId", s.id, {
                                  shouldDirty: true,
                                  shouldTouch: true,
                                  shouldValidate: true,
                                })
                              }
                            />
                          </div>
                        ))}
                      </div>

                      {/* </SmartCarousel> */}
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Step 2 - Staff Selection */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-bold tracking-tight">
              2. Staff Selection
            </h2>

            <FormField
              control={form.control}
              name="memberId"
              render={() => (
                <FormItem className="overflow-auto">
                  <div className="space-y-3 rounded-xl border bg-card p-4">
                    <Label htmlFor="staff-search" className="sr-only">
                      Search staff
                    </Label>

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="staff-search"
                        placeholder="Search staff…"
                        className="h-12 pl-9"
                        value={staffQuery}
                        onChange={(e) => setStaffQuery(e.target.value)}
                      />
                    </div>

                    {/* <SmartCarousel wheel> */}
                    <ScrollArea className="max-w-full py-2  rounded-md border whitespace-nowrap">
                      {filteredStaff?.map((st) => (
                        // <CarouselItem
                        //   key={st.id || "any"}
                        //   className="basis-auto px-2"
                        // >
                        <div
                          key={st.id}
                          className="px-2 flex flex-row items-center"
                        >
                          <StaffCard
                            staff={st}
                            selected={selectedStaffId === st.id}
                            onSelect={() =>
                              form.setValue("memberId", st.id, {
                                shouldValidate: true,
                              })
                            }
                          />
                        </div>
                        // </CarouselItem>
                      ))}
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    {/* </SmartCarousel> */}

                    <FormDescription className="mt-2">
                      Leave &quot;No preference&quot; to auto-assign the first
                      available stylist.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </section>

          {/* Step 3 - Date & Time */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-bold tracking-tight">
              3. Date &amp; Time
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
            </div>
          </section>

          {/* Step 4 - Customer Notes (you renamed section to Other) */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-bold tracking-tight">Other</h2>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Any preferences, special requests, or notes about your appointment…"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          {/* Form Actions */}
          {/* <div className="flex items-center justify-between gap-4 border-t pt-6">
                     <Button
                       type="button"
                       variant="secondary"
                       onClick={() => window.history.back()}
                       className="px-8"
                     >
                       ← Back
                     </Button>
                     <Button
                       type="submit"
                       size="lg"
                       className="px-8"
                       disabled={form.formState.isSubmitting}
                     >
                       {form.formState.isSubmitting
                         ? "Creating..."
                         : "Confirm Appointment"}
                     </Button>
                   </div> */}
        </div>

        {/* RIGHT: Booking Summary (kept, Shadcn version) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="border border-gray-200 dark:border-white/20 bg-background/80 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="mb-6 text-lg font-bold text-foreground">
                  Booking Summary
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold text-foreground">
                      {selectedService?.label || "Not selected"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stylist</span>
                    <span className="font-semibold text-foreground">
                      {selectedStaff?.name}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Date &amp; Time
                    </span>
                    <span className="text-right font-semibold text-foreground">
                      {selectedDate
                        ? `${format(selectedDate, "EEE, MMM d")} ${
                            selectedTime ? `@ ${selectedTime}` : ""
                          }`
                        : "Not selected"}
                    </span>
                  </div>
                </div>

                <div className="my-6 border-t border-dashed border-gray-200 dark:border-white/20" />

                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-foreground">Price</span>
                  <span className="text-2xl font-black text-foreground">
                    $ {estimatedPrice}
                  </span>
                </div>

                <Button
                  type="submit"
                  className="mt-8 w-full h-12 text-base font-bold tracking-[0.015em]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "booking..."
                    : "Confirm Appointment"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default AppointmentForm;
