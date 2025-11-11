import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Geçerli bir e-posta giriniz." }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
});

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır." }),
  email: z.email({ message: "Geçerli bir e-posta giriniz." }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
  role: z.enum(["USER", "ADMIN", "EMPLOYEE"], {
    message: "Geçerli bir rol seçiniz.",
  }),
});
