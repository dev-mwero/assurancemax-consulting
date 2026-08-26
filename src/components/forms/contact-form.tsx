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
import { type ContactInput, ContactSchema } from "@/lib/validations/contact";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/v1/contact", {
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
      <div className="rounded-xl border bg-secondary/5 p-8 text-center">
        <CheckCircle className="mx-auto size-12 text-secondary" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message sent successfully
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for contacting us. We will respond promptly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setFormState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+254 XXX XXX XXX"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1.5"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="organization">Organisation</Label>
          <Input
            id="organization"
            {...register("organization")}
            placeholder="Your organisation name"
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Service Required</Label>
        <Select<{ value: string }>
          onValueChange={(selected) => {
            if (
              selected &&
              typeof selected === "object" &&
              "value" in selected
            ) {
              setValue("service", selected.value);
            }
          }}
        >
          <SelectTrigger
            id="service"
            className="mt-1.5"
            aria-describedby={errors.service ? "service-error" : undefined}
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
        {errors.service && (
          <p id="service-error" className="mt-1 text-xs text-destructive">
            {String(errors.service.message)}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your needs..."
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {formState === "error" && errorMessage && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
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
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
