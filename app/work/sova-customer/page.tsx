import type { ReactNode } from "react";

import CaseStudyPagination from "@/components/ui/CaseStudyPagination";
import Container from "@/components/ui/Container";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const base = "/images/sova-customer";

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
}: {
  src: string;
  lightSrc: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
      <img
        src={`${base}/${lightSrc}`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="block h-auto w-full dark:hidden"
      />

      <img
        src={`${base}/${src}`}
        alt=""
        aria-hidden="true"
        loading={priority ? "eager" : "lazy"}
        className="hidden h-auto w-full dark:block"
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

export default function SovaCustomerCaseStudyPage() {
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

                  <span className="mt-3 block max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    Home Cleaning Experience
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Making professional home cleaning effortless to book and
                  manage.
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
                    Mobile
                  </span>
                </div>
              </div>

              <div className="mt-12 lg:mt-16">
                <CaseStudyImage
                  src="sova-customer-hero.webp"
                  lightSrc="sova-customer-hero-light.webp"
                  alt="Sova customer mobile experience showing the primary app journey"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ACQUISITION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>01 · Acquisition</SectionLabel>

                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  The experience starts before the app.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Before a customer can book a cleaning, they need a clear
                  reason to choose Sova and a simple path into the app.
                </p>

                <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The acquisition landing page acts as that bridge. It
                  introduces the service, explains the value of the app, and
                  moves the customer toward booking without asking them to
                  understand how Sova operates.
                </p>
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-[1.5rem] border border-border bg-card lg:mt-20">
              <img
                src={`${base}/sova-app-aquisition-landing-page-light.webp`}
                alt="Sova app acquisition landing page"
                loading="lazy"
                className="block h-auto w-full dark:hidden"
              />

              <img
                src={`${base}/sova-app-aquisition-landing-page.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="hidden h-auto w-full dark:block"
              />
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
                  Booking a cleaning involves more decisions than it should.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  A cleaning booking can involve property information, service
                  selection, scope, timing, payment, and follow-up.
                </p>

                <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The product challenge was not simply to reduce the number of
                  screens. It was to make the underlying service complexity
                  feel simple to the customer while still capturing the
                  structure Sova needs to deliver the work.
                </p>

                <div className="mt-8 grid gap-5">
                  <Bullet title="Less coordination —">
                    Customers should choose what they need without managing the
                    cleaner or operational schedule.
                  </Bullet>

                  <Bullet title="Reusable context —">
                    Property information should be captured once and reused
                    across future bookings.
                  </Bullet>

                  <Bullet title="Clear decisions —">
                    Each step should make the next decision obvious without
                    overwhelming the customer.
                  </Bullet>

                  <Bullet title="Flexible service —">
                    Changes to a booking should not break the underlying
                    property or recurring service structure.
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
                  Discover → Set up → Book → Confirm → Manage
                </h2>
              </div>

              <p className="max-w-md text-left text-sm leading-7 text-muted sm:text-base">
                The customer journey moves from understanding Sova to setting
                up the home, booking a service, and managing what happens next.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              <FlowItem
                number="01"
                title="Discover"
                description="Understand what Sova provides and why the app is useful."
              />

              <FlowItem
                number="02"
                title="Set up"
                description="Create a reusable property and describe the home once."
              />

              <FlowItem
                number="03"
                title="Book"
                description="Choose the service, day, time window, and scope."
              />

              <FlowItem
                number="04"
                title="Confirm"
                description="Review the complete booking before payment."
              />

              <FlowItem
                number="05"
                title="Manage"
                description="View the service, make changes, and manage recurring cleaning."
                arrow={false}
                accent
              />
            </div>
          </Container>
        </section>

        {/* 02 · PROPERTY */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>02 · Property model</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A property is more than an address.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Sova treats the property as a reusable part of the customer
                relationship. The same home can support multiple bookings
                without forcing the customer to start from scratch.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-property.webp"
                lightSrc="sova-customer-property-light.webp"
                alt="Sova property list and property detail experience"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Reusable context —">
                  Property details stay attached to the property rather than
                  being recreated inside each booking.
                </Bullet>

                <Bullet title="Multiple properties —">
                  One customer account can support more than one home or
                  managed property.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Service history —">
                  The property's relationship with Sova can continue across
                  previous and upcoming cleanings.
                </Bullet>

                <Bullet title="Customer control —">
                  Property information remains editable without confusing it
                  with an individual booking.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 03 · PROPERTY SETUP */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>03 · Property setup</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Capture the home once without making customers manage it.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Sova needs structured information about the home, but the
                customer should not have to think like an operations team.
                Spaces make the structure explicit while keeping the setup
                focused.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <CaseStudyImage
                src="sova-customer-add-property.webp"
                lightSrc="sova-customer-add-property-light.webp"
                alt="Sova add property flow"
              />

              <CaseStudyImage
                src="sova-customer-property-area-edit.webp"
                lightSrc="sova-customer-property-area-edit-light.webp"
                alt="Sova property spaces and area editing flow"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Structured spaces —">
                  Bedrooms, living areas, bathrooms, and kitchen are treated as
                  meaningful parts of the property.
                </Bullet>

                <Bullet title="Progressive detail —">
                  Room-level information appears when it is relevant rather
                  than turning the initial setup into a long form.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Optional photos —">
                  Photos can help the team understand the property without
                  making image capture mandatory.
                </Bullet>

                <Bullet title="Review before saving —">
                  The customer gets a final view of the property structure
                  before continuing.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 04 · BOOKING */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>04 · Booking</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Book the service, not the cleaner.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Customers choose what they need and when it works for them.
                Sova handles the operational coordination behind that choice.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-property-service.webp"
                lightSrc="sova-customer-property-service-light.webp"
                alt="Sova service selection and property booking experience"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Service-led choice —">
                  Customers select the cleaning service rather than navigating
                  individual cleaners or operational availability.
                </Bullet>

                <Bullet title="Context stays attached —">
                  The selected property remains part of the booking as the
                  customer moves forward.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="No operational burden —">
                  The interface does not expose assignment or dispatch
                  decisions that Sova handles internally.
                </Bullet>

                <Bullet title="Clear progression —">
                  Each step prepares the information needed for the next one.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 05 · TIME */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>05 · Scheduling</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Let customers choose when works without asking them to
                coordinate availability.
              </h2>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-day-time.webp"
                lightSrc="sova-customer-day-time-light.webp"
                alt="Sova day and time window selection flow"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Day first —">
                  Customers establish the preferred date before considering the
                  available time windows.
                </Bullet>

                <Bullet title="Time windows —">
                  The experience gives customers a practical arrival window
                  rather than forcing them to manage an exact cleaner schedule.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Operational flexibility —">
                  Sova retains the flexibility needed to coordinate the actual
                  service behind the scenes.
                </Bullet>

                <Bullet title="Recurring path —">
                  Regular cleaning can be introduced without creating a
                  separate booking system.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 · REVIEW */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>06 · Review + payment</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Make the final decision easy to verify.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The review step brings the important booking information
                together before the customer commits.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-review-confirmation.webp"
                lightSrc="sova-customer-review-confirmation-light.webp"
                alt="Sova booking review and confirmation flow"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="One decision surface —">
                  Property, service, scope, add-ons, schedule, and price are
                  brought together before payment.
                </Bullet>

                <Bullet title="Confidence before commitment —">
                  Customers can review the complete service instead of relying
                  on information spread across earlier steps.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Clear completion —">
                  Booking confirmation closes the transaction and establishes
                  the next state.
                </Bullet>

                <Bullet title="No hidden complexity —">
                  The interface communicates what the customer is buying
                  without exposing the operational work behind it.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* 07 · POST BOOKING */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>07 · Post-booking</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The relationship continues after payment.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Booking is not the end of the experience. Customers still need
                to understand what is happening and manage upcoming service
                when plans change.
              </p>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-booking-detail.webp"
                lightSrc="sova-customer-booking-detail-light.webp"
                alt="Sova upcoming bookings and booking detail management experience"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Booking context —">
                  The booking detail keeps the important service information
                  together after confirmation.
                </Bullet>

                <Bullet title="Ongoing control —">
                  Upcoming bookings remain manageable rather than becoming
                  static records.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="History —">
                  Previous cleanings remain part of the customer's service
                  relationship with Sova.
                </Bullet>

                <Bullet title="Home base —">
                  The broader home experience keeps current activity and
                  properties accessible between bookings.
                </Bullet>
              </div>
            </div>

            <div className="mt-12">
              <CaseStudyImage
                src="sova-customer-home-profile.webp"
                lightSrc="sova-customer-home-profile-light.webp"
                alt="Sova customer home and profile experience"
              />
            </div>
          </Container>
        </section>

        {/* 08 · CHANGE */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>08 · Designing for change</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A cleaning booking needs to remain flexible.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Scope, add-ons, and recurring service can change independently.
                The product treats those changes as normal parts of managing the
                service rather than exceptions.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <CaseStudyImage
                src="sova-customer-scope-edit.webp"
                lightSrc="sova-customer-scope-edit-light.webp"
                alt="Sova cleaning scope edit states"
              />

              <CaseStudyImage
                src="sova-customer-extra-service-edit-add.webp"
                lightSrc="sova-customer-extra-service-edit-add-light.webp"
                alt="Sova extra service and add-on editing states"
              />
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <Bullet title="Property stays separate —">
                  Changing what gets cleaned does not change what exists in the
                  customer's home.
                </Bullet>

                <Bullet title="Scoped changes —">
                  Customers can choose whether a change applies to the current
                  cleaning or future cleanings.
                </Bullet>
              </div>

              <div className="space-y-5">
                <Bullet title="Independent add-ons —">
                  Additional services can follow their own cadence within a
                  recurring cleaning relationship.
                </Bullet>

                <Bullet title="Reversible by design —">
                  Changes are made explicitly so recurring rules are not changed
                  accidentally.
                </Bullet>
              </div>
            </div>
          </Container>
        </section>

        {/* SYSTEM CONNECTION */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>The connected service</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  The interface stays simple because the system handles the
                  complexity.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  The customer experience is connected to the wider Sova
                  service model. Property and booking information is designed to
                  move into operations and field execution without asking the
                  customer to understand those layers.
                </p>

                <div className="mt-8 grid gap-5">
                  <Bullet title="Customer app —">
                    Captures the property, booking, preferences, and changes.
                  </Bullet>

                  <Bullet title="Operations —">
                    Uses the booking context to schedule, assign, and coordinate
                    the service.
                  </Bullet>

                  <Bullet title="Field execution —">
                    Gives the assigned team the information required to complete
                    the job.
                  </Bullet>
                </div>
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-[1.5rem] border border-border bg-card">
              <div className="grid gap-px bg-border lg:grid-cols-3">
                <div className="bg-card p-7 sm:p-9">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Customer
                  </p>

                  <p className="mt-6 text-xl font-medium tracking-tight text-foreground">
                    What do I need?
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Property, service, timing, payment, and booking control.
                  </p>
                </div>

                <div className="bg-card p-7 sm:p-9">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Operations
                  </p>

                  <p className="mt-6 text-xl font-medium tracking-tight text-foreground">
                    How do we deliver it?
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Scheduling, assignment, dispatch, quality, and recovery.
                  </p>
                </div>

                <div className="bg-foreground p-7 text-background sm:p-9">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-background/60">
                    Field
                  </p>

                  <p className="mt-6 text-xl font-medium tracking-tight">
                    What do I do now?
                  </p>

                  <p className="mt-3 text-sm leading-7 text-background/70">
                    Location, job scope, execution, issues, and completion.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DESIGN PRINCIPLES */}
        <section className="border-t border-border py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionLabel>Design principles</SectionLabel>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Keep the customer focused on the service, not the system.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <FlowItem
                number="01"
                title="Reuse"
                description="Capture property context once and reuse it."
              />

              <FlowItem
                number="02"
                title="Simplify"
                description="Keep operational complexity behind the interface."
              />

              <FlowItem
                number="03"
                title="Connect"
                description="Carry useful context across the service journey."
              />

              <FlowItem
                number="04"
                title="Adapt"
                description="Let bookings change without breaking the system."
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
                A simple booking experience is built on a structured service
                model.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The strongest design decisions came from separating what the
                customer needs to decide from what Sova needs to manage.
                Property structure, booking scope, recurring rules, and
                operational coordination can remain complex underneath while
                the customer experience stays direct.
              </p>
            </div>
          </Container>
        </section>

        {/* PAGINATION */}
        <section className="border-t border-border bg-background py-10 sm:py-12">
          <Container>
            <CaseStudyPagination
              previous={{
                title: "Service Operations + Field Operations",
                href: "/work/sova-operations",
              }}
              next={{
                title: "Averra",
                href: "/work/averra",
              }}
            />
          </Container>
        </section>
      </main>

      <Footer isCaseStudyPage />
    </>
  );
}
