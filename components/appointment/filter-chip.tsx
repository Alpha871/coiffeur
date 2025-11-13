import { cn } from "@/lib/utils";

export default function FilterChip({
  tone,
  children,
}: {
  tone: "green" | "orange" | "blue" | "red";
  children: React.ReactNode;
}) {
  const tones = {
    green: {
      wrap: "bg-green-500/20 text-green-800 dark:text-green-300",
      dot: "bg-green-500",
    },
    orange: {
      wrap: "bg-orange-400/20 text-orange-800 dark:text-orange-300",
      dot: "bg-orange-400",
    },
    blue: {
      wrap: "bg-blue-500/20 text-blue-800 dark:text-blue-300",
      dot: "bg-blue-500",
    },
    red: {
      wrap: "bg-red-500/20 text-red-800 dark:text-red-300",
      dot: "bg-red-500",
    },
  }[tone];

  return (
    <div
      className={cn(
        "flex h-8 items-center gap-x-2 rounded-full px-3 text-sm font-medium",
        tones.wrap
      )}
    >
      <div className={cn("size-2 rounded-full", tones.dot)} />
      {children}
    </div>
  );
}
