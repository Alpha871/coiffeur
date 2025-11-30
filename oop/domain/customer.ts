import { Person, UserRole } from "./person";

export class Customer extends Person {
  private appointmentHistory: string[] = [];
  private favoriteServices: string[] = [];
  private loyaltyPoints: number = 0;

  constructor(
    id: string,
    name: string,
    phone: string | null,
    role: UserRole.CUSTOMER,
    email: string | null,
    address: string
  ) {
    super(name, phone, role, email ?? "", address);
  }

  addAppointment(appointmentId: string): void {
    this.appointmentHistory.push(appointmentId);
  }

  getAppointmentHistory(): string[] {
    return this.appointmentHistory;
  }

  addFavoriteService(serviceId: string): void {
    if (!this.favoriteServices.includes(serviceId)) {
      this.favoriteServices.push(serviceId);
    }
  }

  getFavoriteServices(): string[] {
    return this.favoriteServices;
  }

  addLoyaltyPoints(points: number): void {
    this.loyaltyPoints += points;
  }

  getLoyaltyPoints(): number {
    return this.loyaltyPoints;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      appointmentHistory: this.appointmentHistory,
      favoriteServices: this.favoriteServices,
      loyaltyPoints: this.loyaltyPoints,
    };
  }
}
