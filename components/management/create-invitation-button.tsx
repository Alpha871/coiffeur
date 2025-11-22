"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { LoadingSwap } from "../common/loading-swap";
import Modal from "../common/modal";
import { Plus } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { sendInvitation } from "@/oop/infrastructure/user-action";
import { authClient } from "@/lib/auth-client";

const createInviteSchema = z.object({
  email: z.email().min(1).trim(),
  role: z.enum(["member", "admin"]),
});

type CreateInviteForm = z.infer<typeof createInviteSchema>;

interface CreateInviteButtonProps {
  type?: "plus" | "default";
}

export function CreateInviteButton({
  type = "default",
}: CreateInviteButtonProps) {
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  // const organizationId = searchParams.get("orgId");

  const { data: activeOrganization } = authClient.useActiveOrganization();

  const form = useForm<CreateInviteForm>({
    resolver: zodResolver(createInviteSchema),
    defaultValues: {
      email: "",
      role: "member",
    },
  });

  const { isSubmitting } = form.formState;

  async function handleCreateInvite(data: CreateInviteForm) {
    try {
      await sendInvitation(
        data.email,
        data.role,
        id as string,
        activeOrganization?.id as string
      );
      toast.success("Invitation sent successfully");
      form.reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to invite user");
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      title="Invite User"
      description="Invite a user to collaborate with your team."
      trigger={
        type === "plus" ? (
          <Button
            className="h-12 px-4 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Plus className=" w-4 h-4" />
            Add
          </Button>
        ) : (
          <Button onClick={() => setOpen(true)}>Invite User</Button>
        )
      }
      size="md"
      preventOutsideClose={isSubmitting}
      footer={
        <div className="flex  items-center justify-end w-full">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
            className="mr-2 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer"
            onClick={form.handleSubmit(handleCreateInvite)}
          >
            <LoadingSwap isLoading={isSubmitting}>Invite</LoadingSwap>
          </Button>
        </div>
      }
    >
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleCreateInvite)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="member">Member</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </Modal>
  );
}
