export enum userRole {
  admin = "admin",
  organization = "organization",
  user = "user",
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

export type OpeningHours = OpeningHoursDay[];

export class Salon {
  constructor(
    public name: string,
    public address: string,
    public phone: string,
    public email: string,
    public description: string,
    public openingHours: OpeningHours
  ) {}

  //  Check if salon is open on a specific day
  isOpenOn(dayOfWeek: number): boolean {
    const day = this.openingHours?.[dayOfWeek];
    return day ? !day.isClosed : false;
  }

  // Get opening hours for a day
  getHoursForDay(dayOfWeek: number): { start: Date; end: Date } | null {
    const day = this.openingHours?.[dayOfWeek];
    if (!day || day.isClosed) return null;
    return { start: day.startTime, end: day.endTime };
  }

  //  Validate phone number format
  isValidPhone(): boolean {
    return /^\d{10,}$/.test(this.phone.replace(/\D/g, ""));
  }

  // ✅Validate email
  isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  // Check if all required fields are filled
  isComplete(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.address.trim().length > 0 &&
      this.isValidPhone() &&
      this.isValidEmail() &&
      this.openingHours?.length >= 1
    );
  }

  toJSON() {
    return {
      name: this.name,
      address: this.address,
      phone: this.phone,
      email: this.email,
      description: this.description,
      openingHours: this.openingHours,
    };
  }
}
