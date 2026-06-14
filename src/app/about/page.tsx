import type { Metadata } from "next";
import { BadgeCheck, HeartHandshake, MapPin, ShieldCheck, Star, Trees } from "lucide-react";
import { site, valueProps } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";
import { DataIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us — Your Local Caravan Engineers",
  description:
    "Caravan Support is a Malton-based, AWS Approved caravan & motorhome servicing team founded by Harvey Dukesell — rated 4.9/5 and trusted by holiday parks across Ryedale.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Caravan Support",
    description:
      "Malton-based, AWS Approved caravan & motorhome engineers — rated 4.9/5 on Google and trusted by holiday parks across Ryedale.",
    url: "/about",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

const standards = [
  {
    icon: BadgeCheck,
    title: "Approved Workshop servicing",
    description:
      "Servicing carried out to the AWS manufacturer-standard checklist — the standard major UK caravan manufacturers expect for warranty servicing.",
  },
  {
    icon: ShieldCheck,
    title: "NCC qualified engineers",
    description:
      "Trained and qualified to National Caravan Council standards across gas, electrical, chassis and habitation systems.",
  },
  {
    icon: HeartHandshake,
    title: "Honest, plain-English advice",
    description:
      "Every report explained properly — what's urgent, what can wait, and what doesn't need doing at all. No upselling, ever.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="A local team that treats your van like their own"
        lede="Founded in Malton by Harvey Dukesell, Caravan Support has become one of North Yorkshire's best-reviewed caravan and motorhome specialists — trusted by private owners and holiday parks alike."
        crumbs={[{ label: "About" }]}
        image="/images/engineer.jpg"
        imageAlt="Engineer working in the workshop"
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/owner-fixing.jpg"
                  alt="Hands-on maintenance being carried out on a motorhome at its pitch"
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-right-6 sm:p-5">
                <span className="font-display text-3xl font-extrabold text-ink-900">
                  {site.rating.value}
                </span>
                <div>
                  <div className="flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {site.rating.count} Google reviews
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                Built on word of mouth, one van at a time
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Caravan Support started with a simple frustration: caravan owners deserve
                  the same standard of care for their second home as they get for their car —
                  without the dealer queues, the jargon or the upselling.
                </p>
                <p>
                  Founder Harvey Dukesell built the business in Malton around doing the job
                  properly and explaining it honestly. The result shows in our reviews:
                  customers mention Harvey by name, the careful way their van is treated —
                  shoes off at the door — and problems sorted quickly that other workshops
                  couldn’t trace.
                </p>
                <p>
                  Today we look after touring caravans, motorhomes and campervans across
                  North Yorkshire from our Showfield Lane workshop and our fully equipped
                  mobile service — including all servicing for holiday parks like the
                  five-star Robin Hood Caravan Park in Slingsby.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Standards */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] max-h-[480px] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                <img
                  src="/images/engineer.jpg"
                  alt="Engineer carefully inspecting the underside of a vehicle"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                Dealer-standard work, without the dealer experience
              </h2>
              <ul className="mt-9 space-y-7">
                {standards.map((standard) => (
                  <li key={standard.title} className="flex gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                      <standard.icon className="size-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        {standard.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {standard.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Parks */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Parks & fleets</Eyebrow>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                The team holiday parks rely on
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  When a holiday park puts its name to your stay, the vans on its pitches
                  have to be right. Parks across Ryedale trust us with exactly that — we
                  proudly look after all servicing at the five-star Robin Hood Caravan Park
                  in Slingsby, among others.
                </p>
                <p>
                  If you run a park, a hire fleet or storage site and want servicing handled
                  properly — on-site, on schedule, fully documented — we’d love to talk.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Trees className="size-5 text-accent-600" aria-hidden />
                  <p className="mt-3 font-display text-base font-bold text-ink-900">
                    On-site servicing days
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Whole-park servicing scheduled around your season.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <MapPin className="size-5 text-accent-600" aria-hidden />
                  <p className="mt-3 font-display text-base font-bold text-ink-900">
                    Across North Yorkshire
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Malton, York, Ryedale and the coast.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/holiday-park.jpg"
                alt="Aerial view of a UK holiday park with static caravans near the coast"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Value props strip */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-2xl border border-slate-200 bg-sand-50 p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm ring-1 ring-slate-200">
                  <DataIcon name={prop.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
