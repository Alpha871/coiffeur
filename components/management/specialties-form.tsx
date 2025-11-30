"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  SpecialtiesFormValues,
  specialtiesSchema,
} from "@/lib/validations/staff-management";

interface SpecialtiesFormProps {
  skills: { name: string; id: string; specialty: boolean }[] | null | undefined;
  // notes: string | null | undefined;
  onSave: (values: SpecialtiesFormValues) => void;
}

export function SpecialtiesForm({
  skills,
  // notes,
  onSave,
}: SpecialtiesFormProps) {
  const form = useForm<SpecialtiesFormValues>({
    resolver: zodResolver(specialtiesSchema),
    defaultValues: {
      skills: skills ?? [],
      notes: "",
    },
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSave)}>
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialties</FormLabel>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills &&
                  skills.map((s) => {
                    const current =
                      (field.value ?? []).find((x) => x.id === s.id) ?? s;

                    const checked = !!current.specialty;

                    return (
                      <label
                        key={s.id}
                        className={cn(
                          "flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors",
                          checked
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(v) => {
                            const isOn = Boolean(v);
                            const prev = field.value ?? [];

                            // Update or insert this skill with new `specialty` value
                            const next = (() => {
                              const exists = prev.some((x) => x.id === s.id);
                              if (!exists) {
                                return [...prev, { ...s, specialty: isOn }];
                              }
                              return prev.map((x) =>
                                x.id === s.id ? { ...x, specialty: isOn } : x
                              );
                            })();

                            field.onChange(next);
                          }}
                        />
                        <span className="text-sm font-medium">{s.name}</span>
                      </label>
                    );
                  })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  className="mt-2 min-h-[96px]"
                  placeholder="Additional details, certifications, preferred products…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Save Specialties</Button>
        </div>
      </form>
    </Form>
  );
}
