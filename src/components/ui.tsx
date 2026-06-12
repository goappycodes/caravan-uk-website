import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const buttonVariants = {
  primary:
    "bg-accent-500 text-ink-950 hover:bg-accent-400 active:bg-accent-600 shadow-lg shadow-accent-500/25 hover:shadow-accent-400/30",
  dark: "bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950 shadow-lg shadow-ink-900/20",
  outline:
    "border border-white/25 text-white hover:bg-white/10 active:bg-white/15 backdrop-blur-sm",
  ghost:
    "border border-ink-900/15 text-ink-900 hover:border-ink-900/30 hover:bg-ink-50 active:bg-ink-100",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof buttonVariants;
  size?: "md" | "lg";
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ${sizes[size]} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-accent-400" : "text-accent-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-ink-100/80" : "text-slate-600"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
