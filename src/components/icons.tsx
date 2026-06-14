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

/**
 * Caravan Support brand emblem — circular mark of three horizontal bands
 * (top crescent, centre bar, bottom crescent). Uses currentColor so it
 * inverts: black on light surfaces, white on dark ones.
 */
export function Emblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 108" fill="currentColor" className={className} aria-hidden>
      <path d="M23 39 Q50 7 77 39 Q50 25 23 39 Z" />
      <rect x="21" y="45" width="58" height="18" rx="9" />
      <path d="M23 69 Q50 101 77 69 Q50 83 23 69 Z" />
    </svg>
  );
}

/** Brand logo lockup — emblem + CARAVAN (red) / SUPPORT wordmark. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <Emblem className={`size-9 ${tone === "light" ? "text-white" : "text-ink-900"}`} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold italic tracking-tight text-accent-500">
          CARAVAN
        </span>
        <span
          className={`mt-0.5 text-[0.7rem] font-bold uppercase tracking-[0.42em] ${
            tone === "light" ? "text-white" : "text-ink-900"
          }`}
        >
          Support
        </span>
      </span>
    </span>
  );
}
