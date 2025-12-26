import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AppointmentStatus } from "@/generated/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum userRole {
  admin = "admin",
  organization = "organization",
  user = "user",
  employee = "employee",
}

export type OpeningHoursDayKey =
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat"
  | "sun";

export type OpeningHoursDay = {
  dayOfWeek: number;
  startTime: Date;
  endTime: Date;
  isClosed: boolean;
};

export const STATUS_COLORS: Record<
  AppointmentStatus,
  { bg: string; border: string; text: string }
> = {
  APPROVED: { bg: "#E3F2FD", border: "#2196F3", text: "#1976D2" },
  // APPROVED: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  PENDING: { bg: "#FFF3E0", border: "#FF9800", text: "#F57C00" },
  COMPLETED: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
  CANCELLED: { bg: "#FFEBEE", border: "#F44336", text: "#D32F2F" },
  REJECTED: { bg: "#FCE4EC", border: "#E91E63", text: "#C2185B" },
};

export function randomValues() {
  return Math.random() * 360;
}

export function stringToTime(
  timeString: string,
  baseDate: Date = new Date()
): Date {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString() as unknown as Date;
}

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

export type OpeningHours = Record<
  OpeningHoursDayKey,
  {
    dayOfWeek: number;
    start?: string;
    end?: string;
    closed?: boolean;
  }
>;

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

export function timeToString(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export function changedValues<T>(
  original: Partial<T>,
  updated: Partial<T>
): Partial<T> {
  const changes: Partial<T> = {};
  for (const key in updated) {
    if (updated[key] !== original[key]) {
      changes[key] = updated[key];
    }
  }
  return changes;
}

export function compareHHMM(a: string, b: string): number {
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map((x) => parseInt(x, 10));
    return (h || 0) * 60 + (m || 0);
  };
  return toMin(a) - toMin(b);
}

export const DAY_ORDER = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
] as const;
type DayKey = (typeof DAY_ORDER)[number];

export const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export const DEFAULT_START = "09:00";
export const DEFAULT_END = "18:00";
export const MIN_TIME = "06:00";
export const MAX_TIME = "22:00";

export function defaultSchedule() {
  return {
    mon: {
      dayOfWeek: 0,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    tue: {
      dayOfWeek: 1,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    wed: {
      dayOfWeek: 2,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    thu: {
      dayOfWeek: 3,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    fri: {
      dayOfWeek: 4,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    sat: {
      dayOfWeek: 5,
      closed: true,
      open: false,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
    sun: {
      dayOfWeek: 6,
      closed: false,
      open: true,
      start: DEFAULT_START,
      end: DEFAULT_END,
    },
  };
}
