"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ocfatukasi@gmail.com";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  }

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <section id="contact" className="border-t border-neutral-200 bg-white py-24">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <h2 className="max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl">
            Open to product design roles, freelance work, and thoughtful collaboration.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Reach me by email or LinkedIn. I’m especially interested in product
            design opportunities where clarity, product thinking, and execution matter.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Email
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-medium text-black transition hover:underline"
                >
                  {email}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    title={copied ? "Copied" : "Copy email"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-neutral-900"
                  >
                    {copied ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        className="h-4 w-4"
                      >
                        <path d="M5 12.5 9.5 17 19 7.5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <rect x="9" y="9" width="10" height="10" rx="2" />
                        <path d="M5 15V7a2 2 0 0 1 2-2h8" />
                      </svg>
                    )}
                  </button>

                  <span
                    aria-live="polite"
                    className={`text-sm text-neutral-500 transition-opacity duration-200 ${
                      copied ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Copied
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/ocfatukasi"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-lg font-medium text-black transition hover:underline"
              >
                linkedin.com/in/ocfatukasi
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}