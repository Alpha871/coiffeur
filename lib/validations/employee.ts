import z from "zod";

export const EMPLOYEE_LEVELS = [
  "Intern",
  "Junior Stylist",
  "Stylist",
  "Senior Stylist",
  "Master Stylist",
] as const;

export const EXPERTISE_OPTIONS = [
  "Haircut",
  "Coloring",
  "Balayage",
  "Beard Trim",
  "Styling",
] as const;

export const EMPLOYEE_STATUSES = [
  { label: "On Duty", value: "on_duty" },
  { label: "Off Duty", value: "off_duty" },
  { label: "On Leave", value: "on_leave" },
] as const;

export const formSchema = z.object({
  name: z.string().min(2, "Enter a valid name"),
  lastname: z.string().min(2, "Enter a valid last name"),
  expertise: z.enum(EXPERTISE_OPTIONS),
  status: z.enum(
    EMPLOYEE_STATUSES.map((s) => s.value) as [string, ...string[]]
  ),
  level: z.enum(EMPLOYEE_LEVELS),
  // allow File or URL string; optional
  image: z.any().optional(),
});

export const LEAVE_TYPES = [
  "Paid Leave",
  "Sick Leave",
  "Unpaid Leave",
  "Personal Leave",
  "Maternity/Paternity",
  "Other",
] as const;

export const requestOffSchema = z.object({
  employeeName: z.string().min(1, "Employee name is required"),
  employeeId: z.string().optional(),
  leaveType: z.enum([
    "Paid Leave",
    "Sick Leave",
    "Unpaid Leave",
    "Personal Leave",
  ]),
  startDate: z.date("Start date is required"),
  endDate: z.date("End date is required"),
  halfDay: z.boolean(),
  reason: z
    .string()
    .min(10, "Please provide a detailed reason (min 10 characters)"),
});
