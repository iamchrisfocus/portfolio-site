import Image from "next/image";
import Container from "@/components/ui/Container";
import { ReactNode } from "react";

type DecisionImage = {
  src: string;
  alt: string;
  caption: string;
  heading?: string;
};

type CaseStudyDecisionBlockProps = {
  title: string;
  intro?: ReactNode;
  problemTitle?: string;
  problemBody?: ReactNode;
  explorationTitle?: string;
  explorationBody?: ReactNode;
  decisionTitle?: string;
  decisionBody?: ReactNode;
  impactTitle?: string;
  impactBody?: ReactNode;
  images?: DecisionImage[];
};

export default function CaseStudyDecisionBlock({
  title,
  intro,
  problemTitle = "The problem",
  problemBody,
  explorationTitle,
  explorationBody,
  decisionTitle = "Final decision",
  decisionBody,
  impactTitle = "Why this mattered",
  impactBody,
  images = [],
}: CaseStudyDecisionBlockProps) {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-5xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Key decision
            </p>

            <h2 className="text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title.replace(/^Key decision \d+ — /, "")}
            </h2>
          </div>

          <div className="mt-10 max-w-3xl space-y-10 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {intro ? <div>{intro}</div> : null}

            {problemBody ? (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                  {problemTitle}
                </h3>

                <div className="mt-3 space-y-5">{problemBody}</div>
              </div>
            ) : null}

            {explorationBody ? (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                  {explorationTitle}
                </h3>

                <div className="mt-3 space-y-5">{explorationBody}</div>
              </div>
            ) : null}

            {decisionBody ? (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                  {decisionTitle}
                </h3>

                <div className="mt-3 space-y-5">{decisionBody}</div>
              </div>
            ) : null}

            {impactBody ? (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                  {impactTitle}
                </h3>

                <div className="mt-3 space-y-5">{impactBody}</div>
              </div>
            ) : null}
          </div>

          {images.length > 0 ? (
            <div className="mt-12 space-y-12">
              {images.map((image) => (
                <div key={image.src}>
                  {image.heading ? (
                    <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                      {image.heading}
                    </h3>
                  ) : null}

                  <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1200}
                      className="h-auto w-full"
                    />

                    <figcaption className="border-t border-border px-5 py-4 text-sm leading-6 text-muted sm:px-6">
                      {image.caption}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}