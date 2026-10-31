import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { privacyPolicySections } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Every Square Inch collects, uses, shares, retains and protects personal data submitted through this website, and the choices available to you.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        desc="Last updated: 17 August 2026"
      />
      <section className="bg-white">
        <Container className="py-16">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Version 1.0 · 17 August 2026
            </p>
            <div className="space-y-8">
              {privacyPolicySections.map(({ h, body }) => (
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
