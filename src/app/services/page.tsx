import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { moreServices, services, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Caravan & Motorhome Services in Malton & North Yorkshire",
  description:
    "Servicing, habitation checks, damp repair, repairs, motor movers and upgrades — AWS Approved, with honest up-front prices. Workshop in Malton or fully mobile.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Caravan & Motorhome Services | Caravan Support",
    description:
      "Servicing, habitation checks, damp repair, motor movers and upgrades — AWS Approved with up-front prices. Workshop or mobile across North Yorkshire.",
    url: "/services",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our services"
        title="Every job your van needs, done properly"
        lede="From the annual service that keeps your warranty alive to repairs, refits and upgrades — all with honest pricing, at our Malton workshop or mobile across North Yorkshire."
        crumbs={[{ label: "Services" }]}
        image="/images/caravan-side.jpg"
        imageAlt="Side profile of a touring caravan"
      />

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink-900/8 lg:grid-cols-[2fr_3fr]"
              >
                <div className={`relative min-h-56 lg:min-h-72 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col p-8 sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
                      {service.title}
                    </h2>
                    <div className="rounded-full bg-ink-50 px-4 py-1.5 text-sm font-bold text-ink-800">
                      {service.price}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
                    >
                      Full details
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-ink-700 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-7 py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm font-semibold text-ink-900">
                Also available, supplied &amp; professionally fitted:
              </p>
              <ul className="flex flex-wrap gap-2">
                {moreServices.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-sand-100 px-3.5 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure what your van needs?"
        lede="Tell us what's going on and we'll point you in the right direction — no obligation, no upselling."
      />
    </main>
  );
}
