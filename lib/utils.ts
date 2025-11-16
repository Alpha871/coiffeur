import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { OpeningHoursDayKey } from "@/oop/domain/salon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringToTime(timeString: string): Date {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date("1970-01-01T00:00:00Z");
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// ✅ Updated: accepts optional strings
export function convertOpeningHoursToDatabase(
  openingHoursObj: Record<
    OpeningHoursDayKey,
    {
      dayOfWeek: number;
      start?: string;
      end?: string;
      closed?: boolean;
    }
  >
): Array<{
  dayOfWeek: number;
  startTime: Date;
  endTime: Date;
  isClosed: boolean;
}> {
  const dayKeys: OpeningHoursDayKey[] = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
  ];

  return dayKeys.map((key) => {
    const hours = openingHoursObj[key] || {};
    const daysOfWeek = hours.dayOfWeek;
    const start = hours.start || "09:00";
    const end = hours.end || "18:00";
    const closed = hours.closed ?? false;

    return {
      dayOfWeek: daysOfWeek,
      startTime: closed ? stringToTime("00:00") : stringToTime(start),
      endTime: closed ? stringToTime("00:00") : stringToTime(end),
      isClosed: closed,
    };
  });
}
