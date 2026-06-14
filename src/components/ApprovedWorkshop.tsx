import { BadgeCheck, BookCheck, CalendarCheck, Check, Droplets, FileText, ShieldCheck } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

const proofs = [
  {
    icon: BadgeCheck,
    title: "Independently inspected",
    description:
      "Approved Workshops are assessed every year against the National Caravan Council's standards — so the work on your van is held to an independent mark, not just our own word for it.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by the manufacturers",
    description:
      "The Approved Workshop Scheme is recognised by all the major UK caravan and motorhome makers, and run with the Caravan and Motorhome Club and the Camping and Caravanning Club.",
  },
  {
    icon: BookCheck,
    title: "Your warranty stays valid",
    description:
      "Annual approved servicing, your book stamped and the work documented — exactly what a water-ingress or bodyshell warranty needs to stay alive.",
  },
  {
    icon: FileText,
    title: "Honest, written records",
    description:
      "A full written report with your damp readings explained, so you always know what was checked, what we found, and what (if anything) needs doing.",
  },
];

export function ApprovedWorkshop() {
  return (
    <section
      id="approved-workshop"
      className="scroll-mt-24 overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Eyebrow tone="light">The Approved Workshop difference</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What &ldquo;Approved Workshop&rdquo; really means for you
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-100/80 sm:text-lg">
              Anyone can call themselves a caravan engineer. An Approved Workshop has earned the
              accreditation — and is re-checked for it every year. For you, that&rsquo;s real
              peace of mind: the work is done to a recognised national standard, and your
              warranty is protected.
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
              className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_top_left,rgba(216,19,36,0.2),transparent_60%)]"
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
