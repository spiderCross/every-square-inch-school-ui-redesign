"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { homeReviews } from "@/lib/site";

export function HomeTestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-card]");
    const amount = (first?.offsetWidth ?? 360) + 16;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({ left: amount * dir, behavior: reduce ? "auto" : "smooth" });
    trackEvent("testimonial_nav_click", {
      direction: dir === -1 ? "left" : "right",
    });
  };

  const renderStars = (rating: number) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
      const currentValue = index + 1;
      const isFilled = rating >= currentValue;
      const isHalfFilled =
        !isFilled && rating >= currentValue - 0.5 && rating < currentValue;

      return (
        <span
          key={`${rating}-${index}`}
          className="relative inline-block text-lg leading-none"
          aria-hidden="true"
        >
          <span className={isFilled ? "text-amber-400" : "text-slate-300"}>
            ★
          </span>
          {isHalfFilled && (
            <span
              className="absolute inset-0 overflow-hidden text-amber-400"
              style={{ width: "50%" }}
            >
              ★
            </span>
          )}
        </span>
      );
    });

    return stars;
  };

  return (
    <div className="md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-3">
      <button
        type="button"
        onClick={() => scroll(-1)}
        disabled={!canLeft}
        className="hidden h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-primary shadow-sm transition hover:border-primary hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40 md:grid"
        aria-label="Scroll testimonials left"
      >
        ←
      </button>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-1 pb-6 pt-1 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {homeReviews.map((story) => (
          <article
            key={story.quote}
            data-card
            className="relative flex min-w-72 flex-col rounded-3xl border border-primary/10 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift md:min-w-96"
          >
            <span
              className="absolute right-6 top-3 font-(family-name:--font-display) text-7xl font-extrabold leading-none text-secondary/20"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="flex items-center gap-0.5">
              {renderStars(story.rating)}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
              {story.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-4">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {story.author.trim().charAt(0)}
              </span>
              <p className="text-sm font-semibold text-primary-dark">
                {story.author}
              </p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll(1)}
        disabled={!canRight}
        className="hidden h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-primary shadow-sm transition hover:border-primary hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40 md:grid"
        aria-label="Scroll testimonials right"
      >
        →
      </button>

      <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={!canLeft}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-primary disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll testimonials left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={!canRight}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-primary disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll testimonials right"
        >
          →
        </button>
      </div>
    </div>
  );
}
