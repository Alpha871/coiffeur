export enum UserRole {
  ADMIN = "adim",
  SALON_OWNER = "salon_owner",
  EMPLOYEE = "employee",
  CUSTOMER = "customer",
}

export abstract class Person {
  name: string;
  phone: string | null;
  role: UserRole;
  email: string;
  address: string;

  constructor(
    name: string,
    phone: string | null,
    role: UserRole,
    email: string,
    address: string
  ) {
    this.name = name;
    this.phone = phone ?? null;
    this.role = role;
    this.email = email;
    this.address = address;
  }

  toJSON() {
    return {
      name: this.name,
      phone: this.phone,
      role: this.role,
      email: this.email,
      address: this.address,
    };
  }
}
