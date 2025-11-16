import z from "zod";

export type OpeningHoursDayConfig = {
  key: OpeningHoursDayKey;
  label: string;
  dayOfWeek: number;
  defaultOpen: string;
  defaultClose: string;
  defaultClosed?: boolean;
};

export type OpeningHoursDayKey =
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat"
  | "sun";

export const daySchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  start: z.string().optional(),
  end: z.string().optional(),
  closed: z.boolean().optional(),
});

export const requestSchema = z.object({
  salonName: z.string().min(1, "Salon name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.email("Invalid email"),
  description: z.string().optional(),
  openingHours: z.object({
    mon: daySchema,
    tue: daySchema,
    wed: daySchema,
    thu: daySchema,
    fri: daySchema,
    sat: daySchema,
    sun: daySchema,
  }),
});
