export enum AppointmentStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export class Appointment {
  constructor(
    public readonly id: string,
    public salonId: string,
    public serviceId: string,
    public employeeId: string,
    public customerId: string,
    public startsAt: Date,
    public endsAt: Date,
    public status: AppointmentStatus,
    public priceCents: number
  ) {}

  confirm() {
    this.status = AppointmentStatus.CONFIRMED;
  }

  cancel() {
    this.status = AppointmentStatus.CANCELLED;
  }
}
