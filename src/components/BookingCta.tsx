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
    <section id="book" className="scroll-mt-24 relative overflow-hidden bg-sand-50 py-20 sm:py-28">
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Book your service</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Spring slots fill fast — get yours booked
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Tell us what you need and we’ll come back with an honest price and the next
              available dates. Prefer to talk it through? We’d love to hear from you.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm ring-1 ring-slate-200">
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-accent-500/50 hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-accent-500 text-white">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">{site.hoursShort}</span>
                  <span className="block font-semibold text-ink-900">{site.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-accent-500/50 hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-ink-900 text-white">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Email us</span>
                  <span className="block font-semibold text-ink-900">{site.email}</span>
                </span>
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-slate-500">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
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
