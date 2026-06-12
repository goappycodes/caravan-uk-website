import {
  BadgeCheck,
  Caravan,
  Droplets,
  Flame,
  Home,
  ShieldCheck,
  Star,
  Sun,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Maps icon slugs used in site data to Lucide components. */
const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  home: Home,
  droplets: Droplets,
  flame: Flame,
  zap: Zap,
  sun: Sun,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  star: Star,
  van: Truck,
  caravan: Caravan,
};

export function DataIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} aria-hidden />;
}

/** Facebook brand glyph (lucide no longer ships brand icons). */
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7h2.4l.5-3h-2.9V9.1c0-.9.3-1.6 1.7-1.6h1.3V4.8c-.6-.1-1.4-.2-2.3-.2-2.4 0-4 1.4-4 4.1V11H7.5v3h2.7v7h3.3Z" />
    </svg>
  );
}

/** Brand logo lockup — caravan glyph + wordmark. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-10 items-center justify-center rounded-xl bg-accent-500 text-ink-950 shadow-md shadow-accent-500/30">
        <Caravan className="size-6" strokeWidth={2.2} aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            tone === "light" ? "text-white" : "text-ink-900"
          }`}
        >
          Caravan Support
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
            tone === "light" ? "text-ink-100/70" : "text-slate-500"
          }`}
        >
          Malton · North Yorkshire
        </span>
      </span>
    </span>
  );
}
