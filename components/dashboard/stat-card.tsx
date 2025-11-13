import { Card, CardContent } from "../ui/card";

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  deltaColor?: string;
}

export function StatCard({
  label,
  value,
  delta,
  deltaColor = "text-green-500",
}: StatCardProps) {
  return (
    <Card className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70">
      <CardContent className="p-6">
        <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
          {label}
        </p>
        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">
          {value}
        </p>
        <p className={`text-sm font-medium ${deltaColor}`}>{delta}</p>
      </CardContent>
    </Card>
  );
}
