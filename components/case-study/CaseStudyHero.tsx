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
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>

            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.75rem]">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              {subtitle}
            </p>

            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Role
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {role}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Platform
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {platform}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Scope
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {scope}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Team
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {team}
                </p>
              </div>
            </div>

            {skipHref && (
              <a
                href={skipHref}
                className="mt-10 inline-flex text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground"
              >
                {skipLabel ?? "Skip ahead"} <span className="ml-1">↓</span>
              </a>
            )}
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1100}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}