"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services, site } from "@/lib/site";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-slate-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500";

type Status = "idle" | "submitting" | "success";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // TODO: wire to an email/CRM endpoint (e.g. Resend, Formspree or a
    // /api/quote route) before launch. Currently shows a confirmation only.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-96 flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-2xl">
        <span className="flex size-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="size-8 text-emerald-600" aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold text-ink-900">
          Request received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
          Thanks — we’ll come back to you shortly with a quote and available dates. Need us
          sooner? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-ink-900 underline-offset-2 hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
      aria-label="Request a quote"
    >
      <h3 className="font-display text-xl font-extrabold text-ink-900">
        Get your free quote
      </h3>
      <p className="mt-1.5 text-sm text-slate-500">
        Takes under a minute — we’ll reply with a price and available dates.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className={labelClasses}>
            Full name
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07700 900123"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="quote-email" className={labelClasses}>
            Email
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="quote-postcode" className={labelClasses}>
            Postcode
          </label>
          <input
            id="quote-postcode"
            name="postcode"
            type="text"
            required
            autoComplete="postal-code"
            placeholder="YO17 6BT"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="quote-vehicle" className={labelClasses}>
            Vehicle
          </label>
          <select id="quote-vehicle" name="vehicle" required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Touring caravan — single axle</option>
            <option>Touring caravan — twin axle</option>
            <option>Motorhome</option>
            <option>Campervan</option>
            <option>Static / holiday home</option>
          </select>
        </div>
        <div>
          <label htmlFor="quote-service" className={labelClasses}>
            Service needed
          </label>
          <select id="quote-service" name="service" required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className={labelClasses}>
            Anything we should know? <span className="font-normal normal-case text-slate-400">(optional)</span>
          </label>
          <textarea
            id="quote-message"
            name="message"
            rows={3}
            placeholder="Make & model, where the van is kept, anything you've noticed…"
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Request my quote
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-slate-400">
        No spam, no obligation. We only use your details to reply to this request.
      </p>
    </form>
  );
}
