"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type SharedImageProps = {
  src: string;
  lightSrc?: string;
  alt: string;
  priority?: boolean;
};

type CaseStudyImageProps = SharedImageProps & {
  previewClipHeight?: number;
  previewMaxWidth?: string | number;
  bare?: boolean;
};

type CaseStudyHeroImageProps = SharedImageProps & {
  lightModeClassName?: string;
  darkModeClassName?: string;
};

function useActiveThemeImage(src: string, lightSrc?: string) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";
  const activeSrc = isLight && lightSrc ? lightSrc : src;

  return { activeSrc, isLight };
}

export function CaseStudyHeroImage({
  src,
  lightSrc,
  alt,
  priority = false,
  lightModeClassName = "",
  darkModeClassName = "",
}: CaseStudyHeroImageProps) {
  const { activeSrc, isLight } = useActiveThemeImage(src, lightSrc);

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={`block h-auto w-full ${
        isLight ? lightModeClassName : darkModeClassName
      }`}
    />
  );
}

export default function CaseStudyImage({
  src,
  lightSrc,
  alt,
  priority = false,
  previewClipHeight,
  previewMaxWidth,
  bare = false,
}: CaseStudyImageProps) {
  const { activeSrc } = useActiveThemeImage(src, lightSrc);

  const [isOpen, setIsOpen] = useState(false);
  const [isTall, setIsTall] = useState(false);

  const previewStyle = {
    maxWidth:
      previewMaxWidth !== undefined
        ? typeof previewMaxWidth === "number"
          ? `${previewMaxWidth}px`
          : previewMaxWidth
        : undefined,
    marginInline: previewMaxWidth !== undefined ? "auto" : undefined,
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleModalImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const image = event.currentTarget;

    if (image.naturalWidth === 0) {
      return;
    }

    const renderedHeight =
      window.innerWidth *
      (image.naturalHeight / image.naturalWidth);

    setIsTall(renderedHeight > window.innerHeight);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={
          bare
            ? "overflow-hidden"
            : `overflow-hidden rounded-[1.5rem] border border-border bg-black/20 px-6 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10 dark:bg-card ${
                previewClipHeight !== undefined
                  ? "pb-0"
                  : "pb-6 sm:pb-8 lg:pb-10"
              }`
        }
      >
        <div
          className="overflow-hidden"
          style={
            previewClipHeight !== undefined
              ? {
                  height: `${previewClipHeight}px`,
                }
              : undefined
          }
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Open ${alt} in full view`}
          >
            <img
              src={activeSrc}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              className="block h-auto w-full max-w-full"
              style={previewStyle}
            />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} full view`}
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl leading-none text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6 sm:top-6"
            aria-label="Close full view"
          >
            ×
          </button>

          <div
            className="h-[100dvh] w-full overflow-x-hidden overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`flex min-h-[100dvh] w-full justify-center ${
                isTall ? "items-start" : "items-center"
              }`}
            >
              <img
                src={activeSrc}
                alt={alt}
                loading="eager"
                className="block h-auto w-full min-w-0 max-w-none shrink-0"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                }}
                onLoad={handleModalImageLoad}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}