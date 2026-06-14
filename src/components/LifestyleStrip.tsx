import { CalendarCheck, MapPin, Star } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

const chips = [
  { icon: Star, label: `${site.rating.value}/5 on Google` },
  { icon: MapPin, label: "Across North Yorkshire" },
  { icon: CalendarCheck, label: "Workshop & mobile" },
];

export function LifestyleStrip() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/caravan-awning.jpg"
        alt="A caravan set up with an awning and seating on a quiet pitch"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/30"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-400">
            More adventures, fewer worries
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            You make the memories. We&rsquo;ll keep the van ready for them.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-100/85">
            Annual servicing, safety checks and repairs handled properly — so the only thing
            you think about is where to go next.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                <chip.icon className="size-4 text-accent-400" aria-hidden />
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
      </div>
    </section>
  );
}
