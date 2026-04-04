"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={homeHref} className="text-sm font-medium uppercase tracking-[0.12em]">
              SEUN FATUKASI
            </a>

            {isCaseStudyPage && (
              <a
                href="/"
                className="hidden text-sm text-neutral-500 transition hover:text-black sm:inline-flex"
              >
                Home
              </a>
            )}
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href={workHref} className="transition hover:text-black">
              Work
            </a>
            <a href={aboutHref} className="transition hover:text-black">
              About
            </a>
            <a href={contactHref} className="transition hover:text-black">
              Contact
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              <span className="inline-flex items-center gap-1">
                Resume
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </span>
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-neutral-900 md:hidden"
          >
            <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-3 md:hidden">
            <nav className="flex flex-col text-sm text-neutral-700">
              {isCaseStudyPage && (
                <a
                  href="/"
                  className="rounded-xl px-3 py-3 transition hover:bg-neutral-50 hover:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              )}

              <a
                href={workHref}
                className="rounded-xl px-3 py-3 transition hover:bg-neutral-50 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                href={aboutHref}
                className="rounded-xl px-3 py-3 transition hover:bg-neutral-50 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href={contactHref}
                className="rounded-xl px-3 py-3 transition hover:bg-neutral-50 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 transition hover:bg-neutral-50 hover:text-black"
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