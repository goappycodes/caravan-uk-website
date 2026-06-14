import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

export type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative border-b border-slate-200 bg-sand-50">
      <Container className="relative py-12 sm:py-16">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:text-accent-600">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3" aria-hidden />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-accent-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-900">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
              : ""
          }
        >
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
              {title}
            </h1>
            {lede ? (
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{lede}</p>
            ) : null}
            {children}
          </div>

          {image ? (
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:block">
              <img
                src={image}
                alt={imageAlt}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
