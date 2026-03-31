import Container from "@/components/ui/Container";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProject, supportingProjects } from "@/lib/data";

function ProjectPreview({ tone }: { tone: string }) {
  if (tone === "mobile") {
    return (
      <div className="rounded-[1.25rem] border border-neutral-200 bg-neutral-50 p-4">
        <div className="mx-auto max-w-[180px] rounded-[1.5rem] border border-neutral-300 bg-black p-2">
          <div className="overflow-hidden rounded-[1.125rem] bg-white">
            <div className="aspect-[9/19] bg-gradient-to-b from-neutral-100 to-neutral-200" />
          </div>
        </div>
      </div>
    );
  }

  if (tone === "web") {
    return (
      <div className="rounded-[1.25rem] border border-neutral-200 bg-neutral-50 p-4">
        <div className="overflow-hidden rounded-[1rem] border border-neutral-300 bg-white">
          <div className="aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200 p-3">
            <div className="h-5 w-24 rounded-full bg-white/80" />
            <div className="mt-4 grid gap-3">
              <div className="h-24 rounded-xl bg-white/90" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-xl bg-white/90" />
                <div className="h-16 rounded-xl bg-white/90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.25rem] border border-neutral-200 bg-neutral-50 p-4">
      <div className="overflow-hidden rounded-[1rem] border border-neutral-300 bg-white">
        <div className="aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200 p-4">
          <div className="grid h-full grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/90" />
            <div className="rounded-xl bg-white/90" />
            <div className="col-span-2 rounded-xl bg-white/90" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-neutral-200 bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A few products I’ve helped shape across fintech, services, and everyday utility tools.
          </p>
        </div>

        <FeaturedProjectCard
          title={featuredProject.title}
          meta={featuredProject.meta}
          description={featuredProject.description}
          href={featuredProject.href}
        >
          <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
            <div className="mx-auto max-w-[280px] rounded-[2rem] border border-neutral-300 bg-black p-2 shadow-sm">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="aspect-[9/19] bg-gradient-to-b from-neutral-100 to-neutral-200" />
              </div>
            </div>
          </div>
        </FeaturedProjectCard>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportingProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              meta={project.meta}
              description={project.description}
              href={project.href}
            >
              <ProjectPreview tone={project.tone} />
            </ProjectCard>
          ))}
        </div>
      </Container>
    </section>
  );
}