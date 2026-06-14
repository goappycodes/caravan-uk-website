import { BadgeCheck, MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink, Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative bg-ink-950">
      {/* Background treatment */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(216,19,36,0.18),transparent),radial-gradient(ellipse_60%_50%_at_10%_110%,rgba(255,255,255,0.05),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pt-16 pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24 lg:pb-32">
          {/* Copy column */}
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-100/90 backdrop-blur-sm">
              <MapPin className="size-3.5 text-accent-400" aria-hidden />
              Your local Approved Workshop · Malton, North Yorkshire
            </p>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Caravan &amp; motorhome servicing that keeps your{" "}
              <span className="relative whitespace-nowrap text-accent-400">
                warranty valid
                <svg
                  aria-hidden
                  viewBox="0 0 280 12"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-accent-500/60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q70 2 140 6 T278 4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink-100/80">
              AWS Approved, NCC qualified servicing, repairs and upgrades — at our Malton
              workshop, or fully mobile at your home, storage site or holiday park across
              York, Ryedale and the North Yorkshire coast.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg">
                Book your service
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-100/75">
              <span className="flex items-center gap-1.5">
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent-400 text-accent-400" />
                  ))}
                </span>
                <strong className="font-semibold text-white">{site.rating.value}</strong> from{" "}
                {site.rating.count} Google reviews
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-accent-400" aria-hidden />
                Servicing from £179.99
              </span>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-ink-950/60">
              <img
                src="/images/hero-caravan.jpg"
                alt="Modern touring caravan outside the Caravan Support workshop"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
              />
            </div>

            {/* Floating: rating card */}
            <div className="absolute -bottom-6 -left-2 rounded-2xl bg-white p-4 shadow-xl shadow-ink-950/30 sm:-left-6 sm:p-5">
              <div className="flex items-center gap-3">
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

            {/* Floating: warranty card */}
            <div className="absolute -top-4 right-0 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-ink-900/85 px-4 py-3 shadow-lg backdrop-blur-md sm:-right-4">
              <BadgeCheck className="size-6 text-accent-400" aria-hidden />
              <div className="text-xs leading-tight">
                <p className="font-bold text-white">Warranty protected</p>
                <p className="mt-0.5 text-ink-100/70">Approved Workshop servicing</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
