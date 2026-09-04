"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Tool = {
  name: string;
  logo?: string;
  lightLogo?: string;
  darkLogo?: string;
};

const tools: Tool[] = [
  { name: "Figma", logo: "/images/tools/figma.svg" },
  { name: "FigJam", logo: "/images/tools/figma.svg" },
  { name: "Miro", logo: "/images/tools/miro.svg" },
  { name: "Notion", logo: "/images/tools/notion.svg" },
  { name: "Jira", logo: "/images/tools/jira.svg" },
  { name: "Google Analytics", logo: "/images/tools/google-analytics.svg" },
  {
    name: "Grok",
    lightLogo: "/images/tools/grok-black.svg",
    darkLogo: "/images/tools/grok-white.svg",
  },
  {
    name: "ChatGPT",
    lightLogo: "/images/tools/chatgpt-black.svg",
    darkLogo: "/images/tools/chatgpt-white.svg",
  },
  { name: "Figma AI", logo: "/images/tools/figma.svg" },
  { name: "HTML/CSS", logo: "/images/tools/html5.svg" },
  { name: "React", logo: "/images/tools/react.svg" },
  {
    name: "Next.js",
    lightLogo: "/images/tools/nextjs-black.svg",
    darkLogo: "/images/tools/nextjs-white.svg",
  },
  {
    name: "Vercel",
    lightLogo: "/images/tools/vercel-black.svg",
    darkLogo: "/images/tools/vercel-white.svg",
  },
];

function ToolLogo({ tool }: { tool: Tool }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-5 w-5 rounded-sm bg-border/40" />;
  }

  if (tool.logo) {
    return (
      <Image
        src={tool.logo}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
    );
  }

  if (tool.lightLogo && tool.darkLogo) {
    const src = resolvedTheme === "dark" ? tool.darkLogo : tool.lightLogo;

    return (
      <Image
        src={src}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
    );
  }

  return null;
}

export default function Tools() {
  const items = [...tools, ...tools];

  return (
    <section className="overflow-hidden border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Tools
        </p>
      </div>

      <div className="group relative flex overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {items.map((tool, index) => (
            <div
              key={tool.name + "-" + index}
              className="mx-6 flex items-center gap-3 text-muted sm:mx-8"
            >
              <ToolLogo tool={tool} />

              <span className="text-sm font-medium tracking-wide">
                {tool.name}
              </span>

              <span className="ml-5 text-border">·</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}