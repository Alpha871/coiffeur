"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Calendar as CalendarIcon, Search } from "lucide-react";

import { SmartCarousel } from "@/components/common/smart-carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/validations/service";
import { ServiceCard } from "./service-card";
import { StaffCard } from "./staff-card";

// ---------- Types ----------

const SERVICES: Service[] = [
  {
    id: "haircut",
    label: "Haircut",
    group: "Hair Services",
    price: "45 min — 250 ₺",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuY9QV0BIwMLPTTTRaqRR3ENimSWRhdLIUoCpOY-M6Tmb9EaSKHD123TJTXxv6k7aMdCeHNpaoW8Dv-VT3Bi5-q6ViJQeTnsG7EoShoDv5cv7WQ01FwHD6v96F_gxA_UP1rBJzSfcrXbruwy1dIVKtfHZXUDEdGYXUAQ-gYiCpme7yeo0eSSGzO1MXaR7rqQKOSGRVUx3czUR27yIw2h_SV3zS-Qk22icvKIb8b-eMr0idJFIFw0KDKPn0Qx2_Y26a2dsXA3qH47I",
  },
  {
    id: "beard",
    label: "Beard Trim & Styling",
    group: "Beard Services",
    price: "30 min — 150 ₺",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2YO4n-E-9JSyF5cN81ydrC6a91BQqz6RO87eZ05BDZzyycO1YDXS2Ja0pbUhHAptTRE0xW74woGAHRUs6i_XRd6cjW8VxzCgT1UbqXRuMVQYueRD3O2LytbTYNZr3c_NsEHf3-iPCCrvNfgBGLUHzQ8qC0oO1cpyWU13wNhLD1w7bDpqr8sijmyBOi5wBgcU6tQRUw_4L7tpuRc5337ELfTUCUJes88OG57nKemd_6FvGh9Q0k4GQEBt50V8Qw81HqcOd3uGWUAg",
  },
  {
    id: "hot-towel-shave",
    label: "Hot Towel Shave",
    group: "Beard Services",
    price: "35 min — 180 ₺",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "wash-style",
    label: "Wash & Blow-Dry",
    group: "Hair Services",
    price: "25 min — 120 ₺",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "hair-color",
    label: "Hair Coloring",
    group: "Hair Services",
    price: "90 min — 900 ₺",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "kids-haircut",
    label: "Kids' Haircut",
    group: "Kids",
    price: "30 min — 180 ₺",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "brows",
    label: "Eyebrow Design",
    group: "Beauty",
    price: "20 min — 150 ₺",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "head-massage",
    label: "Head Massage",
    group: "Care",
    price: "20 min — 140 ₺",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d9?q=80&w=1200&auto=format&fit=crop",
  },
];

const STAFF = [
  {
    id: "ahmet",
    label: "Ahmet Yılmaz",
    role: "Senior Barber",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    id: "mehmet",
    label: "Mehmet Öztürk",
    role: "Barber",
    avatar: "https://i.pravatar.cc/96?img=13",
  },
  {
    id: "ali",
    label: "Ali Demir",
    role: "Junior Barber",
    avatar: "https://i.pravatar.cc/96?img=14",
  },
  {
    id: "veli",
    label: "Veli Kaya",
    role: "Stylist",
    avatar: "https://i.pravatar.cc/96?img=15",
  },
  { id: "", label: "No preference", role: "First available" },
];

const TIME_SLOTS = [
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "13:30",
  "14:15",
  "15:00",
  "15:45",
];

