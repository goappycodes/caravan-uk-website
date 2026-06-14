import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Check, Phone } from "lucide-react";
import { getService, services, site } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { DataIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/Services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url: `${site.domain}/services/${service.slug}`,
        image: `${site.domain}${service.image}`,
        areaServed: { "@type": "Place", name: "North Yorkshire" },
        provider: { "@id": `${site.domain}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.domain}/services` },
          { "@type": "ListItem", position: 3, name: service.title },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Our services"
        title={service.title}
        lede={service.description}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact">Book this service</ButtonLink>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white">
            {service.price}
            {service.priceNote ? (
              <span className="font-medium text-ink-100/60">· {service.priceNote}</span>
            ) : null}
          </span>
        </div>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-9 flex items-start gap-4 rounded-2xl border border-accent-500/30 bg-accent-500/8 p-6">
                <BadgeCheck className="mt-0.5 size-6 shrink-0 text-accent-600" aria-hidden />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink-900">
                    Why it matters
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {service.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-slate-200 bg-sand-50 p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <DataIcon name={service.icon} className="size-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold text-ink-900">
                  What&rsquo;s included
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="size-3 text-emerald-600" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-slate-200 pt-6">
                  <p className="font-display text-2xl font-extrabold text-ink-900">
                    {service.price}
                  </p>
                  {service.priceNote ? (
                    <p className="mt-1 text-xs text-slate-500">{service.priceNote}</p>
                  ) : null}
                  <ButtonLink href="/contact" className="mt-5 w-full">
                    Get your free quote
                  </ButtonLink>
                  <a
                    href={site.phoneHref}
                    className="mt-3 flex items-center justify-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white"
                  >
                    <Phone className="size-4" aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Keep exploring</Eyebrow>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                Other services owners book with us
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-accent-600 sm:flex"
            >
              All services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otherServices.map((other) => (
              <ServiceCard key={other.slug} service={other} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Ready to book your ${service.shortTitle.toLowerCase()}?`}
        lede="Tell us about your van and where it's kept — we'll come back with a price and the next available dates."
      />
    </main>
  );
}
