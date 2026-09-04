import Image from "next/image";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
              About
            </p>

            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
              I design products that make complex things easier to understand
              and use.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                I’m Oluwaseun Fatukasi, a product designer focused on turning
                complex problems into clear, useful experiences. I care about
                understanding what people need, what businesses are trying to
                achieve, and where the two can meet.
              </p>

              <p>
                My approach is shaped by experience beyond product design.
                I’ve worked across business, customer-facing roles, and
                communication, which has taught me to listen closely, ask
                better questions, and communicate ideas clearly.
              </p>

              <p>
                Whether I’m designing a product, speaking on stage, behind
                a microphone, or sharing a meal, I’m interested in the same thing:{" "}
                <span className="text-foreground">
                  understanding people and making things easier to navigate.
                </span>
              </p>
            </div>
          </div>

          {/* Photos */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Main photo */}
              <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/about/about-hosting.webp"
                  alt="Oluwaseun Fatukasi hosting on stage"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Supporting photos */}
              <div className="aspect-square overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/about/about-radio.webp"
                  alt="Oluwaseun Fatukasi in a radio studio"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/about/about-lifestyle-2.webp"
                  alt="Oluwaseun Fatukasi in a candid lifestyle setting"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}