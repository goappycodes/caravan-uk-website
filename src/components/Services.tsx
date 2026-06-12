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
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink-100 hover:shadow-xl hover:shadow-ink-900/8">
      <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-500/12 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-ink-950">
        <DataIcon name={service.icon} className="size-6" />
      </span>

      <h3 className="font-display text-xl font-bold tracking-tight text-ink-900">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
          {service.title}
        </Link>
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{service.description}</p>

      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight text-ink-900">
            {service.price}
          </p>
          {service.priceNote ? (
            <p className="mt-0.5 text-xs text-slate-500">{service.priceNote}</p>
          ) : null}
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-ink-700 transition-colors group-hover:text-accent-600">
          Details
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sand-50 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title="Everything your caravan or motorhome needs"
          lede="Honest, up-front pricing on every job — from annual servicing that protects your warranty to repairs, refits and upgrades."
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
