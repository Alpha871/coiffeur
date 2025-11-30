import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SalonStaff } from "./book-appointment-client";

export function StaffCard({
  selected,
  onSelect,
  staff,
}: {
  selected: boolean;
  onSelect: () => void;
  staff: SalonStaff[number];
}) {
  return (
    <div
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={onSelect}
      className={cn(
        "w-[220px] sm:w-[260px] lg:w-[300px] shrink-0 snap-start",
        "rounded-lg border bg-card p-4 flex flex-col items-center gap-4 cursor-pointer",
        "transition-all duration-200 hover:shadow-md",
        selected && "ring-2 ring-primary/70 shadow-md"
      )}
    >
      <div
        className="h-24 w-24 rounded-full bg-center bg-cover shadow-sm"
        style={{
          backgroundImage: staff.avatar ? `url(${staff.avatar})` : undefined,
          backgroundColor: staff.avatar ? undefined : "oklch(0.92 0 0)",
        }}
      />
      <div className="text-center">
        <p className="font-semibold">{staff.name}</p>
        <p className="text-sm text-muted-foreground">{staff.role}</p>
      </div>
      <Button
        type="button"
        onClick={onSelect}
        variant={selected ? "default" : "secondary"}
        className={cn(
          "h-8 px-4 w-full",
          !selected && "bg-accent text-foreground hover:bg-accent/80"
        )}
      >
        {selected ? "✓ Selected" : "Select"}
      </Button>
    </div>
  );
}
