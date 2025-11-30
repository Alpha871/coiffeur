import z from "zod";
import { compareHHMM, DAY_ORDER, MAX_TIME, MIN_TIME } from "../utils";

export type PersonInfoFormValues = z.infer<typeof personInfoSchema>;

export const personInfoSchema = z.object({
  firstName: z.string().min(1, "Required").optional(),
  lastName: z.string().min(1, "Required").optional(),
  phone: z.string().optional(),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
});

const skillSchema = z.object({
  name: z.string(),
  id: z.string(),
  specialty: z.boolean(),
});

export const specialtiesSchema = z.object({
  skills: z.array(skillSchema).min(1, "Select at least one specialty"),
  notes: z.string().max(500, "Max 500 characters").optional().or(z.literal("")),
});

const timeSchema = z
  .string()
  .time("Invalid time format")
  .refine(
    (time) => compareHHMM(time, MIN_TIME) >= 0,
    `Time must be at least ${MIN_TIME}`
  )
  .refine(
    (time) => compareHHMM(time, MAX_TIME) <= 0,
    `Time must be at most ${MAX_TIME}`
  );

const daySchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  closed: z.boolean(),
  open: z.boolean(),
  start: timeSchema,
  end: timeSchema,
});

export const scheduleSchema = z
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

      if (day.open) {
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

export type SpecialtiesFormValues = z.infer<typeof specialtiesSchema>;
export type ScheduleFormValues = z.infer<typeof scheduleSchema>;
