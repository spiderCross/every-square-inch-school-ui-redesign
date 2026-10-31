import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, PageHero, CTASection } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { resources } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { resourcesContent } from "@/lib/resources-content";
import { CONTACT_LINKS, RESOURCE_CATEGORY_LABELS } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = resources.find((r) => r.slug === slug);
  if (!item) notFound();
  return pageMetadata({
    title: item.title,
    description: item.desc,
    path: `/resources/${slug}`,
  });
}

export default async function ResourceDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = resources.find((r) => r.slug === slug);
  if (!item) notFound();

  const category = resourceCategoryLabel(item.category);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: item.title, path: `/resources/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        id={`resource-${slug}-hero`}
        eyebrow="Resource"
        title={item.title}
        desc={item.desc}
      />

      <Section id={`resource-${slug}-detail`} className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
              <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-secondary-dark">
                {category}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-muted">
                {item.fileType}
              </span>
              {item.readingTime && (
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-muted">
                  {item.readingTime}
                </span>
              )}
              {item.versionDate && (
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-muted">
                  Version: {item.versionDate}
                </span>
              )}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              {item.desc}
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-tint p-6 sm:p-8">
              {item.available && item.fileUrl ? (
                <>
                  <h2 className="text-lg font-bold text-ink">
                    This resource is ready to download
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    The approved file is available for school teams. Use the
                    button below to download it.
                  </p>
                  <a
                    href={item.fileUrl}
                    download
                    className="btn btn-primary mt-5"
                  >
                    Download Resource
                  </a>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-ink">
                    This resource is being finalised
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    The approved file will be published here shortly. Share your
                    context and our team will guide you to the closest available
                    guidance in the meantime.
                  </p>
                  <Link
                    href={CONTACT_LINKS.planYourJourney}
                    className="btn btn-secondary mt-5"
                  >
                    Request a Planning Consultation
                  </Link>
                </>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
                Back to all resources
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        id={`resource-${slug}-cta`}
        title="Looking for something specific?"
        desc={resourcesContent.metaDescription}
      />
    </>
  );
}

function resourceCategoryLabel(id: string): string {
  return RESOURCE_CATEGORY_LABELS[id] ?? id;
}
