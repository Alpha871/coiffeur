import { ColumnDef } from "@tanstack/react-table";

import { ServiceValues } from "@/lib/validations/service";

export function useServiceColumns(
  openEdit: (s: ServiceValues) => void,
  deleteService: (s: ServiceValues) => void
): ColumnDef<ServiceValues>[] {
  return [
    {
      accessorKey: "title",
      header: "Service",
      cell: ({ row }) => {
        const title = row.original.title;
        return <span>{title}</span>;
      },
    },
    {
      accessorKey: "cat",
      header: "Category",
      cell: ({ row }) => {
        const category = row.original.category;
        return <span>{category}</span>;
      },
    },
    {
      accessorKey: "dur",
      header: "Duration",
      cell: ({ row }) => {
        const duration = row.original.durationMin;
        return <span>{duration} min</span>;
      },
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ getValue }) => {
        const url = getValue() as string | undefined;
        return url ? (
          <div
            className="w-16 h-10 bg-cover bg-center rounded border"
            style={{ backgroundImage: `url(${url})` }}
          />
        ) : (
          "—"
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        const price = row.original.price;
        return <span>${price}</span>;
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const r = row.original;
        return (
          <div className="flex justify-end gap-2">
            <button
              className="p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900"
              onClick={() => openEdit(r)}
            >
              ✏️
            </button>
            <button
              className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-900"
              onClick={() => deleteService(r)}
            >
              🗑️
            </button>
          </div>
        );
      },
    },
  ];
}
