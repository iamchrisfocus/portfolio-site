"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ThemeToggle";

type NavbarProps = {
  isCaseStudyPage?: boolean;
};

export default function Navbar({ isCaseStudyPage = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeHref = "/";
  const workHref = isCaseStudyPage ? "/#work" : "#work";
  const aboutHref = isCaseStudyPage ? "/#about" : "#about";
  const contactHref = isCaseStudyPage ? "/#contact" : "#contact";
  const resumeHref = "/seun-fatukasi-resume.pdf";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={homeHref}
              className="text-sm font-medium uppercase tracking-[0.12em] text-foreground"
            >
              SEUN FATUKASI
            </a>

            {isCaseStudyPage && (
              <a
                href="/"
                className="hidden text-sm text-muted transition hover:text-foreground sm:inline-flex"
              >
                Home
              </a>
            )}
          </div>

          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href={workHref} className="transition hover:text-foreground">
              Work
            </a>
            <a href={aboutHref} className="transition hover:text-foreground">
              About
            </a>
            <a href={contactHref} className="transition hover:text-foreground">
              Contact
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              <span className="inline-flex items-center gap-1">
                Resume
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </span>
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent"
            >
              <span className="text-lg leading-none">
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-border bg-card p-3 md:hidden">
            <nav className="flex flex-col text-sm text-muted">
              {isCaseStudyPage && (
                <a
                  href="/"
                  className="rounded-xl px-3 py-3 transition hover:bg-background hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              )}
              <a
                href={workHref}
                className="rounded-xl px-3 py-3 transition hover:bg-background hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                href={aboutHref}
                className="rounded-xl px-3 py-3 transition hover:bg-background hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href={contactHref}
                className="rounded-xl px-3 py-3 transition hover:bg-background hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 transition hover:bg-background hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-1">
                  Resume
                  <span aria-hidden="true" className="text-xs">
                    ↗
                  </span>
                </span>
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}