import { ChevronDown, Phone } from "lucide-react";
import { faqs, site } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";

export function Faq() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Common questions"
          title="Everything owners ask us"
          lede="Straight answers about warranties, what's included and how it all works."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white px-6 py-1 shadow-sm open:shadow-md sm:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-bold text-ink-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sand-100 transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="size-4 text-ink-700" aria-hidden />
                </span>
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          Got a different question?{" "}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-ink-900 underline-offset-2 hover:text-accent-600 hover:underline"
          >
            <Phone className="size-3.5" aria-hidden />
            Call {site.phone}
          </a>{" "}
          — we’re happy to help.
        </p>
      </Container>
    </section>
  );
}
