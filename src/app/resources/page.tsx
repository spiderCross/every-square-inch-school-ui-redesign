import type { Metadata } from "next";
import {
  Container,
  Section,
  Card,
  PageHero,
  CTASection,
  SectionHeading,
} from "@/components/ui";
import { Icon, type IconName } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { resources, resourceCategories, resourcesFaqs } from "@/lib/site";
import { resourcesContent } from "@/lib/resources-content";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { CONTACT_LINKS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: resourcesContent.seoTitle,
  description: resourcesContent.metaDescription,
  path: "/resources",
});

export default function ResourcesPage() {
  const summaryLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Educational Travel Resources for Schools",
    description:
      "Practical resources for schools, teachers, parents and students to plan, prepare and reflect on educational journeys.",
    url: "https://www.everysquareinchschools.com/resources",
    publisher: {
      "@type": "Organization",
      name: "Every Square Inch",
    },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <JsonLd data={summaryLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: resourcesFaqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      <PageHero
        id="resources-hero"
        eyebrow="Resources"
        title="Plan with Confidence. Learn with Purpose."
        desc="Practical guidance for schools, teachers, parents and students before, during and after an educational journey."
        showCTA
        ctaText="Explore Resources"
        ctaLink="#resources-library"
        secondaryCtaText="Request a Planning Consultation"
        secondaryCtaLink={CONTACT_LINKS.planYourJourney}
        image="/resources.png"
        imageAlt="Resources and planning support for school educational journeys"
      />

      <Section id="resources-categories" className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Resource categories"
            title="Practical material for every role"
            desc="Resources organised so schools, teachers, parents and students can find what is relevant to them quickly."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((cat) => (
              <Card key={cat.id} className="flex h-full flex-col">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10">
                  <Icon name={cat.icon as IconName} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-ink">{cat.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cat.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="resources-library" className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Recommended launch resources"
            title="Start with the essentials"
            desc="A focused set of resources for schools preparing, executing or reflecting on an educational journey."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => {
              const schema: Record<string, unknown> = {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: item.title,
                description: item.desc,
                dateModified: item.versionDate,
                publisher: {
                  "@type": "Organization",
                  name: "Every Square Inch",
                },
              };
              if (item.available && item.fileType === "PDF") {
                schema["@type"] = "DigitalDocument";
                schema.encodingFormat = "application/pdf";
              }
              return (
                <Card key={item.slug} className="flex h-full flex-col">
                  <JsonLd data={schema} />
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary-dark">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-1">
                      {item.fileType}
                    </span>
                    <span className="text-muted">{item.readingTime}</span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                    <span>Version: {item.versionDate}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {item.available && item.fileUrl ? (
                      <a
                        href={item.fileUrl}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
                      >
                        <Icon name="fileText" className="h-4 w-4" />
                        Download Resource
                      </a>
                    ) : (
                      <span
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-muted"
                        title="An approved file is not yet attached for this resource."
                      >
                        <Icon name="fileText" className="h-4 w-4" />
                        Coming soon
                      </span>
                    )}
                    <a
                      href={CONTACT_LINKS.planYourJourney}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/5"
                    >
                      Request a Planning Consultation
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="resources-faq" className="bg-white">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqAccordion items={resourcesFaqs} />
          </div>
        </Container>
      </Section>

      <CTASection
        id="resources-cta"
        title="Need a specific planning resource?"
        desc="Share your programme context and our team will guide you to the relevant materials or prepare one to suit."
      />
    </>
  );
}
