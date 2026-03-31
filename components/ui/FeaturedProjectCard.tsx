type FeaturedProjectCardProps = {
  title: string;
  meta: string;
  description: string;
  href: string;
  children: React.ReactNode;
};

export default function FeaturedProjectCard({
  title,
  meta,
  description,
  href,
  children,
}: FeaturedProjectCardProps) {
  return (
    <a
      href={href}
      className="mt-14 grid gap-8 rounded-[2rem] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-900 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
    >
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
          {meta}
        </p>

        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          {description}
        </p>

        <p className="mt-8 inline-flex items-center text-sm font-medium text-black">
          View case study <span className="ml-2">→</span>
        </p>
      </div>

      {children}
    </a>
  );
}