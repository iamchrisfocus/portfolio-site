import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Product Designer • 0→1, Growth, and UX Strategy
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            I design digital products that make complex experiences easier to understand and easier to use.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            From product discovery to workflow design, I turn messy problems into clear, usable experiences for real people and real business goals.
          </p>
        </div>
      </Container>
    </section>
  );
}