import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface RejectionFormProps {
  rejectSalonRequest: (salonId: string, reason: string) => void;
  selectedSalonIdId: string;
  handlingLoading: boolean;
}

const rejectionSchema = z.object({
  reason: z.string().min(10, "Reason must be at least 10 characters long"),
});

function RejectionForm({
  rejectSalonRequest,
  selectedSalonIdId,
  handlingLoading,
}: RejectionFormProps) {
  const form = useForm<z.infer<typeof rejectionSchema>>({
    resolver: zodResolver(rejectionSchema),
    defaultValues: {
      reason: "",
    },
  });

  function onSubmit(values: z.infer<typeof rejectionSchema>) {
    rejectSalonRequest(selectedSalonIdId, values.reason);
  }

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Enter reason for rejection"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="self-end cursor-pointer"
              disabled={handlingLoading}
            >
              {handlingLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default RejectionForm;
