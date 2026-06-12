import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

export type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_75%_-20%,rgba(47,95,150,0.35),transparent),radial-gradient(ellipse_50%_50%_at_5%_120%,rgba(245,158,11,0.1),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Container className="relative py-16 sm:py-20">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-ink-100/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3" aria-hidden />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-100/90">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="max-w-3xl">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 text-lg leading-relaxed text-ink-100/80">{lede}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
