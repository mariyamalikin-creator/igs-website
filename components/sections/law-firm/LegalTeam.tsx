"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import type { LegalTeamMember } from "@/lib/types";

interface LegalTeamProps {
  members?: LegalTeamMember[] | null;
}

const FALLBACK_MEMBERS: LegalTeamMember[] = [
  {
    _key: "1",
    name: "Suwaree Chaijiraphan",
    role: "Chief Executive Officer",
    bio: "Suwaree Chaijiraphan leads Infinity Global Solutions with a practical understanding of Thailand's legal, property, and business environment, helping guide international clients with clarity, structure, and confidence.",
  },
  {
    _key: "2",
    name: "Acting Sub Lt. Tanamongkol Charoenphon",
    role: "Legal Consultant & Attorney",
    email: "Tanamongkol@igs-thailand.com",
    bio: "Acting Sub Lt. Tanamongkol Charoenphon serves as a legal professional at IGS Law Firm, supporting clients in matters relating to property law, corporate structuring, regulatory compliance, and legal advisory services. He contributes structured legal analysis and compliance coordination to ensure professional and legally sound outcomes for clients operating in Thailand.",
  },
];

function revealStyle(revealed: boolean, delay: number): React.CSSProperties {
  return {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(20px)",
    transition: revealed
      ? `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      : "none",
  };
}

export default function LegalTeam({ members }: LegalTeamProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  const team = members && members.length > 0 ? members : FALLBACK_MEMBERS;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
    <section ref={sectionRef} className="bg-pearl py-8 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">

        <div data-reveal style={revealStyle(revealed, 0)} className="text-center mb-6 sm:mb-14">
          <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-4">
            Legal Team
          </p>
          <h2 className="font-display font-bold text-navy text-[2rem] sm:text-5xl leading-tight">
            Our Legal Professionals
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-10">
          {team.map((member, i) => {
            const photoUrl = member.photo?.asset
              ? `https://cdn.sanity.io/images/pfui450z/production/${member.photo.asset._ref
                  .replace("image-", "")
                  .replace(/-([a-z]+)$/, ".$1")}`
              : null;

            return (
              <div
                key={member._key}
                data-reveal
                style={revealStyle(revealed, 200 + i * 180)}
                className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-start"
              >
                {/* Portrait */}
                <div className="shrink-0 w-36 sm:w-36">
                  <div className="w-full h-44 relative overflow-hidden rounded-lg bg-silk">
                    {photoUrl ? (
                      <Image
                        src={photoUrl}
                        alt={member.photo?.alt ?? member.name}
                        fill
                        className="object-cover object-[center_20%]"
                        sizes="(max-width: 640px) 100vw, 144px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-silk">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mb-2">
                          <Image
                            src="/icons/user-round.svg"
                            alt=""
                            aria-hidden="true"
                            width={20}
                            height={20}
                            className="opacity-30"
                          />
                        </div>
                        <p className="font-body text-sm text-muted text-center px-2">Profile image pending</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 pt-0 sm:pt-1">
                  <h3 className="font-display font-bold text-navy text-base sm:text-xl leading-snug">
                    {member.name}
                  </h3>
                  <p className="font-body text-gold text-sm font-semibold uppercase tracking-wider mt-1.5">
                    {member.role}
                  </p>

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block mt-2 font-body text-sm text-navy/60 hover:text-gold transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  )}

                  <div className="mt-4 w-8 h-px bg-gold/60" />

                  {member.bio && (
                    <p className="mt-4 font-body text-base text-muted leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
