export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-t border-border-light dark:border-border-dark py-2">
      <span className="text-text-secondary-light dark:text-text-secondary-dark">
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
}
