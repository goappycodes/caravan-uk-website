import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Clock, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us — Book a Service or Get a Quote",
  description:
    "Book your caravan or motorhome service in Malton & North Yorkshire. Call 01653 513019, email info@caravansupport.co.uk or get a free quote in under a minute.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Caravan Support",
    description:
      "Book a service or get a free quote — workshop on Showfield Lane, Malton, or fully mobile across North Yorkshire.",
    url: "/contact",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

const steps = [
  {
    icon: MessageSquareText,
    title: "1. Tell us what you need",
    description: "Send the form or call us — a minute is all it takes.",
  },
  {
    icon: Mail,
    title: "2. Get your written quote",
    description: "An honest price and the next available dates, in writing.",
  },
  {
    icon: CalendarCheck,
    title: "3. We get it booked in",
    description: "At the workshop or at your pitch — whichever suits you.",
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact us"
        title="Let's get your van booked in"
        lede="Get a free quote in under a minute, or talk to us directly — we're a friendly bunch and happy to advise, even if you just have a question."
        crumbs={[{ label: "Contact" }]}
        image="/images/hero-caravan.jpg"
        imageAlt="Touring caravan outside the workshop"
      />

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* Contact details */}
            <div>
              <div className="relative mb-4 hidden aspect-[16/7] overflow-hidden rounded-2xl shadow-md sm:block">
                <Image
                  src="/images/interior-cosy.jpg"
                  alt="Warm, welcoming caravan interior"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/55 to-transparent"
                />
                <p className="absolute bottom-4 left-5 max-w-xs font-display text-lg font-bold text-white">
                  Friendly, local and happy to help.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={site.phoneHref}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent-500 text-white">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Call us
                  </p>
                  <p className="mt-1 font-display text-lg font-extrabold text-ink-900">
                    {site.phone}
                  </p>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-ink-900 text-white">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Email us
                  </p>
                  <p className="mt-1 break-all font-display text-base font-extrabold text-ink-900">
                    {site.email}
                  </p>
                </a>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
                    <address className="text-sm not-italic leading-relaxed text-slate-700">
                      <strong className="font-semibold text-ink-900">{site.legalName}</strong>
                      <br />
                      {site.address.street}, {site.address.town},
                      <br />
                      {site.address.county} {site.address.postcode}
                    </address>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
                    <div className="text-sm leading-relaxed text-slate-700">
                      <strong className="font-semibold text-ink-900">Opening hours</strong>
                      <br />
                      {site.hours}
                    </div>
                  </div>
                </div>
                <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
                  <iframe
                    title="Map showing the Caravan Support workshop on Showfield Lane, Malton"
                    src="https://maps.google.com/maps?q=Showfield%20Lane%2C%20Malton%20YO17%206BT&z=14&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <ol className="mt-8 space-y-5">
                {steps.map((step) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm ring-1 ring-slate-200">
                      <step.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="font-semibold text-ink-900">{step.title}</h2>
                      <p className="mt-0.5 text-sm text-slate-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Form */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
