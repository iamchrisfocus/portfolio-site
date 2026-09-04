import Container from "@/components/ui/Container";

type ReflectionItem = {
  title: string;
  description: string;
};

type CaseStudyReflectionProps = {
  title: string;
  items: ReflectionItem[];
};

export default function CaseStudyReflection({
  title,
  items,
}: CaseStudyReflectionProps) {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Takeaways
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-10 space-y-10">
            {items.map((item) => (
              <div key={item.title} className="max-w-3xl">
                <h3 className="text-lg font-medium leading-6 tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
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