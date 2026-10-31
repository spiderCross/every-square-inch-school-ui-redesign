"use client";

import { useEffect, useState } from "react";
import { partnerSchools } from "@/lib/site";

function useDuplicated<T>(arr: T[]): [T[], T[]] {
  // two copies so the marquee loops seamlessly
  return [arr, arr];
}

export function PartnerSchoolsCarousel() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const handler = () => setReduced(m.matches);
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, []);
  const [a, b] = useDuplicated(partnerSchools);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-tint to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-tint to-transparent" />
      {reduced ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partnerSchools.map((s, index) => (
            <li
              key={`${s.name}-${s.location ?? index}`}
              className="rounded-2xl border border-primary/10 bg-white px-3 py-4 shadow-soft"
            >
              <SchoolItem name={s.name} location={s.location} logo={s.logo} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="flex w-max gap-3 motion-safe:animate-[esi-scroll_60s_linear_infinite] hover:[animation-play-state:paused]"
          aria-label="Schools Every Square Inch has partnered with"
        >
          {[...a, ...b].map((s, i) => (
            <div
              key={`${s.name}-${s.location ?? "unknown"}-${i}`}
              className="w-56 shrink-0 rounded-2xl border border-primary/10 bg-white px-4 py-4 shadow-soft"
            >
              <SchoolItem name={s.name} location={s.location} logo={s.logo} />
            </div>
          ))}
        </div>
      )}
      <style>{`
        @keyframes esi-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function SchoolItem({
  name,
  location,
  logo,
}: {
  name: string;
  location?: string;
  logo: string;
}) {
  return (
    <div>
      <div className="mb-2 flex h-20 w-40 items-center rounded-md bg-white">
        <img
          src={`/school-logos/${logo}`}
          alt={`${name} logo`}
          width={160}
          height={80}
          className="h-20 w-40 object-contain object-left"
        />
      </div>
      <p className="text-sm font-semibold text-ink">{name}</p>
      {location && <p className="mt-0.5 text-xs text-muted">{location}</p>}
    </div>
  );
}
