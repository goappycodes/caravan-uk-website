import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { moreServices, services } from "@/lib/site";
import { DataIcon } from "@/components/icons";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink-100 hover:shadow-xl hover:shadow-ink-900/10">
      {/* Image header */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/5 to-transparent"
        />
        <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl bg-white/95 text-accent-600 shadow-md backdrop-blur-sm">
          <DataIcon name={service.icon} className="size-6" />
        </span>
        <span className="absolute bottom-3 right-4 rounded-full bg-accent-500 px-3 py-1 text-sm font-extrabold text-white shadow-md">
          {service.price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
              <Check className="size-3.5 shrink-0 text-accent-600" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-1 border-t border-slate-100 pt-4 text-sm font-semibold text-ink-700 transition-colors group-hover:text-accent-600">
          View details
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="In our workshop"
          title="Whatever your van needs, we'll look after it"
          lede="Servicing, repairs and upgrades carried out properly — by people who treat your caravan or motorhome like their own. Clear prices, honest advice, no surprises."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
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

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/services" variant="dark">
            Explore all services
          </ButtonLink>
          <ButtonLink href="/pricing" variant="ghost">
            See the full price list
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
