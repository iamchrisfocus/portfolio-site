import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import Container from "@/components/ui/Container";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";

export default function SpritzPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar isCaseStudyPage />

      <section className="py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Case Study
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Spritz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              A mobile-first field-service management platform for service
              contractors.
            </p>

            <div className="mt-12 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-neutral-600">
                Full case study content will be added here.
              </p>
            </div>

            <div className="mt-16">
              <CaseStudyPagination
                next={{ title: "HireCleaner", href: "/work/hirecleaner" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}