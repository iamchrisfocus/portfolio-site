import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import Container from "@/components/ui/Container";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import { ReactNode } from "react";

type MetaItemProps = {
  label: string;
  value: string;
};

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </p>
      <p className="text-sm leading-6 text-neutral-800">{value}</p>
    </div>
  );
}

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
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
      className={`border-b border-neutral-200 bg-white py-16 sm:py-20 ${className}`}
    >
      <Container>
        <div className="max-w-6xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </p>
          ) : null}

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
              {title}
            </h2>

            {intro ? (
              <div className="mt-5 space-y-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
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
  className?: string;
  imageClassName?: string;
};

function ImageCard({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imageClassName = "",
}: ImageCardProps) {
  return (
    <figure
      className={`overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        priority={priority}
        className={`block h-auto w-full ${imageClassName}`}
      />
      {caption ? (
        <figcaption className="border-t border-neutral-200 bg-white px-5 py-4 text-sm leading-6 text-neutral-600 sm:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type ProblemCardProps = {
  title: string;
  body: string;
};

function ProblemCard({ title, body }: ProblemCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
      <h3 className="text-lg font-semibold tracking-tight text-black">{title}</h3>
      <p className="mt-3 text-base leading-7 text-neutral-600">{body}</p>
    </div>
  );
}

type DecisionCardProps = {
  title: string;
  body: string;
};

function DecisionCard({ title, body }: DecisionCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
      <h3 className="text-lg font-semibold tracking-tight text-black">{title}</h3>
      <p className="mt-3 text-base leading-7 text-neutral-600">{body}</p>
    </div>
  );
}

type ValueCardProps = {
  title: string;
  body: string;
};

function ValueCard({ title, body }: ValueCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
      <h3 className="text-base font-semibold tracking-tight text-black">{title}</h3>
      <p className="mt-3 text-base leading-7 text-neutral-600">{body}</p>
    </div>
  );
}

type ValidationItemProps = {
  index: string;
  text: string;
};

function ValidationItem({ index, text }: ValidationItemProps) {
  return (
    <div className="grid gap-4 border-t border-neutral-200 py-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-6">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
        {index}
      </p>
      <p className="text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
        {text}
      </p>
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
    <main className="min-h-screen bg-white text-black">
      <Navbar isCaseStudyPage />

      <section className="border-b border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.96fr)_minmax(520px,1.04fr)] xl:items-start">
            <div className="max-w-[40rem]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Concept case study
              </p>

              <h1 className="max-w-[11ch] text-5xl font-semibold tracking-tight text-black sm:text-6xl md:text-7xl">
                Split &amp; Settle
              </h1>

              <p className="mt-6 max-w-[25ch] text-2xl leading-[1.35] text-neutral-800 sm:text-[2rem]">
                Designing a native group expense feature for OPay
              </p>

              <div className="mt-10 max-w-[34rem] space-y-6 text-lg leading-8 text-neutral-600">
                <p>
                  Split &amp; Settle is a concept for helping friends,
                  roommates, and small groups track shared expenses, see who
                  owes what, and settle balances inside OPay instead of
                  juggling chats, calculators, and manual transfers.
                </p>
              </div>
            </div>

            <div className="xl:pt-1">
              <div className="overflow-hidden rounded-[2.25rem] border border-neutral-200 bg-[#F2F2F2]">
                <Image
                  src="/images/split-settle/split-settle-hero-composite.webp"
                  alt="Split & Settle hero composite showing the OPay group expense concept screens"
                  width={1600}
                  height={1200}
                  priority
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-8">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
              <MetaItem label="Role" value="Product Designer" />
              <MetaItem
                label="Project type"
                value="Concept / Product design assessment"
              />
              <MetaItem label="Platform" value="Mobile" />
              <MetaItem
                label="Scope"
                value="Product thinking, user flows, core interaction design, UI screens"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="The opportunity"
        intro={
          <>
            <p>
              As of 2025 OPay is one of Nigeria’s largest fintech platforms: a mobile wallet used for
              transfers, bill payments, cards, merchant payments, and everyday money
              movement at scale. The company says it serves 50M+ users and 1M+
              merchants, which makes it the kind of product where a shared-expense
              feature could matter in real daily life, not just as a nice idea.
            </p>
            <p>
              People already use payment apps to move money quickly, but shared
              expenses still tend to break outside the product. A group dinner, rent
              contribution, house bill, or weekend hangout usually becomes a messy mix
              of chat messages, rough calculations, and delayed transfers.
            </p>
            <p>
              That gap matters. The payment happens in the wallet, but the coordination
              happens elsewhere.
            </p>
            <p>
              For OPay, that creates a product opportunity: bring expense tracking, split 
              logic, reminders, and settlement into the same environment users already
              trust to hold and move money. Instead of treating bill splitting as an 
              external habit, Split &amp; Settle turns it into a native part of the wallet 
              experience.
            </p>
          </>
        }
      />

      <Section
        title="The problem"
        intro={<p>Splitting expenses sounds simple until real life makes it messy.</p>}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <ProblemCard
            title="Tracking breaks down"
            body="People forget who paid, who still owes, and which expense the money was for."
          />
          <ProblemCard
            title="Fair splits take effort"
            body="Shared costs are not always equal, especially when people contribute differently."
          />
          <ProblemCard
            title="Reminders feel personal"
            body="Following up for money can quickly become awkward in friend groups and shared households."
          />
          <ProblemCard
            title="Paying is separate from planning"
            body="The split is often discussed in chat, calculated elsewhere, and settled manually later."
          />
        </div>
      </Section>

      <Section
        title="The goal"
        intro={
          <p>
            Design a simple in-wallet experience that helps users create a
            group, add a shared expense, split it equally or by custom share,
            track balances clearly, settle instantly through OPay, and send
            reminders without leaving the flow.
          </p>
        }
      />

      <Section
        title="The solution"
        intro={
          <>
            <p>
              I designed Split &amp; Settle as a lightweight group expense layer
              inside OPay. Instead of forcing users to manage shared costs
              across multiple tools, the feature keeps the full loop in one
              place: create a group, log an expense, assign shares, track
              balances, and settle with a tap.
            </p>
            <p>The concept focused on four product decisions:</p>
          </>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <DecisionCard
            title="Make group setup quick enough for casual use"
            body="Reduce admin overhead so users can start a one-off hangout group or a recurring household group without friction."
          />
          <DecisionCard
            title="Support both equal and uneven split logic"
            body="Keep the common case fast, while still handling real shared-expense scenarios where contributions differ."
          />
          <DecisionCard
            title="Turn balances into a clear action state"
            body="Show what is owed, what is pending, and what the user can do next instead of burying that in history."
          />
          <DecisionCard
            title="Reduce collection friction with reminders and native payment"
            body="Let users move from coordination to collection inside the same trusted wallet environment."
          />
        </div>
      </Section>

      <Section
        title="Start from the wallet people already use"
        intro={
          <>
            <p>
              A bill-splitting feature only becomes convenient if it lives where
              the money already is. Putting Split &amp; Settle inside OPay
              removes one of the biggest hidden costs in shared expenses:
              switching between coordination and payment.
            </p>
            <p>
              The feature begins inside OPay’s existing interface, making it
              feel like an extension of the product rather than a detached
              mini-app. That matters for trust and adoption. Users do not need
              to learn a new service just to manage a dinner bill or rent
              contribution.
            </p>
          </>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-finance-entry.webp"
            alt="Entry point into Split & Settle from the OPay finance area"
          />
        </div>
      </Section>

      <Section
        title="Design for first-time use"
        intro={
          <>
            <p>
              The first version of a group expense feature has to do one thing
              well before anything else: make the product feel understandable
              from the first screen.
            </p>
            <p>
              I kept the default dashboard lightweight, with a clear empty state
              and an obvious path to creating a group. The goal was to make the
              feature feel approachable before any setup had happened.
            </p>
          </>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-empty-dashboard.webp"
            alt="Empty Split & Settle dashboard showing the first-time use state"
          />
        </div>
      </Section>

      <Section
        title="Make group setup quick enough for casual use"
        intro={
          <>
            <p>
              Group expense tools often become too heavy too early. If setup
              feels like admin work, people fall back to chat.
            </p>
            <p>
              To reduce that friction, I kept group creation simple: create a
              group, name it, add members, and move directly into expense
              tracking. The intent was to make group creation feel fast enough
              for both one-off hangouts and recurring household expenses.
            </p>
          </>
        }
      >
        <ImageCard
          src="/images/split-settle/split-settle-group-creation-flow.webp"
          alt="Split & Settle group creation flow showing create group, add members, and setup states"
        />
      </Section>

      <Section
        title="Make split creation flexible without making it confusing"
        intro={
          <>
            <p>
              Shared expenses are rarely all the same. Some costs should be
              divided equally. Others need custom allocations based on who
              participated, who paid upfront, or who consumed more.
            </p>
            <p>
              To handle both cases, I designed the expense flow around two clear
              modes: equal split for speed, and custom split for real-world
              flexibility. This lets the common case stay simple without
              flattening every scenario into the same pattern.
            </p>
          </>
        }
      >
        <div className="space-y-10">
          <div className="mx-auto w-full max-w-[820px]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Equal split
            </p>
            <ImageCard
              src="/images/split-settle/split-settle-expense-entry-equal.webp"
              alt="Equal split expense entry flow for Split & Settle"
            />
          </div>

          <div className="mx-auto w-full max-w-[820px]">
            <p className="mb-4 text-base font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Custom split
            </p>
            <ImageCard
              src="/images/split-settle/split-settle-expense-entry-custom.webp"
              alt="Custom split expense entry flow for Split & Settle"
            />
          </div>
        </div>
      </Section>

      <Section
        title="Turn balances into a clear action state"
        intro={
          <>
            <p>
              Once a bill is created, the most important question becomes
              simple: what happens next?
            </p>
            <p>
              I designed the live balance view to answer that clearly. Instead
              of burying people in transaction history, the interface shows what
              I owe, what I am owed, who has paid, who is still pending, and
              what action is available now.
            </p>
          </>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-balance-action.webp"
            alt="Live balance action state showing what is owed and next actions"
          />
        </div>
      </Section>

      <Section
        title="Keep the transition from setup to live expense tracking clear"
        intro={
          <>
            <p>
              The split flow should not feel complete the moment an expense is
              entered. Users still need to review, send, and understand that the
              expense is now active.
            </p>
            <p>
              I used summary and confirmation states to make that transition
              explicit, so users can move from creating a split to managing a
              real shared balance without losing context.
            </p>
          </>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-summary-states.webp"
            alt="Summary and confirmation states between split setup and active tracking"
          />
        </div>
      </Section>

      <Section
        title="Make settlement immediate"
        intro={
          <>
            <p>
              The concept works best when the final step is not a handoff to
              another tool.
            </p>
            <p>
              Because Split &amp; Settle is designed for OPay, settlement
              happens natively through the wallet rails. Once a user sees an
              outstanding balance, they can move directly into payment, confirm
              the amount, and complete the transaction without leaving the flow.
            </p>
            <p>
              That keeps the product from stopping at coordination. It closes
              the loop.
            </p>
          </>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-settlement-flow.webp"
            alt="Settlement flow showing native payment completion inside OPay"
          />
        </div>
      </Section>

      <Section
        title="Dashboard states"
        intro={
          <p>
            I also explored the product in two distinct dashboard conditions: a
            default state for first-time or inactive users, and an active state
            showing ongoing groups and shared expenses. This helped define how
            the feature should feel both before and after adoption.
          </p>
        }
      >
        <div className="mx-auto w-full max-w-[820px]">
          <ImageCard
            src="/images/split-settle/split-settle-dashboard-states.webp"
            alt="Dashboard states showing inactive and active Split & Settle conditions"
          />
        </div>
      </Section>

      <Section
        title="Outcome"
        intro={
          <>
            <p>
              Although this was a concept project rather than a launched
              feature, the design points to a clear product value for OPay.
            </p>
            <p>
              Split &amp; Settle would help shift shared expenses from
              fragmented coordination to a single in-wallet flow. Instead of
              asking users to remember numbers, message people repeatedly, and
              then initiate a separate payment, the experience keeps the cycle
              connected: track, split, remind, settle.
            </p>
            <p>From a product perspective, that creates value in three ways:</p>
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          <ValueCard
            title="Solve a recurring everyday money problem"
            body="It addresses a familiar, repeated coordination issue rather than a rare edge case."
          />
          <ValueCard
            title="Increase return use beyond solo transfers"
            body="It gives users a reason to come back to the wallet for shared financial moments, not just one-to-one payments."
          />
          <ValueCard
            title="Strengthen OPay’s role in group-based money behavior"
            body="It expands the wallet from a transfer tool into a place where shared financial coordination can actually happen."
          />
        </div>
      </Section>

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
              <div className="max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
                  What I’d validate next
                </h2>
                <div className="mt-5 space-y-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
                  <p>
                    Because this was an assessment concept, the next step would
                    be validation, not shipping everything at once.
                  </p>
                  <p>
                    These are the questions I would use to pressure-test the
                    product before deciding what deserves a deeper investment.
                  </p>
                </div>
              </div>

              <div className="border-b border-neutral-200">
                {validationQuestions.map((item, index) => (
                  <ValidationItem
                    key={item}
                    index={String(index + 1).padStart(2, "0")}
                    text={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="Reflection"
        intro={
          <>
            <p>
              This project reinforced a simple truth: designing for shared money
              is not just about payment mechanics. It is about fairness,
              clarity, and social tone.
            </p>
            <p>
              The strongest part of the concept was not the split calculation
              itself. It was treating group expense management as a full product
              loop inside a wallet users already trust. That shift made the
              feature feel less like an add-on and more like a natural extension
              of how people already move money.
            </p>
          </>
        }
        className="border-b-0"
      />

      <section className="bg-white pb-20 pt-4 sm:pb-24">
        <Container>
          <CaseStudyPagination
            previous={{ title: "HireCleaner", href: "/work/hirecleaner" }}
            next={undefined}
          />
        </Container>
      </section>

      <Footer isCaseStudyPage />
    </main>
  );
}