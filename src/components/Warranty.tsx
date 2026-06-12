import { BadgeCheck, BookCheck, CalendarCheck, Check, Droplets, FileText } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

const proofs = [
  {
    icon: BadgeCheck,
    title: "Approved Workshop standards",
    description:
      "AWS Approved, NCC qualified servicing carried out to the manufacturer-standard checklist your warranty terms ask for.",
  },
  {
    icon: BookCheck,
    title: "Service book stamped",
    description:
      "Every service is documented and your service book stamped — the proof you need if you ever make a warranty claim.",
  },
  {
    icon: FileText,
    title: "Written report, plain English",
    description:
      "A full written report with damp readings explained, so you know exactly what was checked and what we found.",
  },
];

export function Warranty() {
  return (
    <section id="warranty" className="scroll-mt-24 overflow-hidden bg-ink-950 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Eyebrow tone="light">The warranty promise</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Skip a proper service, and your warranty can quietly die
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-100/80 sm:text-lg">
              Most UK water-ingress and bodyshell warranties depend on an annual service by an
              approved workshop — often within a strict window. Miss it, or use the wrong
              servicer, and a future damp claim can be refused. We make sure that never
              happens to you.
            </p>

            <ul className="mt-10 space-y-7">
              {proofs.map((proof) => (
                <li key={proof.title} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <proof.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{proof.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-100/70">
                      {proof.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock service record card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.18),transparent_60%)]"
            />
            <div className="relative rotate-1 rounded-2xl bg-white p-7 shadow-2xl shadow-ink-950/50 transition-transform duration-300 hover:rotate-0 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Service record
                  </p>
                  <p className="mt-1 font-display text-xl font-extrabold text-ink-900">
                    Annual Habitation Service
                  </p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-full bg-accent-500/15">
                  <CalendarCheck className="size-6 text-accent-600" aria-hidden />
                </span>
              </div>

              <ul className="mt-5 space-y-3.5">
                {[
                  "Chassis, brakes & bearings inspected",
                  "Gas system tested & certified",
                  "230v / 12v electrics checked",
                  "Full damp survey — calibrated readings",
                  "Ventilation & fire safety verified",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="size-3 text-emerald-600" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-ink-50 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <Droplets className="size-5 text-ink-600" aria-hidden />
                  <span className="text-sm font-semibold text-ink-900">Damp survey</span>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  PASS
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-xs text-slate-400">Service book stamped ✓</p>
                <span
                  className="-rotate-6 rounded-md border-2 border-accent-600/70 px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-accent-700"
                  aria-hidden
                >
                  Warranty protected
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
