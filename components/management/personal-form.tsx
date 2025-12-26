"use client";

import { set, z } from "zod";
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
import {
  PersonInfoFormValues,
  personInfoSchema,
} from "@/lib/validations/staff-management";
import { useState, useTransition } from "react";
import { Spinner } from "../ui/spinner";
import Modal from "../common/modal";
import { removeSalon } from "@/actions/salon-actions";

type PersonalInfoFormProps = {
  staffId: string;
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
  onSave: (values: PersonInfoFormValues) => void;
  onDelete?: (id: string) => void;
  onDeleteSalon?: (id: string) => void;

  role?: string;
};

export function PersonalInfoForm({
  staffId,
  name,
  avatar,
  phone,
  email,
  onSave,
  onDelete,
  onDeleteSalon,
  role,
}: PersonalInfoFormProps) {
  const form = useForm<PersonInfoFormValues>({
    resolver: zodResolver(personInfoSchema),
    defaultValues: {
      firstName: name.split(" ")[0] ?? "",
      lastName: name.split(" ").slice(1).join(" ") ?? "",
      phone: phone ?? "",
      email: email ?? "",
    },
    mode: "onBlur",
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSalonDeleteModal, setOpenSalonDeleteModal] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [pendingAction, setPendingAction] = useState<
    "delete" | "save" | "delete salon" | null
  >(null);

  function handleDeleteClick() {
    setPendingAction("delete");
    startTransition(() => {
      onDelete?.(staffId);
    });
    setOpenDeleteModal(false);
  }
  function handleDeleteSalonClick() {
    setPendingAction("delete salon");
    startTransition(() => {
      onDeleteSalon?.(staffId);
    });
    setOpenSalonDeleteModal(false);
  }

  return (
    <>
      <Modal
        open={openDeleteModal}
        onOpenChange={setOpenDeleteModal}
        title="Deleting Staff Member"
        description="Are you sure you want to remove this staff member? This action cannot be undone."
      >
        <div className="flex items-center justify-end gap-3">
          <Button onClick={() => setOpenDeleteModal(false)}>
            <span>Cancel</span>
          </Button>
          <Button
            variant={"destructive"}
            disabled={isPending && pendingAction === "delete"}
            onClick={handleDeleteClick}
          >
            {isPending && pendingAction === "delete" && (
              <Spinner className="mr-2" />
            )}
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </Modal>
      <Modal
        open={openSalonDeleteModal}
        onOpenChange={setOpenSalonDeleteModal}
        title="Deleting Salon"
        description="Are you sure you want to remove this salon? This action cannot be undone."
      >
        <div className="flex items-center justify-end gap-3">
          <Button onClick={() => setOpenSalonDeleteModal(false)}>
            <span>Cancel</span>
          </Button>
          <Button
            variant={"destructive"}
            disabled={isPending && pendingAction === "delete salon"}
            onClick={handleDeleteSalonClick}
          >
            {isPending && pendingAction === "delete salon" && (
              <Spinner className="mr-2" />
            )}
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </Modal>

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
            <Input id="photo" type="file" className="mt-2" disabled />
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
              {role === "owner" && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => setOpenSalonDeleteModal(true)}
                  disabled={isPending && pendingAction === "delete salon"}
                >
                  {isPending && pendingAction === "delete salon" && (
                    <Spinner className="mr-2" />
                  )}
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove Salon
                </Button>
              )}
              {role === "member" && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => setOpenDeleteModal(true)}
                  disabled={isPending && pendingAction === "delete"}
                >
                  {isPending && pendingAction === "delete" && (
                    <Spinner className="mr-2" />
                  )}
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove Staff Member
                </Button>
              )}
              <Button
                type="submit"
                onClick={() => {
                  setPendingAction("save");
                  startTransition(() => {
                    form.handleSubmit(onSave)();
                  });
                }}
                disabled={isPending && pendingAction === "save"}
              >
                {isPending && pendingAction === "save" && (
                  <Spinner className="mr-2" />
                )}
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
