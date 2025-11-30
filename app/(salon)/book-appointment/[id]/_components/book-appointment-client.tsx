import AppointmentForm from "@/components/appointment/appointment-form";
import { SalonServices, SalonStaff } from "@/lib/validations/appointment";

export default function BookAppointmentClient({
  salonServices,
  salonStaff,
}: {
  salonServices: SalonServices;
  salonStaff: SalonStaff;
}) {
  return (
    <div className="mx-60  p-6">
      {/* Heading */}
      <div className="mb-8 px-1">
        <h1 className="mb-2 text-4xl font-black tracking-tight">
          Book a new appointment
        </h1>
        <p className="text-lg text-muted-foreground">
          Pick a service, staff, a suitable date/time, and provide your details.
        </p>
      </div>

      <AppointmentForm salonServices={salonServices} salonStaff={salonStaff} />
    </div>
  );
}
