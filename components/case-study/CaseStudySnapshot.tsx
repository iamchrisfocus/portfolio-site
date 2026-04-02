import Container from "@/components/ui/Container";

type SnapshotItem = {
  label: string;
  value: string;
};

type CaseStudySnapshotProps = {
  title?: string;
  items: SnapshotItem[];
};

export default function CaseStudySnapshot({
  title = "At a glance",
  items,
}: CaseStudySnapshotProps) {
  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            {title}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-neutral-200 bg-white p-6"
              >
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {item.label}
                </p>

                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}