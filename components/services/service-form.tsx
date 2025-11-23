"use client";

import * as React from "react";
import { z } from "zod";
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

import { addServiceSchema, CATEGORIES } from "@/lib/validations/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { addService } from "@/oop/infrastructure/service-action";

type AddServiceValues = z.infer<typeof addServiceSchema>;

interface ServiceFormProps {
  onCancel: () => void;
  defaultValues?: Partial<AddServiceValues>;
}

export default function ServiceForm({
  onCancel,
  defaultValues,
}: ServiceFormProps) {
  const { id: salonId } = useParams();

  const addServiceForm = useForm<AddServiceValues>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: defaultValues?.title ?? "",
      category: defaultValues?.category ?? "",
      durationMin: defaultValues?.durationMin ?? 5,
      price: defaultValues?.price ?? 0,
      image: defaultValues?.image ?? "",
    },
  });

  const onSubmit = async (values: AddServiceValues) => {
    console.log("Add Service Form Values:", values);

    if (!salonId) {
      toast.error("Salon ID is missing. Cannot add service.");
      return;
    }

    try {
      const newService = await addService(
        salonId as string,
        values.title,
        values.category,
        values.durationMin,
        values.price,
        values.description,
        values.image
      );
      toast.success("Service added successfully!");

      console.log({ newService });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add service. Please try again.");
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
          <Button variant="secondary" type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add new</Button>
        </div>
      </form>
    </Form>
  );
}
