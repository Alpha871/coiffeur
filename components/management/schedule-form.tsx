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

type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type ScheduleDay = { enabled: boolean; start: string; end: string };
type Schedule = Record<DayKey, ScheduleDay>;

const DAY_ORDER: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

const daySchema = z.object({
  enabled: z.boolean(),
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
      if (day.enabled) {
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

function compareHHMM(a: string, b: string) {
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map((x) => parseInt(x, 10));
    return (h || 0) * 60 + (m || 0);
  };
  return toMin(a) - toMin(b);
}

function defaultSchedule(): Schedule {
  return {
    mon: { enabled: true, start: "09:00", end: "18:00" },
    tue: { enabled: true, start: "09:00", end: "18:00" },
    wed: { enabled: true, start: "09:00", end: "18:00" },
    thu: { enabled: true, start: "09:00", end: "18:00" },
    fri: { enabled: true, start: "09:00", end: "18:00" },
    sat: { enabled: true, start: "09:00", end: "18:00" },
    sun: { enabled: false, start: "09:00", end: "18:00" },
  };
}

type ScheduleFormProps = {
  schedule?: Schedule;
  onSave: (values: ScheduleFormValues) => void;
};

export function ScheduleForm({ schedule, onSave }: ScheduleFormProps) {
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: schedule ?? defaultSchedule(),
    mode: "onBlur",
  });

  const setAllClosed = () => {
    const cur = form.getValues();
    const next: ScheduleFormValues = { ...cur };
    for (const d of DAY_ORDER) next[d] = { ...next[d], enabled: false };
    form.reset(next);
  };

  const setAllNineToSix = () => {
    const cur = form.getValues();
    const next: ScheduleFormValues = { ...cur };
    for (const d of DAY_ORDER)
      next[d] = { enabled: true, start: "09:00", end: "18:00" };
    form.reset(next);
  };

  const copyMondayToAll = () => {
    const cur = form.getValues();
    const mon = cur.mon;
    const next: ScheduleFormValues = { ...cur };
    for (const d of DAY_ORDER) next[d] = d === "mon" ? mon : { ...mon };
    form.reset(next);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSave)}>
        {/* Quick actions */}
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={setAllNineToSix}>
            Set All 09:00–18:00
          </Button>
          <Button type="button" variant="outline" onClick={setAllClosed}>
            Set All Closed
          </Button>
          <Button type="button" variant="outline" onClick={copyMondayToAll}>
            Copy Monday to All
          </Button>
        </div>

        <div className="rounded-lg border">
          <div className="grid grid-cols-12 items-center gap-2 border-b px-4 py-2 text-xs text-muted-foreground font-medium">
            <div className="col-span-5 sm:col-span-4">Day</div>
            <div className="col-span-3 sm:col-span-3">Open</div>
            <div className="col-span-2 sm:col-span-2">Start</div>
            <div className="col-span-2 sm:col-span-2">End</div>
          </div>

          {DAY_ORDER.map((d) => {
            const enabledName = `${d}.enabled` as keyof ScheduleFormValues &
              string;
            const startName = `${d}.start` as keyof ScheduleFormValues & string;
            const endName = `${d}.end` as keyof ScheduleFormValues & string;

            const enabled = form.watch(enabledName as any) as boolean;

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
                    name={enabledName}
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
                          <Input type="time" disabled={!enabled} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <FormField
                    control={form.control}
                    name={endName as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="time" disabled={!enabled} {...field} />
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
