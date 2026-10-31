import Link from "next/link";
import { Container, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-linear-to-br from-primary-dark via-primary to-primary-light" />
      <Container className="relative">
        <div className="max-w-2xl rounded-4xl border border-white/20 bg-white/10 p-10 shadow-lift backdrop-blur-md">
          <p className="text-7xl font-bold tracking-tight text-gradient sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white">Page not found</h1>
          <p className="mt-3 text-white/75">
            The page you are looking for may have moved to the updated site
            structure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-secondary">
              Home
            </Link>
            <Link href="/programmes" className="btn btn-outline">
              Programmes
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
