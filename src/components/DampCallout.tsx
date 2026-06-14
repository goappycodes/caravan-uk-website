import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";
import { Container } from "@/components/ui";

export function DampCallout() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-sand-50 px-7 py-9 shadow-sm sm:px-12 sm:py-11">
          <div aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-accent-500" />
          <Droplets
            aria-hidden
            className="absolute -right-8 -top-10 size-48 text-accent-500/5"
            strokeWidth={1.2}
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent-600">
                Caught early, damp is cheap
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                A small reseal today — or a four-figure rebuild next year
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Damp is the most expensive problem a caravan can develop, and the cheapest to
                fix when it’s caught early. Every full service includes a damp survey with
                calibrated moisture readings — explained in plain English, never used to scare
                you into work you don’t need.
              </p>
            </div>
            <Link
              href="/services/damp-check-and-repair"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
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
