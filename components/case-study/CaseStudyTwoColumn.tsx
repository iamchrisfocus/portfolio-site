import Container from "@/components/ui/Container";
import { ReactNode } from "react";

type CaseStudyTwoColumnProps = {
  eyebrow?: string;
  title: string;
  left: ReactNode;
  right: ReactNode;
};

export default function CaseStudyTwoColumn({
  eyebrow,
  title,
  left,
  right,
}: CaseStudyTwoColumnProps) {
  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="max-w-4xl text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              {left}
            </div>

            <div className="space-y-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              {right}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}