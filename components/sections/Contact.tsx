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
    const timer = setTimeout(() => setCopied(false), 1400);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <section id="contact" className="border-t border-border bg-background py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Text */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Open to product design roles, freelance work, and thoughtful collaboration.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Reach me by email or LinkedIn. I’m especially interested in opportunities where clarity, product thinking, and execution matter.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-base font-medium text-foreground transition hover:text-accent"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent hover:text-accent"
                >
                  {copied ? "✓" : "⎘"}
                </button>
              </div>
              {copied && <p className="mt-2 text-sm text-muted">Copied</p>}
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/ocfatukasi"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-base font-medium text-foreground transition hover:text-accent"
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