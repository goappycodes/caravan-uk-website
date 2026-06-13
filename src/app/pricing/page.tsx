import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Info } from "lucide-react";
import { priceList, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Caravan Servicing Prices & Price List",
  description:
    "Clear, published prices for caravan & motorhome servicing in North Yorkshire — annual service from £199.99, habitation checks £179.99, motor movers, solar and more.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Caravan Support",
    description:
      "Published prices for caravan & motorhome servicing, motor movers, solar, WiFi and gas systems — no surprises, no hidden extras.",
    url: "/pricing",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Pricing"
        title="Honest prices, published up front"
        lede="Most servicers make you phone around for a price. Ours are right here — and repairs or damp work are always quoted in writing before anything starts."
        crumbs={[{ label: "Pricing" }]}
        image="/images/tools.jpg"
        imageAlt="Workshop tool wall"
      />

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="grid gap-8">
            {priceList.map((group) => (
              <div
                key={group.category}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-100 bg-ink-950 px-7 py-5 sm:px-9">
                  <h2 className="font-display text-lg font-extrabold tracking-tight text-white">
                    {group.category}
                  </h2>
                  {"note" in group && group.note ? (
                    <p className="mt-1 text-sm text-ink-100/65">{group.note}</p>
                  ) : null}
                </div>
                <ul className="divide-y divide-slate-100">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 px-7 py-4 sm:px-9"
                    >
                      <span className="text-sm font-medium text-slate-700 sm:text-base">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-display text-base font-extrabold text-ink-900 sm:text-lg">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
              <p className="text-sm leading-relaxed text-slate-600">
                <strong className="text-ink-900">Repairs, damp work and anything not listed</strong>{" "}
                are quoted individually in writing before work starts — no surprises on the
                invoice.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6">
              <Info className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
              <p className="text-sm leading-relaxed text-slate-600">
                <strong className="text-ink-900">Prices are confirmed when you book</strong> and
                may vary with your van’s spec and location.{" "}
                <Link href="/contact" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                  Ask us for an exact quote
                </Link>{" "}
                — it takes under a minute.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want an exact price for your van?"
        lede="Tell us the make, model and what you need — we'll reply with a written quote and available dates."
      />
    </main>
  );
}
