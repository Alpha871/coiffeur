"use client";

import Modal from "@/components/common/modal";
import { SmartCarousel } from "@/components/common/smart-carousel";
import { CategoryPill } from "@/components/services/cartegory-pill";
import ServiceForm from "@/components/services/service-form";
import { CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/lib/validations/service";
import * as React from "react";
import { useState } from "react";
import { FeaturedCard } from "./featured-card";
import { DataTable } from "@/components/common/data-table";
import { useServiceColumns } from "./table";

export type ServiceRow = {
  id: string;
  title: string;
  cat: string;
  dur: string;
  price: string;
  image?: string;
};

interface ManageServicesClientProps {
  services: ServiceRow[];
}

export default function ManageServicesClient({
  services,
}: ManageServicesClientProps) {
  console.log(services);

  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [search, setSearch] = useState("");

  const [featured, setFeatured] = useState<ServiceRow[]>(services);
  const [rows, setRows] = useState<ServiceRow[]>(services);

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
