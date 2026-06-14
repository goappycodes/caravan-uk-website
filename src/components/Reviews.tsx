import { ExternalLink, Quote, Star } from "lucide-react";
import { reviews, site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left: image + rating */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Rated {site.rating.value}/5 by the people who matter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {site.rating.count} Google reviews from caravan and motorhome owners across North
              Yorkshire — and the holiday parks we look after.
            </p>

            <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/statics-coast.jpg"
                alt="A coastal holiday park in North Yorkshire at golden hour"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                <span className="font-display text-3xl font-extrabold text-ink-900">
                  {site.rating.value}
                </span>
                <div>
                  <div className="flex" aria-label={`Rated ${site.rating.value} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-accent-500 text-accent-500" aria-hidden />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {site.rating.count} Google reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: review cards */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reviews.map((review) => (
                <figure
                  key={review.quote}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-sand-50 p-6 transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-accent-500 text-accent-500" />
                        ))}
                      </div>
                      <Quote className="size-5 text-accent-500/40" aria-hidden />
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-sm font-semibold text-ink-900">{review.author}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{review.source}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Read more on{" "}
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-ink-700 underline-offset-2 hover:text-accent-600 hover:underline"
              >
                our Facebook page
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
