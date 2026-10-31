import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Section, PageHero } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Send a school enquiry and share programme goals, timeline, and learner context.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        id="contact-hero"
        eyebrow="Contact"
        title="Send your school enquiry"
        desc="Share your goals and context. We review your requirement, connect with you, and shape suitable programme options."
      />
      <Section id="contact-form" className="bg-white">
        <Container>
          <Suspense
            fallback={
              <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-sm text-muted">
                Loading enquiry form...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
