"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { requestSchema } from "@/lib/validations/request-salon";
import { convertOpeningHoursToDatabase } from "@/lib/utils";

import { useState } from "react";
import { toast } from "sonner";

import { Salon } from "@/oop/domain/salon";

import { openingHoursConfig } from "@/utils/constant";
import { requestSalon } from "@/oop/infrastructure/salon-actions";

type FormValues = z.infer<typeof requestSchema>;

export default function CreateSalonForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      salonName: "",
      address: "",
      phone: "",
      email: "",
      description: "",
      openingHours: {
        mon: { dayOfWeek: 0, start: "09:00", end: "18:00", closed: false },
        tue: { dayOfWeek: 1, start: "09:00", end: "18:00", closed: false },
        wed: { dayOfWeek: 2, start: "09:00", end: "18:00", closed: false },
        thu: { dayOfWeek: 3, start: "09:00", end: "20:00", closed: false },
        fri: { dayOfWeek: 4, start: "09:00", end: "20:00", closed: false },
        sat: { dayOfWeek: 5, start: "10:00", end: "16:00", closed: false },
        sun: { dayOfWeek: 6, start: "09:00", end: "18:00", closed: true },
      },
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    const openingHours = convertOpeningHoursToDatabase(values.openingHours);

    try {
      const salonData = new Salon(
        values.salonName,
        values.address,
        values.phone,
        values.email,
        values.description || "",
        openingHours
      );

      if (!salonData.isComplete()) {
        throw new Error("Please fill in all required fields correctly.");
      }

      const { success, message } = await requestSalon(salonData.toJSON());

      if (!success) {
        throw new Error(message);
      }

      toast.success(message);

      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to request salon"
      );
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return (
    <main className="w-full py-10 md:py-16">
      <div className="flex flex-col items-center gap-8 px-4">
        {/* Title + description */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Request Your Salon
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Fill in the details below to set up your salon profile.
          </p>
        </div>

        {/* Card + form */}
        <Card className="w-full max-w-2xl border-gray-200 dark:border-[#234836] bg-white dark:bg-background-dark">
          <CardContent className="p-6 sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Salon details */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Salon Details
                  </h2>

                  <FormField
                    control={form.control}
                    name="salonName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>
                          Salon Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., The Modern Cut"
                            className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>
                          Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123 Main Street, Anytown, USA"
                            className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>
                            Contact Phone{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>
                            Contact Email{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="contact@moderncut.com"
                              className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={3}
                            placeholder="Tell us about your salon's specialty, atmosphere, and services."
                            className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Opening hours */}
                <div className="space-y-6 border-t border-gray-200 dark:border-[#234836] pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Opening Hours
                  </h2>

                  <div className="space-y-4">
                    {/* header row */}
                    <div className="grid grid-cols-10 items-center gap-2 sm:gap-4 text-sm">
                      <div className="col-span-3 font-medium text-gray-900 dark:text-gray-200">
                        Day
                      </div>
                      <div className="col-span-3 font-medium text-gray-900 dark:text-gray-200">
                        Open Time
                      </div>
                      <div className="col-span-3 font-medium text-gray-900 dark:text-gray-200">
                        Close Time
                      </div>
                      <div className="col-span-1 text-center font-medium text-gray-900 dark:text-gray-200">
                        Closed
                      </div>
                    </div>

                    {openingHoursConfig.map((day) => (
                      <FormField
                        key={day.key}
                        control={form.control}
                        name={`openingHours.${day.key}.closed`}
                        render={({ field }) => {
                          const closed =
                            field.value ?? day.defaultClosed ?? false;

                          return (
                            <div className="grid grid-cols-10 items-center gap-2 sm:gap-4">
                              <Label
                                htmlFor={`${day.key}-closed`}
                                className="col-span-3 text-sm font-medium text-gray-600 dark:text-gray-300"
                              >
                                {day.label}
                              </Label>

                              {/* start time */}
                              <FormField
                                control={form.control}
                                name={`openingHours.${day.key}.start`}
                                render={({ field: startField }) => (
                                  <FormItem className="col-span-3">
                                    <FormControl>
                                      <Input
                                        type="time"
                                        disabled={closed}
                                        className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
                                        {...startField}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* end time */}
                              <FormField
                                control={form.control}
                                name={`openingHours.${day.key}.end`}
                                render={({ field: endField }) => (
                                  <FormItem className="col-span-3">
                                    <FormControl>
                                      <Input
                                        type="time"
                                        disabled={closed}
                                        className="bg-input-light dark:bg-input-dark text-gray-900 dark:text-white ring-1 ring-inset ring-border-light dark:ring-border-dark focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
                                        {...endField}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* closed checkbox */}
                              <FormItem className="col-span-1 flex justify-center">
                                <FormControl>
                                  <Checkbox
                                    id={`${day.key}-closed`}
                                    checked={closed}
                                    onCheckedChange={(checked) =>
                                      field.onChange(!!checked)
                                    }
                                    className="border-gray-300 dark:border-gray-600 bg-input-light dark:bg-input-dark data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            </div>
                          );
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-x-4 pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-sm font-semibold text-gray-900 dark:text-white"
                    onClick={() => form.reset()}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="bg-primary text-background-dark hover:bg-primary/90"
                  >
                    {isLoading ? "Requesting..." : "Request Salon"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
