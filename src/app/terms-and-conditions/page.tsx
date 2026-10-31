import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { termsSections } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms of Use",
  description:
    "Terms governing access to and use of the Every Square Inch website and online enquiries.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Website Terms of Use",
            path: "/terms-and-conditions",
          },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Website Terms of Use"
        desc="Last updated: 17 August 2026"
      />
      <section className="bg-white">
        <Container className="py-16">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Version 1.0 · 17 August 2026
            </p>
            <div className="space-y-8">
              {termsSections.map(({ h, body }) => (
                <article key={h}>
                  <h2 className="text-xl font-bold text-ink">{h}</h2>
                  {body.map((p, i) => (
                    <p
                      key={i}
                      className="mt-3 text-sm leading-relaxed text-muted"
                    >
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
