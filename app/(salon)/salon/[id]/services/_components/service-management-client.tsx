"use client";

import Modal from "@/components/common/modal";
import { SmartCarousel } from "@/components/common/smart-carousel";
import { CategoryPill } from "@/components/services/cartegory-pill";
import ServiceForm from "@/components/services/service-form";
import { CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { CATEGORIES, ServiceValues } from "@/lib/validations/service";
import * as React from "react";
import { useState } from "react";
import { FeaturedCard } from "./featured-card";
import { DataTable } from "@/components/common/data-table";
import { useServiceColumns } from "./table";
import { deleteServiceById } from "@/oop/infrastructure/service-action";
import { Spinner } from "@/components/ui/spinner";

interface ManageServicesClientProps {
  services: ServiceValues[];
}

export default function ManageServicesClient({
  services,
}: ManageServicesClientProps) {
  console.log({ services });
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [search] = useState("");
  const [featuredSearch, setFeaturedSearch] = useState("");

  const [featured, setFeatured] = useState<ServiceValues[]>(services);
  const [rows, setRows] = useState<ServiceValues[]>(services);

  const [open, setOpen] = useState(false);
  const [targetValue, setTargetValue] = useState<
    Partial<ServiceValues> | undefined
  >(undefined);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeletingModal, setIsDeletingModal] = useState(false);

  function openEditModal(s: ServiceValues) {
    setTargetValue(s);
    setOpen(true);
  }

  function openDeleteModal(s: ServiceValues) {
    setTargetValue(s);
    setIsDeletingModal(true);
  }

  async function deleteService(s: ServiceValues) {
    setIsDeletingModal(true);
    setIsDeleting(true);
    try {
      const deletedService = await deleteServiceById(s.id as string);

      setRows((p) => p.filter((x) => x.id !== deletedService.id));
      setFeatured((p) => p.filter((x) => x.id !== deletedService.id));
    } catch (error) {
      console.error("Error deleting service:", error);
    } finally {
      setIsDeleting(false);
      setIsDeletingModal(false);
    }
  }

  const filteredRows = rows.filter((r) => {
    const q = search.toLowerCase();
    // const matchCat = category === "All" || r.category === category;
    const matchQ =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.durationMin.toString().toLowerCase().includes(q) ||
      r.price.toString().toLowerCase().includes(q);

    return matchQ;
  });

  const filteredFeatures = featured.filter((r) => {
    const q = featuredSearch.toLowerCase();
    const matchCat = category === "All" || r.category === category;
    const matchQ =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.durationMin.toString().toLowerCase().includes(q) ||
      r.price.toString().toLowerCase().includes(q);

    return matchCat && matchQ;
  });

  const columns = useServiceColumns(openEditModal, openDeleteModal);

  return (
    <>
      <Modal
        open={isDeletingModal}
        onOpenChange={setIsDeletingModal}
        title="Delete Service"
        description="Are you sure you want to delete this service? This action cannot be undone."
        size="md"
        footer={
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              onClick={() => setIsDeletingModal(false)}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              onClick={() => deleteService(targetValue as ServiceValues)}
              disabled={isDeleting}
            >
              {isDeleting ? <Spinner /> : "Confirm Delete"}
            </button>
          </div>
        }
      >
        <div />
      </Modal>
      <Modal open={open} onOpenChange={setOpen} title="Edit Service" size="md">
        <ServiceForm
          setOpenModal={setOpen}
          setServices={setRows}
          setFeatured={setFeatured}
          defaultValues={targetValue}
          type="edit"
        />
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

                <ServiceForm
                  setServices={setRows}
                  setFeatured={setFeatured}
                  setOpenModal={setOpen}
                />
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
                    value={featuredSearch}
                    onChange={(e) => setFeaturedSearch(e.target.value)}
                  />
                </div>

                <SmartCarousel wheel className="mb-6" key={featured.length}>
                  {filteredFeatures.map((f) => (
                    <CarouselItem key={f.id} className="basis-auto pl-3">
                      <FeaturedCard
                        key={f.id}
                        item={f}
                        onEdit={() => openEditModal(f)}
                        onDelete={() => openDeleteModal(f)}
                      />
                    </CarouselItem>
                  ))}
                </SmartCarousel>

                <DataTable<ServiceValues>
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
