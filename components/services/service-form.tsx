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

type AddServiceValues = z.infer<typeof addServiceSchema>;

interface ServiceFormProps {
  onCancel: () => void;
  defaultValues?: Partial<AddServiceValues>;
}

export default function ServiceForm({
  onCancel,
  defaultValues,
}: ServiceFormProps) {
  const addServiceForm = useForm<AddServiceValues>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: defaultValues?.title ?? "",
      category: defaultValues?.category ?? "Haircuts",
      durationMin: defaultValues?.durationMin ?? 45,
      price: defaultValues?.price ?? 50,
      image: defaultValues?.image ?? "",
    },
  });

  const onSubmit = (values: AddServiceValues) => {
    console.log("Add Service Form Values:", values);
  };

  return (
    <Form {...addServiceForm}>
      <form
        className="space-y-4"
        onSubmit={addServiceForm.handleSubmit(onSubmit)}
      >
        {/* TITLE */}
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

        {/* CATEGORY + DURATION */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={addServiceForm.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.filter((c) => c !== "All").map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  <Input type="number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* PRICE + IMAGE */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={addServiceForm.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

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

        <div className="flex gap-2 justify-end">
          <Button variant="secondary" type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </Form>
  );
}
