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
        className="mt-14 grid gap-10 rounded-[2rem] border border-neutral-200 p-6 transition hover:border-neutral-900 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <p className="text-sm text-neutral-500">{meta}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            {description}
          </p>
          <p className="mt-8 text-sm font-medium text-black">View case study →</p>
        </div>
  
        {children}
      </a>
    );
  }