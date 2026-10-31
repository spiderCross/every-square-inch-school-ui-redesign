import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, PageHero, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { aboutPrinciples } from "@/lib/constants";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn how Every Square Inch designs educational journeys for school learning outcomes and student development.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        id="about-hero"
        eyebrow="About"
        title="Learning Beyond Boundaries"
        desc="Every Square Inch designs purposeful learning journeys that connect students with places, people, cultures and experiences beyond the classroom."
        showCTA={true}
        ctaText="Explore Our Programmes"
        ctaLink="/programmes"
      />
      <Section id="about-story" className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Every journey should have a purpose."
              />
              <p className="mt-4 lead">
                Every Square Inch is an experiential and educational travel
                company that works with schools to design structured learning
                journeys across India and internationally.
              </p>
              <p className="mt-4 lead">
                We believe student travel should go beyond sightseeing. A
                destination becomes meaningful when students are encouraged to
                observe, question, participate, collaborate and reflect.
              </p>
              <p className="mt-4 lead">
                Our role extends from programme design and destination planning
                to transport, accommodation, safety coordination and on-ground
                execution - bringing the educational intent and operational
                requirements of a school journey together.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src="/Glimpse 5- Outdoor Learning.jpeg"
                alt="School learners in an outdoor educational setting"
                width={1200}
                height={700}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="about-voice" className="bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Every Square Inch is a Classroom."
          />
          <div className="relative mt-10 max-w-3xl overflow-hidden rounded-4xl bg-linear-to-br from-primary to-primary-light p-8 text-white shadow-lift sm:p-12">
            <div className="relative">
              <p className="text-lg text-white/90">
                A classroom does not always have four walls.
              </p>
              <p className="mt-4 text-white/80">
                It can be a forest where students begin to understand an
                ecosystem. A monument that brings history to life. A village
                that introduces a different way of living. An adventure that
                tests leadership and resilience. Or another country that
                broadens a student's understanding of the world.
              </p>
              <p className="mt-4 font-semibold text-secondary-light">
                We design journeys around this belief - creating opportunities
                for students to learn through experience.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-14 text-secondary">
              Supporting Principles
            </h2>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPrinciples.map((p, i) => (
                <div key={p.title} className="card group">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-secondary to-secondary-dark text-white shadow-orange">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section id="about-leadership-note" className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-4xl border border-slate-200 bg-tint">
                <Image
                  src="/CEO.jpg"
                  alt="Vijay Thapliyal, Founder & Director of Every Square Inch"
                  width={860}
                  height={1140}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-secondary-dark">
                  From our Founder
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary/70 sm:text-4xl">
                  Learning becomes meaningful when students experience the world
                  beyond the classroom.
                </h2>
                <p className="mt-6 leading-8 text-ink/70">
                  At Every Square Inch, we believe educational travel should be
                  much more than visiting a destination. A well-designed journey
                  gives students the opportunity to observe closely, ask
                  questions, engage with unfamiliar environments, work together
                  and return with a broader understanding of both the world and
                  themselves.
                </p>
                <p className="mt-6 leading-8 text-ink/70">
                  That belief shapes the way we design every programme.
                </p>
                <p className="mt-6 leading-8 text-ink/70">
                  We work closely with schools to understand their learning
                  objectives, student profile and expectations before building a
                  journey around them. From educational intent and programme
                  design to safety, logistics and on-ground execution, every
                  element is approached with care and responsibility.
                </p>
                <p className="mt-6 leading-8 text-ink/70">
                  Our purpose is simple: to create journeys where every place,
                  interaction and experience can become part of a student's
                  learning.
                </p>
                <p className="mt-6 font-semibold text-primary/70">
                  Because beyond the boundaries of a classroom, every square
                  inch has something to teach.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-ink">
                  Vijay Thapliyal
                </p>
                <p className="text-sm text-muted">
                  Founder & Director
                  <br />
                  Every Square Inch
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section id="about-closing" className="bg-tint">
        <div className="relative overflow-hidden">
          <div className="relative max-w-6xl">
            <Image
              src="/International Destination Card.jpeg"
              alt="Students engaged in a meaningful learning experience"
              width={1600}
              height={900}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          <Container className="relative py-24">
            <div className="max-w-3xl text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                From destinations to learning environments.
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Wherever the journey takes us, the objective remains the same.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                To create experiences that are purposeful, responsibly managed
                and meaningful for students.
              </p>
              <a
                href="/why-every-square-inch"
                className="btn btn-secondary mt-10 inline-flex"
              >
                Discover Every Square Inch's Approach
              </a>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
