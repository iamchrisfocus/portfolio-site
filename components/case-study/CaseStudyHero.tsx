import Image from "next/image";
import Container from "@/components/ui/Container";

type CaseStudyHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  role: string;
  platform: string;
  scope: string;
  team: string;
  imageSrc: string;
  imageAlt: string;
  skipHref?: string;
  skipLabel?: string;
};

export default function CaseStudyHero({
  eyebrow,
  title,
  subtitle,
  role,
  platform,
  scope,
  team,
  imageSrc,
  imageAlt,
  skipHref,
  skipLabel,
}: CaseStudyHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </p>

            <h1 className="max-w-[14ch] text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Role
                </dt>
                <dd className="mt-2 text-base text-black">{role}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Platform
                </dt>
                <dd className="mt-2 text-base text-black">{platform}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Scope
                </dt>
                <dd className="mt-2 text-base text-black">{scope}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Team
                </dt>
                <dd className="mt-2 text-base text-black">{team}</dd>
              </div>
            </dl>

            {skipHref && skipLabel ? (
              <a
                href={skipHref}
                className="mt-8 inline-flex text-sm font-medium text-black underline underline-offset-4 transition hover:text-neutral-600"
              >
                {skipLabel}
              </a>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1200}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}