import { Appointment } from "../domain/appointment";
import { UserRole } from "../domain/person";
import { AppointmentRepository } from "./appointment-repository";
import { prisma } from "./prisma-client";

type BookAppointmentInput = {
  salonId: string;
  serviceId: string;
  employeeId: string;
  customerId: string;
  startsAt: Date;
  requestedByUserId: string; // kim randevu alıyor
};

export class AppointmentService {
  constructor(private readonly appointmentRepo = new AppointmentRepository()) {}

  //   async book(input: BookAppointmentInput): Promise<Appointment> {
  //     // 1) Kullanıcı rol kontrolü
  //     const user = await prisma.user.findUnique({
  //       where: { id: input.requestedByUserId },
  //     });
  //     if (!user) throw new Error("User not found");

  //     if (
  //       user.role !== UserRole.CUSTOMER &&
  //       user.role !== UserRole.SALON_OWNER &&
  //       user.role !== UserRole.ADMIN
  //     ) {
  //       throw new Error("Bu işlem için yetkiniz yok");
  //     }

  //     // 2) Servis bilgisi
  //     const service = await prisma.service.findUnique({
  //       where: { id: input.serviceId },
  //     });
  //     if (!service) throw new Error("Service not found");

  //     const endsAt = new Date(
  //       input.startsAt.getTime() + service.durationMin * 60_000
  //     );

  //     // 3) Çalışan gerçekten bu salonda mı ve ilgili işlemi yapabiliyor mu?
  //     const employee = await prisma.employee.findUnique({
  //       where: { id: input.employeeId },
  //       include: { salon: true, user: true },
  //     });
  //     if (!employee) throw new Error("Employee not found");
  //     if (employee.salonId !== input.salonId) {
  //       throw new Error("Employee does not belong to this salon");
  //     }

  //     // (Opsiyonel ekstra tablo ile employee-specific services kontrolü yapılabilir.)
  //     // Şimdilik specialties string[] üzerinden basit kontrol:
  //     // Örneğin service.name özelleştirilmiş bir key ise:
  //     // if (!employee.specialties.includes(service.name)) { ... }

  //     // 4) Çalışma saatleri / availability kontrolü
  //     const dayOfWeek = input.startsAt.getDay(); // 0-6

  //     const availability = await prisma.salonAvailability.findFirst({
  //       where: {
  //         salonId: input.salonId,
  //         OR: [
  //           { employeeId: null }, // salon genel
  //           { employeeId: input.employeeId }, // çalışan özel
  //         ],
  //         dayOfWeek,
  //       },
  //     });

  //     if (!availability || availability.isClosed) {
  //       throw new Error("Bu gün için salon/çalışan kapalı");
  //     }

  //     // Saat karşılaştırmasını yapabilmek için:
  //     const startTimeMinutes =
  //       availability.startTime.getUTCHours() * 60 +
  //       availability.startTime.getUTCMinutes();
  //     const endTimeMinutes =
  //       availability.endTime.getUTCHours() * 60 +
  //       availability.endTime.getUTCMinutes();
  //     const apptStartMinutes =
  //       input.startsAt.getUTCHours() * 60 + input.startsAt.getUTCMinutes();
  //     const apptEndMinutes = endsAt.getUTCHours() * 60 + endsAt.getUTCMinutes();

  //     if (
  //       apptStartMinutes < startTimeMinutes ||
  //       apptEndMinutes > endTimeMinutes
  //     ) {
  //       throw new Error("Randevu saatleri çalışma saatleri dışında");
  //     }

  //     // 5) Çakışma kontrolü
  //     const overlapping = await this.appointmentRepo.findOverlapping(
  //       input.employeeId,
  //       input.startsAt,
  //       endsAt
  //     );

  //     if (overlapping.length > 0) {
  //       throw new Error("Bu saat aralığında başka bir randevu var");
  //     }

  //     // // 6) Randevu oluştur (PENDING)
  //     // return this.appointmentRepo.create({
  //     //   salonId: input.salonId,
  //     //   serviceId: input.serviceId,
  //     //   employeeId: input.employeeId,
  //     //   customerId: input.customerId,
  //     //   startsAt: input.startsAt,
  //     //   endsAt,
  //     //   priceCents: service.priceCents,
  //     // });
  //   }
}
