import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";
import { Container } from "@/components/ui";

export function DampCallout() {
  return (
    <section className="bg-sand-50 py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-500 to-accent-400 px-7 py-9 shadow-xl shadow-accent-500/20 sm:px-12 sm:py-11">
          <Droplets
            aria-hidden
            className="absolute -right-8 -top-10 size-48 text-ink-950/8"
            strokeWidth={1.2}
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink-900/60">
                Caught early, damp is cheap
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                A small reseal today — or a four-figure rebuild next year
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-900/75 sm:text-base">
                Damp is the most expensive problem a caravan can develop, and the cheapest to
                fix when it’s caught early. Every full service includes a damp survey with
                calibrated moisture readings — explained in plain English, never used to scare
                you into work you don’t need.
              </p>
            </div>
            <Link
              href="/services/damp-check-and-repair"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-ink-800"
            >
              About damp checks
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
