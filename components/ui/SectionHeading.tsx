import type { SectionHeadingProps } from "@/lib/types";

export default function SectionHeading({
  heading,
  subheading,
  align = "center",
  size = "lg",
}: SectionHeadingProps) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";
  const headingSize = size === "lg" ? "text-[2rem] sm:text-4xl lg:text-5xl" : "text-[2rem] sm:text-3xl lg:text-4xl";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <h2
        className={`font-display font-bold text-navy leading-tight ${headingSize}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 sm:mt-4 font-body text-muted text-lg leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
