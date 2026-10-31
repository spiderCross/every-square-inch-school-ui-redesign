import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  PageHero,
  CTASection,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { company } from "@/lib/site";
import {
  programmesOverviewContent as content,
  programmeDetails,
} from "@/lib/programmes";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { CONTACT_LINKS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: content.seoTitle,
  description: content.metaDescription,
  path: "/programmes",
});

export default function ProgrammesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programmes", path: "/programmes" },
        ])}
      />
      <PageHero
        id="programmes-hero"
        eyebrow="Programmes"
        title={content.heroH1}
        desc={content.heroSupportingCopy}
        showCTA
        ctaText={content.heroPrimaryCta}
        ctaLink="#programmes-grid"
        secondaryCtaText={content.heroSecondaryCta}
        secondaryCtaLink={CONTACT_LINKS.programmeEnquiry}
      />

      <Section id="programmes-portfolio" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our programmes"
            title={content.portfolioHeading}
            desc={content.portfolioIntro}
          />
        </Container>
      </Section>

      <Section id="programmes-grid" className="bg-tint">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programmeDetails.map((programme) => (
              <Card key={programme.slug}>
                <h3 className="text-lg font-bold text-ink">
                  {programme.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">
                  {programme.overview[0]}
                </p>
                <TrackedLink
                  href={`/programmes/${programme.slug}`}
                  className="link-arrow mt-4"
                  eventName="programme_card_click"
                  payload={{ programme: programme.title }}
                >
                  View programme
                </TrackedLink>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="programmes-selection" className="bg-white">
        <Container>
          <div className="max-w">
            <SectionHeading title={content.selectionHeading} />
            <ol className="mt-6 grid grid-cols-2 gap-3">
              {content.selectionSteps.map((step, idx) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-tint p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-base font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section id="programmes-custom-design" className="bg-tint">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow=""
              title={content.customDesignHeading}
              desc={content.customDesignText}
            />
            <a
              href={CONTACT_LINKS.programmeEnquiry}
              className="btn btn-secondary mt-8"
            >
              {content.customDesignCta}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
