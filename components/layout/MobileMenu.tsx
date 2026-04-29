"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MEGA_MENU_DIVISIONS } from "@/lib/megaMenuData";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setExpandedIndex(null);
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-pearl flex flex-col justify-center gap-1.5"
      >
        <span
          className={[
            "block w-6 h-px bg-current transition-transform duration-200",
            isOpen ? "translate-y-[7px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-6 h-px bg-current transition-opacity duration-200",
            isOpen ? "opacity-0" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-6 h-px bg-current transition-transform duration-200",
            isOpen ? "-translate-y-[7px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>

      {/* Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-20 bg-onyx/40 z-40"
            onClick={close}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="fixed top-20 left-0 right-0 z-50 bg-navy border-t border-gold/20 pb-8 overflow-y-auto max-h-[calc(100dvh-5rem)]"
          >
            {/* Home link */}
            <Link
              href="/"
              onClick={close}
              className="block px-6 py-4 font-body text-sm font-medium text-pearl/85 hover:text-gold border-b border-white/10 transition-colors"
            >
              Home
            </Link>

            {/* Service division accordions */}
            {MEGA_MENU_DIVISIONS.map((division, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div key={division.href} className="border-b border-white/10">
                  <div className="flex items-center">
                    {/* Category label — navigates to the division page */}
                    <Link
                      href={division.href}
                      onClick={close}
                      className="flex-1 px-6 py-4 font-body text-sm font-medium text-pearl/85 hover:text-gold transition-colors"
                    >
                      {division.label}
                    </Link>
                    {/* Chevron — toggles accordion only */}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${division.label} submenu`}
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="px-5 py-4 text-pearl/85 hover:text-gold transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
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

                  {isExpanded && (
                    <div className="bg-navy/60 pb-2">
                      {/* View all link */}
                      <Link
                        href={division.href}
                        onClick={close}
                        className="block px-8 py-2.5 font-body text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                      >
                        View all {division.label} →
                      </Link>
                      {/* Service links */}
                      {division.services.map((service) => (
                        <Link
                          key={service.icon}
                          href={`${division.href}#${service.icon}`}
                          onClick={close}
                          className="block px-8 py-2.5 font-body text-sm text-pearl/70 hover:text-pearl transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Leadership */}
            <Link
              href="/leadership"
              onClick={close}
              className="block px-6 py-4 font-body text-sm font-medium text-pearl/85 hover:text-gold border-b border-white/10 transition-colors"
            >
              Leadership
            </Link>

            {/* Mobile CTA */}
            <div className="px-6 pt-4 mt-2">
              <a
                href="/contact"
                onClick={close}
                className="
                  block w-full text-center
                  px-5 py-3 rounded
                  bg-gold text-navy
                  font-body text-sm font-semibold
                  hover:bg-gold/90 transition-colors
                "
              >
                Contact Us
              </a>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
