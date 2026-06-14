import { BadgeCheck, HeartHandshake, MessageSquare, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

const promises = [
  {
    icon: HeartHandshake,
    title: "Treated like our own",
    text: "Careful, considerate work — shoes off at the door, every job done properly.",
  },
  {
    icon: MessageSquare,
    title: "Plain-English honesty",
    text: "We explain what we find and what it means. No jargon, no scare tactics, no upselling.",
  },
  {
    icon: BadgeCheck,
    title: "Approved standards",
    text: "AWS Approved, NCC qualified work — the same standard the manufacturers expect.",
  },
  {
    icon: ShieldCheck,
    title: "People who answer",
    text: "A local team you can actually talk to, before and after the work is done.",
  },
];

export function TrustIntro() {
  return (
    <section className="bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-ink-900/15">
              <img
                src="/images/engineer.jpg"
                alt="Caravan Support engineer working carefully in the Malton workshop"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
              />
            </div>

            {/* Approved badge */}
            <div className="absolute -top-4 left-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-5">
              <BadgeCheck className="size-6 text-accent-600" aria-hidden />
              <div className="text-xs leading-tight">
                <p className="font-bold text-ink-900">Approved Workshop</p>
                <p className="mt-0.5 text-slate-500">Independently inspected</p>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-ink-900 px-5 py-3 shadow-xl sm:-right-5">
              <span className="font-display text-2xl font-extrabold text-white">
                {site.rating.value}
              </span>
              <div>
                <div className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="mt-0.5 text-[0.7rem] font-medium text-ink-100/70">
                  {site.rating.count} Google reviews
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <Eyebrow>Why owners trust us</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              A workshop you can trust with your pride and joy
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Your caravan or motorhome isn&rsquo;t just a vehicle — it&rsquo;s your holidays,
                your weekends away, your freedom. We treat it that way. Owners across North
                Yorkshire bring their vans to our Malton workshop because they know they&rsquo;ll
                get careful, honest work from people who genuinely care about getting it right.
              </p>
              <p>
                No dealer queues, no hard sell — just a friendly local team doing proper work to
                approved standards, and happy to explain every bit of it.
              </p>
            </div>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
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
