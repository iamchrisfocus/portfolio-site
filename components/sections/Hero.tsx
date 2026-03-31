import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Product Designer • 0→1, Growth, and UX Strategy
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I design digital products that turn complexity into clear, usable experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            From product discovery to workflow design, I help shape experiences
            that are easier to understand, easier to use, and grounded in real
            business goals.
          </p>
        </div>
      </Container>
    </section>
  );
}