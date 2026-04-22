import ParallaxImage from "@/components/ui/ParallaxImage";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  /** URL string already resolved (e.g. from urlFor or /images/...) */
  imageSrc?: string | null;
  imageAlt?: string;
  accentStatement?: string | null;
}

export default function ServiceHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  accentStatement,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[55vh] flex items-center bg-navy overflow-hidden">
      {/* Background image — scale-in on load, subtle parallax on scroll */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 animate-scale-in overflow-hidden">
            <ParallaxImage src={imageSrc} alt={imageAlt} objectPosition="center center" />
          </div>
          <div className="absolute inset-0 bg-navy/65" />
        </>
      )}

      {/* No image: subtle texture */}
      {!imageSrc && (
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gold/5 via-transparent to-transparent" />
        </div>
      )}

      {/* Content — anchored to bottom for visual weight */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 sm:py-16">
        <div className="max-w-3xl">
          <h1
            className="font-display font-bold text-pearl text-[2rem] leading-tight max-w-xs sm:text-5xl sm:max-w-none sm:leading-tight lg:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>

          <div
            className="mt-4 mb-4 sm:mt-5 sm:mb-5 w-12 h-px bg-gold animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          />

          <p
            className="font-body text-white text-lg leading-relaxed max-w-xs sm:max-w-xl lg:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {subtitle}
          </p>

          {/* Accent statement — unique per division */}
          {accentStatement && (
            <p
              className="mt-6 font-display italic text-gold text-xl leading-snug max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              &ldquo;{accentStatement}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
