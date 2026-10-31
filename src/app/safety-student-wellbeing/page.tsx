import type { Metadata } from "next";
import {
  Container,
  Section,
  PageHero,
  SectionHeading,
  CTASection,
  Card,
  ListItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  safetyHero,
  safetyApproach,
  safetyDetailedSections,
  safetyFaqs,
  safetyFinalCta,
} from "@/lib/constants";
import type { SafetySection } from "@/lib/safety-content";

export const metadata: Metadata = pageMetadata({
  title: "Safety & Student Wellbeing",
  description:
    "Understand Every Square Inch's planning, preparation, and support approach for student wellbeing during educational journeys.",
  path: "/safety-student-wellbeing",
});

function renderPointsSection(section: SafetySection) {
  return (
    <>
      {section.beforeList && (
        <p className="text-sm font-medium text-ink mb-3">
          {section.beforeList}
        </p>
      )}
      {section.points && section.points.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
          {section.points.map((point, idx) => (
            <ListItem
              key={idx}
              title={point}
              icon="check"
              className="text-sm"
            />
          ))}
        </ul>
      )}
      {section.closing && (
        <p className="mt-6 text-sm text-muted">{section.closing}</p>
      )}
    </>
  );
}

function renderSubsectionsSection(section: SafetySection) {
  return (
    <>
      {section.subsections && (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {section.subsections.map((sub, idx) => (
            <Card key={sub.title} className="p-6">
              <h3 className="text-lg font-semibold text-ink">{sub.title}</h3>
              <p className="mt-2 text-sm text-muted">{sub.desc}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function renderPartiesSection(section: SafetySection) {
  return (
    <>
      {section.parties && (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {section.parties.map((party, idx) => (
            <Card key={party.title} className="p-6">
              <h3 className="text-lg font-semibold text-ink">{party.title}</h3>
              <p className="mt-2 text-sm text-muted">{party.desc}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function renderImportantNoteSection(section: SafetySection) {
  return (
    <div className="relative rounded-2xl border border-primary/10 bg-primary/5 p-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon name="clipboard" className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-ink">Important Note</h3>
          <p className="mt-2 text-sm text-ink/80 leading-relaxed">
            {section.content}
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailedSection({ section }: { section: SafetySection }) {
  return (
    <Section id={section.id} className="bg-white">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          desc={section.desc}
        />
        <div className="mt-10">
          {section.id === "risk-aware-programme-planning" &&
            renderSubsectionsSection(section)}
          {section.id === "shared-responsibility" &&
            renderPartiesSection(section)}
          {section.id === "important-note" &&
            renderImportantNoteSection(section)}
          {![
            "risk-aware-programme-planning",
            "shared-responsibility",
            "important-note",
          ].includes(section.id) && renderPointsSection(section)}
        </div>
      </Container>
    </Section>
  );
}

export default function SafetyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Safety & Student Wellbeing",
            path: "/safety-student-wellbeing",
          },
        ])}
      />
      <PageHero
        id="safety-hero"
        eyebrow={safetyHero.eyebrow}
        title={safetyHero.title}
        desc={safetyHero.desc}
        showCTA
        ctaText={safetyHero.primaryCta}
        ctaLink={safetyHero.primaryHref}
        secondaryCtaText={safetyHero.secondaryCta}
        secondaryCtaLink={safetyHero.secondaryHref}
        image="/safety_page.png"
        imageAlt="Safety and student wellbeing support for educational journeys"
      />

      {/* Our Approach */}
      <Section id="our-approach" className="bg-white">
        <Container>
          <SectionHeading title={safetyApproach.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {safetyApproach.cards.map((card, idx) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-secondary to-secondary-dark text-white shadow-orange">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-ink">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed Sections - each using Section component */}
      {safetyDetailedSections.map((section) => (
        <DetailedSection key={section.id} section={section} />
      ))}

      {/* FAQ Section */}
      <Section id="faqs" className="bg-white">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FaqAccordion items={[...safetyFaqs]} />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTASection
        id="final-cta"
        title={safetyFinalCta.title}
        desc={safetyFinalCta.desc}
        primaryText={safetyFinalCta.primaryCta}
        primaryHref={safetyFinalCta.primaryHref}
        secondLinkText={safetyFinalCta.secondaryCta}
        secondLinkUrl={safetyFinalCta.secondaryHref}
      />
    </>
  );
}
