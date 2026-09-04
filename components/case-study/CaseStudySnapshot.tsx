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
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            At a glance
          </p>

          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-border bg-card p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </p>

                <p className="mt-4 text-base leading-7 text-foreground">
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