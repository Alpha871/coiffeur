import { CalendarClock, XCircle } from "lucide-react";
import { Button } from "../ui/button";

interface ApptCardProps {
  title: string;
  stylist: string;
  date: string;
  meta: string;
}

export function ApptCardInfo({ title, stylist, date, meta }: ApptCardProps) {
  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg p-6 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-primary dark:text-text-main-dark">
            {title}
          </h3>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            with {stylist}
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{date}</p>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {meta}
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-4 border-t border-border-light dark:border-border-dark pt-4">
        <Button className="flex-1 bg-primary text-white hover:bg-primary/90">
          <CalendarClock className="mr-2 h-4 w-4" /> Reschedule
        </Button>
        <Button className="flex-1 bg-red-500 text-white hover:bg-red-600">
          <XCircle className="mr-2 h-4 w-4" /> Cancel
        </Button>
      </div>
    </div>
  );
}
