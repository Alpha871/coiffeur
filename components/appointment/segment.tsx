import { cn } from "@/lib/utils";
import { RadioGroupItem } from "../ui/radio-group";

type ViewMode = "Calendar" | "List";

export default function Segment({
  value,
  current,
  label,
}: {
  value: ViewMode;
  current: ViewMode;
  label: string;
}) {
  const checked = current === value;
  return (
    <label
      className={cn("segment", checked ? "segment-active" : "segment-idle")}
    >
      <span className="truncate">{label}</span>
      <RadioGroupItem value={value} className="invisible w-0" />
    </label>
  );
}
