import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/lib/site";
import { FacebookIcon, Logo } from "@/components/icons";
import { Container } from "@/components/ui";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Coverage area", href: "/#coverage" },
  { label: "Book a service", href: "/contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pb-24 pt-16 text-ink-100/70 lg:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="Caravan Support — home">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              AWS Approved, NCC qualified caravan &amp; motorhome servicing, repairs and
              upgrades — workshop and fully mobile across North Yorkshire.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Caravan Support on Facebook"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-ink-950"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-accent-400"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-semibold text-white transition-colors hover:text-accent-400">
                  All services →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 font-semibold text-white transition-colors hover:text-accent-400"
                >
                  <Phone className="size-4 shrink-0 text-accent-400" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-accent-400"
                >
                  <Mail className="size-4 shrink-0 text-accent-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />
                <address className="not-italic">
                  {site.address.street}, {site.address.town},<br />
                  {site.address.county} {site.address.postcode}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-accent-400" aria-hidden />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-ink-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Registered in England &amp; Wales · Company No. {site.companyNumber} ·{" "}
            {site.address.town}, {site.address.county}
          </p>
        </div>
      </Container>
    </footer>
  );
}
