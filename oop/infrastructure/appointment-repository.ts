// infrastructure/AppointmentRepository.ts

import { Appointment, AppointmentStatus } from "../domain/appointment";

export class AppointmentRepository {
  //   private toDomain(db: any): Appointment {
  //     return new Appointment(
  //       db.id,
  //       db.salonId,
  //       db.serviceId,
  //       db.employeeId,
  //       db.customerId,
  //       db.startsAt,
  //       db.endsAt,
  //       db.status as AppointmentStatus,
  //       db.priceCents
  //     );
  //   }
  //   async findOverlapping(
  //     employeeId: string,
  //     startsAt: Date,
  //     endsAt: Date
  //   ): Promise<Appointment[]> {
  //     const rows = await prisma.appointment.findMany({
  //       where: {
  //         employeeId,
  //         status: { in: [ "PENDING", "CONFIRMED" ] },
  //         AND: [
  //           { startsAt: { <  endsAt } },
  //           { endsAt:   { >  startsAt } },
  //         ],
  //       },
  //     });
  //     return rows.map((r) => this.toDomain(r));
  //   }
  //   async create(data: {
  //     salonId: string;
  //     serviceId: string;
  //     employeeId: string;
  //     customerId: string;
  //     startsAt: Date;
  //     endsAt: Date;
  //     priceCents: number;
  //   }): Promise<Appointment> {
  //     const row = await prisma.appointment.create({
  //       data: {
  //         ...data,
  //         status: "PENDING",
  //       },
  //     });
  //     // return this.toDomain(row);
  //   }
}
