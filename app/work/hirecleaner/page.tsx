import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyDecisionBlock from "@/components/case-study/CaseStudyDecisionBlock";
import CaseStudyOutcomeGrid from "@/components/case-study/CaseStudyOutcomeGrid";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import CaseStudyReflection from "@/components/case-study/CaseStudyReflection";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudySnapshot from "@/components/case-study/CaseStudySnapshot";
import CaseStudyTwoColumn from "@/components/case-study/CaseStudyTwoColumn";
import Container from "@/components/ui/Container";

export default function HireCleanerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar isCaseStudyPage />

      {/* HERO */}
      <section>
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Case Study
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                HireCleaner
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Designing a clearer booking experience for a residential
                cleaning service website.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
                <span>
                  <strong className="font-medium text-foreground">
                    Role:
                  </strong>{" "}
                  Product Designer
                </span>

                <span>
                  <strong className="font-medium text-foreground">
                    Platform:
                  </strong>{" "}
                  Responsive Web
                </span>

                <span>
                  <strong className="font-medium text-foreground">
                    Scope:
                  </strong>{" "}
                  Website UX, service pages, estimate flow
                </span>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-border bg-card lg:mt-16">
              <img
                src="/images/hirecleaner/case-study-hero.webp"
                alt="HireCleaner case study shown on the Figma design canvas"
                loading="eager"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySnapshot
        items={[
          {
            label: "The problem",
            value:
              "The site needed to make the service easier to understand, build confidence quickly, and make starting a quote feel simple.",
          },
          {
            label: "What I changed",
            value:
              "I reworked the homepage hierarchy, clarified service information, and designed a cleaner estimate journey from property details to payment and outcome.",
          },
          {
            label: "Why it mattered",
            value:
              "For a service business, the website is part of the sales funnel. Reducing uncertainty at key moments helps move interest toward action.",
          },
        ]}
      />

      {/* CHALLENGE */}
      <CaseStudySection title="The challenge">
        <p>
          HireCleaner needed a website that felt straightforward,
          trustworthy, and easy to act on.
        </p>

        <p>
          <strong>Clarity</strong>
          <br />
          Users needed to understand the service quickly.
        </p>

        <p>
          <strong>Trust</strong>
          <br />
          The experience needed to establish confidence before asking for
          commitment.
        </p>

        <p>
          <strong>Conversion</strong>
          <br />
          Starting an estimate needed to feel lightweight rather than like
          another long form.
        </p>
      </CaseStudySection>

      {/* SCOPE */}
      <CaseStudyTwoColumn
        title="My scope"
        left={
          <>
            <p>
              I designed the core marketing and booking surfaces, focusing on
              the moments most likely to influence whether someone continued
              into the estimate flow.
            </p>

            <p>
              <strong>What I owned</strong>
            </p>

            <p>
              - Homepage structure and hierarchy
              <br />- Service-page experience
              <br />- Estimate flow
              <br />- Supporting process content
              <br />- Responsive web design
              <br />- Developer-ready UI direction
            </p>
          </>
        }
        right={
          <>
            <p>
              <strong>Key constraints</strong>
            </p>

            <p>
              - Broad residential audience
              <br />- Low-friction booking intent
              <br />- Trust and conversion had to work together
              <br />- Desktop and mobile needed the same clear hierarchy
            </p>
          </>
        }
      />

      {/* EXPERIENCE */}
      <CaseStudySection title="The experience">
        <p>
          I approached the redesign around a simple progression:
        </p>

        <p>
          <strong>Understand → Evaluate → Estimate → Book</strong>
        </p>

        <p>
          Each stage had one job: reduce uncertainty and make the next action
          easier.
        </p>
      </CaseStudySection>

      <div id="key-decisions">
        {/* 01 */}
        <CaseStudyDecisionBlock
          title="Key decision 1 — Make the homepage easier to trust and scan"
          intro={
            <p>
              The homepage had to explain the offer, establish credibility,
              and point users toward the next step without feeling crowded.
            </p>
          }
          problemBody={
            <p>
              When the first screen makes users work too hard to understand the
              service, hesitation starts before the booking journey even begins.
            </p>
          }
          explorationTitle="The design move"
          explorationBody={
            <p>
              I structured the page around a clearer hierarchy of value,
              services, proof, process, and action so users could scan first
              and investigate deeper only when needed.
            </p>
          }
          decisionTitle="Why this mattered"
          decisionBody={
            <p>
              The homepage became a clearer entry point into the service and
              estimate journey.
            </p>
          }
          images={[
            {
              src: "/images/hirecleaner/hirecleaner-homepage-full.webp",
              alt: "HireCleaner homepage design showing the full layout.",
              caption:
                "The homepage prioritised service clarity, trust signals, and a visible path into the estimate flow.",
            },
          ]}
        />

        {/* 02 */}
        <CaseStudyDecisionBlock
          title="Key decision 2 — Explain the service before asking for the booking"
          intro={
            <p>
              A service page needs to answer practical questions before asking
              someone to commit.
            </p>
          }
          problemTitle="Service-page clarity"
          problemBody={
            <p>
              Users needed a clearer understanding of what the Standard Clean
              included and what the service experience looked like.
            </p>
          }
          explorationTitle="Supporting content"
          explorationBody={
            <p>
              I paired the service experience with a clearer How It Works
              section so users could understand both the offer and the process.
            </p>
          }
          decisionTitle="Why this mattered"
          decisionBody={
            <p>
              More transparent service information reduced uncertainty before
              users entered the estimate flow.
            </p>
          }
          images={[
            {
              src: "/images/hirecleaner/hirecleaner-service-standard-clean.webp",
              alt: "HireCleaner Standard Clean service page.",
              caption:
                "The service page made the offer, inclusions, and options easier to understand at a glance.",
            },
            {
              src: "/images/hirecleaner/hirecleaner-how-it-works.webp",
              alt: "HireCleaner How It Works page.",
              caption:
                "The process page made the service journey more predictable and easier to follow.",
            },
          ]}
        />

        {/* 03 */}
        <CaseStudyDecisionBlock
          title="Key decision 3 — Turn the estimate into a guided journey"
          intro={
            <p>
              The estimate flow was where interest became action, so each step
              needed to feel manageable and predictable.
            </p>
          }
          problemBody={
            <p>
              Multi-step forms can become a drop-off point when too much is
              requested at once or the next step feels unclear.
            </p>
          }
          explorationTitle="The design move"
          explorationBody={
            <p>
              I separated the journey into focused stages: property details,
              scheduling, confirmation and payment, then outcome states.
            </p>
          }
          decisionTitle="Why this mattered"
          decisionBody={
            <p>
              Breaking the task into smaller decisions reduced cognitive load
              while keeping the user oriented throughout the journey.
            </p>
          }
          impactTitle="Flow structure"
          impactBody={
            <>
              <p>
                <strong>01 — Property details</strong> Start with concrete
                information needed to build the estimate.
              </p>

              <p>
                <strong>02 — Schedule</strong> Turn availability into a focused
                choice.
              </p>

              <p>
                <strong>03 — Confirm + pay</strong> Keep booking details and
                payment visible together.
              </p>

              <p>
                <strong>04 — Outcome</strong> Clearly communicate what happened
                after submission.
              </p>
            </>
          }
          images={[
            {
              src: "/images/hirecleaner/hirecleaner-estimate-property-details.webp",
              alt: "HireCleaner estimate property details step.",
              heading: "Step 1 — Property details",
              caption:
                "The flow starts with familiar property information before moving into later decisions.",
            },
            {
              src: "/images/hirecleaner/hirecleaner-estimate-schedule.webp",
              alt: "HireCleaner estimate scheduling step.",
              heading: "Step 2 — Schedule",
              caption:
                "Scheduling is isolated into its own step so the decision stays focused.",
            },
            {
              src: "/images/hirecleaner/hirecleaner-estimate-confirm-pay.webp",
              alt: "HireCleaner estimate confirmation and payment step.",
              heading: "Step 3 — Confirm + pay",
              caption:
                "Confirmation and payment stay together so the user can review before completing the booking.",
            },
            {
              src: "/images/hirecleaner/hirecleaner-estimate-outcome-states.webp",
              alt: "HireCleaner estimate outcome states.",
              heading: "Step 4 — Outcomes",
              caption:
                "Success and recovery states close the loop clearly after submission.",
            },
          ]}
        />
      </div>

      {/* FINAL SYSTEM */}
      <CaseStudySection title="Final system">
        <p>
          The final experience connects the marketing site and estimate journey
          into one continuous path.
        </p>

        <p>
          <strong>Homepage → Service → Estimate → Confirmation</strong>
        </p>

        <p>
          Each stage provides enough context for the next decision without
          overwhelming the user too early.
        </p>
      </CaseStudySection>

      {/* HANDOFF */}
      <CaseStudySection title="Handoff + delivery">
        <p>
          The final work covered the homepage, service experience, supporting
          process content, and the full estimate journey.
        </p>

        <p>
          <strong>Responsive web</strong>
          <br />
          Desktop and mobile layouts were designed as one system.
        </p>

        <p>
          <strong>Modular UI</strong>
          <br />
          The experience was structured around reusable patterns rather than
          isolated screens.
        </p>

        <p>
          <strong>End-to-end flow</strong>
          <br />
          Marketing content and booking interaction were designed as one
          connected journey.
        </p>

        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="rounded-[1.25rem] border border-border bg-card px-6 py-8">
            <p className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              1
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
              Homepage direction
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-border bg-card px-6 py-8">
            <p className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              5
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
              Core service pages
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-border bg-card px-6 py-8">
            <p className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              4
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
              Estimate flow stages
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* OUTCOMES */}
      <CaseStudyOutcomeGrid
        title="Outcomes"
        items={[
          {
            title: "Clearer first impression",
            description:
              "The homepage made the service easier to understand and created a clearer path toward action.",
          },
          {
            title: "Better service comprehension",
            description:
              "Service and process content reduced uncertainty before users entered the estimate flow.",
          },
          {
            title: "Lower-friction booking path",
            description:
              "The estimate experience broke a potentially heavy task into smaller, more manageable decisions.",
          },
        ]}
      />

      {/* REFLECTION */}
      <CaseStudyReflection
        title="Reflection"
        items={[
          {
            title: "Clarity is part of conversion",
            description:
              "Users do not need more persuasion when they are still trying to understand what they are buying.",
          },
          {
            title: "Trust is built through structure",
            description:
              "Clear hierarchy, predictable steps, and explicit outcomes make a service experience feel more dependable.",
          },
          {
            title: "Simple flows usually win",
            description:
              "The strongest improvements came from reducing uncertainty and keeping each screen focused on one job.",
          },
        ]}
      />

      {/* PAGINATION */}
      <section className="bg-background py-10 sm:py-12">
        <Container>
          <CaseStudyPagination
            previous={{
              title: "Etherally",
              href: "/work/etherally",
            }}
            next={{
              title: "Split & Settle",
              href: "/work/split-settle",
            }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}