// Validation Schema
const schema = z.object({
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Select a service."),
  staff: z.string().optional().or(z.literal("")),
  date: z.date({ message: "Pick a date." }),
  time: z.string().min(1, "Pick a time."),
  notes: z
    .string()
    .max(500, "Max 500 characters.")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

// Service Card Component

export default function NewAppointmentPage() {
  const [serviceQuery, setServiceQuery] = React.useState("");
  const [staffQuery, setStaffQuery] = React.useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "",
      service: "",
      staff: "",
      date: undefined as unknown as Date,
      time: "",
      notes: "",
    },
  });

  const selectedService = form.watch("service");
  const selectedStaff = form.watch("staff");
  const selectedTime = form.watch("time");

  // Memoized filtered services
  const filteredServices = React.useMemo(() => {
    const q = serviceQuery.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter(
      (s) =>
        s.label.toLowerCase().includes(q) || s.group.toLowerCase().includes(q)
    );
  }, [serviceQuery]);

  // Memoized filtered staff
  const filteredStaff = React.useMemo(() => {
    const q = staffQuery.trim().toLowerCase();
    if (!q) return STAFF;
    return STAFF.filter(
      (st) =>
        st.label.toLowerCase().includes(q) || st.role.toLowerCase().includes(q)
    );
  }, [staffQuery]);

  async function onSubmit(values: FormValues) {
    console.log("values", values);
  }

  return (
    <Card>
      <CardContent>
        <div className="mx-auto w-full max-w-5xl p-6">
          {/* Heading */}
          <div className="mb-8 px-1">
            <h1 className="text-4xl font-black tracking-tight mb-2">
              Create New Appointment
            </h1>
            <p className="text-muted-foreground text-lg">
              Pick a service, staff, a suitable date/time, and provide your
              details.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              {/* Step 1 - Service Selection */}
              <section className="space-y-4">
                <h2 className="text-[22px] font-bold tracking-tight">
                  1. Service Selection
                </h2>

                <div className="space-y-3 rounded-xl border p-4 bg-card">
                  <Label htmlFor="service-search" className="sr-only">
                    Search services
                  </Label>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="service-search"
                      placeholder="Search services…"
                      className="pl-9 h-12"
                      value={serviceQuery}
                      onChange={(e) => setServiceQuery(e.target.value)}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={() => (
                      <FormItem className="overflow-auto">
                        <SmartCarousel wheel>
                          {filteredServices.map((s) => (
                            <CarouselItem
                              key={s.id}
                              className="basis-auto px-2"
                            >
                              <ServiceCard
                                service={s}
                                selected={selectedService === s.id}
                                onSelect={() =>
                                  form.setValue("service", s.id, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                    shouldValidate: true,
                                  })
                                }
                              />
                            </CarouselItem>
                          ))}
                        </SmartCarousel>
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
                  name="staff"
                  render={() => (
                    <FormItem className="overflow-auto">
                      <div className="space-y-3 rounded-xl border p-4 bg-card">
                        <Label htmlFor="staff-search" className="sr-only">
                          Search staff
                        </Label>

                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="staff-search"
                            placeholder="Search staff…"
                            className="pl-9 h-12"
                            value={staffQuery}
                            onChange={(e) => setStaffQuery(e.target.value)}
                          />
                        </div>

                        <SmartCarousel wheel>
                          {filteredStaff.map((st) => (
                            <CarouselItem
                              key={st.id || "any"}
                              className="basis-auto px-2"
                            >
                              <StaffCard
                                staff={st}
                                selected={selectedStaff === st.id}
                                onSelect={() =>
                                  form.setValue("staff", st.id, {
                                    shouldValidate: true,
                                  })
                                }
                              />
                            </CarouselItem>
                          ))}
                        </SmartCarousel>

                        <FormDescription className="mt-2">
                          Leave &quot;No preference &quot; to auto-assign the
                          first available stylist.
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
                  3. Date & Time
                </h2>

                <div className="grid gap-6 rounded-xl border p-4 lg:grid-cols-2 bg-card">
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
                                  "w-full justify-start text-left font-normal h-12",
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

                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {TIME_SLOTS.map((t) => {
                            const disabled = t === "10:30" || t === "15:45";
                            const active = selectedTime === t;
                            return (
                              <button
                                type="button"
                                key={t}
                                disabled={disabled}
                                onClick={() =>
                                  form.setValue("time", t, {
                                    shouldValidate: true,
                                  })
                                }
                                className={cn(
                                  "rounded-lg border px-2 py-3 text-center text-sm font-medium transition-all",
                                  disabled &&
                                    "cursor-not-allowed bg-muted text-muted-foreground opacity-50",
                                  !disabled &&
                                    !active &&
                                    "hover:border-primary hover:text-primary hover:bg-primary/5",
                                  active &&
                                    "border-primary bg-primary/20 text-primary font-semibold"
                                )}
                              >
                                {t}
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

              {/* Step 4 - Customer Details */}
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
              <div className="flex items-center justify-between gap-4 pt-6 border-t">
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
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
