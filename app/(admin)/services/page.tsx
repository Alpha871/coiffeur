"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CarouselItem } from "@/components/ui/carousel";
import { SmartCarousel } from "@/components/common/smart-carousel";
import { CategoryPill } from "@/components/services/cartegory-pill";

import { DataTable } from "@/components/common/data-table";
import { ColumnDef } from "@tanstack/react-table";

import { CATEGORIES } from "@/lib/validations/service";
import ServiceForm from "@/components/services/service-form";
import Modal from "@/components/common/modal";

type ServiceRow = {
  id: string;
  title: string;
  cat: string;
  dur: string;
  price: string;
  image?: string;
};

const INITIAL_FEATURED: ServiceRow[] = [
  {
    id: "svc-1",
    title: "Men's Classic Haircut",
    cat: "Haircuts",
    dur: "45 min",
    price: "$50.00",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "svc-2",
    title: "Full Head Highlights",
    cat: "Coloring",
    dur: "120 min",
    price: "$250.00",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "svc-3",
    title: "Blowout & Style",
    cat: "Styling",
    dur: "60 min",
    price: "$75.00",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop",
  },
];

const INITIAL_TABLE: ServiceRow[] = [
  {
    id: "t-1",
    title: "Women's Haircut",
    cat: "Haircuts",
    dur: "60 min",
    price: "$85.00",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "t-2",
    title: "Keratin Treatment",
    cat: "Treatments",
    dur: "180 min",
    price: "$300.00",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
];

function FeaturedCard({
  item,
  onEdit,
  onDelete,
}: {
  item: ServiceRow;
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
              {item.cat} • {item.dur}
            </p>
          </div>
          <span className="text-sm font-medium">{item.price}</span>
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

function useServiceColumns(
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

export default function ManageServicesPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [search, setSearch] = useState("");

  const [featured, setFeatured] = useState<ServiceRow[]>(INITIAL_FEATURED);
  const [rows, setRows] = useState<ServiceRow[]>(INITIAL_TABLE);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ServiceRow | null>(null);

  // function onAdd(values: AddValues) {
  //   const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);

  //   const newRow: ServiceRow = {
  //     id,
  //     title: values.title.trim(),
  //     cat: values.category,
  //     dur: `${values.durationMin} min`,
  //     price: `$${values.price.toFixed(2)}`,
  //     image: values.image || undefined,
  //   };

  //   setRows((prev) => [newRow, ...prev]);
  //   if (values.category === "Haircuts") {
  //     setFeatured((prev) => [newRow, ...prev]);
  //   }
  //   addForm.reset();
  // }

  function openEditModal(s: ServiceRow) {
    setEditing(s);
    setOpen(true);
  }

  function deleteService(s: ServiceRow) {
    setRows((p) => p.filter((x) => x.id !== s.id));
    setFeatured((p) => p.filter((x) => x.id !== s.id));
  }

  // function onEditSubmit(v: EditValues) {
  //   if (!editing) return;

  //   const updated: ServiceRow = {
  //     ...editing,
  //     title: v.title.trim(),
  //     cat: v.category,
  //     dur: `${v.durationMin} min`,
  //     price: `$${v.price.toFixed(2)}`,
  //     image: v.image || undefined,
  //   };

  //   setRows((p) => p.map((x) => (x.id === updated.id ? updated : x)));
  //   setFeatured((p) => p.map((x) => (x.id === updated.id ? updated : x)));

  //   setOpen(false);
  //   setEditing(null);
  // }

  const filteredRows = rows.filter((r) => {
    const q = search.toLowerCase();
    const matchCat = category === "All" || r.cat === category;
    const matchQ =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.cat.toLowerCase().includes(q) ||
      r.dur.toLowerCase().includes(q) ||
      r.price.toLowerCase().includes(q);

    return matchCat && matchQ;
  });

  const columns = useServiceColumns(openEditModal, deleteService);

  return (
    <>
      <Modal
        open={open}
        onOpenChange={() => setOpen(false)}
        title="Edit Service"
        size="lg"
      >
        <ServiceForm onCancel={() => setOpen(false)} />
      </Modal>

      <div className="bg-background-light dark:bg-background-dark min-h-screen">
        <main className="p-6 lg:p-10 max-w-7xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl font-black">Manage Services</h1>
            <p className="opacity-70">
              Add, edit, and manage the services your salon offers.
            </p>
          </header>

          <SmartCarousel className="mb-8">
            {CATEGORIES.map((c) => (
              <CarouselItem key={c} className="basis-auto pl-3">
                <CategoryPill
                  label={c}
                  active={c === category}
                  onClick={() => setCategory(c)}
                />
              </CarouselItem>
            ))}
          </SmartCarousel>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-1">
              <div className="p-6 rounded-xl border bg-content-light dark:bg-content-dark">
                <h2 className="text-xl font-bold mb-6">Add a New Service</h2>

                <ServiceForm onCancel={() => {}} />
              </div>
            </section>

            {/* RIGHT COLUMN */}
            <section className="lg:col-span-2">
              <div className="p-6 rounded-xl border bg-content-light dark:bg-content-dark">
                {/* FILTERS */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Input
                    placeholder="Search for a service..."
                    className="h-12"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <Select
                    value={category}
                    onValueChange={(v) =>
                      setCategory(v as (typeof CATEGORIES)[number])
                    }
                  >
                    <SelectTrigger className="h-12 sm:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <SmartCarousel wheel className="mb-6">
                  {featured
                    .filter((f) => category === "All" || f.cat === category)
                    .map((f) => (
                      <CarouselItem key={f.id} className="basis-auto pl-3">
                        <FeaturedCard
                          item={f}
                          onEdit={() => openEditModal(f)}
                          onDelete={() => deleteService(f)}
                        />
                      </CarouselItem>
                    ))}
                </SmartCarousel>

                <DataTable<ServiceRow>
                  title="Services"
                  columns={columns}
                  data={filteredRows}
                  searchColumn="title"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
