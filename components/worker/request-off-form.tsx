"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, differenceInCalendarDays } from "date-fns";
import { CalendarIcon, Send, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { requestOffSchema } from "@/lib/validations/employee";

// Schema - Fix: Remove .default() and make halfDay explicitly boolean

type RequestOffFormData = z.infer<typeof requestOffSchema>;

const LEAVE_TYPES = [
  {
    value: "Paid Leave" as const,
    label: "Paid Leave",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "Sick Leave" as const,
    label: "Sick Leave",
    color: "bg-red-100 text-red-800",
  },
  {
    value: "Unpaid Leave" as const,
    label: "Unpaid Leave",
    color: "bg-gray-100 text-gray-800",
  },
  {
    value: "Personal Leave" as const,
    label: "Personal Leave",
    color: "bg-blue-100 text-blue-800",
  },
] as const;

interface RequestOffFormProps {
  defaultValues?: Partial<RequestOffFormData>;
  className?: string;
}

export function RequestOffForm({
  defaultValues,
  className,
}: RequestOffFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RequestOffFormData>({
    resolver: zodResolver(requestOffSchema),
    defaultValues: {
      employeeName: defaultValues?.employeeName ?? "",
      employeeId: defaultValues?.employeeId ?? "",
      leaveType: defaultValues?.leaveType ?? "Paid Leave",
      startDate: defaultValues?.startDate,
      endDate: defaultValues?.endDate,
      halfDay: defaultValues?.halfDay ?? false,
      reason: defaultValues?.reason ?? "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = form;

  // Watch values for calculations
  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const halfDay = watch("halfDay");
  const leaveType = watch("leaveType");

  // Calculate total days
  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0;

    const daysDiff = differenceInCalendarDays(endDate, startDate) + 1;
    const totalDays = halfDay ? daysDiff - 0.5 : daysDiff;

    return Math.max(0, totalDays);
  };

  const totalDays = calculateTotalDays();

  const handleFormSubmit = async (data: RequestOffFormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        totalDays,
        submittedAt: new Date(),
      };

      console.log({ data });

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedLeaveType = LEAVE_TYPES.find(
    (type) => type.value === leaveType
  );

  return (
    <Card className={cn("w-full max-w-2xl mx-auto", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Time Off Request
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Employee Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="employeeName">Employee Name *</Label>
              <Input
                id="employeeName"
                placeholder="Enter full name"
                {...register("employeeName")}
                className={errors.employeeName ? "border-red-500" : ""}
              />
              {errors.employeeName && (
                <p className="text-sm text-red-600">
                  {errors.employeeName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                placeholder="EMP-001"
                {...register("employeeId")}
              />
              {errors.employeeId && (
                <p className="text-sm text-red-600">
                  {errors.employeeId.message}
                </p>
              )}
            </div>
          </div>

          {/* Leave Type */}
          <div className="space-y-2">
            <Label>Leave Type *</Label>
            <Select
              value={leaveType}
              onValueChange={(value) =>
                setValue("leaveType", value as RequestOffFormData["leaveType"])
              }
            >
              <SelectTrigger
                className={errors.leaveType ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>
              <SelectContent>
                {LEAVE_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <Badge className={type.color} variant="secondary">
                        {type.label}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.leaveType && (
              <p className="text-sm text-red-600">{errors.leaveType.message}</p>
            )}
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground",
                      errors.startDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => setValue("startDate", date!)}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.startDate && (
                <p className="text-sm text-red-600">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>End Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground",
                      errors.endDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => setValue("endDate", date!)}
                    disabled={(date) => date < (startDate || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.endDate && (
                <p className="text-sm text-red-600">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          {/* Half Day Option */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-0.5">
              <Label className="text-base">Half Day</Label>
              <div className="text-sm text-muted-foreground">
                Subtract 0.5 day from the total duration
              </div>
            </div>
            <Switch
              checked={halfDay}
              onCheckedChange={(checked) => setValue("halfDay", checked)}
            />
          </div>

          {/* Total Days Display */}
          {startDate && endDate && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total Days Requested:</span>
                <Badge variant="outline" className="text-lg font-bold">
                  {totalDays} {totalDays === 1 ? "day" : "days"}
                </Badge>
              </div>
              {selectedLeaveType && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Leave Type:
                  </span>
                  <Badge className={selectedLeaveType.color}>
                    {selectedLeaveType.label}
                  </Badge>
                </div>
              )}
            </div>
          )}

          {/* Reason */}
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Leave *</Label>
            <Textarea
              id="reason"
              placeholder="Please provide a detailed explanation for your time off request..."
              className={cn("min-h-[120px]", errors.reason && "border-red-500")}
              {...register("reason")}
            />
            {errors.reason && (
              <p className="text-sm text-red-600">{errors.reason.message}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              disabled={isSubmitting}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Form
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 sm:ml-auto"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
