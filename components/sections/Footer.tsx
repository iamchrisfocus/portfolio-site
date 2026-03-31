import Container from "@/components/ui/Container";

type FooterProps = {
  isCaseStudyPage?: boolean;
};

export default function Footer({ isCaseStudyPage = false }: FooterProps) {
  const workHref = isCaseStudyPage ? "/#work" : "#work";
  const aboutHref = isCaseStudyPage ? "/#about" : "#about";
  const contactHref = isCaseStudyPage ? "/#contact" : "#contact";

  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-black">Seun Fatukasi</p>
          <p className="mt-1 text-sm text-neutral-600">
              Product designer focused on clarity, structure, and usable digital experiences.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 text-sm text-neutral-600 sm:items-end">
          <div className="flex items-center gap-6">
            <a href={workHref} className="transition hover:text-black">
              Work
            </a>
            <a href={aboutHref} className="transition hover:text-black">
              About
            </a>
            <a href={contactHref} className="transition hover:text-black">
              Contact
            </a>
          </div>

          <p className="text-sm text-neutral-500">© 2026 Seun Fatukasi. Built with Next.js and Vercel.</p>
        </div>
      </Container>
    </footer>
  );
}