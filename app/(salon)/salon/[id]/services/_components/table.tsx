import { ColumnDef } from "@tanstack/react-table";
import { ServiceRow } from "./service-management-client";

export function useServiceColumns(
  openEdit: (s: ServiceRow) => void,
  deleteService: (s: ServiceRow) => void
): ColumnDef<ServiceRow>[] {
  return [
    {
      accessorKey: "title",
      header: "Service",
    },
    {
      accessorKey: "cat",
      header: "Category",
    },
    {
      accessorKey: "dur",
      header: "Duration",
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
