"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealTransition =
  "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)";

export default function PageMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-page-motion]");
    const main = root?.querySelector<HTMLElement>("main");

    if (!root || !main) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /*
     * ------------------------------------------------------------------------
     * GENERAL SECTION REVEALS
     * ------------------------------------------------------------------------
     *
     * The hero is intentionally excluded.
     * The homepage Work section is excluded because its project rows have
     * their own reveal system.
     *
     * The Tools strip is wrapped outside of the direct main > section selector
     * so it remains visible immediately.
     */
    const sections = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > section")
    );

    const heroSection = sections[0];

    const revealSections = sections.filter((section) => {
      if (section === heroSection) {
        return false;
      }

      if (section.id === "work") {
        return false;
      }

      return true;
    });

    /*
     * ------------------------------------------------------------------------
     * PROJECT ROW REVEALS
     * ------------------------------------------------------------------------
     *
     * Work.tsx already groups the cards into rows of two.
     * Keep that behavior exactly as-is.
     */
    const projectRows = Array.from(
      main.querySelectorAll<HTMLElement>("[data-project-row]")
    );

    revealSections.forEach((section) => {
      section.classList.remove(
        "motion-section",
        "motion-section-visible"
      );

      section.style.opacity = "";
      section.style.transform = "";
      section.style.transition = "";
      section.style.willChange = "";

      if (prefersReducedMotion) {
        section.classList.add("motion-section-visible");
        return;
      }

      section.classList.add("motion-section");

      section.style.opacity = "0";
      section.style.transform = "translate3d(0, 28px, 0)";
      section.style.transition = revealTransition;
      section.style.willChange = "opacity, transform";
    });

    projectRows.forEach((row) => {
      row.classList.remove(
        "motion-project-row",
        "motion-project-row-visible"
      );

      row.style.opacity = "";
      row.style.transform = "";
      row.style.transition = "";
      row.style.willChange = "";

      if (prefersReducedMotion) {
        row.classList.add("motion-project-row-visible");
        return;
      }

      row.classList.add("motion-project-row");

      row.style.opacity = "0";
      row.style.transform = "translate3d(0, 28px, 0)";
      row.style.transition = revealTransition;
      row.style.willChange = "opacity, transform";
    });

    if (prefersReducedMotion) {
      return;
    }

    let observer: IntersectionObserver | null = null;

    const frame = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const target = entry.target as HTMLElement;

            if (target.hasAttribute("data-project-row")) {
              target.classList.add("motion-project-row-visible");
            } else {
              target.classList.add("motion-section-visible");
            }

            target.style.opacity = "1";
            target.style.transform = "translate3d(0, 0, 0)";

            observer?.unobserve(target);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.08,
        }
      );

      [...revealSections, ...projectRows].forEach((element) => {
        observer?.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);

      observer?.disconnect();

      revealSections.forEach((section) => {
        section.classList.remove(
          "motion-section",
          "motion-section-visible"
        );

        section.style.opacity = "";
        section.style.transform = "";
        section.style.transition = "";
        section.style.willChange = "";
      });

      projectRows.forEach((row) => {
        row.classList.remove(
          "motion-project-row",
          "motion-project-row-visible"
        );

        row.style.opacity = "";
        row.style.transform = "";
        row.style.transition = "";
        row.style.willChange = "";
      });
    };
  }, [pathname]);

  return (
    <div data-page-motion className="page-motion">
      {children}
    </div>
  );
}