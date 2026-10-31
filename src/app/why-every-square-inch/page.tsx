import type { Metadata } from "next";
import {
  Container,
  Section,
  PageHero,
  SectionHeading,
  CTASection,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { howWeWork, operationalHighlights } from "@/lib/site";
import { CONTACT_LINKS } from "@/lib/constants";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Image from "next/image";

export const metadata: Metadata = pageMetadata({
  title: "Why Us",
  description:
    "Discover why schools choose Every Square Inch for purpose-led educational journey design.",
  path: "/why-every-square-inch",
});

export default function WhyESIPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why Us", path: "/why-every-square-inch" },
        ])}
      />
      <PageHero
        id="why-hero"
        eyebrow="Why Every Square Inch"
        title="Because a successful student journey requires more than an itinerary."
        desc="Every programme brings together learning objectives, thoughtful planning, student wellbeing, experienced coordination and structured execution."
        showCTA
        ctaText="Plan Your Journey"
        ctaLink={CONTACT_LINKS.planYourJourney}
      />
      {/*
      <Section id="why-pillars" className="bg-white">
        <Container>
          <SectionHeading title="Designed Around What Matters" />
          <p>
            Educational travel involves far more than choosing a destination.
            Schools need a partner who understands both the experience students
            should have and the responsibility involved in delivering it.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseESI.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-primary to-primary-light text-sm font-bold text-white shadow-[0_8px_16px_-8px_rgba(20,0,134,0.5)]">
                  {item.id}
                </span>
                <h2 className="mt-3 text-lg font-bold text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      */}
      <Section id="why-process" className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="How We Work With Schools"
              title="A clear five-stage process that connects school objectives with programme design, planning, execution and student learning."
            />
          </div>
          <div className="relative mt-12 overflow-hidden">
            <div className="space-y-8 lg:flex lg:space-y-0 lg:gap-6">
              {howWeWork.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-1 lg:py-8 lg:px-6"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-ink/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section id="why-operations" className="bg-tint">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <SectionHeading
                eyebrow="More Than Logistics"
                title="A well-run journey depends on what students experience and what happens behind the scenes."
                desc="Our approach brings together educational intent with the practical requirements of managing student groups - from programme planning and coordination to supervision, operational support and communication."
              />
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-4xl border border-slate-200 bg-tint">
              <Image
                src="/WHY US.jpg"
                alt="Students and coordinators working together during a school journey"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {operationalHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-tint p-6"
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="why-banner" className="bg-white py-14 sm:py-20">
        <Container>
          <div className="flex flex-col items-center">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Safe. Structured. Professionally Managed.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              From the first conversation with a school to the final day of the
              journey, our focus remains on thoughtful programme design,
              responsible coordination and meaningful student experiences.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection
        id="why-cta"
        title="Where should your students learn next?"
        desc="Tell us what you want your students to experience. We'll help shape a journey around it."
        secondLinkText="Explore Programmes"
        secondLinkUrl="/programmes"
      />
    </>
  );
}
