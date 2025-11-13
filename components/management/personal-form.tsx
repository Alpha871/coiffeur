"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const infoSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().optional(),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
});

type InfoFormValues = z.infer<typeof infoSchema>;

type PersonalInfoFormProps = {
  staffId: string;
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
  onSave: (values: InfoFormValues) => void;
  onDelete: (id: string) => void;
};

export function PersonalInfoForm({
  staffId,
  name,
  avatar,
  phone,
  email,
  onSave,
  onDelete,
}: PersonalInfoFormProps) {
  const form = useForm<InfoFormValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      firstName: name.split(" ")[0] ?? "",
      lastName: name.split(" ").slice(1).join(" ") ?? "",
      phone: phone ?? "",
      email: email ?? "",
    },
    mode: "onBlur",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="w-full">
          <Label htmlFor="photo">Profile Photo</Label>
          <Input id="photo" type="file" className="mt-2" />
          <p className="mt-1 text-xs text-muted-foreground">
            PNG, JPG, GIF (max. 800×800 px).
          </p>
        </div>
      </div>

      <Form {...form}>
        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          onSubmit={form.handleSubmit(onSave)}
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input className="mt-2" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="destructive"
              onClick={() => onDelete(staffId)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Staff
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
