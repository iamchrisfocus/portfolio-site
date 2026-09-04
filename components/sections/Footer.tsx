"use client";

import Container from "@/components/ui/Container";

type FooterProps = {
  isCaseStudyPage?: boolean;
};

export default function Footer({ isCaseStudyPage = false }: FooterProps) {
  const workHref = isCaseStudyPage ? "/#work" : "#work";
  const aboutHref = isCaseStudyPage ? "/#about" : "#about";
  const contactHref = isCaseStudyPage ? "/#contact" : "#contact";

  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">Seun Fatukasi</p>
          <p className="mt-1 text-sm text-muted">
            Product designer focused on clarity, structure, and usable digital experiences.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 text-sm text-muted sm:items-end">
          <div className="flex items-center gap-6">
            <a href={workHref} className="transition hover:text-foreground">
              Work
            </a>
            <a href={aboutHref} className="transition hover:text-foreground">
              About
            </a>
            <a href={contactHref} className="transition hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted">© 2026</p>
        </div>
      </Container>
    </footer>
  );
}