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

const base = "/images/spritz";

export default function SpritzPage() {
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
                Spritz
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Redesigning critical field workflows in a mobile-first service
                app.
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
                  Mobile
                </span>

                <span>
                  <strong className="font-medium text-foreground">
                    Scope:
                  </strong>{" "}
                  Workflow redesign, interaction design, design system
                  extension, developer handoff
                </span>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-border bg-card lg:mt-16">
              <img
                src={`${base}/case-study-hero.webp`}
                alt="Spritz case study shown on the Figma design canvas"
                loading="eager"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SNAPSHOT */}
      <CaseStudySnapshot
        items={[
          {
            label: "The problem",
            value:
              "Technicians were managing job progression, location, quoting, payment, and schedule changes across workflows that were not always connected.",
          },
          {
            label: "What I changed",
            value:
              "I redesigned the core mobile experience around clearer next actions, stronger map context, a more connected quote and payment flow, and more resilient scheduling states.",
          },
          {
            label: "Why it mattered",
            value:
              "Field work moves quickly. The app needed to help technicians understand what was happening and what to do next without adding more cognitive load.",
          },
        ]}
      />

      {/* CHALLENGE */}
      <CaseStudySection title="The challenge">
        <p>
          Spritz already supported core service operations. The opportunity was
          to make the mobile workflow easier to understand and easier to act on
          during real field work.
        </p>

        <p>
          <strong>Job progression</strong>
          <br />
          The next action was not always obvious enough.
        </p>

        <p>
          <strong>Spatial context</strong>
          <br />
          Jobs needed to be understood in relation to location and movement.
        </p>

        <p>
          <strong>Quote + payment</strong>
          <br />
          Service configuration, payment method, and payment follow-through
          needed a more connected experience.
        </p>

        <p>
          <strong>Schedule changes</strong>
          <br />
          Calendar, cancellation, and rescheduling needed to handle the
          realities of field operations.
        </p>
      </CaseStudySection>

      {/* MY SCOPE */}
      <CaseStudyTwoColumn
        title="My scope"
        left={
          <>
            <p>
              I worked across the core mobile workflows from exploration through
              production-ready design and handoff.
            </p>

            <p>
              <strong>What I owned</strong>
            </p>

            <p>
              - Interaction and workflow design
              <br />- Exploration of critical states
              <br />- Map, quote, payment, and scheduling experiences
              <br />- Design system extension
              <br />- Engineering handoff
            </p>
          </>
        }
        right={
          <>
            <p>
              <strong>Key constraints</strong>
            </p>

            <p>
              - Existing product and backend logic
              <br />- Existing React Native structure
              <br />- Real field conditions and time pressure
              <br />- Need for clarity without adding interface weight
            </p>
          </>
        }
      />

      {/* EXPERIENCE */}
      <CaseStudySection title="The experience">
        <p>
          I focused the redesign around four practical moments:
        </p>

        <p>
          <strong>Progress → Context → Payment → Change</strong>
        </p>

        <p>
          Each moment is about helping the technician make the next decision
          with less friction.
        </p>
      </CaseStudySection>

      <div id="key-decisions">
        {/* 01 */}
        <CaseStudyDecisionBlock
          title="Key decision 1 — Make the next job action obvious"
          intro={
            <p>
              The home experience is where technicians orient themselves and
              decide what to do next.
            </p>
          }
          problemBody={
            <p>
              Active job state, payment status, and available actions needed
              stronger hierarchy so users could scan the screen and understand
              what required attention.
            </p>
          }
          explorationTitle="What I explored"
          explorationBody={
            <p>
              I explored different ways of making next-step actions more
              explicit without turning the home screen into a dense task
              controller.
            </p>
          }
          decisionTitle="Final direction"
          decisionBody={
            <p>
              The final model gives the current job state and next action
              stronger visual priority while keeping the dashboard lightweight.
            </p>
          }
          impactTitle="Why this mattered"
          impactBody={
            <p>
              The primary action becomes easier to recognise at a glance,
              reducing decision friction during quick transitions.
            </p>
          }
          images={[
            {
              src: `${base}/spritz-job-progression.webp`,
              alt: "Spritz job progression states showing home and active job experiences.",
              caption:
                "Exploring and refining how active job state and the next action could be surfaced more clearly.",
            },
          ]}
        />

        {/* 02 */}
        <CaseStudyDecisionBlock
          title="Key decision 2 — Put the workday on the map"
          intro={
            <p>
              Field work is spatial. Technicians move between places, not just
              between rows in a list.
            </p>
          }
          problemBody={
            <p>
              Job information existed, but users needed stronger context for
              understanding where work was happening and what was nearby.
            </p>
          }
          explorationTitle="The design move"
          explorationBody={
            <p>
              I introduced a map-based view with visible job pins, selected
              states, and clearer geographic context.
            </p>
          }
          decisionTitle="Why this mattered"
          decisionBody={
            <p>
              The map makes location part of the workflow rather than leaving it
              as supporting information.
            </p>
          }
          images={[
            {
              src: `${base}/spritz-map-interactions.webp`,
              alt: "Spritz map interaction states showing default, job selection, and completed job states.",
              caption:
                "The map interaction progresses from an overview of nearby work to selected and completed job states.",
            },
          ]}
        />

        {/* 03 */}
        <CaseStudyDecisionBlock
          title="Key decision 3 — Connect quote and payment into one workflow"
          intro={
            <p>
              Creating the estimate is only part of the service workflow. The
              experience also needs to carry the user through payment.
            </p>
          }
          problemBody={
            <p>
              Property information, service configuration, payment method, and
              payment follow-through needed stronger continuity.
            </p>
          }
          explorationTitle="What the flow covers"
          explorationBody={
            <p>
              The flow moves from property information and service selection
              through estimate review, payment method selection, confirmation,
              and supporting payment states.
            </p>
          }
          decisionTitle="Final direction"
          decisionBody={
            <p>
              Related actions stay close enough together that users can move
              from quote creation to payment without losing context.
            </p>
          }
          impactTitle="Why this mattered"
          impactBody={
            <p>
              The workflow better supports the full service transaction instead
              of stopping at estimate creation.
            </p>
          }
          images={[
            {
              src: `${base}/spritz-quote-generation.webp`,
              alt: "Spritz quote generation flow showing the opening quote steps.",
              caption:
                "The quote journey starts with property information and moves into service configuration.",
            },
            {
              src: `${base}/spritz-payment-flow.webp`,
              alt: "Spritz payment flow showing payment selection and quote completion states.",
              caption:
                "Payment selection and completion continue directly from the quote flow.",
            },
            {
              src: `${base}/spritz-change-payment-method.webp`,
              alt: "Spritz change payment method workflow.",
              caption:
                "A supporting payment-method flow handles changes without breaking the user's context.",
            },
          ]}
        />

        {/* 04 */}
        <CaseStudyDecisionBlock
          title="Key decision 4 — Design for schedule changes"
          intro={
            <p>
              In field operations, a schedule change is not an edge case. It is
              part of the work.
            </p>
          }
          problemBody={
            <p>
              The scheduling experience needed to support planning, cancellation,
              and rescheduling without breaking the user's context.
            </p>
          }
          explorationTitle="Calendar"
          explorationBody={
            <p>
              Day and month views support different planning needs while keeping
              scheduled work visible.
            </p>
          }
          decisionTitle="Cancellation + rescheduling"
          decisionBody={
            <p>
              Cancellation uses deliberate confirmation, while rescheduling
              lets users make changes in context and review the new state before
              committing.
            </p>
          }
          impactTitle="Why this mattered"
          impactBody={
            <p>
              The scheduling system became more resilient to the exceptions that
              naturally happen during service work.
            </p>
          }
          images={[
            {
              src: `${base}/spritz-calendar-foundation.webp`,
              alt: "Spritz calendar foundation states showing schedule views and interactions.",
              caption:
                "Calendar views give technicians different ways to understand and plan scheduled work.",
            },
            {
              src: `${base}/spritz-cancellation.webp`,
              alt: "Spritz cancellation flow showing cancellation confirmation.",
              caption:
                "Cancellation is treated as a deliberate action with clearer confirmation.",
            },
            {
              src: `${base}/spritz-rescheduling.webp`,
              alt: "Spritz rescheduling flow showing calendar changes and confirmation.",
              caption:
                "Rescheduling keeps the change in context and confirms the updated appointment state.",
            },
          ]}
        />
      </div>

      {/* HANDOFF */}
      <CaseStudySection title="Handoff + delivery">
        <p>
          The redesign extended across a substantial set of mobile states and
          supporting screens.
        </p>

        <p>
          <strong>Production-ready flows</strong>
          <br />
          Key workflows were structured for engineering handoff.
        </p>

        <p>
          <strong>System-aware design</strong>
          <br />
          New patterns extended the existing product rather than creating
          isolated UI.
        </p>

        <p>
          <strong>Broader coverage</strong>
          <br />
          Progression, maps, quoting, payment, and scheduling were treated as
          one operational system.
        </p>

        <div className="pt-4">
          <div className="rounded-[1.25rem] border border-border bg-card px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-5xl font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl">
              200+
            </p>

            <p className="mt-3 max-w-md text-sm uppercase tracking-[0.16em] text-muted">
              Screens handed off across the redesigned workflow set
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* OUTCOMES */}
      <CaseStudyOutcomeGrid
        title="Outcomes"
        items={[
          {
            title: "Clearer workflow progression",
            description:
              "Core job actions became easier to understand and act on.",
          },
          {
            title: "More useful field context",
            description:
              "Map-based visibility added location and movement to the working experience.",
          },
          {
            title: "Broader operational coverage",
            description:
              "Quote, payment, scheduling, and exceptions were brought into a more connected mobile workflow.",
          },
        ]}
      />

      {/* REFLECTION */}
      <CaseStudyReflection
        title="Reflection"
        items={[
          {
            title: "Design for the moment of action",
            description:
              "Field products need to make decisions obvious when attention is already divided.",
          },
          {
            title: "Context should stay close to the decision",
            description:
              "The strongest improvements came from reducing the distance between information and the action it supports.",
          },
          {
            title: "Real workflows include exceptions",
            description:
              "Cancellation, rescheduling, payment changes, and other non-happy paths deserve the same design attention as the primary flow.",
          },
        ]}
      />

      {/* PAGINATION */}
      <section className="bg-background py-10 sm:py-12">
        <Container>
          <CaseStudyPagination
            next={{
              title: "Etherally",
              href: "/work/etherally",
            }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}