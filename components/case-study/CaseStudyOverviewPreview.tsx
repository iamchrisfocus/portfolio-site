"use client";

import { useEffect, useState } from "react";

type CaseStudyOverviewPreviewProps = {
  previewSrc: string;
  fullSrc: string;
  alt: string;
  label: string;
  mobile?: boolean;
};

const ASSET_VERSION = "1";

export default function CaseStudyOverviewPreview({
  previewSrc,
  fullSrc,
  alt,
  label,
  mobile = false,
}: CaseStudyOverviewPreviewProps) {
  const [open, setOpen] = useState(false);

  const previewImageSrc = `${previewSrc}?v=${ASSET_VERSION}`;
  const fullImageSrc = `${fullSrc}?v=${ASSET_VERSION}`;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full touch-manipulation text-left"
        aria-label={`Open ${label} full-page view`}
      >
        <div className="overflow-hidden rounded-[1.25rem] border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {label}
            </p>

            <span className="text-xs text-muted transition-colors group-hover:text-foreground">
              View full →
            </span>
          </div>

          <div
            className={`relative overflow-hidden bg-background ${
              mobile
                ? "aspect-[4/5]"
                : "aspect-[16/8]"
            }`}
          >
            <img
              src={previewImageSrc}
              alt={alt}
              draggable={false}
              className="block h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} full-page view`}
          onClick={() => setOpen(false)}
        >
          <div
            className={`relative flex h-[calc(100vh-1.5rem)] max-h-[calc(100vh-1.5rem)] w-full overflow-hidden border border-white/10 bg-background shadow-2xl sm:h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-3rem)] ${
              mobile
                ? "max-w-[460px] rounded-[1.25rem]"
                : "max-w-7xl rounded-[1.25rem]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur sm:px-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {label}
              </p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-foreground"
                aria-label="Close full-page view"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-background pt-14">
              <div
                className={
                  mobile
                    ? "mx-auto w-full max-w-[460px]"
                    : "w-full"
                }
              >
                <img
                  src={fullImageSrc}
                  alt={alt}
                  draggable={false}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}