import { OpeningHoursDayConfig } from "@/lib/validations/request-salon";

export const openingHoursConfig: OpeningHoursDayConfig[] = [
  {
    key: "mon",
    label: "Monday",
    dayOfWeek: 0,
    defaultOpen: "09:00",
    defaultClose: "18:00",
  },
  {
    key: "tue",
    label: "Tuesday",
    dayOfWeek: 1,
    defaultOpen: "09:00",
    defaultClose: "18:00",
  },
  {
    key: "wed",
    label: "Wednesday",
    dayOfWeek: 2,
    defaultOpen: "09:00",
    defaultClose: "18:00",
  },
  {
    key: "thu",
    label: "Thursday",
    dayOfWeek: 3,
    defaultOpen: "09:00",
    defaultClose: "20:00",
  },
  {
    key: "fri",
    label: "Friday",
    dayOfWeek: 4,
    defaultOpen: "09:00",
    defaultClose: "20:00",
  },
  {
    key: "sat",
    label: "Saturday",
    dayOfWeek: 5,
    defaultOpen: "10:00",
    defaultClose: "16:00",
  },
  {
    key: "sun",
    label: "Sunday",
    dayOfWeek: 6,
    defaultOpen: "09:00",
    defaultClose: "18:00",
    defaultClosed: true,
  },
];
