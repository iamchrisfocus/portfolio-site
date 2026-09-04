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
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Results
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-card p-6"
              >
                <h3 className="text-lg font-medium leading-6 tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-muted">
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