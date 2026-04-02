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
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 space-y-8">
            {items.map((item) => (
              <div key={item.title} className="max-w-3xl">
                <h3 className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
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