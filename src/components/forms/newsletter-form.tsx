"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type NewsletterInput,
  NewsletterSchema,
} from "@/lib/validations/newsletter";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(NewsletterSchema),
  });

  async function onSubmit(_data: NewsletterInput) {
    setFormState("loading");

    try {
      const response = await fetch("/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error?.message || "Something went wrong. Please try again.",
        );
      }

      setFormState("success");
      reset();
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-secondary">
        <CheckCircle className="size-4" />
        Thank you for subscribing.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <div className="flex-1">
        <Label htmlFor="newsletter-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="newsletter-email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
        />
        {errors.email && (
          <p id="newsletter-error" className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={formState === "loading"}
        className="shrink-0"
      >
        {formState === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <Send className="size-4" />
            Subscribe
          </>
        )}
      </Button>
      {formState === "error" && (
        <div className="flex items-center gap-2 text-xs text-destructive">
          <AlertCircle className="size-3.5" />
          Please try again.
        </div>
      )}
    </form>
  );
}
