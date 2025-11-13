import z from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Enter a valid name"),
  lastname: z.string().min(2, "Enter a valid last name"),
  phone: z.string().regex(/^[0-9+\-()\s]{6,20}$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email"),
  image: z.any().optional(),
});
