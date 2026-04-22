"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms before the reveal animation starts */
  delay?: number;
  className?: string;
}

/**
 * Wraps children in a scroll-triggered fade-up reveal using IntersectionObserver.
 * Fires once when the element enters the viewport, then disconnects.
 *
 * Reduced-motion: uses threshold:0 so the observer fires the moment the element
 * enters the viewport — no animation, just an instant opacity reveal.
 * All setState calls are inside the async observer callback, satisfying lint rules.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      reducedMotion
        ? // Fires the instant any part of the element is in view — no animation delay
          { threshold: 0 }
        : // Require the card to be meaningfully in view before animating
          { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: visible
          ? `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
