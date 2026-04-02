import Image from "next/image";
import Container from "@/components/ui/Container";
import { ReactNode } from "react";

type DecisionImage = {
  src: string;
  alt: string;
  caption: string;
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
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 max-w-3xl space-y-8 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
            {intro ? <div>{intro}</div> : null}

            {problemBody ? (
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  {problemTitle}
                </h3>
                <div className="mt-3 space-y-5">{problemBody}</div>
              </div>
            ) : null}

            {explorationBody ? (
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  {explorationTitle}
                </h3>
                <div className="mt-3 space-y-5">{explorationBody}</div>
              </div>
            ) : null}

            {decisionBody ? (
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  {decisionTitle}
                </h3>
                <div className="mt-3 space-y-5">{decisionBody}</div>
              </div>
            ) : null}

            {impactBody ? (
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  {impactTitle}
                </h3>
                <div className="mt-3 space-y-5">{impactBody}</div>
              </div>
            ) : null}
          </div>

          {images.length > 0 ? (
            <div className="mt-10 space-y-8">
              {images.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1200}
                    className="h-auto w-full"
                  />
                  <figcaption className="border-t border-neutral-200 bg-white px-5 py-4 text-sm leading-6 text-neutral-600 sm:px-6">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}