import Container from "@/components/ui/Container";

type OutcomeItem = {
  title: string;
  description: string;
};

type CaseStudyOutcomeGridProps = {
  title: string;
  items: OutcomeItem[];
};

export default function CaseStudyOutcomeGrid({
  title,
  items,
}: CaseStudyOutcomeGridProps) {
  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="max-w-4xl text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-lg font-medium tracking-tight text-black sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}