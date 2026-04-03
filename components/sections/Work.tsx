import Image from "next/image";
import Container from "@/components/ui/Container";
import { featuredProject, supportingProjects } from "@/lib/data";

function FeaturedMediaSlot() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50">
      <Image
        src="/images/spritz/spritz-hero-composite.webp"
        alt="Spritz case study preview"
        width={1600}
        height={1200}
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.3]"
      />
    </div>
  );
}

function SupportingMediaSlot({ title }: { title: string }) {
  if (title === "HireCleaner") {
    return (
      <div
        className="rounded-[1.5rem] p-4"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div
          className="aspect-square overflow-hidden rounded-[1.25rem] border border-neutral-200 md:h-full md:min-h-[180px] md:aspect-auto"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <Image
            src="/images/hirecleaner/hirecleaner-card-preview.webp"
            alt="HireCleaner case study preview"
            width={720}
            height={880}
            className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.18]"
          />
        </div>
      </div>
    );
  }

  if (title === "Split & Settle") {
    return (
      <div
        className="rounded-[1.5rem] p-4"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div
          className="aspect-square overflow-hidden rounded-[1.25rem] border border-neutral-200 p-3 md:h-full md:min-h-[180px] md:aspect-auto"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <Image
            src="/images/split-settle/split-settle-card-preview.webp"
            alt="Split & Settle case study preview"
            width={720}
            height={880}
            className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.14]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] bg-neutral-100 p-4">
      <div className="aspect-square rounded-[1.25rem] border border-dashed border-neutral-300 bg-neutral-50 md:h-full md:min-h-[180px] md:aspect-auto" />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-neutral-200 bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Case Study
          </p>

          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Selected work
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            A few products I’ve helped shape across fintech, services, and
            everyday utility tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <a
            href={featuredProject.href}
            className="group rounded-[2rem] border border-neutral-200 bg-white p-5 transition hover:border-neutral-900"
          >
            <FeaturedMediaSlot />

            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                {featuredProject.meta}
              </p>

              <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                {featuredProject.description}
              </p>

              <p className="mt-6 text-sm font-medium text-black">
                View case study
              </p>
            </div>
          </a>

          <div className="grid gap-6">
            {supportingProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group grid rounded-[2rem] border border-neutral-200 bg-white p-5 transition hover:border-neutral-900 md:grid-cols-[180px_1fr] md:items-stretch"
              >
                <SupportingMediaSlot title={project.title} />

                <div className="mt-5 flex flex-col justify-center md:mt-0 md:pl-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                    {project.meta}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    {project.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-black">
                    View case study
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}