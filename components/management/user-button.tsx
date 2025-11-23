import { cn } from "@/lib/utils";
import { Staff } from "./staff-management-client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronRight } from "lucide-react";

interface UserButtonProps {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}

function UserButton({
  id,
  name,
  role,
  imageUrl,
  setActiveId,
  selected,
}: UserButtonProps) {
  return (
    <button
      onClick={() => setActiveId(id)}
      className={cn(
        "w-full px-4 py-3 flex items-center justify-between gap-4 text-left transition-colors",
        selected ? "bg-primary/10" : "hover:bg-muted/60 dark:hover:bg-muted/40"
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-base font-medium",
              selected && "text-primary"
            )}
          >
            {name}
          </p>
          <p className="truncate text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <ChevronRight
        className={cn(
          "h-4 w-4",
          selected ? "text-primary" : "text-muted-foreground"
        )}
      />
    </button>
  );
}

export default UserButton;
