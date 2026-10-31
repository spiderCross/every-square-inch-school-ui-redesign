"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icons";
import { TrackedLink } from "./TrackedLink";
import { navMain, programmeLinks } from "@/lib/site";
import { CONTACT_LINKS } from "@/lib/constants";

/*
 * Floating indigo pill holding the whole menu and both calls to action, with the logo
 * on an indigo block that hangs below the pill and has a slanted, rounded edge.
 * Below the xl breakpoint it collapses to a floating pill with a menu button, and the
 * menu opens as a floating card beneath it.
 *
 * The logo file is dark artwork on white. On indigo it is shown as a white mark by
 * greyscale + invert (white background becomes black) and `mix-blend-screen`
 * (black drops out against the indigo). No separate image file is needed.
 */
const LOGO_WHITE =
  "mix-blend-screen [filter:grayscale(1)_invert(1)_brightness(1.15)]";

// Menu links sit on indigo: the current page gets a white tab, others are light text.
const bandLink = (on: boolean) =>
  `rounded-lg px-1.5 py-2 text-sm font-medium whitespace-nowrap transition 2xl:px-3 ${on ? "bg-white text-primary" : "text-white/85 hover:bg-white/10 hover:text-white"}`;

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [programmeOpen, setProgrammeOpen] = useState(false);
  const path = usePathname();
  const active = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  // Corporate visitors get the corporate proposal form, everyone else the school one.
  const proposalHref = path.startsWith("/corporate")
    ? CONTACT_LINKS.corporateProposal
    : CONTACT_LINKS.schoolProposal;

  return (
    <header className="sticky top-0 z-40 px-3 pb-4 pt-3 sm:px-5 xl:px-4 2xl:px-6">
      {/* Desktop bar */}
      <div className="relative mx-auto hidden h-16 max-w-[2000px] items-center justify-between gap-4 rounded-[40px] bg-primary pl-61.5 pr-5 shadow-[0_12px_28px_-10px_rgba(20,0,134,0.55)] xl:flex">
        <nav className="flex items-center gap-6" aria-label="Main">
          {navMain.map((l) =>
            l.label === "Programmes" ? (
              <div
                key={l.href}
                className="group relative"
                onMouseEnter={() => setProgrammeOpen(true)}
                onMouseLeave={() => setProgrammeOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-1 ${bandLink(active("/programmes"))}`}
                  aria-expanded={programmeOpen}
                  aria-haspopup="true"
                  aria-controls="programmes-dropdown"
                  onClick={() => {
                    if (programmeOpen) {
                      router.push("/programmes");
                    } else {
                      setProgrammeOpen(true);
                    }
                  }}
                  onFocus={() => setProgrammeOpen(true)}
                  onBlur={(e) => {
                    if (
                      !e.currentTarget.parentElement?.contains(
                        e.relatedTarget as Node,
                      )
                    ) {
                      setProgrammeOpen(false);
                    }
                  }}
                >
                  Programmes
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 transition-transform ${programmeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="programmes-dropdown"
                  className={`absolute left-0 top-full z-50 pt-4 transition-all duration-200 ${programmeOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
                >
                  <div className="w-72 overflow-hidden rounded-2xl border border-primary/10 bg-white p-2 shadow-lift">
                    <Link
                      href="/programmes"
                      className="block rounded-xl bg-primary/6 px-3 py-2.5 text-sm font-semibold text-primary"
                    >
                      All Programmes
                    </Link>
                    {programmeLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm text-ink/75 transition hover:bg-primary/5 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active(l.href) ? "page" : undefined}
                className={bandLink(active(l.href))}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <a
          href="/resources/Brochure.pdf"
          download
          className="btn btn-light min-h-10 whitespace-nowrap px-3 py-2 2xl:px-5"
        >
          Brochure
          <Icon name="download" className="h-4 w-4" />
        </a>

        {/* Logo block: hangs below the bar with a slanted, rounded edge */}
        <Link
          href="/"
          aria-label="Every Square Inch home"
          className="absolute left-0 top-0 z-10 block h-24 w-56"
        >
          <svg
            viewBox="0 0 224 96"
            className="absolute inset-0 h-full w-full text-primary drop-shadow-[0_8px_8px_rgba(20,0,134,0.25)]"
            aria-hidden="true"
          >
            <path
              d="M32 0H224V64L206 90Q203 96 196 96H32Q0 96 0 64V32Q0 0 32 0Z"
              fill="currentColor"
            />
          </svg>
          <img
            src="/ESI_Logo.png"
            alt="Every Square Inch"
            width={130}
            height={61}
            className={`absolute left-6.5 top-4 w-32.5 ${LOGO_WHITE}`}
          />
        </Link>
      </div>

      {/* Tablet and mobile bar */}
      <div className="flex h-16 items-center justify-between rounded-[32px] bg-primary pl-5 pr-3 shadow-[0_12px_28px_-10px_rgba(20,0,134,0.55)] sm:pl-6 xl:hidden">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Every Square Inch home"
          className="flex items-center"
        >
          <img
            src="/ESI_Logo.png"
            alt="Every Square Inch"
            width={104}
            height={49}
            className={`w-26 ${LOGO_WHITE}`}
          />
        </Link>
        <button
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mt-2 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-primary/10 bg-white shadow-lift xl:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {navMain
              .filter((l) => l.label !== "Programmes")
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium ${active(l.href) ? "bg-primary/10! text-primary!" : "text-ink/80"}`}
                >
                  {l.label}
                </Link>
              ))}
            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-muted">
              Programme Categories
            </p>
            <Link
              href="/programmes"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-2.5 text-sm font-semibold ${active("/programmes") ? "bg-primary/10! text-primary!" : "text-ink/80"}`}
            >
              All Programmes
            </Link>
            {programmeLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-ink/80 hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/resources/Brochure.pdf"
              download
              onClick={() => setOpen(false)}
              className="btn btn-ghost min-h-10 px-5 py-2"
            >
              Brochure
              <Icon name="download" className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
