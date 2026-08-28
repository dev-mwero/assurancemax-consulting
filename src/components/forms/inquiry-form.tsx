"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { type InquiryInput, InquirySchema } from "@/lib/validations/inquiries";

type FormState = "idle" | "loading" | "success" | "error";

const preferredContactOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
] as const;

export function InquiryForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<InquiryInput>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      serviceInterest: "",
      preferredContact: "email",
      message: "",
    },
  });

  async function onSubmit(data: InquiryInput) {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/v1/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error?.message || "Something went wrong. Please try again.",
        );
      }

      setFormState("success");
      reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (formState === "success") {
    return (
      <div className="animate-scale-in rounded-2xl glass gradient-border-top p-8 text-center shadow-xl">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary/10 animate-pulse-glow">
          <CheckCircle className="size-8 text-secondary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Inquiry submitted successfully
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your interest. We will be in touch shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setFormState("idle")}
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-name"
            {...register("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            className="mt-2"
          />
          {errors.name && (
            <p
              id="inquiry-name-error"
              className="mt-1.5 text-xs text-destructive"
            >
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="inquiry-email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
            className="mt-2"
          />
          {errors.email && (
            <p
              id="inquiry-email-error"
              className="mt-1.5 text-xs text-destructive"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-organization">Organisation</Label>
        <Input
          id="inquiry-organization"
          {...register("organization")}
          placeholder="Your organisation name"
          className="mt-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-service">
            Service Interest <span className="text-destructive">*</span>
          </Label>
          <Select<{ value: string }>
            onValueChange={(selected) => {
              if (
                selected &&
                typeof selected === "object" &&
                "value" in selected
              ) {
                setValue("serviceInterest", selected.value);
              }
            }}
          >
            <SelectTrigger
              id="inquiry-service"
              className="mt-2"
              aria-describedby={
                errors.serviceInterest ? "inquiry-service-error" : undefined
              }
            >
              <SelectValue placeholder="Select a service area" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceInterest && (
            <p
              id="inquiry-service-error"
              className="mt-1.5 text-xs text-destructive"
            >
              {String(errors.serviceInterest.message)}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="inquiry-preferred-contact">
            Preferred Contact <span className="text-destructive">*</span>
          </Label>
          <Select<{ value: string }>
            onValueChange={(selected) => {
              if (
                selected &&
                typeof selected === "object" &&
                "value" in selected
              ) {
                setValue(
                  "preferredContact",
                  selected.value as InquiryInput["preferredContact"],
                );
              }
            }}
          >
            <SelectTrigger
              id="inquiry-preferred-contact"
              className="mt-2"
              aria-describedby={
                errors.preferredContact
                  ? "inquiry-preferred-contact-error"
                  : undefined
              }
            >
              <SelectValue placeholder="How should we contact you?" />
            </SelectTrigger>
            <SelectContent>
              {preferredContactOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferredContact && (
            <p
              id="inquiry-preferred-contact-error"
              className="mt-1.5 text-xs text-destructive"
            >
              {errors.preferredContact.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="inquiry-message"
          {...register("message")}
          placeholder="Tell us about your needs..."
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "inquiry-message-error" : undefined
          }
          className="mt-2"
        />
        {errors.message && (
          <p
            id="inquiry-message-error"
            className="mt-1.5 text-xs text-destructive"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {formState === "error" && errorMessage && (
        <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive animate-fade-in-up">
          <AlertCircle className="size-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === "loading"}
        className="w-full sm:w-auto"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Submit Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
