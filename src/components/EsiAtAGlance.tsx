"use client";

import { useEffect, useRef, useState } from "react";
import { esiAtAGlance } from "@/lib/site";
import type { IconName } from "@/components/Icons";
import { Icon } from "@/components/Icons";

type Stat = { value: number; suffix: string; label: string; icon: IconName };

function Count({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setN(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          obs.disconnect();
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * ease));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}</span>;
}

export function EsiAtAGlance() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary-deep via-primary-dark to-primary p-6 shadow-lift sm:p-10">
      <div
        className="bg-contours pointer-events-none absolute inset-0 opacity-[0.1]"
        aria-hidden="true"
      />
      <dl className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-white/15">
        {esiAtAGlance.map((s: Stat) => (
          <div key={s.label} className="flex flex-col items-start px-2 md:px-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-secondary-light ring-1 ring-white/15">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <dd className="order-2 mt-4 font-(family-name:--font-display) text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <Count to={s.value} />
              <span className="text-secondary-light">{s.suffix}</span>
            </dd>
            <dt className="order-3 mt-2 text-sm leading-snug text-white/75">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
