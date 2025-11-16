import { Person, UserRole } from "./person";

export class Employee extends Person {
  specialties: string[];

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
    this.specialties = specialties;
  }

  canPerform(serviceKey: string) {
    return this.specialties.includes(serviceKey);
  }
}
