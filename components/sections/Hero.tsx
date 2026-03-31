import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Portfolio Rebuild
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Product Designer for ambitious teams building real-world digital
            products.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            I design clear, usable digital products with a focus on product
            thinking, interaction, and execution.
          </p>
        </div>
      </Container>
    </section>
  );
}