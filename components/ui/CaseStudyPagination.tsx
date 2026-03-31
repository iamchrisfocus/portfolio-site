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
  
  export default function CaseStudyPagination({
    previous,
    next,
  }: CaseStudyPaginationProps) {
    return (
      <div className="border-t border-neutral-200 pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
          <div className="flex-1">
            {previous ? (
              <a
                href={previous.href}
                className="block rounded-[1.5rem] border border-neutral-200 p-5 transition hover:border-neutral-900"
              >
                <p className="text-sm text-neutral-500">← Previous</p>
                <p className="mt-2 text-lg font-medium text-black">
                  {previous.title}
                </p>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
  
          <div className="flex-1">
            {next ? (
              <a
                href={next.href}
                className="block rounded-[1.5rem] border border-neutral-200 p-5 text-left transition hover:border-neutral-900 sm:text-right"
              >
                <p className="text-sm text-neutral-500">Next →</p>
                <p className="mt-2 text-lg font-medium text-black">
                  {next.title}
                </p>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      </div>
    );
  }