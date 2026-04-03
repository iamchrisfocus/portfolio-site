import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200 bg-white py-24">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>

          <h2 className="max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Designing clearer products for real people, practical business goals, and better decisions.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              I’m Oluwaseun Fatukasi, a product designer focused on clarity,
              structure, and decision-making. I care about designing experiences
              that help users move with less friction and more confidence.
            </p>

            <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              My work sits at the intersection of user needs, business goals,
              and practical execution. I enjoy simplifying complex flows,
              sharpening product direction, and building interfaces that feel
              calm and considered.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}