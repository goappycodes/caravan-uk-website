import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink, Container } from "@/components/ui";

export function CtaBand({
  title = "Ready to book your service?",
  lede = "Get a free quote in under a minute, or give us a call — we'll find a date that suits you.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-sand-50 px-7 py-12 text-center shadow-sm sm:px-12">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1.5 bg-accent-500"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{lede}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Get a free quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="ghost" size="lg">
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              {site.hoursShort} · Workshop &amp; mobile across North Yorkshire
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
