import { Badge } from "@/components/ui/badge";

export function HeaderRow({ title, count }: { title: string; count: number }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h4 className="text-sm font-bold tracking-wide text-text-light-secondary dark:text-text-dark-secondary">
        {title}
      </h4>
      <Badge className="bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
        {count}
      </Badge>
    </div>
  );
}
