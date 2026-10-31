import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon, type IconName } from "./Icons";
import { CONTACT_LINKS } from "@/lib/constants";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  light,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-secondary-light!" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 lead ${light ? "text-white/75!" : ""}`}>{desc}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

export function ListItem({
  title,
  desc,
  icon = "check",
  className = "",
}: {
  title: string;
  desc?: string;
  icon?: IconName;
  className?: string;
}) {
  return (
    <li className={`flex gap-3 items-center ${className}`}>
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary/12 text-secondary-dark ring-1 ring-secondary/25">
        <Icon name={icon} className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        {desc && (
          <p className="mt-0.5 text-sm leading-relaxed text-muted">{desc}</p>
        )}
      </div>
    </li>
  );
}

export function PageHero({
  id,
  eyebrow,
  title,
  desc,
  showCTA = false,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
  imageAlt,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-linear-to-b from-tint via-white to-white text-ink"
    >
      <div
        className="bg-contours-dark pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
      />
      <div
        className="orb -right-24 -top-24 h-96 w-96 bg-secondary/15 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="orb -left-32 bottom-0 h-96 w-96 bg-primary/10 animate-float-slower"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-20">
        <div
          className={`grid items-center gap-14 ${image ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}
        >
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-primary-dark sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {desc && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                {desc}
              </p>
            )}
            {showCTA && (
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={ctaLink ?? "/"} className="btn btn-secondary">
                  {ctaText}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaLink ?? "/contact"}
                    className="btn btn-ghost"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="relative w-full max-w-md lg:max-w-none">
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-4xl border-2 border-secondary/40"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-4xl bg-white p-2 shadow-lift">
                <Image
                  src={image}
                  alt={imageAlt ?? "Programme hero image"}
                  width={1400}
                  height={900}
                  priority
                  className="h-80 w-full rounded-[1.65rem] object-cover sm:h-104"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function CTASection({
  id,
  title,
  desc,
  primaryText,
  primaryHref,
  secondLinkText,
  secondLinkUrl,
}: {
  id?: string;
  title: string;
  desc?: string;
  primaryText?: string;
  primaryHref?: string;
  secondLinkText?: string;
  secondLinkUrl?: string;
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-white">
      <Container className="py-14 sm:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary-deep via-primary-dark to-primary p-8 shadow-lift sm:p-16">
          <div
            className="bg-contours pointer-events-none absolute inset-0 opacity-[0.1]"
            aria-hidden="true"
          />
          <div
            className="orb -right-16 -top-16 h-72 w-72 bg-secondary/40 animate-float-slow"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="eyebrow text-secondary-light!">
              Ready when you are
            </span>
            <h2 className="relative mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl">
              {title}
            </h2>
            {desc && (
              <p className="relative mt-5 max-w-xl text-lg text-white/80">
                {desc}
              </p>
            )}
            <div className="relative mt-10 flex flex-wrap gap-3">
              <Link
                href={primaryHref || CONTACT_LINKS.planYourJourney}
                className="btn btn-secondary"
              >
                {primaryText || "Plan Your Journey"}{" "}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link
                href={secondLinkUrl || "/programmes"}
                className="btn btn-light"
              >
                {secondLinkText || "Explore Programmes"}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
