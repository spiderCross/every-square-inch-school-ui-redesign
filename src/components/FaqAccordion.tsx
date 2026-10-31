"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { trackEvent } from "@/lib/analytics";
import type { FaqItem } from "@/lib/site";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const expanded = openIndex === idx;
        const answerId = `faq-answer-${idx}`;
        const buttonId = `faq-button-${idx}`;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition ${expanded ? "border-primary/25 shadow-lift" : "border-primary/10 hover:border-primary/25"}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary/[0.03]"
                aria-expanded={expanded}
                aria-controls={answerId}
                onClick={() => {
                  setOpenIndex(expanded ? null : idx);
                  trackEvent("faq_toggle", {
                    question: item.q,
                    opened: !expanded,
                  });
                }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                      expanded
                        ? "bg-gradient-to-br from-secondary to-secondary-dark text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-ink">{item.q}</span>
                </span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${expanded ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}
                >
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-200 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-15 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
