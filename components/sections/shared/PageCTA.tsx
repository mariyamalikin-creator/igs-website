"use client";

import { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";

interface PageCTAProps {
  heading?: string;
  subheading?: string;
}

export default function PageCTA({
  heading = "Ready to Get Started?",
  subheading = "Contact our team today for a straightforward conversation about your needs in Thailand.",
}: PageCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Double-RAF: guarantees the initial opacity:0 frame is painted before the
    // observer starts. Without this, the observer can fire before the browser has
    // a "from" state, causing the transition to be skipped intermittently.
    const h = { raf2: 0, observer: null as IntersectionObserver | null };

    const raf1 = requestAnimationFrame(() => {
      h.raf2 = requestAnimationFrame(() => {
        h.observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setRevealed(true);
              h.observer?.disconnect();
            }
          },
          reducedMotion ? { threshold: 0 } : { threshold: 0.08 }
        );
        h.observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(h.raf2);
      h.observer?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy py-8 sm:py-28 px-5 sm:px-6 lg:px-8"
    >
      {/* Content — fully stable, staggered reveal */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          data-reveal
          className="font-display font-bold text-pearl text-[2rem] sm:text-5xl leading-tight"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: revealed
              ? "opacity 0.6s ease 0ms, transform 0.6s ease 0ms"
              : "none",
          }}
        >
          {heading}
        </h2>

        {/* Gold rule — scales in from center */}
        <div
          data-reveal
          className="mt-5 mb-5 w-12 h-px bg-gold mx-auto origin-center"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "scaleX(1)" : "scaleX(0)",
            transition: revealed
              ? "opacity 0.4s ease 130ms, transform 0.45s ease 130ms"
              : "none",
          }}
        />

        <p
          data-reveal
          className="font-body text-pearl/70 text-lg leading-relaxed"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: revealed
              ? "opacity 0.6s ease 210ms, transform 0.6s ease 210ms"
              : "none",
          }}
        >
          {subheading}
        </p>

        <div
          data-reveal
          className="mt-5 sm:mt-8"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: revealed
              ? "opacity 0.5s ease 330ms, transform 0.5s ease 330ms"
              : "none",
          }}
        >
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
