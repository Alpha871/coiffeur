import { Button } from "@/components/ui/button";
import { ServiceValues } from "@/lib/validations/service";

export function FeaturedCard({
  item,
  onEdit,
  onDelete,
}: {
  item: ServiceValues;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="w-[260px] sm:w-[300px] lg:w-[340px] shrink-0 rounded-xl border bg-content-light dark:bg-content-dark overflow-hidden">
      <div
        className="aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold truncate">{item.title}</p>
            <p className="text-sm opacity-70">
              {item.category} • {item.durationMin} min
            </p>
          </div>
          <span className="text-sm font-medium">${item.price} </span>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="h-8 px-3" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="destructive" className="h-8 px-3" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
