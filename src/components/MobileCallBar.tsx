import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Sticky bottom action bar — mobile only. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(6,15,26,0.12)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 text-sm font-bold text-ink-900"
        >
          <Phone className="size-4" aria-hidden />
          Call us
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-accent-500/30"
        >
          <CalendarCheck className="size-4" aria-hidden />
          Book a service
        </Link>
      </div>
    </div>
  );
}
