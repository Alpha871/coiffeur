import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { appointment } from "@/lib/validations/appointment";
import { takeFirstLastLetters } from "@/utils/utils";
import { format } from "date-fns";

export function AppointmentList({
  items,
  onViewDetails,
  currentUserId,
  memberUserId,
}: {
  items: appointment[];
  onViewDetails: (id: string) => void;
  currentUserId: string;
  memberUserId: string;
}) {
  if (!items.length) {
    return (
      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
        No appointments found.
      </p>
    );
  }
  return (
    <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
      {items.map((a) => (
        <Card key={a.id} className="border-0 p-0 rounded-lg mt-2 ">
          <CardContent className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  alt={a.customerName}
                  src={a.customerAvatar || ""}
                />
                <AvatarFallback className="border border-blue-400">
                  {takeFirstLastLetters(a.customerName)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-lg font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
                  {a.customerName} - {a.service}
                </p>
                <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                  {format(new Date(a.startsAt), "dd MM yyyy p")} - duration:{" "}
                  {a.duration} mins
                </p>
                <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {a.status.toLowerCase()} - ${a.price.toFixed(2)}
                  </Badge>
                </p>
              </div>
            </div>
            {currentUserId === memberUserId && (
              <Button
                variant="link"
                className="font-bold text-primary dark:text-accent"
                onClick={() => onViewDetails(a.id)}
              >
                View Details
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
