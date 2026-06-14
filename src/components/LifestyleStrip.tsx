import { CalendarCheck, MapPin, Star } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

const chips = [
  { icon: Star, label: `${site.rating.value}/5 on Google` },
  { icon: MapPin, label: "Across North Yorkshire" },
  { icon: CalendarCheck, label: "Workshop & mobile" },
];

export function LifestyleStrip() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Eyebrow>More adventures, fewer worries</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              You make the memories. We&rsquo;ll keep the van ready for them.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Annual servicing, safety checks and repairs handled properly — so the only thing
              you think about is where to go next.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900"
                >
                  <chip.icon className="size-4 text-accent-600" aria-hidden />
                  {chip.label}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink href="/contact" size="lg">
                Book your service
              </ButtonLink>
            </div>
          </div>

          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:order-2">
            <img
              src="/images/caravan-awning.jpg"
              alt="A caravan set up with an awning and seating on a quiet pitch"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
