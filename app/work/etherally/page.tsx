import type { ReactNode } from "react";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import Container from "@/components/ui/Container";

const base = "/images/etherally";
const assetVersion = "5";

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
        src={`${src}?v=${assetVersion}`}
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

function Annotation({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {number ? (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium text-foreground">
          {number}
        </span>
      ) : null}

      <div>
        <p className="text-sm font-medium text-foreground sm:text-base">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-muted">{children}</p>
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

export default function EtherallyCaseStudyPage() {
  return (
    <>
      <Navbar isCaseStudyPage />

      <main className="bg-background text-foreground">
        {/* HERO */}
        <section>
          <Container>
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="max-w-3xl">
                <SectionLabel>Case Study</SectionLabel>

                <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Etherally Communities
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Reimagining community discovery as an experience, not just a
                  directory.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
                  <span>
                    <strong className="font-medium text-foreground">
                      Role:
                    </strong>{" "}
                    UI/UX Designer
                  </span>

                  <span>
                    <strong className="font-medium text-foreground">
                      Scope:
                    </strong>{" "}
                    Product design, interaction design, responsive design
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
                <CaseStudyImage
                  src={`${base}/case-study-hero.webp`}
                  alt="Etherally Communities case study shown on the Figma canvas"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        {/* THE CHALLENGE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>The challenge</SectionLabel>

                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  A community directory can quickly become a wall of listings.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The opportunity was to make Etherally Communities feel more
                  like a place to{" "}
                  <strong className="text-foreground">
                    explore, discover and connect
                  </strong>{" "}
                  with the Ethereum ecosystem.
                </p>

                <div className="mt-8 grid gap-4">
                  <Bullet title="Explore —">
                    Make the ecosystem feel global and discoverable.
                  </Bullet>

                  <Bullet title="Discover —">
                    Help people find communities by geography, interests and
                    curation.
                  </Bullet>

                  <Bullet title="Narrow —">
                    Make a large directory easy to search and filter.
                  </Bullet>

                  <Bullet title="Trust —">
                    Make the curation layer visible.
                  </Bullet>

                  <Bullet title="Participate —">
                    Give users a clear path to communities and contribution.
                  </Bullet>
                </div>
              </div>
            </div>

          </Container>
        </section>

        {/* THE EXPERIENCE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <SectionLabel>The experience</SectionLabel>

                <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Explore → Discover → Narrow → Trust → Participate
                </h2>
              </div>

              <p className="max-w-md text-left text-sm leading-7 text-muted sm:text-base">
                The page moves users from broad exploration into increasingly
                specific discovery.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              <FlowItem
                number="01"
                title="Explore"
                description="Start with the global ecosystem."
              />

              <FlowItem
                number="02"
                title="Discover"
                description="Surface curated and new communities."
              />

              <FlowItem
                number="03"
                title="Narrow"
                description="Search and filter when intent becomes specific."
              />

              <FlowItem
                number="04"
                title="Trust"
                description="Explain how content is curated."
              />

              <FlowItem
                number="05"
                title="Participate"
                description="Connect users with communities and invite contribution."
                arrow={false}
              />
            </div>
          </Container>
        </section>

        {/* 01 — NAVIGATION + HERO */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>01 — Navigation + Hero</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Establish the experience quickly,
                <br />
                then get out of the way.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/hero-navigation.webp`}
                alt="Etherally Communities navigation and hero desktop and mobile states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Navigation
                </h3>

                <div className="mt-6 space-y-5">
                  <Bullet title="Clear hierarchy —">
                    Core ecosystem areas remain accessible without competing
                    with the page.
                  </Bullet>

                  <Bullet title="Action priority —">
                    Submit Community is the primary action; Sign in remains
                    secondary.
                  </Bullet>

                  <Bullet title="Progressive disclosure —">
                    Mobile navigation collapses into a menu to preserve space
                    while keeping the same destinations available.
                  </Bullet>

                  <Bullet title="Action hierarchy —">
                    Primary and secondary CTAs remain accessible inside the
                    mobile menu.
                  </Bullet>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Hero</h3>

                <div className="mt-6 space-y-5">
                  <Bullet title="Immediate context —">
                    Users understand what the page is before interacting.
                  </Bullet>

                  <Bullet title="Search at entry —">
                    Known intent can move directly into discovery.
                  </Bullet>

                  <Bullet title="Visual focus —">
                    The restrained background treatment gives the hero
                    atmosphere without adding another competing element.
                  </Bullet>

                  <Bullet title="Scale signal —">
                    Vanity metrics reinforce the breadth of the directory.
                  </Bullet>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 02 — EXPLORE THE ETHEREUM ECOSYSTEM */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>02 — Explore the Ethereum ecosystem</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The globe turns geography into part of the discovery
                experience.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/globe-desktop-default.webp`}
                alt="Etherally interactive globe with regional highlights and Nigeria hover state"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Global context —">
                  Countries become discoverable surfaces rather than passive
                  map decoration.
                </Bullet>

                <Bullet title="Density as a signal —">
                  Marker size communicates where community activity is
                  concentrated.
                </Bullet>

                <Bullet title="Preview before commitment —">
                  Hover reveals useful context without opening a deeper state.
                </Bullet>

                <Bullet title="Progressive disclosure —">
                  Users move from country-level discovery toward individual
                  communities as they zoom in.
                </Bullet>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Country hover
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  The tooltip answers three questions immediately:
                </p>

                <p className="mt-4 text-base font-medium text-foreground">
                  Where is this? How much is here? How many locations?
                </p>

                <div className="mt-6 space-y-3 text-sm text-muted">
                  <p>Region</p>
                  <p>Country + flag</p>
                  <p>Community count</p>
                  <p>Location count</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 03 — FROM COUNTRY TO COMMUNITY */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>03 — From country to community</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                From a global map to the communities inside it.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/globe-desktop-country.webp`}
                alt="Etherally country selection and larger community set"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Contextual drill-down
                </h3>

                <div className="mt-6 space-y-5">
                  <Bullet title="Country selection —">
                    Selecting a country opens its communities without taking
                    users away from the globe.
                  </Bullet>

                  <Bullet title="Scannable first state —">
                    Smaller community sets are shown directly without adding
                    unnecessary search.
                  </Bullet>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Search when scale demands it
                </h3>

                <div className="mt-6 space-y-5">
                  <Bullet title="Larger sets —">
                    Search appears when manual scanning becomes less efficient.
                  </Bullet>

                  <Bullet title="Sticky return path —">
                    Back to Globe remains available while the list scrolls.
                  </Bullet>

                  <Bullet title="Threshold-based search —">
                    Smaller sets stay browseable; larger sets gain direct
                    search.
                  </Bullet>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 04 — COMMUNITY PROFILE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>04 — Community profile</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Give the community enough context
                <br />
                to take the next step.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/globe-desktop-community.webp`}
                alt="Etherally community location and community profile state"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Two routes, one destination —">
                  Users can reach a community through the country list or
                  directly from an individual globe marker.
                </Bullet>

                <Bullet title="Progressive disclosure —">
                  Deeper information appears as intent increases.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Identity first —">
                  Name, location, image and description establish context
                  quickly.
                </Bullet>

                <Bullet title="Curation signal —">
                  The star provides a persistent visual cue for curated
                  communities.
                </Bullet>

                <Bullet title="Connected ecosystem —">
                  Available Twitter, Discord and Telegram links are surfaced
                  directly.
                </Bullet>

                <Bullet title="Clear next step —">
                  Visit Community Website remains the primary action.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 05 — MOBILE GLOBE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>05 — Mobile globe experience</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Preserve the discovery model,
                <br />
                change the interaction pattern.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/globe-mobile.webp`}
                alt="Etherally mobile globe exploration states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Touch-first exploration —">
                  Drag and pinch replace desktop interaction patterns.
                </Bullet>

                <Bullet title="Bottom-sheet country states —">
                  Users can inspect communities while retaining the globe
                  context.
                </Bullet>

                <Bullet title="Expanded discovery —">
                  Larger community sets introduce search without changing the
                  overall journey.
                </Bullet>

                <Bullet title="Full-screen profile —">
                  Community details get enough room once the user moves deeper.
                </Bullet>
              </div>

              <div className="rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  The interaction model
                </p>

                <p className="mt-5 text-2xl font-medium tracking-[-0.02em] text-foreground">
                  Globe → Country → Communities → Profile
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  The structure remains consistent across devices even though
                  the interaction pattern changes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 — COMMUNITIES WORTH KNOWING */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>06 — Communities Worth Knowing</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Discovery does not always start with search.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Curated communities create an easier starting point for people
                who are still figuring out where they belong.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/featured-communities.webp`}
                alt="Etherally Communities Worth Knowing desktop and mobile"
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Bullet title="Curated discovery —">
                Featured communities create an immediate starting point.
              </Bullet>

              <Bullet title="Recognisable identity —">
                The curation star remains attached to the community wherever it
                appears.
              </Bullet>

              <Bullet title="Scannable content —">
                Location, description, focus and format are visible before
                opening the card.
              </Bullet>

              <Bullet title="Horizontal discovery —">
                Mobile uses a horizontal rail to preserve vertical space while
                signalling that more communities are available.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 07 — COMMUNITY CARD SYSTEM */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>07 — Community card system</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The card is intentionally concise.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/community-card-anatomy.webp`}
                alt="Etherally community card anatomy showing default and hover states"
              />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Annotation number="1" title="Curation marker">
                A persistent visual signal for communities curated by
                Etherally.
              </Annotation>

              <Annotation number="2" title="Community identity">
                Name and location establish relevance immediately.
              </Annotation>

              <Annotation number="3" title="Controlled description">
                Descriptions truncate to maintain consistent card rhythm and
                reduce visual noise.
              </Annotation>

              <Annotation number="4" title="Focus + format">
                Tags communicate what the community is about; Local/Online
                communicates how it operates.
              </Annotation>

              <Annotation number="5" title="Interaction cue">
                The directional arrow appears on hover to reinforce that the
                card is actionable.
              </Annotation>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Progressive disclosure
              </p>

              <p className="mt-5 max-w-2xl text-2xl font-medium tracking-[-0.02em] text-foreground">
                The initial card answers: “Is this relevant to me?”
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Deeper information follows through interaction.
              </p>
            </div>
          </Container>
        </section>

        {/* 08 — EXPLORE ALL */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>08 — Explore All Communities</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The utility layer for intentional discovery.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Search and filters turn the broad directory into a focused
                working space without removing the ability to browse.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/explore-desktop-default.webp`}
                alt="Etherally Explore All Communities desktop and mobile default states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Search first —">
                  Users can move directly toward a known community.
                </Bullet>

                <Bullet title="Layered filters —">
                  Region, country, format and focus support different discovery
                  strategies.
                </Bullet>

                <Bullet title="Three-column desktop grid —">
                  Balances directory density with readable community
                  information.
                </Bullet>

                <Bullet title="Two-line descriptions —">
                  More compact than the featured cards to support a larger
                  result set.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Search stays visible —">
                  The primary discovery action remains immediately accessible
                  on mobile.
                </Bullet>

                <Bullet title="Filters collapse —">
                  Complex controls move into a bottom sheet.
                </Bullet>

                <Bullet title="Format stays visible —">
                  All / Local / Online remains a quick toggle.
                </Bullet>

                <Bullet title="Single-column results —">
                  Preserves the same hierarchy at a narrower width.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 09 — SEARCH + FILTERING */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>09 — Search + filtering</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Progressive refinement, from broad filters to specific results.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/explore-desktop-states.webp`}
                alt="Etherally desktop search and filtering interaction states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-lg font-medium text-foreground">
                  Region → Country → Focus
                </p>

                <div className="mt-6 space-y-5">
                  <Bullet title="Dependent country filtering —">
                    Country options respond to the selected region.
                  </Bullet>

                  <Bullet title="Multi-select —">
                    Users can combine multiple regions, countries and focus
                    areas.
                  </Bullet>

                  <Bullet title="Format toggle —">
                    All / Local / Online stays simple and immediate.
                  </Bullet>

                  <Bullet title="Visible active state —">
                    Selected filters become chips so users can see exactly what
                    is affecting results.
                  </Bullet>
                </div>
              </div>

              <div>
                <p className="text-lg font-medium text-foreground">
                  Filter state
                </p>

                <div className="mt-6 space-y-5">
                  <Bullet title="Stable ordering —">
                    Region, country and focus selections stay grouped by
                    category rather than jumping based on selection order.
                  </Bullet>

                  <Bullet title="Clear all —">
                    One action resets the full filter state.
                  </Bullet>

                  <Bullet title="Result awareness —">
                    The directory updates as the filter state changes.
                  </Bullet>
                </div>

                <p className="mt-7 text-sm leading-7 text-muted">
                  This follows{" "}
                  <strong className="font-medium text-foreground">
                    recognition over recall
                  </strong>
                  : users do not have to remember what they selected.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 10 — MOBILE FILTERING */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>10 — Mobile filtering</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Complex filtering without taking over the directory.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Filters move into a bottom sheet on mobile so the directory
                itself stays focused and readable.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/explore-mobile-states.webp`}
                alt="Etherally mobile filtering states including bottom sheet, selected filters, results and empty state"
              />
            </div>

            <div className="mt-12 grid gap-5">
              <Bullet title="Progressive disclosure —">
                Filters appear only when needed.
              </Bullet>

              <Bullet title="Selected counts —">
                Users can see how many options are active in each category.
              </Bullet>

              <Bullet title="Large touch targets —">
                Filter chips are intentionally easier to tap and dismiss.
              </Bullet>

              <Bullet title="Apply deliberately —">
                The primary Apply Filters action appears once the user has
                selected something.
              </Bullet>

              <Bullet title="Clear outcome —">
                Empty states explain that no communities were found and give
                users a direct recovery action.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 11 — DESIGNED TO SCALE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start lg:gap-20">
              <div>
                <SectionLabel>11 — Designed to scale</SectionLabel>

                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  The browsing model can evolve with the directory.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.25rem] border border-border bg-card p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Current
                  </p>

                  <p className="mt-8 text-base leading-7 text-foreground">
                    Load a small set, then load more on demand.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-border bg-card p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    At larger scale
                  </p>

                  <p className="mt-8 text-base leading-7 text-foreground">
                    A much larger directory would need a more search-first
                    browsing model or stronger pagination.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-border bg-card p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Design principle
                  </p>

                  <p className="mt-8 text-base leading-7 text-foreground">
                    The experience should evolve with the size of the
                    directory.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 12 — NEW TO DIRECTORY */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>12 — New to the Directory</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Freshness gives the directory
                <br />
                a reason to change.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A changing directory gives returning users another reason to
                explore.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/new-to-directory.webp`}
                alt="Etherally New to the Directory desktop and mobile experience"
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Bullet title="Freshness signal —">
                “Updated regularly” makes change visible.
              </Bullet>

              <Bullet title="Return value —">
                Newly added communities give users something different to
                discover.
              </Bullet>

              <Bullet title="Dynamic by design —">
                The section can expand based on what currently qualifies as
                new.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 13 — WHAT MAKES THE CUT */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>13 — What Makes the Cut</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Built on trust. Powered by community.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A curated directory becomes more valuable when users understand
                what sits behind the list.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/what-makes-the-cut.webp`}
                alt="Etherally What Makes the Cut desktop and mobile"
              />
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <FlowItem
                number="01"
                title="Ecosystem Signals"
                description="The ecosystem is continuously producing communities, activity and information."
              />

              <FlowItem
                number="02"
                title="Discovery"
                description="Etherally looks across those signals to surface relevant communities."
              />

              <FlowItem
                number="03"
                title="Filtering"
                description="Quality and security considerations narrow what gets surfaced."
              />

              <FlowItem
                number="04"
                title="Verified Feed"
                description="The result is a cleaner discovery layer represented by the strongest visual treatment."
                arrow={false}
                accent
              />
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <Bullet title="Continuous Cross-Platform Discovery —">
                Find relevant communities across the ecosystem.
              </Bullet>

              <Bullet title="Strict Quality & Security Filtering —">
                Apply quality and security criteria before surfacing content.
              </Bullet>

              <Bullet title="Clean Feed of Verified Ecosystem Insights —">
                Give users a more focused, trustworthy discovery experience.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 14 — SOCIAL PROOF */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>
              14 — Trusted throughout the ecosystem
            </SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The curation story explains the mechanism. Community voices add
                the human perspective.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/social-proof.webp`}
                alt="Etherally community testimonials and social proof"
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Bullet title="Community voices —">
                Testimonials show that trust is not communicated only through
                the interface.
              </Bullet>

              <Bullet title="Context matters —">
                Names, roles and organisations give each voice credibility.
              </Bullet>

              <Bullet title="Responsive continuity —">
                The same evidence moves from three columns to a mobile stack
                without changing the message.
              </Bullet>
            </div>
          </Container>
        </section>

        {/* 15 — FIND YOUR PEOPLE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>15 — Find your people</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Move users from discovery toward participation.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src={`${base}/find-your-people-footer.webp`}
                alt="Etherally Find Your People CTA and footer experience"
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <Bullet title="Browse —">
                Continue exploring communities.
              </Bullet>

              <Bullet title="Contribute —">
                Submit a community so others can discover it.
              </Bullet>

              <Bullet title="Two-sided value —">
                Etherally becomes both a discovery layer and a contribution
                point.
              </Bullet>
            </div>

            <div className="mt-12 rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                A softer ending
              </p>

              <p className="mt-5 max-w-2xl text-2xl font-medium tracking-[-0.02em] text-foreground">
                The final blur treatment stays within the Find Your People
                section.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                The footer uses the website’s solid background color, creating
                a clean visual close while keeping the atmospheric treatment
                contained within the CTA section.
              </p>
            </div>
          </Container>
        </section>

        {/* 16 — RESPONSIVE SYSTEM */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>16 — Responsive system</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The mobile experience is not simply a scaled-down desktop.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The structure changes where the task requires it while the
                information architecture stays consistent.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Navigation
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Collapsed menu
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Featured communities
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Horizontal rail
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Country discovery
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Bottom sheet
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Community profile
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Full-screen overlay
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Directory
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Single-column results
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Filtering
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Bottom sheet
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">
                  Actions
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Touch-friendly controls
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* REFLECTION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Reflection</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A community directory can become a discovery experience.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                This exploration pushed the Communities page beyond a
                conventional directory. The final experience combines:
              </p>
            </div>

            <div className="mt-10 max-w-2xl space-y-4">
              <Bullet title="Geographic exploration —" />
              <Bullet title="Curated discovery —" />
              <Bullet title="Search + filtering —" />
              <Bullet title="Trust + verification —" />
              <Bullet title="Community participation —" />
            </div>
          </Container>
        </section>

        {/* PAGINATION */}
        <section className="border-t border-border bg-background py-10 sm:py-12">
          <Container>
            <CaseStudyPagination
              previous={{
                title: "Quees",
                href: "/work/quees",
              }}
              /*next={{
                title: "Split & Settle",
                href: "/work/split-settle",
              }}*/
            />
          </Container>
        </section>
      </main>

      <Footer isCaseStudyPage />
    </>
  );
}