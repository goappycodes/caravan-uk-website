import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import { faqs, site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export function Faq() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: heading + image + call card */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Everything owners ask us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Straight answers about warranties, what&rsquo;s included and how it all works.
            </p>

            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
              <Image
                src="/images/couple.jpg"
                alt="A couple relaxing inside their motorhome with a sea view"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                <Phone className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-slate-600">Got a different question?</p>
                <a
                  href={site.phoneHref}
                  className="font-display text-lg font-extrabold text-ink-900 underline-offset-2 hover:text-accent-600 hover:underline"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right: accordions */}
          <div className="space-y-4">
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
        </div>
      </Container>
    </section>
  );
}
