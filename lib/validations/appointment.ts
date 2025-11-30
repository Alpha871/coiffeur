import { $Enums } from "@/generated/prisma/wasm";
import z from "zod";

export type appointmentDetails = {
  id: string;
  salondId: string;
  salonName?: string;
  startsAt: Date;
  status: $Enums.AppointmentStatus;
  service: string;
  serviceImage: string | null;
  durationMin: number;
  price: number;
  barber: string;
  barberAvatar: string | null;
  barberId: string;
};

export type Appointment = {
  id: string;
  startsAt: Date;
  endsAt: Date;
  notes: string | null;
  status: $Enums.AppointmentStatus;
  service: string;
  serviceId: string;
  customerName: string;
  customerAvatar: string | null;
  duration: number;
  price: number;
  memberId: string;
  memberAvatar: string | null;
  memberName: string;
};

export type SalonStaff = {
  id: string;
  name: string;
  avatar: string | null;
  role: string;
  specialties: {
    id: string;
    name: string;
  }[];
  availabilities: {
    dayOfWeek: number;
    startTime: Date;
    endTime: Date;
    closed: boolean;
  }[];
  appointments: {
    id: string;
    startsAt: Date;
    status: string;
    endsAt: Date;
    notes: string | null;
  }[];
}[];

export type SalonServices = {
  id: string;
  label: string;
  group: string;
  duration: number;
  price: number;
  image: string | null;
}[];

export const appointmentSchema = z.object({
  memberId: z.string().optional().or(z.literal("")),
  serviceId: z.string().min(1, "Select a service."),
  date: z.date({ message: "Pick a date." }),
  time: z.string().min(1, "Pick a time."),
  duration: z.number().optional(),
  salonId: z.string().optional().or(z.literal("")),
  price: z.number().optional(),
  notes: z
    .string()
    .max(500, "Max 500 characters.")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
