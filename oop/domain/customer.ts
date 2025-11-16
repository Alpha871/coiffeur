import { Person } from "./person";

export class Customer extends Person {
  constructor(
    id: string,
    name: string,
    phone: string | null,
    public userId: string
  ) {
    super(id, name, phone ?? undefined);
  }
}
