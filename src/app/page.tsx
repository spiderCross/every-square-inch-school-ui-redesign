import Image from "next/image";
import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EsiAtAGlance } from "@/components/EsiAtAGlance";
import { PartnerSchoolsCarousel } from "@/components/PartnerSchoolsCarousel";
import { HomeTestimonialsCarousel } from "@/components/HomeTestimonialsCarousel";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CTASection,
} from "@/components/ui";
import {
  homeModules,
  programmeCards,
  whyChooseESI,
  indiaDestinations,
  internationalDestinations,
  safetyHighlights,
  homeFaqs,
} from "@/lib/site";
import {
  CONTACT_LINKS,
  programmeIcons,
  whyIcons,
  glimpseImages,
  safetyFeatureIcons,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Home",
  description:
    "School educational journeys designed for learning outcomes, student wellbeing, and meaningful real-world experience.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <section
        id="home-01-hero"
        className="relative overflow-hidden bg-linear-to-b from-tint via-white to-white text-ink"
      >
        <div
          className="bg-contours-dark pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
        />
        <div
          className="orb -right-32 -top-24 h-112 w-md bg-secondary/15 animate-float-slow"
          aria-hidden="true"
        />
        <div
          className="orb -left-40 bottom-0 h-112 w-md bg-primary/10 animate-float-slower"
          aria-hidden="true"
        />
        <Container className="relative py-12 sm:py-20">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">Every Square Inch</span>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.03] tracking-tight text-balance text-primary-dark sm:text-6xl lg:text-7xl">
                {homeModules.heroTitle}
              </h1>
              <p className="mt-6 text-xl font-semibold text-secondary-dark sm:text-2xl">
                {homeModules.heroSubTitle}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/75">
                {homeModules.heroDesc}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <TrackedLink
                  href={CONTACT_LINKS.schoolProposal}
                  className="btn btn-secondary"
                  eventName="cta_primary_click"
                  payload={{ page: "home", cta: "request_proposal" }}
                >
                  Request a Proposal
                  <Icon name="arrowRight" className="h-4 w-4" />
                </TrackedLink>
                <TrackedLink
                  href="/programmes"
                  className="btn btn-ghost"
                  eventName="cta_secondary_click"
                  payload={{ page: "home", cta: "explore_programmes" }}
                >
                  Explore Programmes
                </TrackedLink>
              </div>
              <div className="mt-12 max-w-2xl border-t border-primary/10 pt-6">
                <p className="text-sm font-semibold text-muted">
                  What guides every journey
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-3">
                  {homeModules.trustStrip.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-ink"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary-dark">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-arch-rise relative w-full max-w-md lg:max-w-none">
              <div
                className="arch absolute -right-4 top-6 h-full w-full rounded-b-4xl border-2 border-secondary/40"
                aria-hidden="true"
              />
              <div className="arch relative overflow-hidden rounded-b-4xl bg-primary-dark shadow-lift">
                <Image
                  src="/Students trekking in snow.jpeg"
                  alt="Students in a guided school learning journey setting"
                  width={1400}
                  height={1400}
                  priority
                  className="h-112 w-full object-cover sm:h-136"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-deep/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/12 text-secondary-dark">
                  <Icon name="sparkles" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-(family-name:--font-display) text-xl font-extrabold leading-none text-primary-dark">
                    14+ years
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    partnering with schools across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="home-02-who-we-are" className="bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="An educational journey partner for schools"
                desc={homeModules.whoWeAre}
              />
              <blockquote className="mt-8 border-l-4 border-secondary pl-5 font-(family-name:--font-display) text-xl font-bold leading-snug text-primary-dark sm:text-2xl">
                {homeModules.philosophyQuote}
              </blockquote>
            </div>
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-sand"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-4xl shadow-lift">
                <Image
                  src="/Who We Are.jpeg"
                  alt="Students and educators during a guided field-based activity"
                  width={1200}
                  height={700}
                  loading="lazy"
                  className="h-88 w-full object-cover sm:h-104"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="home-04-featured-programmes" className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Featured programmes"
            title="Programme pathways for diverse school goals"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programmeCards.map((item, idx) => (
              <Card key={item.title} className="group flex flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    name={programmeIcons[idx % programmeIcons.length]}
                    className="h-5 w-5"
                  />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
                <TrackedLink
                  href={item.href ?? "/programmes"}
                  className="link-arrow mt-5"
                  eventName="programme_card_click"
                  payload={{ programme: item.title }}
                >
                  View programme
                  <Icon name="arrowRight" className="h-4 w-4" />
                </TrackedLink>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="home-05-why-schools-choose" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why schools choose Every Square Inch"
            title="Built for educational intent and operational clarity"
            desc={homeModules.whyIntro}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {whyChooseESI.map((item, idx) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-primary/10 bg-sand/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-secondary-dark shadow-soft transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon
                    name={whyIcons[idx % whyIcons.length]}
                    className="h-5 w-5"
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="home-06-esi-at-a-glance"
        className="relative overflow-hidden bg-tint"
      >
        <Container className="relative">
          <SectionHeading
            eyebrow="Every Square Inch at a glance"
            title="A snapshot of our work with schools"
            desc="An independent, school-focused educational travel partner — with programmes designed around learning outcomes, wellbeing, and educator collaboration."
          />
          <div className="mt-12">
            <EsiAtAGlance />
          </div>
        </Container>
        <Container className="relative mt-20">
          <SectionHeading
            eyebrow="Trusted by leading schools across India"
            title="Partner schools we have worked with"
            desc="For over 14 years, Every Square Inch has partnered with leading schools across India to deliver safe, structured and learning-focused educational programmes."
          />
          <div className="mt-12">
            <PartnerSchoolsCarousel />
          </div>
        </Container>
      </Section>

      <Section id="home-07-reviews" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Reviews"
            title="What schools say about our journeys"
            desc="Feedback from school leaders, educators and families who have experienced our learning journeys firsthand"
          />
          <div className="mt-12">
            <HomeTestimonialsCarousel />
          </div>
        </Container>
      </Section>

      <Section id="home-08-glimpses" className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Glimpses"
            title="Glimpses of learning journeys"
          />
          <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {glimpseImages.map((src, idx) => {
              const span =
                idx === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : idx >= 3
                    ? "lg:col-span-2"
                    : "";
              return (
                <div
                  key={src + idx}
                  className={`group relative overflow-hidden rounded-3xl shadow-soft ${span}`}
                >
                  <Image
                    src={src}
                    alt={`Glimpse of a learning journey ${idx + 1}`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10" />
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section
        id="home-08-destinations"
        className="relative overflow-hidden bg-white"
      >
        <Container className="relative">
          <SectionHeading
            eyebrow="Educational destinations"
            title="Where learning travels next"
            desc="From landmarks closer to home to experiences across continents, Every Square Inch designs school journeys to match learning objectives."
          />
          <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                key: "india",
                flag: "🇮🇳",
                title: "India",
                list: indiaDestinations,
                img: "/India Journeys-Home.png",
                href: "/destinations#destinations-india",
                cta: "Explore India",
                btn: "btn btn-secondary",
              },
              {
                key: "international",
                flag: "🌐",
                title: "International",
                list: internationalDestinations,
                img: "/International Journeys - Home.png",
                href: "/destinations#destinations-international",
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
                  alt={`${d.title} educational journeys for students`}
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
                    {d.list.join(" | ")}
                  </p>
                  <TrackedLink
                    href={d.href}
                    className={`${d.btn} mt-6`}
                    eventName="destination_panel_click"
                    payload={{ panel: d.key }}
                  >
                    {d.cta}
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="home-09-safety-student-wellbeing" className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Safety & student wellbeing"
            title="Student wellbeing at the centre of every journey"
          />
          <ol className="relative mt-14 grid gap-5 sm:grid-cols-3">
            {safetyHighlights.map((item, idx) => (
              <li
                key={item.title}
                className="relative rounded-3xl border border-primary/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-primary to-primary-light text-white shadow-indigo">
                    <Icon name={safetyFeatureIcons[idx]} className="h-5 w-5" />
                  </span>
                  <span
                    className="font-(family-name:--font-display) text-5xl font-extrabold text-primary/10"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="home-11-faq" className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions"
              />
            </div>
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        id="home-12-final-cta"
        title="Ready to shape your next school learning journey?"
        desc="Share your goals and we will propose suitable programme pathways for your school context."
      />
    </>
  );
}
