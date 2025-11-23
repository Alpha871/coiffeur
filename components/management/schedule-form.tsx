"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { convertOpeningHoursToDatabase, OpeningHours } from "@/lib/utils";

// ---- Types & constants ----

const DAY_ORDER = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
type DayKey = (typeof DAY_ORDER)[number];

const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

const DEFAULT_START = "09:00";
const DEFAULT_END = "18:00";

// ---- Schema ----

const daySchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  closed: z.boolean(),
  start: z.string(),
  end: z.string(),
});

const scheduleSchema = z
  .object({
    mon: daySchema,
    tue: daySchema,
    wed: daySchema,
    thu: daySchema,
    fri: daySchema,
    sat: daySchema,
    sun: daySchema,
  })
  .superRefine((val, ctx) => {
    for (const d of DAY_ORDER) {
      const day = val[d];

      // In this codebase `closed === true` actually means "open"
      if (day.closed) {
        if (!day.start) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [d, "start"],
            message: "Start time required",
          });
        }
        if (!day.end) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [d, "end"],
            message: "End time required",
          });
        }
        if (day.start && day.end && compareHHMM(day.start, day.end) >= 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [d, "end"],
            message: "End must be later than start",
          });
        }
      }
    }
  });

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

// ---- Helpers ----

function compareHHMM(a: string, b: string) {
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map((x) => parseInt(x, 10));
    return (h || 0) * 60 + (m || 0);
  };
  return toMin(a) - toMin(b);
}

function defaultSchedule(): OpeningHours {
  return {
    mon: { dayOfWeek: 0, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    tue: { dayOfWeek: 1, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    wed: { dayOfWeek: 2, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    thu: { dayOfWeek: 3, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    fri: { dayOfWeek: 4, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    sat: { dayOfWeek: 5, closed: true, start: DEFAULT_START, end: DEFAULT_END },
    sun: {
      dayOfWeek: 6,
      closed: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
  };
}

// ---- Component ----

type ScheduleFormProps = {
  schedule?: OpeningHours;
  // onSave: (values: ScheduleFormValues) => void;
};

export function ScheduleForm({ schedule }: ScheduleFormProps) {
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: schedule ?? defaultSchedule(),
    mode: "onBlur",
  });

  const setAllClosed = () => {
    const current = form.getValues();
    const next: ScheduleFormValues = { ...current };

    for (const d of DAY_ORDER) {
      next[d] = {
        ...next[d],
        closed: false, // switch OFF → not open
      };
    }

    form.reset(next);
  };

  const setAllNineToSix = () => {
    const current = form.getValues();
    const next: ScheduleFormValues = { ...current };

    for (const d of DAY_ORDER) {
      next[d] = {
        dayOfWeek: DAY_ORDER.indexOf(d),
        closed: true, // switch ON → open
        start: DEFAULT_START,
        end: DEFAULT_END,
      };
    }

    form.reset(next);
  };

  const onSubmit = (values: ScheduleFormValues) => {
    console.log({ values });

    const availabilities = convertOpeningHoursToDatabase(values);

    console.log({ availabilities });
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Quick actions */}
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={setAllNineToSix}>
            Set All 09:00–18:00
          </Button>
          <Button type="button" variant="outline" onClick={setAllClosed}>
            Set All Closed
          </Button>
        </div>

        {/* Table header */}
        <div className="rounded-lg border">
          <div className="grid grid-cols-12 items-center gap-2 border-b px-4 py-2 text-xs text-muted-foreground font-medium">
            <div className="col-span-5 sm:col-span-4">Day</div>
            <div className="col-span-3 sm:col-span-3">Open</div>
            <div className="col-span-2 sm:col-span-2">Start</div>
            <div className="col-span-2 sm:col-span-2">End</div>
          </div>

          {/* Rows */}
          {DAY_ORDER.map((d) => {
            const closedName = `${d}.closed` as keyof ScheduleFormValues &
              string;
            const startName = `${d}.start` as keyof ScheduleFormValues & string;
            const endName = `${d}.end` as keyof ScheduleFormValues & string;

            const isOpen = form.watch(closedName as any) as boolean;

            return (
              <div
                key={d}
                className="grid grid-cols-12 items-center gap-2 border-t px-4 py-3"
              >
                <div className="col-span-5 sm:col-span-4 text-sm font-medium">
                  {DAY_LABEL[d]}
                </div>

                <div className="col-span-3 sm:col-span-3">
                  <FormField
                    control={form.control}
                    name={closedName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={!!field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <FormField
                    control={form.control}
                    name={startName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="time" disabled={!isOpen} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <FormField
                    control={form.control}
                    name={endName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="time" disabled={!isOpen} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset(schedule ?? defaultSchedule())}
          >
            Reset
          </Button>
          <Button type="submit">Save Schedule</Button>
        </div>
      </form>
    </Form>
  );
}
