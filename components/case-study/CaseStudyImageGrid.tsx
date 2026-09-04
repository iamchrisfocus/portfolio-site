import Image from "next/image";
import Container from "@/components/ui/Container";

type GridImage = {
  src: string;
  alt: string;
  caption: string;
};

type ImageGroup = {
  title: string;
  description: string;
  images: GridImage[];
};

type CaseStudyImageGridProps = {
  id?: string;
  title: string;
  groups: ImageGroup[];
};

export default function CaseStudyImageGrid({
  id,
  title,
  groups,
}: CaseStudyImageGridProps) {
  return (
    <section
      id={id}
      className="border-b border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Showcase
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-12 space-y-16">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                    {group.description}
                  </p>
                </div>

                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  {group.images.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-[1.5rem] border border-border bg-card"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1200}
                        className="h-auto w-full"
                      />

                      <figcaption className="border-t border-border px-5 py-4 text-sm leading-6 text-muted sm:px-6">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}