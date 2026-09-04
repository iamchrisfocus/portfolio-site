"use client";

const skills = [
  "0→1 Product Design",
  "Complex Workflows",
  "UX Strategy",
  "Growth",
  "Clarity",
  "Systems Thinking",
  "Collaboration",
  "Product Thinking",
];

export default function SkillsStrip() {
  const items = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y border-border bg-background">
      <div className="relative flex overflow-hidden py-4">
        <div className="skills-marquee flex w-max whitespace-nowrap">
          {items.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="mx-6 text-sm font-medium tracking-wide text-muted"
            >
              {skill}
              <span className="ml-6 text-border">·</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes skills-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .skills-marquee {
          animation: skills-marquee 40s linear infinite;
        }

        .skills-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}