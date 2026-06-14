import { CalendarCheck, ClipboardCheck, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Book your slot",
    description: "Request a quote online or call us — we'll confirm a date that suits you.",
  },
  {
    icon: Wrench,
    title: "2. We do the work",
    description: "At our Malton workshop or at your pitch — done properly, first time.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Report & stamp",
    description: "Written report, damp readings explained, service book stamped.",
  },
];

export function BookingCta() {
  return (
    <section id="book" className="scroll-mt-24 relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgba(41,77,145,0.35),transparent),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(216,19,36,0.12),transparent)]"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow tone="light">Book your service</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Spring slots fill fast — get yours booked
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-100/75 sm:text-lg">
              Tell us what you need and we’ll come back with an honest price and the next
              available dates. Prefer to talk it through? We’d love to hear from you.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-100/65">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-accent-500/50 hover:bg-white/10"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-accent-500 text-white">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-ink-100/60">{site.hoursShort}</span>
                  <span className="block font-semibold text-white">{site.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-accent-500/50 hover:bg-white/10"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-ink-100/60">Email us</span>
                  <span className="block font-semibold text-white">{site.email}</span>
                </span>
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-ink-100/60">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />
              {site.address.street}, {site.address.town}, {site.address.county}{" "}
              {site.address.postcode}
            </p>
          </div>

          <div className="lg:pl-4">
            <QuoteForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
