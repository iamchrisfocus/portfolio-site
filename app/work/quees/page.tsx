import type { ReactNode } from "react";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import Container from "@/components/ui/Container";

const base = "/images/quees";
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
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
      <img
        src={`${base}/${src}?v=${assetVersion}`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="block h-auto w-full"
      />
    </div>
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

function Principle({
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
      className={`min-h-[180px] rounded-[1.25rem] border p-5 sm:p-6 ${
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

      <div className="mt-10">
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

export default function QueesCaseStudyPage() {
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
                    Quees
                  </span>

                  <span className="mt-3 block max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    Split &amp; Settle
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Making shared money easier to split, reconcile, and settle.
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
                    Product design, UX, interaction design
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Platform:
                    </strong>{" "}
                    Mobile
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Type:
                    </strong>{" "}
                    Product concept
                  </span>
                </div>
              </div>

              <div className="mt-12 lg:mt-16">
                <CaseStudyImage
                  src="quees-hero.webp"
                  alt="Quees Split and Settle mobile experience"
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
                  Shared expenses become difficult after someone pays.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Different people pay for different things, leaving the group
                  to work out who owes whom and how much is still outstanding.
                </p>

                <div className="mt-8 grid gap-4">
                  <Bullet title="Record —">
                    Capture the expense, payer, participants, and split.
                  </Bullet>

                  <Bullet title="Reconcile —">
                    Let the system calculate the financial consequences.
                  </Bullet>

                  <Bullet title="Resolve —">
                    Surface only the action that actually needs a person.
                  </Bullet>

                  <Bullet title="Simplify —">
                    Keep the accounting detail available without making it the
                    interface.
                  </Bullet>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PRODUCT IDEA */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <SectionLabel>The product idea</SectionLabel>

                <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  The user provides the facts. Quees does the thinking.
                </h2>
              </div>

              <p className="max-w-md text-left text-sm leading-7 text-muted sm:text-base">
                Once the group, people, expense, payer, and split are known,
                Quees handles the reconciliation in the background.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              <Principle
                number="01"
                title="Input"
                description="Record what actually happened."
              />

              <Principle
                number="02"
                title="Calculate"
                description="Work out fair shares and existing balances."
              />

              <Principle
                number="03"
                title="Reconcile"
                description="Offset reciprocal amounts and find the net position."
              />

              <Principle
                number="04"
                title="Act"
                description="Ask for human approval only when money moves."
                accent
              />
            </div>
          </Container>
        </section>

        {/* 01 — GROUP SETUP */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>01 — Group setup</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Give shared money a clear context.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A group brings the people and expenses together. Setup stays
                deliberately light, with explicit acceptance when someone is
                invited into a shared-money context.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-add-new-group-profile.webp"
                alt="Quees group creation and profile experience"
              />
            </div>
          </Container>
        </section>

        {/* 02 — EXPENSE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>02 — Expense</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Record the real-world facts.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The user only needs to provide information they actually know:
                what was spent, who paid, and who shared the expense.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-add-expense-equal-split.webp"
                alt="Quees expense entry with an equal split"
              />
            </div>
          </Container>
        </section>

        {/* 03 — SPLIT */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>03 — Split</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Keep the common case simple. Handle the exceptions clearly.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Equal splitting is the default. Custom splitting handles the
                situations where equal is not accurate, with live validation
                keeping the total correct.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-add-expense-custom-split.webp"
                alt="Quees custom expense split with live allocation validation"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Exact —">
                  The allocation matches the expense and can be reviewed.
                </Bullet>

                <Bullet title="Under —">
                  The interface shows exactly what remains to be allocated.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Over —">
                  The interface shows exactly what needs correcting.
                </Bullet>

                <Bullet title="No mental arithmetic —">
                  The system continuously validates the allocation for the
                  user.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 04 — REVIEW */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>04 — Review</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Make the last decision obvious.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Before the expense becomes part of the group, the user gets
                one clear summary of the amount, payer, participants, and split.
                After that, the accounting belongs to Quees.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-home-split-settle.webp"
                alt="Quees Split and Settle flow"
              />
            </div>
          </Container>
        </section>

        {/* 05 — RECONCILIATION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>05 — Reconciliation</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Turn many expenses into one clear position.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Quees continuously updates the group as expenses and payments
                change. The default experience surfaces the final net position,
                not the accounting work behind it.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-home-group-detail.webp"
                alt="Quees group detail view with spending, people, expenses, and reconciled balances"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="One net balance —">
                  Show the final position between people instead of exposing
                  every reciprocal amount by default.
                </Bullet>

                <Bullet title="Clear direction —">
                  Make it immediately obvious who owes whom.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Details on demand —">
                  Underlying calculations remain available through progressive
                  disclosure.
                </Bullet>

                <Bullet title="Automatic state change —">
                  Adding an expense updates the group's financial position
                  without another reconciliation task.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 — SETTLEMENT */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>06 — Settlement</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Only ask for action when money actually moves.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Once Quees has reconciled the group, the user sees the final
                amount and direction. Paying requires authorization. Being owed
                does not require the user to manually chase the other person.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="quees-home-settlement.webp"
                alt="Quees payment and settlement states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="You owe —">
                  Pay the final net amount and move directly to authorization.
                </Bullet>

                <Bullet title="You are owed —">
                  Quees surfaces the amount and handles the appropriate payment
                  prompt on the other side.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Authorization —">
                  The person whose money moves is the person who approves it.
                </Bullet>

                <Bullet title="Settled —">
                  Once payment completes, the balance updates automatically.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 07 — HISTORY */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>07 — History</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Keep the trail without turning it into the product.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Split history stays inside Split &amp; Settle. It gives people a
                useful record of expenses, payments, requests, reminders, and
                settlements without competing with the core experience.
              </p>
            </div>
          </Container>
        </section>

        {/* OUTCOME */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Outcome</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A simpler mental model for shared money.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Quees turns shared-expense management into a simple loop:
                record the facts, let the system reconcile them, then act only
                when a payment needs approval.
              </p>
            </div>

            <div className="mt-10 max-w-2xl space-y-4">
              <Bullet title="Less bookkeeping" />
              <Bullet title="Clearer net balances" />
              <Bullet title="Fewer unnecessary transfers" />
              <Bullet title="Human authorization only where it matters" />
            </div>
          </Container>
        </section>

        {/* REFLECTION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Reflection</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Good fintech UX hides work, not truth.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The strongest decision was moving reconciliation out of the
                user's hands. People already know what happened in the real
                world. Quees should be responsible for figuring out the
                financial consequence.
              </p>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The result is a concept that treats shared money as a
                coordination problem and uses the product to absorb that work.
              </p>
            </div>

            <div className="mt-10 max-w-2xl space-y-4">
              <Bullet title="Record what happened" />
              <Bullet title="Let Quees calculate" />
              <Bullet title="Show the net outcome" />
              <Bullet title="Authorize only when money moves" />
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
                title: "Etherally",
                href: "/work/etherally",
              }}
            />
          </Container>
        </section>
      </main>

      <Footer isCaseStudyPage />
    </>
  );
}