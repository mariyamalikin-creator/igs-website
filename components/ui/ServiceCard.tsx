import Link from "next/link";
import Image from "next/image";
import type { ServiceCardProps } from "@/lib/types";

interface ExtendedServiceCardProps extends ServiceCardProps {
  imageSrc?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  imageSrc,
}: ExtendedServiceCardProps) {
  return (
    <Link
      href={href}
      className="
        group relative flex flex-col h-full overflow-hidden rounded
        border border-border bg-pearl
        hover:border-gold/40 hover:shadow-lg hover:-translate-y-1.5
        transition-all duration-300 ease-out
      "
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-silk shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          /* Fallback: navy block with gold icon hint */
          <div className="h-full bg-navy flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Image
                src={`/icons/${icon}.svg`}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className="invert opacity-80"
              />
            </div>
          </div>
        )}

        {/* Subtle overlay deepens on hover */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="font-display text-base sm:text-xl font-bold text-navy leading-snug mb-2">
          {title}
        </h3>
        <p className="font-body text-base text-muted leading-relaxed flex-1">
          {description}
        </p>
        <span className="mt-3 sm:mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold">
          Learn more
          <span
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
