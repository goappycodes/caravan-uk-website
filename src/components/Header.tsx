"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Caravan Support — home" onClick={() => setOpen(false)}>
            <Logo tone="light" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-100/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-2 text-sm font-semibold text-white"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                <Phone className="size-4" aria-hidden />
              </span>
              {site.phone}
            </a>
            <ButtonLink href="/contact">Book a service</ButtonLink>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <Phone className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-ink-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-100/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <ButtonLink href="/contact" onClick={() => setOpen(false)} className="w-full">
                Book a service
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
