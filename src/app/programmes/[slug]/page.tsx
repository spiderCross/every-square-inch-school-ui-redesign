import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  SectionHeading,
  PageHero,
  CTASection,
  ListItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  programmeBySlug,
  programmeDetails,
  programmeDetailPageCopy as copy,
  type ProgrammeDetail,
} from "@/lib/programmes";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: ProgrammeDetail["slug"] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = programmeBySlug[slug];
  if (!item) notFound();
  return pageMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/programmes/${slug}`,
  });
}

export default async function ProgrammeDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = programmeBySlug[slug];
  if (!item) notFound();

  const programmeParam = encodeURIComponent(item.title);
  const proposalHref = `/contact?type=programme_enquiry&programme=${programmeParam}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programmes", path: "/programmes" },
          { name: item.title, path: `/programmes/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: item.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <PageHero
        id={`programme-${slug}-hero`}
        eyebrow={item.title}
        title={item.heroH1}
        desc={item.heroSupportingCopy}
        showCTA
        ctaText={copy.heroPrimaryCta}
        ctaLink={proposalHref}
        secondaryCtaText={copy.heroSecondaryCta}
        secondaryCtaLink={proposalHref}
        image={item.heroImage}
        imageAlt={item.heroImageAlt}
      />

      <Section id={`programme-${slug}-overview`} className="bg-white">
        <Container>
          <h2 className="h-section">{copy.overviewHeading}</h2>
          <div className="mt-5 max-w-2xl space-y-4">
            {item.overview.map((para) => (
              <p key={para} className="lead">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section id={`programme-${slug}-learning-outcomes`} className="bg-tint">
        <Container>
          <h2 className="h-section">{copy.learningOutcomesHeading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.learningOutcomes.map((outcome) => (
              <ListItem key={outcome} title={outcome} />
            ))}
          </ul>
        </Container>
      </Section>

      <Section id={`programme-${slug}-highlights`} className="bg-white">
        <Container>
          <h2 className="h-section">{copy.highlightsHeading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.highlights.map((line) => (
              <ListItem key={line} title={line} />
            ))}
          </ul>
        </Container>
      </Section>

      <Section id={`programme-${slug}-themes`} className="bg-tint">
        <Container>
          <h2 className="h-section">{copy.themesHeading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {item.themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-ink">{theme.title}</h3>
                <p className="mt-2 text-sm text-muted">{theme.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id={`programme-${slug}-who-can-participate`}
        className="bg-white"
      >
        <Container>
          <h2 className="h-section">{copy.whoCanParticipateHeading}</h2>
          <p className="mt-4 max-w-3xl lead">{item.whoCanParticipate}</p>
        </Container>
      </Section>

      <Section id={`programme-${slug}-wellbeing`} className="bg-tint">
        <Container>
          <h2 className="h-section">{copy.wellbeingHeading}</h2>
          <p className="mt-4 max-w-3xl lead">{item.wellbeing}</p>
        </Container>
      </Section>

      <Section id={`programme-${slug}-faqs`} className="bg-white">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqAccordion items={item.faqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        id={`programme-${slug}-cta`}
        title="Begin planning your programme"
        desc={copy.finalCtaText}
        primaryText={copy.finalCtaButton}
        primaryHref={proposalHref}
        secondLinkText="Explore Other Programmes"
        secondLinkUrl="/programmes"
      />
    </>
  );
}
