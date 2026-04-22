"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ServiceItem } from "@/lib/types";

type ListLayout = "grid" | "dense" | "cards";

interface ServiceListProps {
  items: ServiceItem[];
  layout?: ListLayout;
  heading?: string;
  subheading?: string;
  /** Render a subtle decorative world-map SVG behind the section */
  showWorldMap?: boolean;
}

export default function ServiceList({
  items,
  layout = "grid",
  heading = "Our Services",
  subheading,
  showWorldMap = false,
}: ServiceListProps) {
  return (
    <section className="relative bg-silk py-8 sm:py-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative world map — trading division only */}
      {showWorldMap && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute inset-0 flex items-center justify-center
            opacity-20 sm:opacity-30
          "
        >
          <div className="flex items-center justify-center w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/trade-map.svg"
              alt=""
              className="w-[120%] max-w-none"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading reveals first */}
        <ScrollReveal delay={0}>
          <SectionHeading heading={heading} subheading={subheading} />
        </ScrollReveal>

        <div className={gridClass(layout)}>
          {items.map((item, i) => (
            <ScrollReveal key={item._key} delay={150 + i * 90}>
              <ServiceListItem item={item} layout={layout} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function gridClass(layout: ListLayout): string {
  const base = "mt-6 sm:mt-12";
  if (layout === "cards")
    return `${base} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`;
  if (layout === "dense")
    return `${base} grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 sm:gap-y-8`;
  return `${base} grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8`;
}

/* Converts black SVG fill → navy (#1A2E4A) */
const navyFilter =
  "[filter:brightness(0)_saturate(100%)_invert(16%)_sepia(40%)_saturate(700%)_hue-rotate(195deg)_brightness(0.95)]";

function IconBadge({
  name,
  size,
  diameter,
}: {
  name: string;
  size: number;
  diameter: string;
}) {
  return (
    <div
      className={`
        shrink-0 ${diameter} rounded-full flex items-center justify-center
        bg-transparent border border-navy/60
        transition-all duration-200 ease-out
        group-hover:bg-navy group-hover:border-navy
        group-hover:scale-105 group-hover:-translate-y-0.5
      `}
    >
      <ServiceIcon
        name={name}
        size={size}
        className={`${navyFilter} group-hover:[filter:brightness(0)_invert(1)] transition-all duration-200`}
      />
    </div>
  );
}

function ServiceListItem({
  item,
  layout,
}: {
  item: ServiceItem;
  layout: ListLayout;
}) {
  if (layout === "cards") {
    return (
      <div
        id={item.icon}
        className="
          scroll-mt-24 group h-full
          bg-pearl rounded p-4 sm:p-6 flex flex-col gap-3 sm:gap-5
          transition-all duration-200
          hover:shadow-md hover:-translate-y-0.5
        "
      >
        {item.icon && (
          <IconBadge name={item.icon} size={22} diameter="w-12 h-12" />
        )}
        <div>
          <h3 className="font-body font-semibold text-navy text-base leading-snug mb-1.5">
            {item.label}
          </h3>
          {item.description && (
            <p className="font-body text-base text-muted leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (layout === "dense") {
    return (
      <div
        id={item.icon}
        className="scroll-mt-24 group flex items-start gap-3 sm:gap-5"
      >
        {item.icon && (
          <div className="mt-0.5 shrink-0">
            <IconBadge name={item.icon} size={22} diameter="w-12 h-12" />
          </div>
        )}
        <div>
          <h3 className="font-body font-semibold text-navy text-base leading-snug mb-1">
            {item.label}
          </h3>
          {item.description && (
            <p className="font-body text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default grid layout
  return (
    <div
      id={item.icon}
      className="scroll-mt-24 group flex items-start gap-3 sm:gap-6"
    >
      {item.icon && (
        <div className="mt-1 shrink-0">
          <IconBadge name={item.icon} size={24} diameter="w-12 h-12" />
        </div>
      )}
      <div>
        <h3 className="font-body font-semibold text-navy text-base leading-snug mb-2">
          {item.label}
        </h3>
        {item.description && (
          <p className="font-body text-base text-muted leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
