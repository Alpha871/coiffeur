import z from "zod";

export const CATEGORIES = [
  "All",
  "Haircut",
  "Coloring",
  "Styling",
  "Treatments",
  "Extensions",
  "Barbering",
  "Nails",
  "Kids",
] as const;

export const ServiceSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2),

  category: z.enum(
    CATEGORIES.filter((c) => c !== "All") as [
      Exclude<(typeof CATEGORIES)[number], "All">,
      ...string[]
    ]
  ),

  durationMin: z.number().min(15).max(480),
  price: z
    .number()
    .min(0)
    .max(10000, { message: "Price must be less than $10,000" }),
  description: z.string().min(10).max(1000).optional(),

  image: z.union([z.literal(""), z.url()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ServiceValues = z.infer<typeof ServiceSchema>;

export type Service = {
  id: string;
  label: string;
  group: string;
  price: string;
  image: string;
};
