import Image from "next/image";
import Container from "@/components/ui/Container";
import { featuredProject, supportingProjects } from "@/lib/data";

type Project = {
  title: string;
  meta: string;
  description: string;
  href: string;
  image?: string;
  isPlaceholder?: boolean;
};

const projects: Project[] = [
  {
    title: featuredProject.title,
    meta: featuredProject.meta,
    description: featuredProject.description,
    href: featuredProject.href,
    image: "/images/spritz/spritz-hero-composite.webp",
  },
  {
    title: supportingProjects[0].title,
    meta: supportingProjects[0].meta,
    description: supportingProjects[0].description,
    href: supportingProjects[0].href,
    image: "/images/hirecleaner/hirecleaner-card-preview-new.webp",
  },
  {
    title: supportingProjects[1].title,
    meta: supportingProjects[1].meta,
    description: supportingProjects[1].description,
    href: supportingProjects[1].href,
    image: "/images/split-settle/split-settle-card-preview-new.webp",
  },
  {
    title: "Coming soon",
    meta: "New case study",
    description:
      "A fourth project is currently being refined and will appear here soon.",
    href: "#",
    isPlaceholder: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border bg-background py-24">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Selected work
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Products I’ve helped shape across fintech, services, and everyday
            tools.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            if (project.isPlaceholder) {
              return (
                <div
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-muted/10">
                    <span className="text-sm text-muted">Coming soon</span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {project.meta}
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-muted">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={project.title}
                href={project.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {project.meta}
                  </p>

                  <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-muted">
                    {project.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-foreground">
                    View case study →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}