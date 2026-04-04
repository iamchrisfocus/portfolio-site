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
    <section id={id} className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="max-w-4xl text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mt-10 space-y-12">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-xl font-medium tracking-tight text-black sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {group.images.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1200}
                        className="h-auto w-full"
                      />
                      <figcaption className="border-t border-neutral-200 bg-white px-5 py-4 text-sm leading-6 text-neutral-600 sm:px-6">
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