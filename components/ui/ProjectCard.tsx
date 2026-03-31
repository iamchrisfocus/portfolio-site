type ProjectCardProps = {
  title: string;
  meta: string;
  description: string;
  href: string;
  children: React.ReactNode;
};

export default function ProjectCard({
  title,
  meta,
  description,
  href,
  children,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group rounded-[2rem] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-900"
    >
      {children}

      <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        {meta}
      </p>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-neutral-600">
        {description}
      </p>

      <p className="mt-6 inline-flex items-center text-sm font-medium text-black">
        View case study <span className="ml-2">→</span>
      </p>
    </a>
  );
}