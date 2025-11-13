"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const specialtiesSchema = z.object({
  skills: z.array(z.string()).min(1, "Select at least one specialty"),
  primarySkill: z.string().min(1, "Select a primary specialty"),
  notes: z.string().max(500, "Max 500 characters").optional().or(z.literal("")),
});

type SpecialtiesFormValues = z.infer<typeof specialtiesSchema>;

const SKILL_OPTIONS = [
  "Haircut",
  "Hair Color",
  "Highlights",
  "Balayage",
  "Blowout",
  "Barbering",
  "Nails",
  "Makeup",
  "Skincare",
];

type SpecialtiesFormProps = {
  skills?: string[];
  primarySkill?: string;
  notes?: string;
  onSave: (values: SpecialtiesFormValues) => void;
};

export function SpecialtiesForm({
  skills,
  primarySkill,
  notes,
  onSave,
}: SpecialtiesFormProps) {
  const form = useForm<SpecialtiesFormValues>({
    resolver: zodResolver(specialtiesSchema),
    defaultValues: {
      skills: skills ?? [],
      primarySkill: primarySkill ?? "",
      notes: notes ?? "",
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
                {SKILL_OPTIONS.map((s) => {
                  const checked = field.value?.includes(s);
                  return (
                    <label
                      key={s}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors",
                        checked
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <Checkbox
                        checked={!!checked}
                        onCheckedChange={(v) => {
                          const isOn = Boolean(v);
                          if (isOn) field.onChange([...(field.value ?? []), s]);
                          else
                            field.onChange(
                              (field.value ?? []).filter((x) => x !== s)
                            );
                        }}
                      />
                      <span className="text-sm font-medium">{s}</span>
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
          name="primarySkill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Specialty</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose primary specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {(form.getValues("skills") ?? []).length
                      ? (form.getValues("skills") ?? []).map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))
                      : SKILL_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <p className="text-xs text-muted-foreground mt-1">
                If none selected above, full list is shown.
              </p>
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
