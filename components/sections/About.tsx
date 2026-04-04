import Image from "next/image";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200 bg-white py-24">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>

          <h2 className="max-w-3xl text-2xl font-medium tracking-tight sm:text-3xl">
            Designing clearer products for real people, practical business goals, and better decisions.
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            <p>
              I’m Oluwaseun Fatukasi, a product designer focused on clarity,
              structure, and decision-making. I care about designing
              experiences that help people move with less friction and more
              confidence, especially in products where complexity can easily
              get in the way.
            </p>

            <p>
              My work sits at the intersection of user needs, business goals,
              and practical execution. I enjoy simplifying flows, sharpening
              product direction, and shaping interfaces that feel calm, useful,
              and considered rather than noisy for the sake of it.
            </p>

            <p>
              Outside design, I’m drawn to communication just as much as I am
              to product thinking, whether that is speaking on stage, working
              behind a microphone, or simply paying attention to how people
              connect, listen, and respond. That mix of structure and human
              awareness shapes the way I design.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="aspect-square overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50">
              <Image
                src="/images/about/about-hosting.webp"
                alt="Oluwaseun Fatukasi hosting on stage"
                width={1200}
                height={1200}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50">
              <Image
                src="/images/about/about-radio.webp"
                alt="Oluwaseun Fatukasi in a radio studio"
                width={1200}
                height={1200}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50">
              <Image
                src="/images/about/about-lifestyle-2.webp"
                alt="Oluwaseun Fatukasi in a candid lifestyle setting"
                width={1200}
                height={1200}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}