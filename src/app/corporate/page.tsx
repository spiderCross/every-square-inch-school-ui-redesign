import Image from "next/image";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { company } from "@/lib/site";
import {
  CONTACT_LINKS,
  corporateMice,
  whySinglePartner,
  corporateHowWeWork,
  corporateWhatWeDo,
} from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Corporate",
  description:
    "End-to-end corporate travel, offsites, retreats and incentive experiences for organisations across India and internationally.",
  path: "/corporate",
});

export default function CorporatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corporate", path: "/corporate" },
        ])}
      />
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden text-black">
        <Container className="relative py-10 sm:py-18">
          <div className="max-w-3xl">
            <span className="eyebrow text-secondary-light!">
              Every Square Inch Corporate
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Hospitality-led corporate travel designed around people, place and
              purpose.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Premium offsites, incentive journeys, conferences and retreats
              crafted to feel seamless, refined and distinctly executive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_LINKS.corporateTravel}
                className="btn btn-secondary"
              >
                Plan a Corporate Experience
              </Link>
              <Link
                href={CONTACT_LINKS.corporateProposal}
                className="btn btn-outline"
              >
                Request a Corporate Proposal
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — CORPORATE EXPERIENCES */}
      <Section className="bg-tint">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">Corporate Hospitality</span>
              <h2 className="mt-3 h-section">
                A more refined business travel experience.
              </h2>
              <p className="lead mt-5 text-ink/75">
                Every Square Inch Corporate is built for organisations that need
                more than transport and rooms. We design destination-led
                hospitality programmes where every moment feels curated,
                purposeful and suited to your audience.
              </p>
              <p className="lead mt-4 text-ink/75">
                Our programmes bring together travel, venue, accommodation and
                on-ground support with hospitality standards at the centre.
              </p>
            </div>
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/corporate.png"
                alt="Corporate retreat setting"
                width={1200}
                height={700}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — WHAT WE DO */}
      <Section className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Hospitality-focused corporate experiences."
            desc="Corporate travel and experiences built around your objective."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {corporateWhatWeDo.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-secondary/30 hover:shadow-orange"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-primary to-primary-light text-white shadow-[0_8px_20px_-8px_rgba(20,0,134,0.5)]">
                  <Icon name="building" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — BRAND STORY */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 overflow-hidden rounded-3xl border border-slate-200 bg-tint lg:order-1">
              <Image
                src="/Corporate_Approach.png"
                alt="Team retreat setting"
                width={1200}
                loading="lazy"
                height={700}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow">The Every Square Inch Approach</span>
              <h2 className="mt-3 h-section">
                The best conversations don’t always happen in meeting rooms.
              </h2>
              <p className="lead mt-5">
                Sometimes teams need a different setting. A mountain retreat can
                create space for strategy. An outdoor challenge can reveal a
                different side of teamwork. A shared journey can build
                relationships that everyday office interactions cannot.
              </p>
              <p className="lead mt-4">
                We create experiences that give organisations the opportunity to
                connect, celebrate, collaborate and explore — beyond the
                workplace.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — ONE PARTNER, EVERY DETAIL */}
      <Section className="bg-linear-to-br from-primary via-primary to-primary-dark text-white">
        <Container>
          <SectionHeading
            light
            eyebrow="One Partner"
            title="End-to-end corporate travel management"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whySinglePartner.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/15 bg-white/10 p-8 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — MICE */}
      <Section className="bg-white">
        <Container>
          <div>
            <span className="eyebrow">MICE</span>
            <h2 className="mt-3 h-section">
              Meetings. Incentives. Conferences. Events.
            </h2>
            <p className="lead mt-4 max-w-2xl">
              From a focused leadership meeting for a small team to a larger
              corporate gathering, Every Square Inch brings the travel and
              destination components of the programme together.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted">
              Travel · Destination · Accommodation · Venue · Experience ·
              Coordination
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corporateMice.map((item) => (
              <div
                key={item.letter}
                className="rounded-2xl border border-slate-200 bg-tint p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-bold text-white">
                    {item.letter}
                  </span>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — INDIA & BEYOND */}
      <Section className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="India & Beyond"
            title="The right destination changes the experience."
            desc="Whether the requirement is a quick team retreat close to the city, an adventure-led programme in the mountains, a luxury incentive journey or an international corporate experience, the destination should match the objective of the programme."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                key: "india",
                flag: "🇮🇳",
                title: "India",
                desc: "Mountains | Beaches | Wildlife | Heritage | Adventure | Luxury Retreats | Emerging Destinations",
                img: "/India Journeys.png",
                alt: "Corporate retreat setting in India",
                href: CONTACT_LINKS.corporateIndia,
                cta: "Explore India",
                btn: "btn btn-secondary",
              },
              {
                key: "international",
                flag: "🌐",
                title: "International",
                desc: "Short-haul Escapes | Incentive Destinations | Cultural Experiences | Adventure | Luxury | Custom International Groups",
                img: "/International Journeys.png",
                alt: "Corporate retreat setting internationally",
                href: CONTACT_LINKS.corporateInternational,
                cta: "Explore International",
                btn: "btn btn-light",
              },
            ].map((d) => (
              <div
                key={d.key}
                className="group relative isolate flex min-h-104 flex-col justify-end overflow-hidden rounded-4xl bg-primary-dark shadow-lift"
              >
                <Image
                  src={d.img}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary-deep via-primary-deep/70 to-primary-deep/5" />
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-2xl backdrop-blur-md"
                      aria-hidden="true"
                    >
                      {d.flag}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white">
                      {d.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/85">
                    {d.desc}
                  </p>
                  <Link href={d.href} className={`${d.btn} mt-6`}>
                    {d.cta}
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — HOW WE WORK */}
      <Section className="bg-white">
        <Container>
          <div>
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-3 h-section">From brief to delivery.</h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {corporateHowWeWork.map((s) => (
              <li
                key={s.step}
                className="rounded-2xl border border-slate-200 bg-tint p-5"
              >
                <span className="text-sm font-bold text-secondary-dark">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* SECTION 9 — BUILT AROUND YOUR TEAM */}
      <Section className="bg-tint">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Built Around Your Team</span>
            <h2 className="mt-3 h-section">
              No two organisations, no two offsites —{" "}
              <span className="text-secondary">are the same</span>
            </h2>
            <p className="lead mt-5">
              A 20-member leadership retreat needs a very different approach
              from a 200-member annual meet. An incentive journey has a
              different purpose from a strategy offsite.
            </p>
            <p className="lead mt-3">
              That is why we start with the objective, not with a pre-designed
              package.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-secondary-dark">
                  Your people.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-secondary-dark">
                  Your purpose.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-secondary-dark">
                  Your experience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — CLOSING CTA */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary-dark" />
        <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Where should your team go next?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Tell us what you’re planning. We’ll help turn the brief into an
              experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={CONTACT_LINKS.corporateTravel}
                className="btn btn-secondary"
              >
                Plan a Corporate Experience
              </Link>
              <a href={`mailto:${company.email}`} className="btn btn-outline">
                Email: {company.email}
              </a>
              <a href={`tel:+${company.phoneE164}`} className="btn btn-outline">
                Phone: {company.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
