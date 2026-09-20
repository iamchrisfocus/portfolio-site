import type { ReactNode } from "react";

import CaseStudyImageViewer, { CaseStudyHeroImage } from "@/components/ui/CaseStudyImage";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import Container from "@/components/ui/Container";

const operationsBase = "/images/sova-operations";
const fieldBase = "/images/sova-field";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

function CaseStudyImage({
  base,
  src,
  lightSrc,
  alt,
  priority = false,
}: {
  base: string;
  src: string;
  lightSrc?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <CaseStudyImageViewer
      src={`${base}/${src}.webp`}
      lightSrc={lightSrc ? `${base}/${lightSrc}.webp` : undefined}
      alt={alt}
      priority={priority}
    />
  );
}

function Bullet({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
      <p className="text-[15px] leading-7 text-muted">
        <strong className="font-medium text-foreground">{title}</strong>
        {children ? <> {children}</> : null}
      </p>
    </div>
  );
}

function SystemStep({
  number,
  title,
  description,
  accent = false,
}: {
  number: string;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative flex min-h-[180px] flex-1 flex-col rounded-[1.25rem] border p-5 sm:p-6 ${
        accent
          ? "border-foreground/20 bg-foreground text-background"
          : "border-border bg-card"
      }`}
    >
      <span
        className={`text-xs font-medium ${
          accent ? "text-background/60" : "text-muted"
        }`}
      >
        {number}
      </span>

      <div className="mt-auto pt-10">
        <p
          className={`text-base font-medium ${
            accent ? "text-background" : "text-foreground"
          }`}
        >
          {title}
        </p>
        <p
          className={`mt-2 text-sm leading-6 ${
            accent ? "text-background/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function Figure({
  base,
  src,
  lightSrc,
  alt,
  caption,
  priority = false,
}: {
  base: string;
  src: string;
  lightSrc?: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <CaseStudyImage
        base={base}
        src={src}
        lightSrc={lightSrc}
        alt={alt}
        priority={priority}
      />
      {caption ? (
        <figcaption className="mt-4 text-sm leading-6 text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function SovaOperationsCaseStudyPage() {
  return (
    <>
      <Navbar isCaseStudyPage />

      <main className="bg-background text-foreground">
        {/* HERO */}
        <section>
          <Container>
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="max-w-4xl">
                <SectionLabel>Case Study</SectionLabel>

                <h1 className="tracking-[-0.045em]">
                  <span className="block text-6xl font-medium leading-[0.95] sm:text-7xl lg:text-[6.5rem]">
                    Sova
                  </span>

                  <span className="mt-3 block max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-4xl">
                    Service Operations + Field Operations
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The operating system behind every clean.
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
                      Scope:
                    </strong>{" "}
                    Product strategy, UX/UI, interaction design
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Type:
                    </strong>{" "}
                    Independent product exploration
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Platform:
                    </strong>{" "}
                    Web + Mobile
                  </span>
                </div>
              </div>

              <div className="mt-12 lg:mt-16">
                <CaseStudyHeroImage
                  src={`${operationsBase}/sova-operations-hero.webp`}
                  lightSrc={`${operationsBase}/sova-operations-hero-light.webp`}
                  alt="Sova service operations workspace"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        {/* CHALLENGE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>The challenge</SectionLabel>
                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  A reliable cleaning service needs more than a booking app.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Once a customer books, the hard part moves into operations:
                  building realistic schedules, assigning the right team,
                  handling delays, and recovering when a job changes.
                </p>

                <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The product challenge was to give operators the visibility
                  and control to keep the day moving, while giving field teams
                  only the information they need to execute the work.
                </p>

                <div className="mt-8 flex gap-8 flex-wrap">
                  <Bullet title="Realistic schedules" />
                  <Bullet title="Clear ownership" />
                  <Bullet title="Visible risk" />
                  <Bullet title="Fast recovery" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PRODUCT MODEL */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Product model</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                One service record, carried across three layers.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The customer experience, service operations layer, and field
                tool are separate interfaces built around the same underlying
                work. Each layer answers a different operational question.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              <SystemStep
                number="01 · Customer"
                title="What needs to happen?"
                description="Property, service, timing, payment, and booking context."
              />
              <SystemStep
                number="02 · Operations"
                title="How do we deliver it?"
                description="Scheduling, assignment, dispatch, quality, and recovery."
              />
              <SystemStep
                number="03 · Field"
                title="What happens now?"
                description="Location, scope, execution, issues, and completion."
                accent
              />
            </div>
          </Container>
        </section>

        {/* SERVICE OPERATIONS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Service Operations</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Run the day from one operational view.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The operations workspace turns bookings, people, timing, and
                risk into one shared picture of the day. Operators can see what
                needs attention before deciding what to do.
              </p>
            </div>

            <div className="mt-12 space-y-16 lg:mt-14">
              <Figure
                base={operationsBase}
                src="sova-operations-overview"
                alt="Sova operations overview showing the current daily operational state"
                caption="The overview gives operators a fast read on the state of the business before they move into individual workflows."
                priority
              />

              <Figure
                base={operationsBase}
                src="sova-operations-schedule"
                alt="Sova schedule view showing jobs, teams, and timing across the day"
                caption="The schedule turns a list of bookings into a plan operators can reason about."
              />

              <Figure
                base={operationsBase}
                src="sova-operations-team-load-state"
                alt="Sova team load view showing workload and capacity across teams"
                caption="Capacity is treated as a delivery constraint, not just a count of open slots."
              />
            </div>
          </Container>
        </section>

        {/* RISK + INTERVENTION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Operational risk</SectionLabel>

              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Detect the jobs that may not make the plan.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                A schedule can look valid on paper and still fail in the real
                world. Travel time, overruns, buffers, workload, and geography
                all affect whether the next job is actually reachable.
              </p>
            </div>

            <div className="mt-12 space-y-16 lg:mt-14">
              <Figure
                base={operationsBase}
                src="sova-operations-at-risk-job-detail"
                alt="Sova at-risk job detail showing an operational risk and available actions"
                caption="Risk is surfaced in context, with the relevant job record and recovery actions close at hand."
              />

              <Figure
                base={operationsBase}
                src="sova-operations-dispatch-queue-detail"
                alt="Sova dispatch queue showing an operator reviewing a job and making an assignment"
                caption="Intervention happens inside the operational flow rather than forcing the operator into a disconnected workflow."
              />
            </div>
          </Container>
        </section>

        {/* SHARED RECORD */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Shared record</SectionLabel>

              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                One job, one source of truth.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The detail page is the canonical service record. Customer
                context, service scope, assignment, status, and recovery
                information stay connected instead of fragmenting across tools.
              </p>
            </div>

            <div className="mt-12">
              <Figure
                base={operationsBase}
                src="sova-operations-detail-page"
                alt="Sova canonical booking detail page showing connected operational information"
                caption="The shared record keeps the context of the job intact as work moves from booking to execution and recovery."
              />
            </div>
          </Container>
        </section>

        {/* TEAM MANAGEMENT */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Team management</SectionLabel>

              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Manage people as part of the service system.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Operators need to understand teams as delivery capacity, not
                just as a directory of workers. Team-level and person-level
                context make assignment and intervention more deliberate.
              </p>
            </div>

            <div className="mt-12 space-y-16 lg:mt-14">
              <Figure
                base={operationsBase}
                src="sova-operations-teams"
                alt="Sova teams view showing team status and current operational context"
                caption="The team view makes current status, workload, and operational context easy to scan."
              />

              <Figure
                base={operationsBase}
                src="sova-operations-teams-detail-profile"
                alt="Sova team detail profile showing team members, workload, and assignments"
                caption="Team detail brings people, capacity, assignments, and upcoming commitments into the same context."
              />
            </div>
          </Container>
        </section>

        {/* QUALITY + RECOVERY */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Quality + recovery</SectionLabel>

              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Recovery is part of the product, not an exception to it.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Service quality inevitably creates follow-up work. The system
                makes that work visible, keeps the original job context attached,
                and gives operators a path from issue to resolution.
              </p>
            </div>

            <div className="mt-12">
              <Figure
                base={operationsBase}
                src="sova-operations-quality-recovery"
                alt="Sova quality and recovery view showing a service issue and resolution actions"
                caption="Recovery stays connected to the original service record instead of becoming a separate support process."
              />
            </div>
          </Container>
        </section>

        {/* SUPPORTING OPERATIONS VIEWS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Supporting views</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The operating model extends beyond the schedule.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Bookings, customers, properties, and risk states connect back to
                the same service model, giving operators multiple ways to move
                through the work without breaking context.
              </p>
            </div>

            <div className="mt-12 space-y-16 lg:mt-14">
              <Figure
                base={operationsBase}
                src="sova-operations-bookings-customers-properties"
                alt="Sova bookings, customers, and properties views showing the broader operations workspace"
              />

              <Figure
                base={operationsBase}
                src="sova-operations-risk-only-state"
                alt="Sova risk-only schedule state highlighting jobs that require attention"
                caption="A focused risk state helps operators concentrate on work that requires intervention without losing the wider schedule."
              />
            </div>
          </Container>
        </section>

        {/* FIELD OPERATIONS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Field Operations</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Execution should be lighter than operations.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Field workers do not need a dashboard. They need to know where
                to go, what the job includes, what changed, and what to do next.
              </p>

              <div className="mt-8 flex gap-8 flex-wrap">
                <Bullet title="Know the job" />
                <Bullet title="Start the work" />
                <Bullet title="Handle exceptions" />
                <Bullet title="Complete the service" />
              </div>
            </div>

            <div className="mt-12">
              <CaseStudyImageViewer
                src={`${fieldBase}/sova-field-hero.webp`}
                lightSrc={`${fieldBase}/sova-field-hero-light.webp`}
                alt="Sova field operations mobile experience"
                priority
                bare
              />

              <p className="mt-4 text-sm leading-6 text-muted">
                The field layer strips the wider operating model down to the information required to do the work.
              </p>
            </div>

            <div className="mt-16 space-y-16 lg:mt-20">
              <Figure
                base={fieldBase}
                src="sova-field-home"
                alt="Sova field operations home showing today's assigned work"
                caption="The field home keeps the next action obvious without exposing the complexity of the wider operation."
              />

              <Figure
                base={fieldBase}
                src="sova-field-job-details"
                alt="Sova field job details showing the execution flow and checklist"
                caption="Job details carry the scope, checklist, progress, and completion steps the worker needs in one flow."
              />

              <Figure
                base={fieldBase}
                src="sova-field-job-detail"
                alt="Sova field job detail state showing the service context at job level"
                caption="The job-level state keeps service context close when a worker needs to verify what is being delivered."
              />

              <Figure
                base={fieldBase}
                src="sova-field-issue-report"
                alt="Sova field issue reporting and resolution states"
                caption="Issues can be reported in context, then passed back into the operational workflow for resolution."
              />
            </div>

            <div className="mt-16 rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Offline resilience
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Field work cannot depend on a perfect connection. When the
                network drops, actions remain available locally and sync when
                connectivity returns, while the interface makes the temporary
                status gap visible.
              </p>
            </div>
          </Container>
        </section>

        {/* CONNECTED SERVICE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Connected service</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The same service moves through the whole system.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The customer should not need to know how operations work. The
                operator should not need to reconstruct the customer context. The
                field worker should not need to interpret a complex scheduling
                system.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <SystemStep
                number="Customer"
                title="Book"
                description="Create the service request and its reusable context."
              />
              <SystemStep
                number="Operations"
                title="Coordinate"
                description="Schedule, assign, monitor, and recover the work."
              />
              <SystemStep
                number="Field"
                title="Execute"
                description="Deliver the service and report what happened."
              />
            </div>
          </Container>
        </section>

        {/* DESIGN PRINCIPLES */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Design principles</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Make operational complexity useful, not overwhelming.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <SystemStep
                number="01"
                title="See the system"
                description="Make the state of the operation visible before asking for action."
              />
              <SystemStep
                number="02"
                title="Surface risk"
                description="Highlight issues that need attention before they become failures."
              />
              <SystemStep
                number="03"
                title="Preserve context"
                description="Keep the same service record connected across every layer."
              />
              <SystemStep
                number="04"
                title="Simplify execution"
                description="Give field teams only the information required to do the work."
                accent
              />
            </div>
          </Container>
        </section>

        {/* REFLECTION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Reflection</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Good operational UX makes complexity visible to the right people.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The strongest decisions came from separating the needs of the
                operator from the needs of the field worker while keeping both
                connected to the same service record. The operation can remain
                sophisticated underneath without making every interface
                sophisticated on the surface.
              </p>
            </div>
          </Container>
        </section>

        {/* PAGINATION */}
        <section className="border-t border-border bg-background py-10 sm:py-12">
          <Container>
            <CaseStudyPagination
              next={{
                title: "Sova / Customer Experience",
                href: "/work/sova-customer",
              }}
            />
          </Container>
        </section>
      </main>

      <Footer isCaseStudyPage />
    </>
  );
}
