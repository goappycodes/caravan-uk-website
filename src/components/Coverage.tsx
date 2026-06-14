import { Building2, CalendarClock, MapPin, Truck } from "lucide-react";
import { coverageTowns, site } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";

export function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Workshop & mobile"
          title="Two ways to get the job done"
          lede="Drop off at our fully equipped Malton workshop, or don't move your van at all — we come to your home, storage site or holiday park pitch."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Workshop card */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-sand-50">
            <div className="relative h-52 sm:h-60">
              <img
                src="/images/workbench.jpg"
                alt="A workbench of well-used tools in the Malton workshop"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-ink-950/85 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                <Building2 className="size-4 text-accent-400" aria-hidden />
                At the workshop
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 sm:p-9">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
                At our Malton workshop
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                A fully equipped base on Showfield Lane for servicing, repairs, refits and the
                bigger jobs — with the right tools and diagnostics on hand. Drop off in the
                morning, collect the same day for most services.
              </p>
              <address className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm not-italic text-slate-700">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
                <span>
                  <strong className="font-semibold text-ink-900">{site.legalName}</strong>
                  <br />
                  {site.address.street}, {site.address.town},<br />
                  {site.address.county} {site.address.postcode}
                </span>
              </address>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <CalendarClock className="size-4 text-slate-400" aria-hidden />
                {site.hours}
              </p>
            </div>
          </div>

          {/* Mobile card */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative h-52 sm:h-60">
              <img
                src="/images/caravan-park.jpg"
                alt="Caravans on a North Yorkshire storage site on a misty morning"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold text-white">
                <Truck className="size-4" aria-hidden />
                We come to you
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 sm:p-9">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
                Mobile, wherever your van lives
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                No towing, no time off work. We service and repair caravans and motorhomes at
                home, on storage sites and on seasonal pitches — and we’re the trusted servicing
                team for holiday parks across Ryedale.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas we cover">
                {coverageTowns.map((town) => (
                  <li
                    key={town}
                    className="rounded-full border border-slate-200 bg-sand-50 px-3.5 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {town}
                  </li>
                ))}
                <li className="rounded-full bg-accent-500 px-3.5 py-1.5 text-xs font-bold text-white">
                  + all of North Yorkshire
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-500">
                Not sure if we reach you?{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-accent-600 underline-offset-2 hover:underline"
                >
                  Call {site.phone}
                </a>{" "}
                — if you’re nearby, we’ll make it work.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
