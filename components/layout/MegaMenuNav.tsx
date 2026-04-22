"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MEGA_MENU_DIVISIONS } from "@/lib/megaMenuData";

export default function MegaMenuNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const open = useCallback((i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeNow = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(null);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const division = openIndex !== null ? MEGA_MENU_DIVISIONS[openIndex] : null;

  return (
    <div onMouseLeave={scheduleClose}>
      <ul className="flex items-center gap-1">
        {MEGA_MENU_DIVISIONS.map((div, i) => {
          const isOpen = openIndex === i;
          const isActive = pathname === div.href;

          return (
            <li
              key={div.href}
              className="h-20 flex items-center"
              onMouseEnter={() => open(i)}
            >
              {/*
               * Split trigger pattern:
               *   <Link>  → navigates to the division page on click
               *   <button> → toggles the mega panel (keyboard + click)
               * Both share a group wrapper so hover tints them together.
               */}
              <div className="flex items-center group">
                <Link
                  href={div.href}
                  onClick={closeNow}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    pl-3 pr-1 py-2 font-body text-sm font-medium transition-colors
                    ${isActive ? "text-gold" : "text-pearl/85 group-hover:text-gold"}
                  `}
                >
                  {div.label}
                </Link>

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-label={`${div.label} submenu`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`
                    pr-3 pl-1 py-2 transition-colors
                    ${isActive ? "text-gold" : "text-pearl/85 group-hover:text-gold"}
                  `}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}

        {/* Leadership — hovering closes any open panel */}
        <li onMouseEnter={closeNow}>
          <Link
            href="/leadership"
            aria-current={pathname === "/leadership" ? "page" : undefined}
            className={`
              px-3 py-2 font-body text-sm font-medium transition-colors
              ${pathname === "/leadership" ? "text-gold" : "text-pearl/85 hover:text-gold"}
            `}
          >
            Leadership
          </Link>
        </li>
      </ul>

      {/* Full-width mega panel */}
      {division !== null && (
        <div
          className="fixed top-20 left-0 right-0 z-40 bg-pearl shadow-xl border-t border-gold/20"
          onMouseEnter={cancelClose}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Panel header row */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="font-display font-bold text-navy text-lg leading-snug mb-1">
                  {division.label}
                </p>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {division.intro}
                </p>
              </div>
              <Link
                href={division.href}
                onClick={closeNow}
                className="shrink-0 mt-1 font-body text-sm font-semibold text-gold hover:text-gold/70 transition-colors"
              >
                View all →
              </Link>
            </div>

            {/* Gold divider */}
            <div className="h-px bg-gold/25 mb-6" />

            {/* Service grid */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-1 pb-2">
              {division.services.map((service) => (
                <Link
                  key={service.icon}
                  href={`${division.href}#${service.icon}`}
                  onClick={closeNow}
                  className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-silk transition-colors group"
                >
                  {/* Badge circle */}
                  <div className="shrink-0 w-9 h-9 rounded-full bg-pearl border border-gold/40 flex items-center justify-center transition-all duration-200 group-hover:bg-gold group-hover:border-gold">
                    <Image
                      src={`/icons/${service.icon}.svg`}
                      alt=""
                      width={18}
                      height={18}
                      className="[filter:brightness(0)_saturate(100%)_invert(66%)_sepia(20%)_saturate(600%)_hue-rotate(3deg)_brightness(0.95)_contrast(0.92)] group-hover:[filter:brightness(0)_invert(1)] transition-all duration-200"
                    />
                  </div>
                  <span className="font-body text-sm text-navy leading-snug">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
