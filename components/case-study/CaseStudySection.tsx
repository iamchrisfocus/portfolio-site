import Container from "@/components/ui/Container";
import { ReactNode } from "react";

type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({
  eyebrow,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}