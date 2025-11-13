import z from "zod";

export const CATEGORIES = [
  "All",
  "Haircuts",
  "Coloring",
  "Styling",
  "Treatments",
  "Care",
  "Kids",
] as const;

export const addServiceSchema = z.object({
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

  image: z.union([z.literal(""), z.url()]).optional(),
});

export type Service = {
  id: string;
  label: string;
  group: string;
  price: string;
  image: string;
};
