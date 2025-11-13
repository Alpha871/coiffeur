"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import {
  EMPLOYEE_LEVELS,
  EMPLOYEE_STATUSES,
  EXPERTISE_OPTIONS,
  formSchema,
} from "@/lib/validations/employee";
import { Checkbox } from "../ui/checkbox";

export type EmployeeFormValues = z.infer<typeof formSchema>;

type Props = {
  defaultValues?: Partial<EmployeeFormValues> & { image?: File | string };
  className?: string;
};

export function EmployeeForm({ defaultValues, className }: Props) {
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      lastname: defaultValues?.lastname ?? "",
      expertise:
        (defaultValues?.expertise as EmployeeFormValues["expertise"]) ??
        "Haircut",
      status:
        (defaultValues?.status as EmployeeFormValues["status"]) ?? "on_duty",
      level:
        (defaultValues?.level as EmployeeFormValues["level"]) ??
        "Senior Stylist",
      image: defaultValues?.image,
    },
  });

  // preview supports default URL or selected File
  const [preview, setPreview] = React.useState<string | null>(() => {
    const img = defaultValues?.image;
    return typeof img === "string" ? img : null;
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    form.setValue("image", file, { shouldValidate: false });
  };

  const submit = (vals: EmployeeFormValues) => {
    console.log("Employee form submitted:", vals);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className={className ?? "space-y-6"}
      >
        {/* image */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <Avatar className="h-20 w-20">
              {preview ? (
                <AvatarImage src={preview} alt="Employee image" />
              ) : (
                <AvatarFallback>
                  {(form.watch("name")?.[0] ?? "?").toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <label
              htmlFor="employee-image"
              className="absolute bottom-0 right-0 rounded-full bg-primary text-white p-1 cursor-pointer hover:bg-primary/90"
              title="Upload image"
            >
              <Camera className="h-4 w-4" />
            </label>
            <input
              id="employee-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Upload a profile photo (optional)
          </p>
        </div>

        {/* name + lastname */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* expertise: radio buttons (single choice) */}
        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Expertise</FormLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXPERTISE_OPTIONS.map((opt) => {
                  const checked = (field.value ?? []).includes(opt);
                  return (
                    <div
                      key={opt}
                      className="flex items-center space-x-3 rounded-md border p-3"
                    >
                      <FormControl>
                        <Checkbox
                          id={`exp-${opt}`}
                          checked={checked}
                          // onCheckedChange can be boolean | "indeterminate"
                          onCheckedChange={(isChecked) => {
                            const prev = new Set(field.value ?? []);
                            if (isChecked) prev.add(opt);
                            else prev.delete(opt);
                            field.onChange(Array.from(prev));
                          }}
                        />
                      </FormControl>
                      <label
                        htmlFor={`exp-${opt}`}
                        className="text-sm leading-none"
                      >
                        {opt}
                      </label>
                    </div>
                  );
                })}
              </div>
              <FormDescription>
                Select one or more areas of expertise.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status + level */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EMPLOYEE_STATUSES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EMPLOYEE_LEVELS.map((l) => (
                      <SelectItem key={l} value={l}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button type="reset" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Save Employee</Button>
        </div>
      </form>
    </Form>
  );
}
