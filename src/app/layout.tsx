import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/site";

// Display: expressive grotesque for headlines. Body: friendly, highly legible sans.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalHost),
  title: {
    default: "Every Square Inch | Learning Beyond Boundaries",
    template: "%s | Every Square Inch",
  },
  description:
    "Educational travel programmes for schools designed around learning outcomes, guided reflection, and student wellbeing. Every Square Inch: Learning Beyond the Textbook.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/ESI_logo_only.jpg",
    shortcut: "/ESI_logo_only.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: company.canonicalHost,
            logo: `${company.canonicalHost}/ESI_logo_only.jpg`,
            slogan: company.subTagline,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: company.phone,
              email: company.email,
              areaServed: "IN",
              availableLanguage: ["en"],
            },
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
