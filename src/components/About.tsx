import Image from "next/image";
import { Quote } from "lucide-react";
import { valueProps } from "@/lib/site";
import { DataIcon } from "@/components/icons";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-ink-900/15">
              <Image
                src="/images/lifestyle-coast.jpg"
                alt="Touring caravan parked by the coast at dusk among wildflowers"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative -mt-16 ml-6 mr-0 rounded-3xl bg-ink-900 p-7 text-white shadow-xl shadow-ink-900/25 sm:ml-10 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent-500 font-display text-xl font-extrabold text-ink-950">
                  HD
                </span>
                <div>
                  <p className="font-display text-lg font-extrabold">Harvey Dukesell</p>
                  <p className="mt-0.5 text-sm text-ink-100/70">Founder &amp; lead engineer</p>
                </div>
              </div>
              <figure className="mt-6 border-l-2 border-accent-500 pl-5">
                <Quote className="mb-2 size-5 text-accent-400" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-ink-100/90">
                  &ldquo;Harvey is super knowledgeable — always takes his shoes off before going
                  in the van. He came in and sorted it out in ten minutes.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-100/50">
                  Google review · verified customer
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Copy */}
          <div>
            <Eyebrow>Meet your engineer</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              The engineer your neighbours already recommend
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Caravan Support was founded in Malton by Harvey Dukesell with a simple idea:
                give caravan and motorhome owners the kind of careful, honest workmanship
                you’d want for your own van. No upselling, no jargon — just work done
                properly and explained clearly.
              </p>
              <p>
                That approach has made us one of North Yorkshire’s best-reviewed caravan
                specialists, trusted not just by private owners but by holiday parks across
                Ryedale — including five-star sites like Robin Hood Caravan Park in Slingsby,
                where we look after all servicing.
              </p>
            </div>

            <ul className="mt-9 space-y-6">
              {valueProps.map((prop) => (
                <li key={prop.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm ring-1 ring-slate-200">
                    <DataIcon name={prop.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{prop.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {prop.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink href="/about" variant="dark">
                More about us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
