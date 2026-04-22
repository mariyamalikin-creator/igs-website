"use client";

import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    number: "01",
    title: "Integrated Under One Roof",
    body: "Property, legal, and trading support from a single firm — no fragmented advisors, no gaps between services.",
  },
  {
    number: "02",
    title: "International Clients, Local Expertise",
    body: "We understand the priorities of foreign investors and businesses operating in Thailand. English-speaking, internationally oriented.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    body: "From first inquiry through ownership transfer, company registration, or trade coordination — we support each step of the process.",
  },
  {
    number: "04",
    title: "Transparent and Professional",
    body: "Clear communication, structured advice, and a consistent standard of professionalism across every engagement.",
  },
];

export default function WhyIGS() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Pillar reveal — fires once when the grid enters view
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      reducedMotion
        ? { threshold: 0 }
        : { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-igs"
      className="relative bg-silk py-8 sm:py-24 px-5 sm:px-6 lg:px-8 overflow-hidden md:sticky md:top-20 md:z-[20]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          heading="Why Work With IGS"
          subheading="A trusted partner for foreigners navigating legal, property, and business matters in Thailand."
        />

        <div
          ref={gridRef}
          className="mt-5 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
        >
          {PILLARS.map((pillar, i) => {
            const baseDelay = i * 100;

            return (
              <div key={pillar.number} className="flex flex-col">
                {/* Number — leads, with scale for visual emphasis */}
                <span
                  data-reveal
                  className="font-display text-[2rem] sm:text-4xl font-bold text-gold/40 leading-none mb-2 sm:mb-4 select-none"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.88)",
                    transition: revealed
                      ? `opacity 0.5s ease ${baseDelay}ms, transform 0.5s ease ${baseDelay}ms`
                      : "none",
                  }}
                >
                  {pillar.number}
                </span>

                {/* Gold rule — fades in just after the number */}
                <div
                  className="w-8 h-px bg-gold mb-4 sm:mb-5"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transition: revealed
                      ? `opacity 0.4s ease ${baseDelay + 80}ms`
                      : "none",
                  }}
                />

                {/* Title + body */}
                <div
                  data-reveal
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(20px)",
                    transition: revealed
                      ? `opacity 0.5s ease ${baseDelay + 160}ms, transform 0.5s ease ${baseDelay + 160}ms`
                      : "none",
                  }}
                >
                  <h3 className="font-body text-base font-semibold text-navy mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-base text-muted leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
