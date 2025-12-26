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
import {
  convertOpeningHoursToDatabase,
  DAY_LABEL,
  DAY_ORDER,
  DEFAULT_END,
  DEFAULT_START,
  defaultSchedule,
  MAX_TIME,
  MIN_TIME,
  OpeningHours,
} from "@/lib/utils";
import {
  ScheduleFormValues,
  scheduleSchema,
} from "@/lib/validations/staff-management";
import { toast } from "sonner";
import { updateStaffMemberHours } from "@/actions/salon-actions";

type ScheduleFormProps = {
  schedule?: OpeningHours;
  salonId: string;
  memberId: string;
  onSave?: (values: ScheduleFormValues) => void;
};

// OpeningHours -> ScheduleFormValues dönüştürücü
function buildInitialValues(schedule?: OpeningHours): ScheduleFormValues {
  // defaultSchedule formun beklediği yapıyı (open/closed/start/end vs.) oluşturuyor
  const base = defaultSchedule();

  if (!schedule) return base;

  const result: ScheduleFormValues = { ...base };

  for (const day of DAY_ORDER) {
    const dbDay = schedule[day];

    if (!dbDay) continue;

    const isClosed = dbDay.closed ?? false;

    result[day] = {
      ...result[day],
      dayOfWeek: dbDay.dayOfWeek,
      open: !isClosed,
      closed: isClosed,
      start: dbDay.start ?? DEFAULT_START,
      end: dbDay.end ?? DEFAULT_END,
    };
  }

  return result;
}

export function ScheduleForm({
  schedule,
  salonId,
  memberId,
  onSave,
}: ScheduleFormProps) {
  console.log("schedule", schedule);

  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: buildInitialValues(schedule),
    mode: "onBlur",
  });

  const setAllClosed = () => {
    const current = form.getValues();
    const next: ScheduleFormValues = { ...current };

    for (const d of DAY_ORDER) {
      next[d] = {
        ...next[d],
        open: false,
        closed: true,
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
        open: true,
        closed: false,
        start: DEFAULT_START,
        end: DEFAULT_END,
      };
    }

    form.reset(next);
  };

  const onSubmit = async (values: ScheduleFormValues) => {
    const availabilities = convertOpeningHoursToDatabase(values);

    try {
      const result = await updateStaffMemberHours(
        memberId,
        salonId,
        availabilities
      );

      if (result) toast.success("Schedule saved successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save schedule.");
      return;
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Quick actions */}
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={setAllNineToSix}>
            Set All {DEFAULT_START}–{DEFAULT_END}
          </Button>
          <Button type="button" variant="outline" onClick={setAllClosed}>
            Set All Closed
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-lg border">
          <div className="grid grid-cols-12 items-center gap-2 border-b px-4 py-2 text-xs text-muted-foreground font-medium">
            <div className="col-span-5 sm:col-span-4">Day</div>
            <div className="col-span-3 sm:col-span-3">Open</div>
            <div className="col-span-2 sm:col-span-2">Start</div>
            <div className="col-span-2 sm:col-span-2">End</div>
          </div>

          {/* Rows */}
          {DAY_ORDER.map((day) => {
            const isOpen = form.watch(`${day}.open` as const);

            return (
              <div
                key={day}
                className="grid grid-cols-12 items-center gap-2 border-t px-4 py-3"
              >
                {/* Day label */}
                <div className="col-span-5 sm:col-span-4 text-sm font-medium">
                  {DAY_LABEL[day]}
                </div>

                {/* Open/Closed Toggle */}
                <div className="col-span-3 sm:col-span-3">
                  <FormField
                    control={form.control}
                    name={`${day}.open`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              form.setValue(`${day}.closed`, !checked, {
                                shouldDirty: true,
                                shouldTouch: true,
                              });
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Start Time */}
                <div className="col-span-2 sm:col-span-2">
                  <FormField
                    control={form.control}
                    name={`${day}.start`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="time"
                            disabled={!isOpen}
                            min={MIN_TIME}
                            max={MAX_TIME}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* End Time */}
                <div className="col-span-2 sm:col-span-2">
                  <FormField
                    control={form.control}
                    name={`${day}.end`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="time"
                            disabled={!isOpen}
                            min={MIN_TIME}
                            max={MAX_TIME}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
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

        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset(buildInitialValues(schedule))}
          >
            Reset
          </Button>
          <Button type="submit">Save Schedule</Button>
        </div>
      </form>
    </Form>
  );
}
