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
    <section className="bg-ink-950 py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-7 py-12 text-center shadow-2xl sm:px-12">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(216,19,36,0.16),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-100/75 sm:text-lg">{lede}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Get a free quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink-100/55">
              {site.hoursShort} · Workshop &amp; mobile across North Yorkshire
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
