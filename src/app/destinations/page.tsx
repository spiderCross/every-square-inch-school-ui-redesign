import type { Metadata } from "next";
import {
  Container,
  Section,
  PageHero,
  SectionHeading,
  CTASection,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  destinationsContent as content,
  destinationThemes,
  destinationCards,
} from "@/lib/destinations";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { CONTACT_LINKS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: content.seoTitle,
  description: content.metaDescription,
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <PageHero
        id="destinations-hero"
        eyebrow="Destinations"
        title={content.heroH1}
        desc={content.heroSupportingCopy}
        showCTA
        ctaText={content.heroPrimaryCta}
        ctaLink="#destinations-themes"
        secondaryCtaText={content.heroSecondaryCta}
        secondaryCtaLink={CONTACT_LINKS.planYourJourney}
      />

      <Section id="destinations-selection" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title={content.selectionHeading}
            desc={content.selectionBody}
          />
        </Container>
      </Section>

      <Section id="destinations-themes" className="bg-tint">
        <Container>
          <SectionHeading title={content.themesHeading} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinationThemes.map((theme, idx) => (
              <div
                key={theme.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-light text-white opacity-90 shadow-[0_8px_16px_-8px_rgba(20,0,134,0.5)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-bold text-ink">{theme.title}</h3>
                <p className="mt-2 text-sm text-muted">{theme.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="destinations-india" className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="India" title={content.indiaHeading} />
              <p className="mt-5 max-w-xl text-muted">{content.indiaBody}</p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {content.indiaLabels.map((label) => (
                <li key={label} className="chip">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="destinations-international" className="bg-tint">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="International"
                title={content.internationalHeading}
              />
              <p className="mt-5 max-w-xl text-muted">
                {content.internationalBody}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {content.internationalLabels.map((label) => (
                <li key={label} className="chip">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Destination Card */}
      {/* <Section id="destinations-cards" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Browse"
            title={content.cardsHeading}
            desc={destinationCards.length === 0 ? content.cardsNote : undefined}
          />
          {destinationCards.length > 0 && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {destinationCards.map((card) => (
                <article
                  key={card.id}
                  className="rounded-2xl border border-slate-200 bg-tint p-6"
                >
                  <h3 className="text-lg font-bold text-ink">
                    {card.location}
                  </h3>
                  <dl className="mt-4 grid gap-2 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">
                        {content.fieldHeadings.age}
                      </dt>
                      <dd className="text-muted">{card.ageRange}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">
                        {content.fieldHeadings.themes}
                      </dt>
                      <dd className="text-muted">{card.themes.join(", ")}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">
                        {content.fieldHeadings.duration}
                      </dt>
                      <dd className="text-muted">{card.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">
                        {content.fieldHeadings.season}
                      </dt>
                      <dd className="text-muted">{card.season}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">
                        {content.fieldHeadings.related}
                      </dt>
                      <dd className="text-muted">
                        <ul className="mt-1 space-y-1">
                          {card.relatedProgrammes.map((prog) => (
                            <li key={prog.href}>
                              <a
                                href={prog.href}
                                className="link-arrow text-primary"
                              >
                                {prog.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          )}
        </Container>
      </Section> */}

      <Section id="destinations-help" className="bg-tint">
        <Container>
          <div className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <SectionHeading
              title={content.needHelpHeading}
              desc={content.needHelpBody}
            />
            <a
              href={CONTACT_LINKS.planYourJourney}
              className="btn btn-secondary mt-6"
            >
              {content.needHelpCta}
            </a>
          </div>
        </Container>
      </Section>

      <Section id="destinations-faq" className="bg-white">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        id="destinations-cta"
        title="Discuss destination fit for your school"
        desc="We can map location options to learning intent, timeline, and learner needs."
        primaryText="Plan a Journey"
        primaryHref={CONTACT_LINKS.planYourJourney}
        secondLinkText="Explore Programmes"
        secondLinkUrl="/programmes"
      />
    </>
  );
}
