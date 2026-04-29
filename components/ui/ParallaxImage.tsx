"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  /** Tailwind responsive classes for object-position (overrides objectPosition prop) */
  className?: string;
  /** Parallax strength — fraction of scrollY applied as translateY (default 0.12) */
  factor?: number;
}

/**
 * Full-bleed background image with a subtle vertical parallax effect.
 * Disabled automatically when prefers-reduced-motion is set or on touch devices.
 * Designed to be placed inside an `absolute inset-0` wrapper that has overflow-hidden.
 *
 * Uses direct DOM mutation (no React state) to avoid re-renders on every scroll frame.
 */
export default function ParallaxImage({
  src,
  alt,
  objectPosition,
  className,
  factor = 0.12,
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile =
      window.innerWidth < 768 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (reducedMotion || isMobile) return;

    el.style.willChange = "transform";

    function onScroll() {
      if (!el) return;
      el.style.transform = `translateY(${window.scrollY * factor}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (el) {
        el.style.transform = "";
        el.style.willChange = "";
      }
    };
  }, [factor]);

  return (
    /*
     * Container extends -top-24 -bottom-24 to give 96px of headroom for the
     * parallax translateY movement (clipped by the parent's overflow-hidden).
     * On mobile the scroll listener is never attached so no transform is
     * applied — the image renders statically.
     */
    <div
      ref={wrapperRef}
      data-parallax
      className="absolute inset-x-0 -top-24 -bottom-24"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className={`object-cover ${className ?? ""}`}
        style={className ? undefined : { objectPosition }}
        sizes="100vw"
      />
    </div>
  );
}
