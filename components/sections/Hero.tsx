import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Product Designer · 0→1, AI Products & UX Strategy
          </p>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem]">
            I design digital products that turn complexity into clarity.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            From product discovery to workflow design, I shape experiences that
            are clear, easier to understand, easy to use, and grounded in real 
            business goals
          </p>
        </div>
      </Container>
    </section>
  );
}