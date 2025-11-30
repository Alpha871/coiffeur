"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  CATEGORIES,
  ServiceSchema,
  ServiceValues,
} from "@/lib/validations/service";
import {
  addService,
  editService,
} from "@/oop/infrastructure/service-repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";
import { capitalize, changedValues } from "@/lib/utils";

interface ServiceFormProps {
  setFeatured: React.Dispatch<React.SetStateAction<ServiceValues[]>>;
  defaultValues?: Partial<ServiceValues>;
  type?: "add" | "edit";
  setServices: React.Dispatch<React.SetStateAction<ServiceValues[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ServiceForm({
  defaultValues,
  type = "add",
  setServices,
  setFeatured,
  setOpenModal,
}: ServiceFormProps) {
  const { id: salonId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const addServiceForm = useForm<ServiceValues>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      id: defaultValues?.id ?? undefined,
      title: defaultValues?.title ?? "",
      category: defaultValues?.category ?? "",
      durationMin: defaultValues?.durationMin ?? 5,
      price: defaultValues?.price ?? 0,
      image: defaultValues?.image ?? "",
      description: defaultValues?.description ?? "",
    },
  });

  const onSubmit = async (values: ServiceValues) => {
    if (!salonId) {
      toast.error("Salon ID is missing. Cannot add service.");
      return;
    }

    try {
      setIsLoading(true);
      if (type === "edit") {
        // Edit service logic to be implemented

        const vals = changedValues<ServiceValues>(defaultValues || {}, values);

        if (!defaultValues?.id) {
          toast.error("Service ID is missing. Cannot edit service.");
          return;
        }

        const newVal = await editService(
          defaultValues.id as string,
          vals.title || undefined,
          vals.category || undefined,
          vals.durationMin || undefined,
          vals.price || undefined,
          vals.description || undefined,
          vals.image || undefined
        );

        const updatedService: ServiceValues = {
          id: newVal.id as string,
          title: newVal.service.name,
          category: capitalize(newVal.service.category),
          durationMin: newVal.service.durationMin,
          price: newVal.service.price,
          image: newVal.service.image || undefined,
          updatedAt: newVal.service.updatedAt || undefined,
          createdAt: newVal.service.createdAt || undefined,
        };

        console.log({ updatedService });
        setServices((prev) =>
          [
            updatedService,
            ...prev!.filter((s) => s.id !== defaultValues?.id),
          ].sort(
            (a, b) =>
              new Date(b.updatedAt!).getTime() -
              new Date(a.updatedAt!).getTime()
          )
        );

        setFeatured((prev) =>
          [
            updatedService,
            ...prev!.filter((s) => s.id !== defaultValues?.id),
          ].sort(
            (a, b) =>
              new Date(b.updatedAt!).getTime() -
              new Date(a.updatedAt!).getTime()
          )
        );

        toast.success("Service updated successfully!");
        setOpenModal(false);
        return;
      }

      const newService = await addService(
        salonId as string,
        values.title,
        values.category,
        values.durationMin,
        values.price,
        values.description,
        values.image
      );
      const addedService: ServiceValues = {
        id: newService.id,
        title: newService.service.name,
        category: capitalize(newService.service.category),
        durationMin: newService.service.durationMin,
        price: Number(newService.service.price.toFixed(2)),
        image: newService.service.image || undefined,
      };

      setServices((prev) =>
        [...prev!, addedService].sort(
          (a, b) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        )
      );
      setFeatured((prev) =>
        [...prev!, addedService].sort(
          (a, b) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        )
      );
      toast.success("Service added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add service. Please try again.");
    } finally {
      setIsLoading(false);
      setOpenModal(false);
    }

    addServiceForm.reset();
  };

  return (
    <Form {...addServiceForm}>
      <form
        className="space-y-4"
        onSubmit={addServiceForm.handleSubmit(onSubmit)}
      >
        {/* TITLE */}
        <div className="w-full">
          <FormField
            control={addServiceForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* CATEGORY + DURATION */}
        <div className="w-full">
          <FormField
            control={addServiceForm.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.filter((c) => c !== "All").map((c) => (
                      <SelectItem key={c} value={c}>
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={addServiceForm.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={addServiceForm.control}
            name="durationMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (minutes)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={addServiceForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={6} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* PRICE + IMAGE */}
        <div className="">
          <FormField
            control={addServiceForm.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* PREVIEW */}
        {addServiceForm.watch("image") && (
          <div className="rounded overflow-hidden border">
            <div
              className="aspect-video bg-cover bg-center"
              style={{
                backgroundImage: `url(${addServiceForm.watch("image")})`,
              }}
            />
          </div>
        )}

        <div className="flex flex-col-reverse sm:flex-row gap-2 justify-end">
          <Button
            variant="secondary"
            type="button"
            onClick={() => setOpenModal(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Spinner className="mr-2" />}
            {type === "add" ? "Add Service" : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
