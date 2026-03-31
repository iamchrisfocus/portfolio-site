import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import Container from "@/components/ui/Container";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";

export default function IInvestPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar isCaseStudyPage />

      <section className="border-b border-neutral-200 py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Flagship Case Study
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Rebuilding i-invest’s product discovery experience
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              A redesign focused on helping everyday investors find the right
              investment product faster and with more confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Role
              </p>
              <p className="mt-3 text-lg text-neutral-700">Product Designer</p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Scope
              </p>
              <p className="mt-3 text-lg text-neutral-700">
                Home, discovery, product detail, comparison
              </p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Focus
              </p>
              <p className="mt-3 text-lg text-neutral-700">
                Clarity, confidence, and product selection
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              The Problem
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The current experience makes investment discovery feel heavier than
              it should.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Users are presented with multiple competing paths, uneven
              information hierarchy, and weak comparison support. The result is
              an experience that feels more like browsing product fragments than
              making a clear decision.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Design Goal
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Help everyday investors move from interest to selection with less
              friction and more confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              The redesign narrows the experience to the moments that matter
              most: understanding options, comparing them clearly, and taking
              the next step without hesitation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <CaseStudyPagination
            next={{ title: "Spritz", href: "/work/spritz" }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}