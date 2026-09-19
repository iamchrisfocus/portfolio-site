import Image from "next/image";
import Container from "@/components/ui/Container";

type Project = {
  title: string;
  meta: string;
  description: string;
  href?: string;
  image?: string;
  lightImage?: string;
};

const projects: Project[] = [
  {
    title: "Service Operations + Field Operations",
    meta: "Web • Operations • Mobile",
    description:
      "A connected operating system for planning service work, managing teams, and supporting field execution.",
    href: "/work/sova-operations",
    image: "/images/sova-operations/sova-operations-cover.webp",
  },
  {
    title: "Sova / Customer Experience",
    meta: "Mobile • Service Experience",
    description:
      "A customer experience designed to make professional home cleaning effortless to book and manage.",
    href: "/work/sova-customer",
    image: "/images/sova-customer/sova-customer-cover.webp",
    lightImage: "/images/sova-customer/sova-customer-cover-light.webp",
  },
  {
    title: "Averra",
    meta: "Web • SaaS • Education",
    description:
      "A school administrator workspace designed to turn school data into clear operational decisions.",
    href: "/work/averra",
    image: "/images/averra/averra-cover.webp",
  },
  {
    title: "Quees",
    meta: "Mobile • Fintech • Concept",
    description:
      "A social-first fintech concept designed to make shared expenses, reconciliation, and settlement effortless.",
    href: "/work/quees",
    image: "/images/quees/quees-cover.webp",
  },
  {
    title: "Etherally",
    meta: "Web • Community",
    description:
      "A community discovery experience designed to make the Ethereum ecosystem easier to explore, filter, and connect with.",
    href: "/work/etherally",
    image: "/images/etherally/etherally-cover.webp",
  },
  {
    title: "Coming soon",
    meta: "More work",
    description:
      "Another product story is currently being shaped.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10"
        style={{ borderRadius: 0 }}
      >
        {project.image ? (
          project.lightImage ? (
            <>
              <Image
                src={project.lightImage}
                alt={`${project.title} preview`}
                fill
                className="!rounded-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] dark:hidden"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src={project.image}
                alt=""
                fill
                className="!rounded-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] hidden dark:block"
                sizes="(max-width: 768px) 100vw, 50vw"
                aria-hidden="true"
              />
            </>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="!rounded-none object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center p-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                Coming soon
              </p>
              <p className="mt-3 text-base text-muted">
                More work is on the way.
              </p>
            </div>
          </div>
        )}
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

        {project.href ? (
          <p className="mt-5 text-sm font-medium text-foreground">
            View case study →
          </p>
        ) : null}
      </div>
    </>
  );

  if (!project.href) {
    return (
      <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
        {content}
      </div>
    );
  }

  return (
    <a
      href={project.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-accent/50"
    >
      {content}
    </a>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-border bg-background py-24">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Selected work
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Products I’ve helped shape.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}