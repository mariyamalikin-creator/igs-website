"use client";

import { useRef } from "react";
import { useScrollParallax } from "@/lib/hooks/useScrollParallax";

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Maximum translateY offset in px at full scroll-through (negative = up). Default 10. */
  maxPx?: number;
  className?: string;
}

/**
 * Lightweight wrapper that applies a scroll-linked vertical parallax to its
 * children.  Disabled on mobile and when prefers-reduced-motion is set.
 * Uses direct DOM mutation — no React state, no re-renders.
 */
export default function ParallaxLayer({
  children,
  maxPx = 10,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollParallax(ref, maxPx);
  return (
    <div ref={ref} className={className} data-parallax>
      {children}
    </div>
  );
}
