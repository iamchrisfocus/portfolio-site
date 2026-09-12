import Image from "next/image";

export default function Recommendation() {
  return (
    <section className="px-6 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium tracking-tight text-muted-foreground">
            From someone I worked with
          </p>

          <blockquote className="text-2xl font-normal leading-[1.4] tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
            “I've had the pleasure of working with Seun for several years, and
            hands down, he's one of the most dedicated, focused, capable, and
            steadfast designers I've ever worked with.”
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <Image
              src="/images/testimonials/kwame-boler.webp"
              alt="Kwame Boler"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground">
                  Kwame Boler
                </p>

                <a
                  href="https://www.linkedin.com/in/kwameboler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Kwame Boler on LinkedIn"
                  className="inline-flex shrink-0"
                >
                  <Image
                    src="/images/testimonials/linkedin-logo.webp"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                </a>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Co-Founder &amp; CEO, Spritz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}