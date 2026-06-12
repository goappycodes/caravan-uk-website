import { ExternalLink, Star } from "lucide-react";
import { reviews, site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Rated {site.rating.value} out of 5 by the people who matter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {site.rating.count} Google reviews and counting — here’s what caravan and
              motorhome owners across North Yorkshire say about us.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-sand-50 px-6 py-4">
            <span className="font-display text-4xl font-extrabold text-ink-900">
              {site.rating.value}
            </span>
            <div>
              <div className="flex" aria-label={`Rated ${site.rating.value} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent-500 text-accent-500" aria-hidden />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500">
                {site.rating.count} {site.rating.source} reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <figure
              key={review.quote}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-ink-900">{review.author}</p>
                <p className="mt-0.5 text-xs text-slate-500">{review.source}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
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
      </Container>
    </section>
  );
}
