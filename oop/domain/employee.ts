import { Person, UserRole } from "./person";

export class Employee extends Person {
  private salonId: string;
  private specialties: string[] = [];
  private appointments: string[] = [];
  private rating: number = 0;
  private totalReviews: number = 0;

  constructor(
    id: string,
    name: string,
    phone: string | null,
    email: string,
    address: string,
    salonId: string,
    specialties: string[]
  ) {
    super(name, phone, UserRole.EMPLOYEE, email, address);
    this.salonId = salonId;
    this.specialties = specialties;
  }

  canPerform(serviceKey: string): boolean {
    return this.specialties.includes(serviceKey);
  }

  addSpecialty(serviceKey: string): void {
    if (!this.specialties.includes(serviceKey)) {
      this.specialties.push(serviceKey);
    }
  }

  removeSpecialty(serviceKey: string): void {
    this.specialties = this.specialties.filter((s) => s !== serviceKey);
  }

  getSpecialties(): string[] {
    return this.specialties;
  }

  addAppointment(appointmentId: string): void {
    this.appointments.push(appointmentId);
  }

  getAppointments(): string[] {
    return this.appointments;
  }

  updateRating(newRating: number): void {
    const totalRating = this.rating * this.totalReviews + newRating;
    this.totalReviews += 1;
    this.rating = totalRating / this.totalReviews;
  }

  getRating(): number {
    return this.rating;
  }

  getSalonId(): string {
    return this.salonId;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      salonId: this.salonId,
      specialties: this.specialties,
      appointments: this.appointments,
      rating: this.rating,
      totalReviews: this.totalReviews,
    };
  }
}
