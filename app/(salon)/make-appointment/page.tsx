"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { SmartCarousel } from "@/components/common/smart-carousel";
import { CarouselItem } from "@/components/ui/carousel";

// ---------- Locale / Timezone helpers ----------

const LOCALE = "en-US"; // ou "fr-FR" si tu préfères
const TIME_ZONE = "Europe/Istanbul"; // fixe pour SSR + client

function formatDate(date: Date, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    ...options,
  }).format(date);
}

function formatKey(date: Date): string {
  // YYYY-MM-DD déterministe pour la même timezone
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date); // ex: 2024-10-21
}

// ---------- Schema ----------
const bookingSchema = z.object({
  service: z.enum(["mens-haircut", "full-color", "beard-trim", "wash-style"], {
    message: "Please select a service.",
  }),
  stylist: z.enum(["jessica", "michael", "emily", "david"], {
    message: "Please choose a stylist.",
  }),
  date: z.date({
    message: "Please select a date.",
  }),
  time: z.string().min(1, "Please select a time."),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

// ---------- Slots data ----------
type Slot = {
  time: string;
  disabled?: boolean;
};

const slotsByDate: Record<string, Slot[]> = {
  // Mon 21
  "2024-10-21": [
    { time: "9:00 AM" },
    { time: "10:30 AM" },
    { time: "12:00 PM", disabled: true },
    { time: "2:00 PM" },
    { time: "3:30 PM" },
  ],
  // Tue 22
  "2024-10-22": [
    { time: "9:30 AM" },
    { time: "11:00 AM" }, // originally selected
    { time: "1:00 PM" },
    { time: "2:30 PM" },
    { time: "4:00 PM", disabled: true },
  ],
  // Wed 23 — no slots
  "2024-10-23": [],
  // Thu 24
  "2024-10-24": [
    { time: "10:00 AM" },
    { time: "11:30 AM" },
    { time: "1:30 PM" },
  ],
  // Fri 25
  "2024-10-25": [
    { time: "9:00 AM" },
    { time: "10:30 AM", disabled: true },
    { time: "12:00 PM" },
    { time: "2:00 PM" },
  ],
};

// ---------- Date helpers ----------
function startOfWeekMonday(date: Date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sun, 1 = Mon, ...
  const diff = (day + 6) % 7; // convert to Mon=0
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

// ---------- BookingCalendar ----------
function BookingCalendar(props: {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  selectedTime: string;
  onTimeChange: (time: string) => void;
}) {
  const { date, onDateChange, selectedTime, onTimeChange } = props;

  const effectiveDate = date ?? new Date();
  const weekStart = startOfWeekMonday(effectiveDate);
  const weekEnd = addDays(weekStart, 4); // Monday -> Friday

  const key = date ? formatKey(date) : "";
  const slots = date ? slotsByDate[key] ?? [] : [];

  const handlePrevWeek = () => {
    const prev = addDays(weekStart, -7);
    onDateChange(prev);
  };

  const handleNextWeek = () => {
    const next = addDays(weekStart, 7);
    onDateChange(next);
  };

  return (
    <div className="space-y-4">
      {/* Week header with chevrons */}
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-muted"
          aria-label="Previous week"
          onClick={handlePrevWeek}
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        </Button>

        <h3 className="text-lg font-bold text-foreground text-center">
          {formatDate(weekStart, {
            month: "long",
            day: "numeric",
          })}{" "}
          -{" "}
          {formatDate(weekEnd, {
            day: "numeric",
            year: "numeric",
          })}
        </h3>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-muted"
          aria-label="Next week"
          onClick={handleNextWeek}
        >
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>

      {/* Calendar + slots */}
      <div className="grid gap-6 md:grid-cols-[1.1fr,1.4fr]">
        {/* Left: Calendar */}
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            className="rounded-md border"
          />
        </div>

        {/* Right: slots */}
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <div className="text-lg font-bold text-foreground">
              {date
                ? formatDate(date, {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Select a date"}
            </div>
            {date && (
              <div className="text-sm text-muted-foreground">
                {slots.length > 0
                  ? "Choose a time slot"
                  : "No slots available for this date"}
              </div>
            )}
          </div>

          {date && slots.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {slots.map((slot) => (
                <Button
                  key={slot.time}
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={slot.disabled}
                  onClick={() => {
                    if (!slot.disabled) onTimeChange(slot.time);
                  }}
                  className={cn(
                    "w-full py-2 text-sm font-semibold",
                    selectedTime === slot.time &&
                      !slot.disabled &&
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                    slot.disabled && "text-muted-foreground"
                  )}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          ) : (
            <div className="pt-2 text-sm text-muted-foreground">
              {date
                ? "No slots available"
                : "Please select a date from the calendar."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Page ----------
export default function BookAppointmentPage() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "mens-haircut",
      stylist: "jessica",
      date: new Date("2024-10-22"),
      time: "11:00 AM",
    },
  });

  const service = form.watch("service");
  const stylist = form.watch("stylist");
  const date = form.watch("date");
  const time = form.watch("time");

  const serviceLabel =
    service === "mens-haircut"
      ? "Men's Haircut"
      : service === "full-color"
      ? "Full Color"
      : service === "beard-trim"
      ? "Beard Trim"
      : "Wash & Style";

  const stylistLabel =
    stylist === "jessica"
      ? "Jessica Miller"
      : stylist === "michael"
      ? "Michael Carter"
      : stylist === "emily"
      ? "Emily Ross"
      : "David Lee";

  const formattedDateTime =
    date && time
      ? `${formatDate(date, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })} @ ${time}`
      : "Not selected";

  const estimatedPrice =
    service === "mens-haircut"
      ? "$45.00"
      : service === "full-color"
      ? "$120.00"
      : service === "beard-trim"
      ? "$25.00"
      : "$55.00";

  function onSubmit(values: BookingFormValues) {
    // TODO: replace with your API call
    console.log("Booking submitted:", values);
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-foreground">
                Book an Appointment at Shear Style
              </p>
              <p className="text-base text-muted-foreground">
                Follow the steps below to schedule your visit.
              </p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12"
          >
            {/* LEFT COLUMN – STEPS */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              {/* Step 1 */}
              <section>
                <h2 className="pb-4 text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground">
                  Step 1: Select Your Service
                </h2>
                <div className="max-w-md">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Service</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="h-14 rounded-xl">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mens-haircut">
                                Men&apos;s Haircut - $45
                              </SelectItem>
                              <SelectItem value="full-color">
                                Full Color - $120
                              </SelectItem>
                              <SelectItem value="beard-trim">
                                Beard Trim - $25
                              </SelectItem>
                              <SelectItem value="wash-style">
                                Wash &amp; Style - $55
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>

              {/* Step 2 */}
              <section>
                <h2 className="pb-4 text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground">
                  Step 2: Choose Your Stylist
                </h2>

                <FormField
                  control={form.control}
                  name="stylist"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Stylist</FormLabel>
                      <FormControl>
                        <SmartCarousel
                          className="w-full overflow-visible"
                          wheel
                        >
                          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {/* Stylist 1 */}
                            <CarouselItem>
                              <button
                                type="button"
                                onClick={() => field.onChange("jessica")}
                                className={cn(
                                  "flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 p-3 transition-colors",
                                  field.value === "jessica"
                                    ? "border-primary bg-primary/10"
                                    : "border-transparent hover:border-primary/50"
                                )}
                              >
                                <Avatar className="h-20 w-20">
                                  <AvatarImage
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjrw1rXfErfrJW_bCOl1HV00VnDNPU4YFVRAWwHFQRedJ6DrnBOlGR0afhgAT-V2a_SPLtU51ltSagT9YiqN-DwSD4Gfy4NBdCgHSbKyI3xu6YVqcSbICl1S5Ll4hV2H28nTl-ARR8fzNf1BB2xWmm7wRdgMNfWVbU7JY5ucGxV3h-thny3EXfJz_fYXostxCPSOZpe10aIlMQ4D9OENNfIAZBJKo3QnirUut9WjDLjx1TFZwuzeEYNCQPjofJjmv_Rh1RzYTMsA"
                                    alt="Jessica M."
                                  />
                                  <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                  <p className="font-bold text-foreground">
                                    Jessica M.
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Senior Stylist
                                  </p>
                                </div>
                              </button>
                            </CarouselItem>
                            {/* Stylist 2 */}
                            <CarouselItem>
                              <button
                                type="button"
                                onClick={() => field.onChange("michael")}
                                className={cn(
                                  "flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 p-3 transition-colors",
                                  field.value === "michael"
                                    ? "border-primary bg-primary/10"
                                    : "border-transparent hover:border-primary/50"
                                )}
                              >
                                <Avatar className="h-20 w-20">
                                  <AvatarImage
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwle35_jtwHHdwe0-7uQMkCUNPbliDogONvGUAsp6rV6NTx-ZtSPUQmq69S0K9xbmxMsnCLoV-dPMGhd5_cjENZzbo5bKPpr_gR5K1G_IrdJhplBzszgeFZKF33xs0lp84UWmsiOn8Y_WX__1v_8S38DEtMtasX9LQpkKsq8nauGRVGV2C3rvMLh4RoFnU2WWtbP_JnSqfvsz6MJ09Z_Uaaoaz_MyagaHUGI2-jxwhSpwzDpgirTV9n2MsUOcgXSdCrqspek11zR0"
                                    alt="Michael C."
                                  />
                                  <AvatarFallback>MC</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                  <p className="font-bold text-foreground">
                                    Michael C.
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Barber
                                  </p>
                                </div>
                              </button>
                            </CarouselItem>
                            {/* Stylist 3 */}
                            <CarouselItem>
                              <button
                                type="button"
                                onClick={() => field.onChange("emily")}
                                className={cn(
                                  "flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 p-3 transition-colors",
                                  field.value === "emily"
                                    ? "border-primary bg-primary/10"
                                    : "border-transparent hover:border-primary/50"
                                )}
                              >
                                <Avatar className="h-20 w-20">
                                  <AvatarImage
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlkkk0VDW_A-SON8tBNf0JLCUCilRTsZazBLyeIZX_0fcMR810Jl-HkVBGFDxVW1DjxLcip08ZmKNfFvM41xw6vWu8q3DnGMp5PiM1kBsQ1LI8Dy6CCJe2pBSHTol0cqZe6Srl-KOTQA97fjEyWCdlRb4sH96CYYAmA610_bnJZqVpqwD5V3Z9Xe7WHQsAZZRo6aSPFnvOKgCEfY8dm3pKgAPRxB5Qh-IYmh2og3PWzkvqEs0tf1OfQuSdtbLopKE0wwu9xqtxQCA"
                                    alt="Emily R."
                                  />
                                  <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                  <p className="font-bold text-foreground">
                                    Emily R.
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Colorist
                                  </p>
                                </div>
                              </button>
                            </CarouselItem>
                            {/* Stylist 4 */}
                            <CarouselItem>
                              <button
                                type="button"
                                onClick={() => field.onChange("david")}
                                className={cn(
                                  "flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 p-3 transition-colors",
                                  field.value === "david"
                                    ? "border-primary bg-primary/10"
                                    : "border-transparent hover:border-primary/50"
                                )}
                              >
                                <Avatar className="h-20 w-20">
                                  <AvatarImage
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWfYioJs2dCBvWttAgDoZufAY2vMlBKE2hAo99W61Bug7MpewStmRA7IgtAux1d8_18td1t4D06roYMzRPiQuz5XPPkasDHrBw0mS_njPniokIy--R6iiaogo4giWVMcVj_5toE-fcGm7QlTSAYdCCWF_KI3QadSzeoNCMNxKB-hvuuDRD9AsSgipQd3GwuDbdeM_E51euepbA7yRayLuP7MfKs55Cgg-nfzKWVMvjqPEZzPqYeZYX4658zBpj2BeM2ANpbK3gMLc"
                                    alt="David L."
                                  />
                                  <AvatarFallback>DL</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                  <p className="font-bold text-foreground">
                                    David L.
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Stylist
                                  </p>
                                </div>
                              </button>
                            </CarouselItem>
                          </div>
                        </SmartCarousel>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* Step 3 */}
              <section>
                <h2 className="pb-4 text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground">
                  Step 3: Pick a Date &amp; Time
                </h2>

                <Card className="rounded-xl border border-gray-200 dark:border-white/20">
                  <CardContent className="p-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">
                            Date &amp; Time
                          </FormLabel>
                          <FormControl>
                            <BookingCalendar
                              date={field.value}
                              onDateChange={field.onChange}
                              selectedTime={time}
                              onTimeChange={(t) =>
                                form.setValue("time", t, {
                                  shouldValidate: true,
                                })
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={() => <FormMessage className="mt-2" />}
                    />
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* RIGHT COLUMN – SUMMARY */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="rounded-xl border border-gray-200 dark:border-white/20 bg-background/80">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-foreground">
                      Booking Summary
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-semibold text-foreground">
                          {serviceLabel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stylist</span>
                        <span className="font-semibold text-foreground">
                          {stylistLabel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Date &amp; Time
                        </span>
                        <span className="font-semibold text-foreground">
                          {formattedDateTime}
                        </span>
                      </div>
                    </div>

                    <Separator className="my-6 border-dashed" />

                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-foreground">
                        Estimated Price
                      </span>
                      <span className="text-2xl font-black text-foreground">
                        {estimatedPrice}
                      </span>
                    </div>

                    <Button
                      type="submit"
                      className="mt-8 h-12 w-full rounded-lg text-base font-bold tracking-[0.015em]"
                    >
                      Continue to Confirmation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </form>
        </Form>
      </div>
    </main>
  );
}
