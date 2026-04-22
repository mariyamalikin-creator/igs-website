import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** Optional overline label shown above the title */
  overline?: string;
  /**
   * Optional background image path (from /public).
   * When provided the section renders with a full-bleed image behind a
   * directional gradient overlay. Without it the plain navy background is used.
   */
  image?: string;
  /**
   * Tailwind object-position class for the background image on desktop.
   * Defaults to "sm:object-[right_center]". Mobile always uses object-center.
   */
  imagePosition?: string;
  /**
   * Override the desktop directional gradient CSS value.
   * Only used when `image` is provided.
   */
  gradient?: string;
  /**
   * When true, the hero section sizes itself to the image's natural aspect ratio
   * (aspect-[16/9], capped at 85vh) so the full image composition is visible
   * without cropping. Defaults to false (fixed vh height).
   */
  imageFullBleed?: boolean;
}

const DEFAULT_GRADIENT =
  "linear-gradient(to right, rgba(28,48,74,0.85) 0%, rgba(28,48,74,0.75) 40%, rgba(28,48,74,0.4) 70%, rgba(28,48,74,0.2) 100%)";

export default function PageHero({
  title,
  subtitle,
  overline,
  image,
  imagePosition = "sm:object-[right_center]",
  gradient = DEFAULT_GRADIENT,
  imageFullBleed = false,
}: PageHeroProps) {
  if (image) {
      if (imageFullBleed) {
      return (
        <section className="relative">
          {/* Full-width image — natural dimensions, no crop */}
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            width={2400}
            height={1350}
            priority
            quality={85}
            sizes="100vw"
            className="w-full h-auto block animate-scale-in"
          />

          {/* Directional gradient — desktop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:block"
            style={{ background: gradient }}
          />

          {/* Mobile: uniform overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-navy/75 sm:hidden"
          />

          {/* Text — centered over image */}
          <div className="absolute inset-0 flex items-center px-5 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto w-full">
              {overline && (
                <p
                  className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up"
                  style={{ animationDelay: "0.15s" }}
                >
                  {overline}
                </p>
              )}
              <h1
                className="font-display font-bold text-pearl text-[2rem] leading-tight max-w-xs sm:text-5xl sm:max-w-2xl lg:text-6xl animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {title}
              </h1>
              <div
                className="mt-4 sm:mt-5 w-12 h-px bg-gold animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              />
              {subtitle && (
                <p
                  className="mt-4 sm:mt-5 font-body text-white text-lg leading-relaxed max-w-xs sm:max-w-xl animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="relative h-[45vh] sm:h-[60vh] flex items-center px-5 sm:px-6 lg:px-8">
        {/* Background image — absolutely positioned, out of flex flow */}
        <div className="absolute inset-0 animate-scale-in overflow-hidden">
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            priority
            quality={85}
            className={`object-cover object-center ${imagePosition}`}
            sizes="100vw"
          />
        </div>

        {/* Directional gradient — desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block"
          style={{ background: gradient }}
        />

        {/* Mobile: uniform overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy/75 sm:hidden"
        />

        {/* Text — only in-flow flex child, centered by items-center */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {overline && (
            <p
              className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              {overline}
            </p>
          )}
          <h1
            className="font-display font-bold text-pearl text-[2rem] leading-tight max-w-xs sm:text-5xl sm:max-w-2xl lg:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {title}
          </h1>
          <div
            className="mt-4 sm:mt-5 w-12 h-px bg-gold animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          />
          {subtitle && (
            <p
              className="mt-4 sm:mt-5 font-body text-white text-lg leading-relaxed max-w-xs sm:max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-navy py-8 sm:py-20 flex items-center px-5 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {overline && (
          <p
            className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {overline}
          </p>
        )}
        <h1
          className="font-display font-bold text-pearl text-[2rem] sm:text-5xl lg:text-6xl leading-tight max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {title}
        </h1>
        <div
          className="mt-5 w-12 h-px bg-gold animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        />
        {subtitle && (
          <p
            className="mt-5 font-body text-white text-lg leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
