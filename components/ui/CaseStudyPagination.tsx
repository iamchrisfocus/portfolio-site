type CaseStudyPaginationProps = {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

function PaginationCard({
  label,
  title,
  href,
  align = "left",
}: {
  label: string;
  title: string;
  href: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <a
      href={href}
      className={`group block rounded-[2rem] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-900 sm:p-7 ${
        isRight ? "text-left sm:text-right" : "text-left"
      }`}
    >
      <p className="text-sm font-medium text-neutral-500">{label}</p>

      <h3 className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-[2rem]">
        {title}
      </h3>

      <p className="mt-6 text-sm font-medium text-black">
        {isRight ? "View next case study →" : "← View previous case study"}
      </p>
    </a>
  );
}

export default function CaseStudyPagination({
  previous,
  next,
}: CaseStudyPaginationProps) {
  return (
    <div className="border-t border-neutral-200 pt-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <PaginationCard
            label="Previous"
            title={previous.title}
            href={previous.href}
            align="left"
          />
        ) : (
          <div className="hidden sm:block" />
        )}

        {next ? (
          <PaginationCard
            label="Next"
            title={next.title}
            href={next.href}
            align="right"
          />
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </div>
  );
}