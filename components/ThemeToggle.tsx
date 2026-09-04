"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Load the theme toggle sound
    audioRef.current = new Audio("/sounds/theme-toggle.mp3");
    audioRef.current.volume = 0.5;
  }, []);

  const playClick = () => {
    try {
      if (audioRef.current) {
        // Restart the sound if clicked again quickly
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } catch (e) {
      // Fail silently if audio cannot play
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted"
        aria-label="Toggle theme"
      >
        <span className="text-sm">○</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        playClick();
        setTheme(isDark ? "light" : "dark");
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent hover:text-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}