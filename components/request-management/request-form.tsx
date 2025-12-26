import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestSchema } from "@/lib/validations/request-salon";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { changedValues, convertOpeningHoursToDatabase } from "@/lib/utils";
import { organization, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

import { requestSalon, updateSalon } from "@/actions/salon-actions";
import { openingHoursConfig } from "@/utils/constant";
import { Label } from "../ui/label";
import z from "zod";
import { Loader } from "lucide-react";

export type FormValues = z.infer<typeof requestSchema>;

interface RequestSalonFormProps {
  salonId?: string;
  defaultValues?: Partial<FormValues>;
  type?: "edit" | "request";
  setIsModalOpen?: (isOpen: boolean) => void;
}

function RequestSalonForm({
  salonId,
  defaultValues,
  type = "request",
  setIsModalOpen,
}: RequestSalonFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const session = useSession();

  const form = useForm<FormValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      salonName: defaultValues?.salonName ?? "",
      address: defaultValues?.address ?? "",
      phone: defaultValues?.phone ?? "",
      email: defaultValues?.email ?? "",
      description: defaultValues?.description ?? "",
      openingHours: defaultValues?.openingHours ?? {
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

  if (!session || !session.data?.user) {
    redirect("/authentication");
  }

  async function onSubmit(values: FormValues) {
    setIsLoading(true);

    const openingHours = convertOpeningHoursToDatabase(values.openingHours);
    const baseline: Partial<FormValues> = {
      salonName: defaultValues?.salonName,
      address: defaultValues?.address,
      phone: defaultValues?.phone,
      email: defaultValues?.email,
      description: defaultValues?.description,
      openingHours: defaultValues?.openingHours, // may be undefined, which is fine in Partial<FormValues>
    };
    const submittedValues = { ...values };

    if (type === "edit") {
      const changedFields = changedValues<Partial<FormValues>>(
        baseline,
        submittedValues
      );

      if (Object.keys(changedFields).length === 0) {
        toast.info("No changes detected");
        setIsLoading(false);
        return;
      }

      try {
        if (!salonId) {
          toast.error("Salon ID is missing");
          setIsLoading(false);
          return;
        }
        await updateSalon(salonId, changedFields);
        toast.success("Salon updated successfully!");
        router.refresh();
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to update salon");
      } finally {
        setIsLoading(false);
        if (setIsModalOpen) setIsModalOpen(false);
      }
      return;
    }

    const slug = values.salonName
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    const { data, error } = await organization.checkSlug({
      slug,
    });

    if (!data) {
      toast.error(error?.message || "name already exists");
      setIsLoading(false);
      return;
    }

    try {
      const newSalon = await requestSalon({
        name: values.salonName,
        address: values.address,
        phone: values.phone,
        email: values.email,
        description: values.description,
        openingHours,
      });

      if (!newSalon) {
        throw new Error("Failed to request salon");
      }

      toast.success("Salon successfully requested!");

      form.reset();
      router.push(`/request-salon-management/${newSalon.id}`);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    Contact Phone <span className="text-red-500">*</span>
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
                    Contact Email <span className="text-red-500">*</span>
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
                  const closed = field.value ?? day.defaultClosed ?? false;

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
            className="text-sm font-semibold text-gray-900 dark:text-white cursor-pointer"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="bg-primary text-background-dark hover:bg-primary/90 cursor-pointer"
          >
            {isLoading && <Loader className="w-4 h-4 animate-spin" />}
            {type === "edit" ? "Update Salon" : "Request Salon"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default RequestSalonForm;
