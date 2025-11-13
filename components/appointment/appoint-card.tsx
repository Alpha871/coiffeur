import { cn } from "@/lib/utils";
type DayScope = 0 | 1 | 2;

export type Appointment = {
  id: string;
  customer: string;
  service: string;
  status: "Approved" | "Pending" | "Completed" | "Cancelled";
  dayIndex: number; // 0..6 (Mon..Sun)
  time: string;
  color: "green" | "orange" | "blue" | "red";
};

export default function ApptCard({ appt }: { appt: Appointment }) {
  const c = appt.color; // "green" | "orange" | "blue" | "red"
  return (
    <div className={cn("appt-card", `appt-${c}`)}>
      <p className={cn("text-sm font-bold", `appt-title-${c}`)}>
        {appt.customer}
      </p>
      <p className={cn("text-xs", `appt-sub-${c}`)}>{appt.service}</p>
      <p className={cn("mt-1 text-xs", `appt-time-${c}`)}>{appt.time}</p>
    </div>
  );
}
