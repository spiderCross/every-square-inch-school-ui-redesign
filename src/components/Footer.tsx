import Link from "next/link";
import { Icon } from "./Icons";
import { Container } from "./ui";
import { company, footerLinks, programmeLinks } from "@/lib/site";

export function Footer() {
  const socials = (
    Object.entries(company.socials) as [keyof typeof company.socials, string][]
  ).filter(([, url]) => !!url);
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-primary-dark via-primary-deep to-primary-deep text-white">
      <div
        className="bg-contours pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      />
      <Container className="relative py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ESI_Logo.png"
                alt="Every Square Inch"
                width={40}
                height={40}
                className="h-14 w-auto rounded-lg bg-white/95 p-1"
              />
            </div>
            <p className="mt-4 font-(family-name:--font-display) text-lg font-bold leading-snug text-secondary-light">
              {company.subTagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              An independent educational experiences company dedicated
              exclusively to schools.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Every Square Inch on ${key}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-sm transition hover:border-secondary-light hover:bg-secondary/20 hover:text-secondary-light"
                >
                  <Icon name={key} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-(family-name:--font-display) text-base font-bold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-secondary-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-(family-name:--font-display) text-base font-bold text-white">
              Programmes
            </h3>
            <ul className="mt-4 space-y-2.5">
              {programmeLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-secondary-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-(family-name:--font-display) text-base font-bold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Icon
                  name="phone"
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light"
                />{" "}
                <a
                  href={`tel:+${company.phoneE164}`}
                  className="hover:text-secondary-light"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="whatsapp"
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light"
                />{" "}
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-light"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="mail"
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light"
                />{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-secondary-light"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="mapPin"
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light"
                />{" "}
                {company.address}
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="mapPin"
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light"
                />{" "}
                {company.extraAddress}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Every Square Inch. All rights reserved.
          </p>
          <p>{company.subTagline}</p>
        </Container>
      </div>
    </footer>
  );
}
