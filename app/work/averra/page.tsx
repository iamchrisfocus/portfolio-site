import type { ReactNode } from "react";

import CaseStudyImageViewer, { CaseStudyHeroImage } from "@/components/ui/CaseStudyImage";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import Container from "@/components/ui/Container";

const base = "/images/averra";
const assetVersion = "1";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

function CaseStudyImage({
  src,
  lightSrc,
  alt,
  priority = false,
  previewClipHeight,
  previewMaxWidth,
}: {
  src: string;
  lightSrc?: string;
  alt: string;
  priority?: boolean;
  previewClipHeight?: number;
  previewMaxWidth?: string | number;
}) {
  return (
    <CaseStudyImageViewer
      src={`${base}/${src}?v=${assetVersion}`}
      lightSrc={lightSrc ? `${base}/${lightSrc}?v=${assetVersion}` : undefined}
      alt={alt}
      priority={priority}
      previewClipHeight={previewClipHeight}
      previewMaxWidth={previewMaxWidth}
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

      <div className="flex min-w-0 gap-1 text-[15px] leading-7 text-muted">
        <strong className="shrink-0 font-medium text-foreground">
          {title}
        </strong>

        {children ? (
          <p className="min-w-0">
            — {children}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FlowItem({
  number,
  title,
  description,
  arrow = true,
  accent = false,
}: {
  number: string;
  title: string;
  description: string;
  arrow?: boolean;
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
      <div className="flex items-start justify-between gap-4">
        <span
          className={`text-xs font-medium ${
            accent ? "text-background/60" : "text-muted"
          }`}
        >
          {number}
        </span>

        {arrow ? (
          <span
            className={accent ? "text-background/60" : "text-muted"}
            aria-hidden="true"
          >
            →
          </span>
        ) : null}
      </div>

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

export default function AverraCaseStudyPage() {
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
                    Averra
                  </span>

                  <span className="mt-3 block max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    School Administrator Workspace
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Turning school data into clearer operational decisions for
                  administrators.
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
                    Product design, information architecture, interaction
                    design
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Tools:
                    </strong>{" "}
                    Figma
                  </span>
                </div>
              </div>

              <div className="mt-12 lg:mt-16">
                <CaseStudyHeroImage
                  src={`${base}/averra-hero.webp?v=${assetVersion}`}
                  lightSrc={`${base}/averra-hero-light.webp?v=${assetVersion}`}
                  alt="Averra school administrator dashboard showing the operational overview with notifications open"
                  priority
                  lightModeClassName="ring-1 ring-black/10"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* CONTEXT */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>The challenge</SectionLabel>

                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  School administrators need answers, not more disconnected
                  data.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The opportunity was to create a school administration
                  workspace that brings the most important operational signals
                  into one connected experience.
                </p>

                <div className="mt-8 grid gap-4">
                  <Bullet title="See:">
                    Give administrators a clear picture of what is happening
                    across the school.
                  </Bullet>

                  <Bullet title="Spot:">
                    Surface issues that need attention instead of making users
                    hunt for them.
                  </Bullet>

                  <Bullet title="Investigate:">
                    Move naturally from school-wide signals into classes,
                    students and records.
                  </Bullet>

                  <Bullet title="Configure:">
                    Respect differences in how schools structure classes and
                    operations.
                  </Bullet>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PRODUCT MODEL */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <SectionLabel>The product model</SectionLabel>

                <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Context → Status → Signal → Detail → Action
                </h2>
              </div>

              <p className="max-w-md text-left text-sm leading-7 text-muted sm:text-base">
                The workspace follows the administrator&apos;s path from
                understanding the school at a glance to acting on a specific
                issue.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              <FlowItem
                number="01"
                title="Context"
                description="Start with the school's overall operational picture."
              />

              <FlowItem
                number="02"
                title="Status"
                description="Understand attendance, finance, academics and safety."
              />

              <FlowItem
                number="03"
                title="Signal"
                description="Surface exceptions and areas that need attention."
              />

              <FlowItem
                number="04"
                title="Detail"
                description="Move from the school view into classes, students and records."
              />

              <FlowItem
                number="05"
                title="Action"
                description="Give administrators enough context to decide what to do next."
                arrow={false}
                accent
              />
            </div>
          </Container>
        </section>

        {/* 01 — OVERVIEW */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>01 — Overview</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A school-wide view designed around what needs attention.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-overview.webp"
                alt="Full-page Averra administrator overview dashboard"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Operational context —">
                  Attendance, students, finance, safety and academics sit within
                  the same working view.
                </Bullet>

                <Bullet title="Attention over noise —">
                  Issues that may require intervention are given more weight
                  than secondary metrics.
                </Bullet>

                <Bullet title="Scannable hierarchy —">
                  High-level metrics establish context before supporting
                  sections provide deeper detail.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Connected workflows —">
                  The dashboard is a starting point for deeper administrative
                  work rather than a reporting dead end.
                </Bullet>

                <Bullet title="Calm information density —">
                  A restrained visual system keeps a data-heavy workspace
                  readable.
                </Bullet>

                <Bullet title="Decision support —">
                  The experience is organized around one question: what needs
                  attention now?
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 02 — STUDENTS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>02 — Students</SectionLabel>

            <div className="max-w-4xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                From a school-wide view to the students inside it.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The student directory turns the broad school population into a
                manageable administrative workspace without losing useful
                context.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-students.webp"
                alt="Averra student directory"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Directory first —">
                  The main screen makes the student population easy to scan and
                  navigate.
                </Bullet>

                <Bullet title="Consistent context —">
                  Student identity, class and status remain visible throughout
                  the directory.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Administrative density —">
                  The interface supports operational work without becoming
                  visually crowded.
                </Bullet>

                <Bullet title="Selection as a working state —">
                  Multi-selection makes the shift from browsing to acting
                  explicit.
                </Bullet>
              </div>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-students-selected.webp"
                alt="Averra student directory with multiple students selected"
              />
            </div>
          </Container>
        </section>

        {/* 03 — STUDENT PROFILE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>03 — Student Profile</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A student record with the context needed to understand the
                signal.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-student-profile.webp"
                alt="Amara Johnson student profile in Averra"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Identity first —">
                  Name, class and core student information establish context
                  immediately.
                </Bullet>

                <Bullet title="Summary before depth —">
                  The overview provides enough information before moving into
                  detailed records.
                </Bullet>

                <Bullet title="Connected records —">
                  Attendance, academics and history remain connected to the
                  same student.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Evidence, not just profile data —">
                  Attendance and performance summaries help explain why a
                  student matters within the wider workflow.
                </Bullet>

                <Bullet title="Reusable context —">
                  The same student record can be reached from directory,
                  attendance and class views.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 04 — ATTENDANCE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>04 — Attendance</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Turn attendance data into something an administrator can act
                on.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Attendance is treated as an operational workflow rather than
                simply another report. The goal is to help administrators
                identify patterns and move toward the individual records behind
                them.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-attendance.webp"
                alt="Averra attendance management workspace"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Pattern visibility —">
                  Consecutive absence is treated as a meaningful signal instead
                  of another isolated number.
                </Bullet>

                <Bullet title="Record-level follow-through —">
                  The attendance workspace connects directly to individual
                  student records.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Focused investigation —">
                  Administrators can move from a school-wide attendance concern
                  into the students behind it.
                </Bullet>

                <Bullet title="Operational context —">
                  The page is designed to help administrators understand and
                  respond, not only record attendance.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 05 — CLASSES */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>05 — Classes</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Give administrators class context without sending them away
                from the list.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-classes.webp"
                alt="Averra classes workspace"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Contextual detail —">
                  Class information can be inspected without turning every
                  interaction into another page.
                </Bullet>

                <Bullet title="Side-panel pattern —">
                  The drawer keeps the administrator anchored to the class list
                  while revealing more detail.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Connected structure —">
                  Classes bring together teachers, students, subjects and
                  performance context.
                </Bullet>

                <Bullet title="Student continuity —">
                  Individual students can still be reached from the class
                  context when deeper investigation is needed.
                </Bullet>
              </div>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-classes-detail.webp"
                alt="Averra JSS 2A class detail side panel"
              />
            </div>

            <div className="mt-8">
              <Bullet title="Contextual drawer —">
                Class detail is revealed while the parent list remains visible.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 06 — ACADEMICS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>06 — Academics</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Make academic performance readable at the level decisions are
                made.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-academics.webp"
                alt="Averra academics workspace"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Performance in context —">
                  Results are presented alongside classes, subjects and school
                  structure.
                </Bullet>

                <Bullet title="Exception over decoration —">
                  Performance signals help identify where attention may be
                  needed.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Administrative perspective —">
                  The workspace is designed around school-level oversight rather
                  than an individual learner&apos;s dashboard.
                </Bullet>

                <Bullet title="Connected reporting —">
                  Academic information fits into the wider school reporting
                  model.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 07 — CLASS STRUCTURE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>07 — Class structure</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                School structure should be configurable, not hardcoded.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Schools do not all organize classes in the same way. Averra
                treats class naming as structured configuration so the rest of
                the workspace can follow the school&apos;s own model.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="averra-settings-class-naming.webp"
                alt="Averra class naming settings showing configurable class arms and live preview"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Configurable naming —">
                  A school can use conventional class arms such as A, B and C,
                  or named groups such as Phoenix and Shimar.
                </Bullet>

                <Bullet title="Live preview —">
                  The interface shows the resulting class names as the
                  configuration changes.
                </Bullet>

                <Bullet title="Structured rule —">
                  Administrators configure the convention once instead of
                  manually creating inconsistent class names throughout the
                  product.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="System-wide consistency —">
                  The same structure can inform Students, Classes, Attendance,
                  Academics, Reports and related administrator records.
                </Bullet>

                <Bullet title="Flexible by design —">
                  The product adapts to different school structures without
                  changing the underlying workspace model.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* DESIGN DECISIONS */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Design decisions</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The interface is built around the administrator&apos;s next
                decision.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <FlowItem
                number="01"
                title="Prioritize"
                description="Surface what may require attention before secondary detail."
              />

              <FlowItem
                number="02"
                title="Connect"
                description="Keep school, class and student records part of one working model."
              />

              <FlowItem
                number="03"
                title="Reveal"
                description="Use progressive detail instead of filling every screen with everything."
              />

              <FlowItem
                number="04"
                title="Adapt"
                description="Allow school-specific structures where a rigid global pattern would break."
                arrow={false}
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
                A school management workspace should help administrators decide
                what matters next.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Averra brings school-wide context, operational signals and
                individual records into one connected experience. The strongest
                decisions came from resisting the temptation to show
                everything at once and instead making each layer useful for the
                next.
              </p>
            </div>

            <div className="mt-10 max-w-2xl space-y-4">
              <Bullet title="Operational clarity" />
              <Bullet title="Connected school data" />
              <Bullet title="Focused investigation" />
              <Bullet title="Contextual detail" />
              <Bullet title="Configurable school structure" />
            </div>
          </Container>
        </section>

        {/* PAGINATION */}
        <section className="border-t border-border bg-background py-10 sm:py-12">
          <Container>
            <CaseStudyPagination
              previous={{
                title: "Sova / Customer Experience",
                href: "/work/sova-customer",
              }}
              next={{
                title: "Quees",
                href: "/work/quees",
              }}
            />
          </Container>
        </section>
      </main>

      <Footer isCaseStudyPage />
    </>
  );
}