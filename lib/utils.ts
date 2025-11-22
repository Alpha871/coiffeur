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

export function convertOpeningHoursFromDatabase(
  openingHoursArray: Array<{
    dayOfWeek: number;
    startTime: Date;
    endTime: Date;
    isClosed: boolean;
  }>
): Record<
  OpeningHoursDayKey,
  {
    dayOfWeek: number;
    start?: string;
    end?: string;
    closed?: boolean;
  }
> {
  const dayKeys: OpeningHoursDayKey[] = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
  ];

  const result = {} as Record<
    OpeningHoursDayKey,
    {
      dayOfWeek: number;
      start?: string;
      end?: string;
      closed?: boolean;
    }
  >;

  dayKeys.forEach((key, index) => {
    // Find the day data by matching dayOfWeek
    const dayData = openingHoursArray.find((day) => day.dayOfWeek === index);

    result[key] = {
      dayOfWeek: index,
      start: dayData?.isClosed
        ? "09:00"
        : dayData
        ? timeToString(dayData.startTime)
        : "09:00",
      end: dayData?.isClosed
        ? "18:00"
        : dayData
        ? timeToString(dayData.endTime)
        : "18:00",
      closed: dayData?.isClosed ?? false,
    };
  });

  return result;
}
// Helper function to convert Date to time string (HH:mm)
function timeToString(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
