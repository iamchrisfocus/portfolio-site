import Image from "next/image";
import Container from "@/components/ui/Container";
import { featuredProject, supportingProjects } from "@/lib/data";

type Project = {
  title: string;
  meta: string;
  description: string;
  href: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: featuredProject.title,
    meta: featuredProject.meta,
    description: featuredProject.description,
    href: featuredProject.href,
    image: "/images/spritz/spritz-cover.webp",
  },
  {
    title: supportingProjects[0].title,
    meta: supportingProjects[0].meta,
    description: supportingProjects[0].description,
    href: supportingProjects[0].href,
    image: "/images/etherally/etherally-cover.webp",
  },
  {
    title: supportingProjects[1].title,
    meta: supportingProjects[1].meta,
    description: supportingProjects[1].description,
    href: supportingProjects[1].href,
    image: "/images/hirecleaner/hirecleaner-cover.webp",
  },
  {
    title: supportingProjects[2].title,
    meta: supportingProjects[2].meta,
    description: supportingProjects[2].description,
    href: supportingProjects[2].href,
    image: "/images/split-settle/split-settle-cover.webp",
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
            Products I’ve helped shape across fintech, services, community, and
            everyday tools.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent/50"
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10"
                style={{ borderRadius: 0 }}
              >
                {project.image ? (
                  project.title === "Spritz" ? (
                    <img
                      key="/images/spritz/spritz-cover.webp?v=2"
                      src="/images/spritz/spritz-cover.webp?v=2"
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full rounded-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Image
                      key={project.image}
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="!rounded-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )
                ) : null}
              </div>

              <div
                className="flex flex-1 flex-col p-6"
                style={{ borderRadius: 0 }}
              >
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
          ))}
        </div>
      </Container>
    </section>
  );
}