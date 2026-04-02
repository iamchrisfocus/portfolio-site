import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyDecisionBlock from "@/components/case-study/CaseStudyDecisionBlock";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyImageGrid from "@/components/case-study/CaseStudyImageGrid";
import CaseStudyOutcomeGrid from "@/components/case-study/CaseStudyOutcomeGrid";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import CaseStudyReflection from "@/components/case-study/CaseStudyReflection";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudySnapshot from "@/components/case-study/CaseStudySnapshot";
import CaseStudyTwoColumn from "@/components/case-study/CaseStudyTwoColumn";
import Container from "@/components/ui/Container";

export default function SpritzPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar isCaseStudyPage />

      <CaseStudyHero
        eyebrow="Case Study"
        title="Spritz"
        subtitle="Redesigning critical field workflows in a mobile-first service app."
        role="Product Designer"
        platform="Mobile"
        scope="Beta iteration, workflow redesign, design system extension, developer handoff"
        team="Product Manager, Engineers, Data Analyst"
        imageSrc="/images/spritz/spritz-hero-composite.webp"
        imageAlt="Spritz mobile redesign hero composite showing key workflow screens."
        skipHref="#key-decisions"
        skipLabel="Skip to key decisions"
      />

      <CaseStudySnapshot
        items={[
          {
            label: "The problem",
            value:
              "Technicians were hitting friction in key mobile workflows, especially around job-state updates, route visibility, invoicing, and schedule changes.",
          },
          {
            label: "What I changed",
            value:
              "I redesigned the home workflow, introduced map-based job context, and brought invoicing, payments, and scheduling actions closer to where work actually happened.",
          },
          {
            label: "Why it mattered",
            value:
              "The mobile app needed to support real field conditions, not just mirror desktop logic. The redesign made core tasks easier to complete while working between jobs, on-site, and under time pressure.",
          },
        ]}
      />

      <CaseStudySection title="The challenge">
        <p>
          Spritz’s beta version already covered the basics of job management, but
          it was still asking field technicians to work too hard to complete
          simple tasks. The product supported the workflow in theory, but not
          always in the messy reality of live service work.
        </p>

        <p>
          From analytics, team feedback, and user research, four problem areas
          stood out.
        </p>

        <p>
          <strong>1. Job-state updates were unclear</strong>
          <br />
          Technicians needed to move jobs through key states quickly, but the
          action model was not obvious enough during fast-moving field work.
          Important next steps could be missed or delayed.
        </p>

        <p>
          <strong>2. There was not enough spatial context</strong>
          <br />
          Users could see their jobs, but they could not easily understand them
          in relation to time, distance, and route. That made planning the
          workday harder than it needed to be.
        </p>

        <p>
          <strong>3. Invoicing and payment actions happened too late</strong>
          <br />
          Payment-related tasks were not well integrated into the mobile
          workflow, which created unnecessary delay between completing work and
          collecting payment.
        </p>

        <p>
          <strong>4. Scheduling changes created extra friction</strong>
          <br />
          Rescheduling, cancellation, and calendar-related actions needed to be
          more robust. These were common operational tasks, but the mobile
          experience did not yet support them cleanly enough.
        </p>
      </CaseStudySection>

      <CaseStudyTwoColumn
        title="My scope"
        left={
          <>
            <p>
              I owned the end-to-end design of the mobile workflow improvements
              across research synthesis, interaction design, prototyping, design
              system extension, and handoff.
            </p>

            <p>
              <strong>What I owned</strong>
            </p>

            <p>
              - Synthesizing analytics and user feedback into product
              opportunities
              <br />- Redesigning key mobile flows across status updates,
              navigation context, invoicing, payments, and scheduling
              <br />- Exploring and testing interaction options for critical
              actions
              <br />- Extending existing mobile patterns within the current
              design system
              <br />- Preparing production-ready handoff for engineering
            </p>
          </>
        }
        right={
          <>
            <p>
              <strong>Key constraints</strong>
            </p>

            <p>
              - The product already existed, so this was not a blank-slate
              redesign
              <br />- The mobile experience had to work within an existing React
              Native product structure
              <br />- The redesign had to align with current backend logic and
              live workflow dependencies
              <br />- Field conditions mattered: time pressure, context
              switching, and unreliable connectivity had to be considered
            </p>
          </>
        }
      />

      <CaseStudySection title="What I learned">
        <p>
          Rather than treating this as a visual refresh, I approached it as a
          workflow problem. The real question was not “how do we improve the
          interface?” It was “where is the app failing people during live work?”
        </p>

        <p>
          <strong>From usage patterns</strong>
          <br />
          The strongest signals pointed to friction in repeated operational
          tasks: moving jobs through states, viewing nearby work, collecting
          payment, and changing schedules without breaking the flow of the day.
        </p>

        <p>
          <strong>From user feedback</strong>
          <br />
          Technicians needed faster decision-making in the moment. They were not
          sitting down to manage jobs carefully. They were switching context
          between driving, arriving, working, updating, and moving to the next
          stop.
        </p>

        <p>
          <strong>From product and business needs</strong>
          <br />
          The mobile app had to do more than display job information. It had to
          support the operational realities that affect completion, payment, and
          service continuity.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Design approach">
        <p>I focused the redesign around three practical principles:</p>

        <p>
          <strong>1. Reduce decision friction</strong>
          <br />
          Core actions needed to be easier to understand and harder to miss.
        </p>

        <p>
          <strong>2. Bring context closer to action</strong>
          <br />
          Users should not have to jump between disconnected views to understand
          where they were, what was next, or what needed attention.
        </p>

        <p>
          <strong>3. Support completion in the field</strong>
          <br />
          Important tasks like payment collection and schedule handling needed
          to happen closer to the moment of work, not as delayed admin.
        </p>
      </CaseStudySection>

      <div id="key-decisions">
        <CaseStudyDecisionBlock
          title="Key decision 1 — Simplifying job-state progression"
          intro={
            <p>
              One of the most important interactions in Spritz was moving a job
              through its next state. This sounds small, but it sits at the center
              of the technician workflow. If status updates are unclear, the rest
              of the system starts to break down around them.
            </p>
          }
          problemBody={
            <p>
              The beta experience did not make the next best action obvious
              enough. In field conditions, that created unnecessary hesitation and
              increased the chance of missed updates.
            </p>
          }
          explorationTitle="What I explored"
          explorationBody={
            <p>
              I tested different ways of presenting next-step actions, including
              more explicit multi-step actions and more compressed variants. The
              challenge was balancing clarity with speed. Too much guidance made
              the interface heavier. Too little made it easier to miss the right
              action.
            </p>
          }
          decisionBody={
            <p>
              I landed on a clearer multi-action CTA model that better matched the
              actual progression of work while keeping the home screen usable at a
              glance.
            </p>
          }
          impactBody={
            <>
              <p>
                This made the next step more visible without turning the interface
                into a dense task controller.
              </p>
              <p>
                This was not just a button redesign. It was a workflow decision.
                The status model needed to help technicians move confidently from
                one stage of work to the next, especially during quick
                transitions.
              </p>
            </>
          }
          images={[
            {
              src: "/images/spritz/spritz-status-exploration-01.webp",
              alt: "Early exploration of job-state progression in Spritz.",
              caption:
                "Early status exploration testing how next-step actions could be made more explicit during live job flow.",
            },
            {
              src: "/images/spritz/spritz-status-exploration-02.webp",
              alt: "Alternative exploration of job-state progression in Spritz.",
              caption:
                "A second exploration balancing speed and clarity without making the home screen overly dense.",
            },
            {
              src: "/images/spritz/spritz-status-final-home.webp",
              alt: "Final home screen showing clearer next-step job progression in Spritz.",
              caption:
                "The final home experience made job-state progression clearer and easier to act on at a glance.",
            },
          ]}
        />
      </div>

      <CaseStudyDecisionBlock
        title="Key decision 2 — Adding map-based job context"
        intro={
          <p>
            Field technicians do not experience work as a list alone. Their day
            is shaped by location, distance, sequence, and movement. The mobile
            experience needed to reflect that.
          </p>
        }
        problemBody={
          <p>
            The beta version surfaced job information, but it did not provide
            enough location-based context to support quick planning between
            jobs.
          </p>
        }
        explorationTitle="The design move"
        explorationBody={
          <p>
            I introduced map-based job visibility as a more useful planning
            layer for mobile users. This gave technicians a clearer sense of
            where jobs were, how work was distributed, and what to handle next.
          </p>
        }
        decisionTitle="Why this mattered"
        decisionBody={
          <p>
            The map view helped shift the product from passive job display to
            active field support. It made the app more useful during movement,
            not just during review.
          </p>
        }
        images={[
          {
            src: "/images/spritz/spritz-map-view.webp",
            alt: "Map-based job context view in the Spritz mobile app.",
            caption:
              "The map view added spatial awareness so technicians could plan work in relation to movement, distance, and sequence.",
          },
        ]}
      />

      <CaseStudyDecisionBlock
        title="Key decision 3 — Bringing invoicing and payment closer to job completion"
        intro={
          <p>
            In many service businesses, payment friction is not just a finance
            problem. It is a workflow problem. If the product forces too much
            separation between completing the work and handling payment, delays
            become easier to introduce.
          </p>
        }
        problemBody={
          <p>
            The mobile experience did not yet support payment-related tasks
            strongly enough in the moment they mattered.
          </p>
        }
        explorationTitle="The design move"
        explorationBody={
          <p>
            I expanded the mobile flow to support invoice generation, payment
            visibility, and payment method actions more directly within the
            technician experience.
          </p>
        }
        decisionTitle="Why this mattered"
        decisionBody={
          <p>
            This reduced the gap between finishing the job and handling the
            financial follow-up. It also moved the app closer to supporting the
            full service loop, not just the task execution part of it.
          </p>
        }
        images={[
          {
            src: "/images/spritz/spritz-invoice-flow.webp",
            alt: "Invoice flow screens in the Spritz mobile redesign.",
            caption:
              "Invoice generation was brought closer to job completion so follow-up did not drift into separate admin work.",
          },
          {
            src: "/images/spritz/spritz-payment-method.webp",
            alt: "Payment method screen in the Spritz mobile redesign.",
            caption:
              "Payment method actions were made more accessible within the technician workflow.",
          },
          {
            src: "/images/spritz/spritz-payment-supporting.webp",
            alt: "Supporting payment flow screen in the Spritz mobile redesign.",
            caption:
              "Supporting payment states helped make the financial flow feel more complete and operationally usable.",
          },
        ]}
      />

      <CaseStudyDecisionBlock
        title="Key decision 4 — Making schedule changes easier to handle on mobile"
        intro={
          <p>
            Scheduling changes are not edge cases in field operations. They are
            part of the job. A mobile workflow that handles the happy path only
            is not ready for real use.
          </p>
        }
        problemTitle="Calendar improvements"
        problemBody={
          <p>
            I designed a more robust calendar interaction model to help users
            work with scheduled jobs more confidently.
          </p>
        }
        explorationTitle="Cancellation flow"
        explorationBody={
          <p>
            I introduced a clearer cancellation experience so users could
            understand the action, confirm it deliberately, and avoid accidental
            disruption.
          </p>
        }
        decisionTitle="Reschedule flow"
        decisionBody={
          <p>
            I redesigned the reschedule experience to better support updates in
            context, rather than forcing users through a clumsy workaround.
          </p>
        }
        impactTitle="Why this mattered"
        impactBody={
          <p>
            These flows made the product more operationally resilient. They
            helped the app handle the parts of service work that tend to create
            friction, exceptions, and downstream confusion.
          </p>
        }
        images={[
          {
            src: "/images/spritz/spritz-calendar-view.webp",
            alt: "Calendar improvements in the Spritz mobile redesign.",
            caption:
              "The updated calendar made scheduled work easier to interpret and manage on mobile.",
          },
          {
            src: "/images/spritz/spritz-cancel-flow.webp",
            alt: "Cancellation flow in the Spritz mobile redesign.",
            caption:
              "The cancellation flow added clearer confirmation so disruptive actions felt deliberate, not fragile.",
          },
          {
            src: "/images/spritz/spritz-reschedule-flow.webp",
            alt: "Reschedule flow in the Spritz mobile redesign.",
            caption:
              "Rescheduling was redesigned to support changes in context without awkward workarounds.",
          },
        ]}
      />

      <CaseStudyImageGrid
        id="final-solution-gallery"
        title="Final solution gallery"
        groups={[
          {
            title: "Group A — Home and status progression",
            description:
              "The redesigned home experience made the next action easier to understand while keeping key job information visible and scannable.",
            images: [
              {
                src: "/images/spritz/spritz-gallery-home.webp",
                alt: "Final gallery showing the redesigned Spritz home and status progression.",
                caption:
                  "The final home flow clarified next steps while keeping the primary work context visible.",
              },
            ],
          },
          {
            title: "Group B — Map and route context",
            description:
              "Map-based context helped users interpret work geographically, not just chronologically.",
            images: [
              {
                src: "/images/spritz/spritz-gallery-map.webp",
                alt: "Final gallery showing map and route context in Spritz.",
                caption:
                  "Map-based planning gave technicians a clearer geographic view of what to handle next.",
              },
            ],
          },
          {
            title: "Group C — Invoicing and payments",
            description:
              "Financial actions were brought closer to the moment of service, reducing the disconnect between job completion and payment handling.",
            images: [
              {
                src: "/images/spritz/spritz-gallery-payments.webp",
                alt: "Final gallery showing invoicing and payment flows in Spritz.",
                caption:
                  "Payment and invoice actions were integrated more directly into the live service workflow.",
              },
            ],
          },
          {
            title: "Group D — Scheduling, cancellation, and rescheduling",
            description:
              "These workflows made the mobile experience better equipped for real-world operational changes, not just ideal task progression.",
            images: [
              {
                src: "/images/spritz/spritz-gallery-scheduling.webp",
                alt: "Final gallery showing scheduling, cancellation, and rescheduling in Spritz.",
                caption:
                  "Scheduling flows became better suited to the changes and exceptions that happen in real field work.",
              },
            ],
          },
        ]}
      />

      <CaseStudySection title="Handoff and delivery">
        <p>
          The redesign extended across a substantial set of mobile states and
          supporting screens. I worked within the existing product structure and
          design system while expanding coverage across several high-impact
          workflows.
        </p>

        <p>
          The final handoff included production-ready designs for the updated
          home workflow, map experience, invoicing and payment flows, and
          scheduling-related interactions.
        </p>

        <div className="pt-4">
          <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-5xl font-semibold tracking-tight text-black sm:text-6xl md:text-7xl">
              200+
            </p>
            <p className="mt-3 max-w-md text-sm uppercase tracking-[0.16em] text-neutral-500">
              Screens handed off across the redesigned workflow set
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyOutcomeGrid
        title="Outcomes"
        items={[
          {
            title: "Stronger workflow clarity",
            description:
              "The redesign made core actions easier to understand and easier to complete within the pace of field work.",
          },
          {
            title: "Broader mobile coverage",
            description:
              "Spritz moved closer to supporting the full operational loop on mobile, from job progression to payment and schedule handling.",
          },
          {
            title: "Better implementation readiness",
            description:
              "The work translated product opportunities into a more structured, system-aware set of mobile flows for engineering handoff.",
          },
        ]}
      />

      <CaseStudyReflection
        title="Reflection"
        items={[
          {
            title: "Designing for the field changes priorities",
            description:
              "What matters most is not how much the interface can show, but how quickly it helps someone decide and act.",
          },
          {
            title: "Operational products need workflow clarity more than visual flourish",
            description:
              "The strongest improvements came from clarifying the sequence of work, not from adding more interface complexity.",
          },
          {
            title: "Constraints made the work better",
            description:
              "Designing within an existing product, system, and technical structure forced sharper decisions and made the final work more realistic.",
          },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <CaseStudyPagination
            next={{ title: "HireCleaner", href: "/work/hirecleaner" }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}