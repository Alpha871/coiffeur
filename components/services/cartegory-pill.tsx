import { cn } from "@/lib/utils";

export function CategoryPill({
  active,
  label,
  onClick,
}: {
  active?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm transition",
        active
          ? "bg-primary text-white border-transparent"
          : "border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10"
      )}
    >
      {label}
    </button>
  );
}
