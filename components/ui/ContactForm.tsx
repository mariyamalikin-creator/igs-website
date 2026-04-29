"use client";

import { useState } from "react";
import Button from "./Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(data: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your full name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Please enter your message.";
  return errors;
}

/** Shared input/textarea classes — swaps border colour on error */
function fieldClass(hasError: boolean) {
  return [
    "w-full rounded px-4 py-3 font-body text-sm text-onyx",
    "placeholder:text-muted/60 transition-colors",
    "focus:outline-none focus:ring-1",
    hasError
      ? "border border-red-400 bg-red-50/40 focus:border-red-400 focus:ring-red-300"
      : "border border-border bg-pearl focus:border-gold focus:ring-gold",
  ].join(" ");
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [apiError, setApiError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  // Track which required fields the user has touched (for blur-time validation)
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleBlur(field: keyof FieldErrors, value: string) {
    setTouched((t) => ({ ...t, [field]: true }));
    // Re-validate just the touched field
    setErrors((prev) => {
      const next = { ...prev };
      if (field === "name") {
        if (!value.trim()) next.name = "Please enter your full name.";
        else delete next.name;
      }
      if (field === "email") {
        if (!value.trim()) next.email = "Please enter your email address.";
        else if (!isValidEmail(value)) next.email = "Please enter a valid email address.";
        else delete next.email;
      }
      if (field === "message") {
        if (!value.trim()) next.message = "Please enter your message.";
        else delete next.message;
      }
      return next;
    });
  }

  function handleChange(field: keyof FieldErrors, value: string) {
    // Clear error live once the field has been touched
    if (!touched[field]) return;
    setErrors((prev) => {
      const next = { ...prev };
      if (field === "name") {
        if (!value.trim()) next.name = "Please enter your full name.";
        else delete next.name;
      }
      if (field === "email") {
        if (!value.trim()) next.email = "Please enter your email address.";
        else if (!isValidEmail(value)) next.email = "Please enter a valid email address.";
        else delete next.email;
      }
      if (field === "message") {
        if (!value.trim()) next.message = "Please enter your message.";
        else delete next.message;
      }
      return next;
    });
  }

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const fieldErrors = validate(data);
    // Mark all required fields as touched on submit attempt
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setApiError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
          message: data.message,
        }),
      });

      const json = await res.json() as { error?: string };

      if (!res.ok) {
        setApiError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setApiError("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-gold/40 bg-silk px-8 py-10 text-center">
        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
          <span className="text-gold text-xl" aria-hidden="true">✓</span>
        </div>
        <h3 className="font-display font-bold text-navy text-xl mb-2">
          Message Received
        </h3>
        <p className="font-body text-muted text-sm leading-relaxed">
          Thank you for reaching out. A member of our team will be in touch
          with you shortly.
        </p>
        <button
          onClick={() => { setStatus("idle"); setErrors({}); setTouched({}); setApiError(null); }}
          className="mt-6 font-body text-sm text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block font-body text-sm font-medium text-navy mb-1.5"
        >
          Full Name <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-describedby={errors.name ? "error-name" : undefined}
          aria-invalid={!!errors.name}
          className={fieldClass(!!errors.name)}
          onBlur={(e) => handleBlur("name", e.target.value)}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && (
          <p id="error-name" role="alert" className="mt-1.5 font-body text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block font-body text-sm font-medium text-navy mb-1.5"
        >
          Email Address <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          aria-describedby={errors.email ? "error-email" : undefined}
          aria-invalid={!!errors.email}
          className={fieldClass(!!errors.email)}
          onBlur={(e) => handleBlur("email", e.target.value)}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && (
          <p id="error-email" role="alert" className="mt-1.5 font-body text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone — optional, no validation */}
      <div>
        <label
          htmlFor="contact-phone"
          className="block font-body text-sm font-medium text-navy mb-1.5"
        >
          Phone Number{" "}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 234 567 8900"
          className={fieldClass(false)}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block font-body text-sm font-medium text-navy mb-1.5"
        >
          Message <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Briefly describe how we can help you…"
          aria-describedby={errors.message ? "error-message" : undefined}
          aria-invalid={!!errors.message}
          className={`${fieldClass(!!errors.message)} resize-y`}
          onBlur={(e) => handleBlur("message", e.target.value)}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        {errors.message && (
          <p id="error-message" role="alert" className="mt-1.5 font-body text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-red-600" role="alert">
          {apiError ?? "Something went wrong. Please try again or email us directly."}
        </p>
      )}

      <div className="pt-1">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
