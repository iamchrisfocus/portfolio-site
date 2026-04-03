import Image from "next/image";
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
    <main className="min-h-screen bg-white text-black">
      <Navbar isCaseStudyPage />

      <section className="bg-white pt-24 sm:pt-28">
        <Container>
          <div className="max-w-6xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Case Study
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              HireCleaner
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
              Designing a clearer booking experience for a residential cleaning
              service website.
            </p>

            <div className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Role
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  Product Designer
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Platform
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  Responsive Web
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Scope
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  Website UX redesign, service-page clarity, estimate flow
                  design, responsive web handoff
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Team
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  Client stakeholder, Product Designer
                </p>
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-neutral-200 sm:mt-16">
              <Image
                src="/images/hirecleaner/hirecleaner-hero-composite.webp"
                alt="HireCleaner website hero composite showing the homepage and estimate flow."
                width={1600}
                height={1000}
                priority
                className="block h-auto w-full"
                sizes="(min-width: 1280px) 1200px, 100vw"
              />
            </div>

            <div className="mt-8">
              <a
                href="#key-decisions"
                className="inline-flex text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-black hover:decoration-neutral-500"
              >
                Skip to key decisions
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySnapshot
        items={[
          {
            label: "The problem",
            value:
              "The site needed to make trust, service understanding, and quote-starting feel simpler for busy homeowners who wanted to book quickly without confusion.",
          },
          {
            label: "What I changed",
            value:
              "I clarified the homepage structure, improved service-page readability, and designed a cleaner step-by-step estimate flow that moved users from property details to scheduling, payment, and outcome states.",
          },
          {
            label: "Why it mattered",
            value:
              "For a service business like this, the website is not just marketing. It is part of the sales funnel. Reducing hesitation at key moments helps turn interest into completed booking intent.",
          },
        ]}
      />

      <CaseStudySection title="The challenge">
        <p>
          HireCleaner needed a website that felt straightforward, trustworthy,
          and easy to act on. The core challenge was not simply making the site
          look modern. It was making the service easier to understand and the
          booking path easier to begin.
        </p>

        <p>
          In service businesses, hesitation usually comes from a few practical
          questions. What exactly am I getting? Can I trust this company? How do
          I start? And how much effort will this take?
        </p>

        <p>
          The website had to answer those questions quickly while keeping the
          experience clean, calm, and conversion-focused across desktop and
          mobile.
        </p>
      </CaseStudySection>

      <CaseStudyTwoColumn
        title="My scope"
        left={
          <>
            <p>
              I designed the case-study-ready website experience across the key
              marketing and booking surfaces, focusing on the moments most
              likely to influence action.
            </p>

            <p>
              <strong>What I owned</strong>
            </p>

            <p>
              - Structuring the homepage to communicate value more clearly
              <br />- Improving service-page clarity for a standard cleaning
              offering
              <br />- Designing the multi-step estimate flow from input to
              confirmation states
              <br />- Creating a cleaner visual hierarchy across supporting
              content like “How It Works”
              <br />- Designing responsive mobile versions so the experience
              stayed clear and usable across desktop and mobile
              <br />- Preparing a modular, developer-friendly UI direction
            </p>
          </>
        }
        right={
          <>
            <p>
              <strong>Key constraints</strong>
            </p>

            <p>
              - The experience had to stay simple and familiar for a broad
              residential audience
              <br />- Booking intent needed to feel lightweight, not like a long
              form burden
              <br />- The layout had to remain clean and mobile-friendly without
              relying on visual excess
              <br />- Trust, clarity, and conversion needed to work together
              rather than compete for attention
            </p>
          </>
        }
      />

      <CaseStudySection title="What I focused on">
        <p>
          I treated HireCleaner as a practical conversion design problem. The
          question was not “how do we make this look more impressive?” It was
          “how do we make the service feel easier to understand and easier to
          start?”
        </p>

        <p>That led me to focus on three things:</p>

        <p>
          <strong>1. Clarity before persuasion</strong>
          <br />
          Before users compare options or feel convinced, they need to
          understand what the service is, what the process looks like, and where
          to begin.
        </p>

        <p>
          <strong>2. Reduce friction in the quote path</strong>
          <br />
          Every step in the estimate flow needed to feel manageable and
          progressive rather than heavy or uncertain.
        </p>

        <p>
          <strong>3. Build trust through structure</strong>
          <br />
          Clean hierarchy, predictable steps, and clear outcome states do more
          for trust than decorative complexity ever will.
        </p>
      </CaseStudySection>

      <div id="key-decisions">
        <CaseStudyDecisionBlock
          title="Key decision 1 — Making the homepage easier to trust and scan"
          intro={
            <p>
              The homepage had to do a lot of work quickly. It needed to explain
              the offer, establish credibility, and give users a clear path into
              the booking journey without feeling crowded.
            </p>
          }
          problemBody={
            <p>
              If the first screen asks users to work too hard to understand the
              service, confidence drops early. For a residential cleaning brand,
              that first impression needs to feel both polished and easy.
            </p>
          }
          explorationTitle="The design move"
          explorationBody={
            <p>
              I structured the homepage to foreground the core value
              proposition, support scanning with cleaner section rhythm, and
              make the next action feel obvious without shouting for attention.
            </p>
          }
          decisionTitle="Why this mattered"
          decisionBody={
            <p>
              A clearer homepage reduces early confusion and gives the rest of
              the site room to do its job. It becomes easier for visitors to
              understand the service and continue into the booking path with
              less hesitation.
            </p>
          }
          images={[
            {
              src: "/images/hirecleaner/hirecleaner-homepage-full.webp",
              alt: "HireCleaner homepage design showing the full responsive layout.",
              caption:
                "The homepage was designed to communicate trust, service value, and a clear next step without feeling noisy.",
            },
          ]}
        />
      </div>

      <CaseStudyDecisionBlock
        title="Key decision 2 — Clarifying the service page and supporting content"
        intro={
          <p>
            Service businesses often lose momentum when service details feel
            vague or fragmented. Users should not need to decode what is
            included or how the process works.
          </p>
        }
        problemTitle="Service-page clarity"
        problemBody={
          <p>
            The service page needed to make a standard cleaning offer feel easy
            to understand, credible, and worth acting on.
          </p>
        }
        explorationTitle="Supporting page"
        explorationBody={
          <p>
            I paired the main service page with a cleaner “How It Works” support
            layer so users could understand the process without leaving the
            experience with more questions than they started with.
          </p>
        }
        decisionTitle="Why this mattered"
        decisionBody={
          <p>
            Clarity at this stage helps bridge the gap between curiosity and
            action. When the service and process feel straightforward, users are
            more likely to move into the estimate flow confidently.
          </p>
        }
        images={[
          {
            src: "/images/hirecleaner/hirecleaner-service-standard-clean.webp",
            alt: "HireCleaner standard cleaning service page.",
            caption:
              "The service page made the standard-cleaning offer easier to understand at a glance.",
          },
          {
            src: "/images/hirecleaner/hirecleaner-how-it-works.webp",
            alt: "HireCleaner How It Works page.",
            heading: "Supporting page —How It Works",
            caption:
              "The supporting page reduced uncertainty by making the service process feel more transparent and predictable.",
          },
        ]}
      />

      <CaseStudyDecisionBlock
        title="Key decision 3 — Designing the estimate flow as a calm step-by-step journey"
        intro={
          <p>
            The estimate flow was where intent became action. That meant the
            experience had to feel progressive, low-friction, and dependable
            from the first input through the final state.
          </p>
        }
        problemBody={
          <p>
            Multi-step forms can easily become a drop-off point when users are
            asked for too much too quickly or when the next step feels unclear.
          </p>
        }
        explorationTitle="The design move"
        explorationBody={
          <p>
            I broke the estimate experience into a clear sequence: property
            details, scheduling, confirmation and payment, then final outcome
            states. Each screen focused on one main job so the process felt
            guided rather than overwhelming.
          </p>
        }
        decisionTitle="Why this mattered"
        decisionBody={
          <p>
            This turned the quote path into a more reassuring journey. Users
            could understand where they were, what was needed next, and what the
            result of the flow would be.
          </p>
        }
        impactTitle="What improved"
        impactBody={
          <>
            <p>
              The step-by-step structure reduced cognitive load and made the
              experience feel more manageable on both desktop and mobile.
            </p>
            <p>
              Just as important, the outcome states helped the flow feel
              complete. Good booking experiences do not stop at data entry. They
              also confirm progress clearly.
            </p>
          </>
        }
        images={[
          {
            src: "/images/hirecleaner/hirecleaner-estimate-property-details.webp",
            alt: "HireCleaner estimate flow property details step.",
            heading: "Step 1 — Property details",
            caption:
              "The flow opened with property details so users could start with concrete, familiar information.",
          },
          {
            src: "/images/hirecleaner/hirecleaner-estimate-schedule.webp",
            alt: "HireCleaner estimate flow scheduling step.",
            heading: "Step 2 — Schedule selection",
            caption:
              "Scheduling was separated into its own step to keep choices focused and easier to complete.",
          },
          {
            src: "/images/hirecleaner/hirecleaner-estimate-confirm-pay.webp",
            alt: "HireCleaner estimate flow confirmation and payment step.",
            heading: "Step 3 — Confirmation and payment",
            caption:
              "Confirmation and payment were designed to feel clear and deliberate rather than rushed.",
          },
          {
            src: "/images/hirecleaner/hirecleaner-estimate-outcome-states.webp",
            alt: "HireCleaner estimate flow outcome states.",
            heading: "Step 4 — Outcome states",
            caption:
              "The final states closed the loop cleanly so users understood what happened next after submission.",
          },
        ]}
      />

      <CaseStudySection title="Handoff and delivery">
        <p>
          The final work covered the homepage, service clarity, supporting
          process content, and the full estimate journey. I kept the layout
          modular so the experience could scale without turning into a one-off
          design exercise.
        </p>

        <p>
          I also designed responsive mobile versions of the web experience so
          the structure, hierarchy, and booking flow stayed clear across
          breakpoints.
        </p>

        <p>
          Instead of relying on screenshot-based metrics, I framed the delivery
          in simple product terms: clearer entry points, cleaner decision
          moments, and a quote flow structured to support completion.
        </p>

        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-7">
            <p className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              1
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-neutral-500">
              Homepage direction
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-7">
            <p className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              5
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-neutral-500">
              Core service pages
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-7">
            <p className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              4
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-neutral-500">
              Estimate flow stages
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyOutcomeGrid
        title="Outcomes"
        items={[
          {
            title: "Clearer first impression",
            description:
              "The homepage direction made the brand feel more trustworthy and easier to understand from the first screen.",
          },
          {
            title: "Better service comprehension",
            description:
              "The service and process pages reduced uncertainty by explaining both the offer and the journey more cleanly.",
          },
          {
            title: "Lower-friction booking path",
            description:
              "The estimate flow broke a potentially heavy task into smaller, more manageable steps that better support completion.",
          },
        ]}
      />

      <CaseStudyReflection
        title="Reflection"
        items={[
          {
            title: "Clarity is part of conversion",
            description:
              "For service websites, users do not need more drama. They need to understand what they are buying and how to begin.",
          },
          {
            title: "Trust is built through structure",
            description:
              "A calm hierarchy, clear steps, and clean confirmation states can do more heavy lifting than decorative polish.",
          },
          {
            title: "Simple flows usually win",
            description:
              "The strongest work here came from reducing uncertainty and keeping each screen focused on one job at a time.",
          },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <CaseStudyPagination
            previous={{ title: "Spritz", href: "/work/spritz" }}
            next={{ title: "Split & Settle", href: "/work/split-settle" }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}