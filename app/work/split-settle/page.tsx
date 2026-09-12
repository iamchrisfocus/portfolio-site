import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import Container from "@/components/ui/Container";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";

type MetaItemProps = {
  label: string;
  value: string;
};

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>

      <p className="text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-border bg-background py-16 sm:py-20 ${className}`}
    >
      <Container>
        <div className="max-w-6xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}

          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>

            {intro ? (
              <div className="mt-5 space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {intro}
              </div>
            ) : null}
          </div>

          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

type ImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

function ImageCard({
  src,
  alt,
  caption,
  priority = false,
}: ImageCardProps) {
  return (
    <figure className="overflow-hidden rounded-[1.25rem] border border-border bg-card">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        priority={priority}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 100vw, 1200px"
      />

      {caption ? (
        <figcaption className="border-t border-border bg-background px-5 py-4 text-sm leading-6 text-muted sm:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type DecisionItemProps = {
  title: string;
  body: string;
};

function DecisionItem({ title, body }: DecisionItemProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium tracking-tight text-foreground">
        {title}
      </h3>

      <p className="text-base leading-7 text-muted">{body}</p>
    </div>
  );
}

type FlowStepProps = {
  number: string;
  title: string;
  description: string;
  accent?: boolean;
};

function FlowStep({
  number,
  title,
  description,
  accent = false,
}: FlowStepProps) {
  return (
    <div
      className={`min-h-[190px] rounded-[1.25rem] border p-6 ${
        accent
          ? "border-foreground/20 bg-foreground text-background"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`text-xs font-medium ${
            accent ? "text-background/60" : "text-muted"
          }`}
        >
          {number}
        </span>

        <span
          className={`text-sm ${
            accent ? "text-background/60" : "text-muted"
          }`}
        >
          →
        </span>
      </div>

      <div className="mt-12">
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

export default function SplitSettlePage() {
  const validationQuestions = [
    "Do users expect equal split first, or should custom split be more visible earlier in the flow?",
    "What reminder language feels helpful without feeling confrontational?",
    "Do users instantly understand “you owe” versus “you are owed,” especially across multiple group expenses?",
    "Are users more likely to create persistent groups for recurring expenses, or use the feature casually for one-off events?",
    "What signals help users feel comfortable tracking interpersonal debts inside a wallet product?",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar isCaseStudyPage />

      {/* HERO */}
      <section>
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Concept Case Study
              </p>

              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Split &amp; Settle
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Designing a native group-expense experience inside OPay.
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
                    Type:
                  </strong>{" "}
                  Concept / Product design assessment
                </span>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-border bg-card lg:mt-16">
              <img
                src="/images/split-settle/case-study-hero.webp"
                alt="Split & Settle case study shown on the Figma design canvas"
                loading="eager"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CHALLENGE */}
      <Section
        title="The challenge"
        intro={
          <p>
            Shared expenses rarely fail because the maths is difficult. They
            fail because the coordination is fragmented.
          </p>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <DecisionItem
            title="Track"
            body="Who paid, who still owes, and which expense the money was for?"
          />

          <DecisionItem
            title="Split"
            body="How should the cost be divided when contributions are not equal?"
          />

          <DecisionItem
            title="Remind"
            body="How do you follow up without making the interaction feel awkward?"
          />

          <DecisionItem
            title="Settle"
            body="How do you move from an agreed split to an actual payment?"
          />
        </div>
      </Section>

      {/* OPPORTUNITY */}
      <Section
        title="The opportunity"
        intro={
          <>
            <p>
              Shared-expense coordination often happens outside the wallet,
              even when the final payment happens inside it.
            </p>

            <p>
              The concept was to bring tracking, splitting, reminders, and
              settlement into the same environment users already use to move
              money.
            </p>
          </>
        }
      />

      {/* EXPERIENCE */}
      <Section
        title="The experience"
        intro={
          <p>
            The flow keeps the experience focused on one decision at a time.
          </p>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <FlowStep
            number="01"
            title="Enter"
            description="Find Split & Settle inside the wallet."
          />

          <FlowStep
            number="02"
            title="Set up"
            description="Create a group and add the people involved."
          />

          <FlowStep
            number="03"
            title="Split"
            description="Divide the expense equally or by custom share."
          />

          <FlowStep
            number="04"
            title="Track"
            description="See balances, pending payments, and next actions."
          />

          <FlowStep
            number="05"
            title="Settle"
            description="Move directly from outstanding balance to payment."
            accent
          />
        </div>
      </Section>

      {/* 01 */}
      <Section
        eyebrow="01 — Entry + first use"
        title="Put the experience where the money already is."
        intro={
          <p>
            A bill-splitting feature becomes more useful when users do not have
            to leave the wallet to coordinate the payment.
          </p>
        }
      >
        <div className="space-y-8">
          <ImageCard
            src="/images/split-settle/split-settle-finance-entry.webp"
            alt="Split & Settle entry point from the OPay Finance area"
          />

          <div className="max-w-3xl space-y-5">
            <DecisionItem
              title="Native entry point"
              body="Split & Settle starts inside OPay rather than as a separate service."
            />

            <DecisionItem
              title="Clear first state"
              body="The empty dashboard tells a new user what the feature is for and what to do next."
            />

            <DecisionItem
              title="Low setup friction"
              body="Create Group becomes the obvious first action."
            />
          </div>

          <ImageCard
            src="/images/split-settle/split-settle-empty-dashboard.webp"
            alt="Split & Settle empty dashboard first-use state"
          />
        </div>
      </Section>

      {/* 02 */}
      <Section
        eyebrow="02 — Group creation"
        title="Make group setup quick enough for casual use."
        intro={
          <p>
            If setup feels like admin work, people fall back to chat. The
            group-creation flow keeps the overhead low.
          </p>
        }
      >
        <ImageCard
          src="/images/split-settle/split-settle-group-creation-flow.webp"
          alt="Split & Settle group creation flow"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <DecisionItem
            title="Create"
            body="Give the group a simple identity."
          />

          <DecisionItem
            title="Add people"
            body="Search and select the people involved."
          />

          <DecisionItem
            title="Confirm"
            body="Review membership before creating the group."
          />
        </div>
      </Section>

      {/* 03 */}
      <Section
        eyebrow="03 — Expense splitting"
        title="Support equal and uneven splits."
        intro={
          <p>
            The common case should be fast, without ignoring the messier cases
            where contributions differ.
          </p>
        }
      >
        <div className="space-y-12">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Equal split
            </p>

            <ImageCard
              src="/images/split-settle/split-settle-expense-entry-equal.webp"
              alt="Split & Settle equal split expense flow"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Custom split
            </p>

            <ImageCard
              src="/images/split-settle/split-settle-expense-entry-custom.webp"
              alt="Split & Settle custom split expense flow"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <DecisionItem
            title="Equal by default"
            body="Keep the most common scenario quick."
          />

          <DecisionItem
            title="Custom when needed"
            body="Allow different shares without creating another workflow."
          />

          <DecisionItem
            title="Review before sending"
            body="Make the allocation visible before it becomes active."
          />
        </div>
      </Section>

      {/* 04 */}
      <Section
        eyebrow="04 — Balances"
        title="Turn balances into clear actions."
        intro={
          <p>
            Once the split exists, users need an immediate answer to one
            question: what happens next?
          </p>
        }
      >
        <div className="space-y-12">
          <ImageCard
            src="/images/split-settle/split-settle-balance-action.webp"
            alt="Split & Settle balance and action state"
          />

          <ImageCard
            src="/images/split-settle/split-settle-summary-states.webp"
            alt="Split & Settle summary and confirmation states"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <DecisionItem
            title="See the balance"
            body="Understand what you owe and what you are owed."
          />

          <DecisionItem
            title="See who has paid"
            body="Separate completed and pending contributions."
          />

          <DecisionItem
            title="Act immediately"
            body="Settle or remind from the same context."
          />

          <DecisionItem
            title="Keep context"
            body="Review and confirmation states make the transition into active tracking explicit."
          />
        </div>
      </Section>

      {/* 05 */}
      <Section
        eyebrow="05 — Settlement"
        title="Close the loop inside OPay."
        intro={
          <p>
            The concept should not stop at telling users who owes what. The
            settlement should happen in the same product.
          </p>
        }
      >
        <ImageCard
          src="/images/split-settle/split-settle-settlement-flow.webp"
          alt="Split & Settle settlement flow and successful payment state"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <DecisionItem
            title="One transition"
            body="Move directly from balance to payment."
          />

          <DecisionItem
            title="Native settlement"
            body="Payment happens through the wallet."
          />

          <DecisionItem
            title="Clear completion"
            body="The final state confirms the transaction."
          />
        </div>
      </Section>

      {/* FINAL SYSTEM */}
      <Section
        eyebrow="Final system"
        title="The dashboard evolves with use."
        intro={
          <p>
            The experience has to work before adoption and after the user has
            active groups to manage.
          </p>
        }
      >
        <ImageCard
          src="/images/split-settle/split-settle-dashboard-states.webp"
          alt="Split & Settle inactive and active dashboard states"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <DecisionItem
            title="Before adoption"
            body="Simple and action-oriented."
          />

          <DecisionItem
            title="After adoption"
            body="Active groups become the main working surface."
          />

          <DecisionItem
            title="Same product, new state"
            body="The dashboard grows with the user's activity."
          />
        </div>
      </Section>

      {/* OUTCOME */}
      <Section
        title="Outcome"
        intro={
          <>
            <p>
              This was a concept project rather than a launched feature, so the
              next step would be validation rather than assuming the design is
              ready to ship.
            </p>

            <p>
              The concept creates a connected loop:{" "}
              <strong className="text-foreground">
                track → split → remind → settle.
              </strong>
            </p>
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          <DecisionItem
            title="Everyday utility"
            body="Addresses a recurring coordination problem around shared expenses."
          />

          <DecisionItem
            title="Wallet engagement"
            body="Creates another reason to return to the wallet beyond individual transfers."
          />

          <DecisionItem
            title="Native group payments"
            body="Extends OPay from moving money to helping people coordinate shared money."
          />
        </div>
      </Section>

      {/* VALIDATION */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
              <div className="max-w-md">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                  Next
                </p>

                <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  What I’d validate next
                </h2>

                <div className="mt-5 space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  <p>
                    Before deciding what deserves deeper investment, I would
                    pressure-test the core behaviours.
                  </p>
                </div>
              </div>

              <div className="border-b border-border">
                {validationQuestions.map((item, index) => (
                  <div
                    key={item}
                    className="grid gap-4 border-t border-border py-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-6"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* REFLECTION */}
      <Section
        title="Reflection"
        intro={
          <>
            <p>
              Shared money is a coordination problem before it is a payment
              problem.
            </p>

            <p>
              The strongest part of the concept was treating group expense
              management as a complete product loop inside a wallet users
              already trust.
            </p>
          </>
        }
        className="border-b-0"
      />

      {/* PAGINATION */}
      <section className="bg-background py-10 sm:py-12">
        <Container>
          <CaseStudyPagination
            previous={{
              title: "HireCleaner",
              href: "/work/hirecleaner",
            }}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}