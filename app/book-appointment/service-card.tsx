import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/validations/service";

export function ServiceCard({
  selected,
  onSelect,
  service,
}: {
  selected: boolean;
  onSelect: () => void;
  service: Service;
}) {
  return (
    <div
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={onSelect}
      className={cn(
        "w-[280px] sm:w-[340px] lg:w-[420px] shrink-0",
        "snap-start cursor-pointer rounded-lg border bg-card p-4",
        "flex items-stretch justify-between gap-4",
        "transition-all duration-200",
        selected
          ? "ring-2 ring-primary/70 shadow-md"
          : "ring-1 ring-transparent hover:ring-primary/30"
      )}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm text-muted-foreground">{service.group}</p>
        <p className="font-semibold truncate">{service.label}</p>
        <p className="text-sm text-muted-foreground">{service.price}</p>
        <div className="pt-2">
          <Button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            variant={selected ? "default" : "secondary"}
            className={cn(
              "h-8 px-4 w-fit",
              !selected && "bg-accent text-foreground hover:bg-accent/80"
            )}
          >
            {selected ? "✓ Selected" : "Select"}
          </Button>
        </div>
      </div>
      <div
        aria-label={`${service.label} image`}
        className="flex-1 w-full rounded-lg bg-cover bg-center aspect-video"
        style={{ backgroundImage: `url(${service.image})` }}
      />
    </div>
  );
}
