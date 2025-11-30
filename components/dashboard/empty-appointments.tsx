import { HistoryIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

// interface EmptyHistoryProps {}

export function EmptyAppointments() {
  return (
    <div className="text-center border-2 border-dashed border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-10 rounded-lg">
      <div className="flex justify-center mb-4">
        <HistoryIcon className="h-6 w-6 text-text-secondary-light dark:text-text-secondary-dark" />
      </div>
      <h3 className="text-lg font-semibold">No Past Appointments</h3>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
        Your appointment history will appear here after your first visit.
      </p>
      <Button className="" variant="link" asChild>
        <Link href="/salons">Book Your First Appointment</Link>
      </Button>
    </div>
  );
}
