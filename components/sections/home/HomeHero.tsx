import Button from "@/components/ui/Button";
import ScrollAnchorButton from "@/components/ui/ScrollAnchorButton";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { urlFor } from "@/sanity/client";
import type { HomepageData } from "@/lib/types";

interface HomeHeroProps {
  data: HomepageData | null;
}

const DEFAULTS = {
  heroTitle: "Integrated Legal, Property & Business Services",
  heroSubtitle:
    "Supporting individuals, investors, and businesses with trusted legal, property, and advisory services.",
  ctaText: "Contact Us",
};

export default function HomeHero({ data }: HomeHeroProps) {
  const title = data?.heroTitle ?? DEFAULTS.heroTitle;
  const subtitle = data?.heroSubtitle ?? DEFAULTS.heroSubtitle;
  const ctaText = data?.ctaText ?? DEFAULTS.ctaText;

  // Sanity image overrides the local fallback when set
  const heroImageSrc = data?.heroImage
    ? urlFor(data.heroImage).width(1600).height(900).url()
    : "/images/hero3.png";

  return (
    <section className="relative min-h-[45vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center bg-navy overflow-hidden">
      {/* Mobile image — desk / documents / window */}
      <div className="absolute inset-0 block sm:hidden animate-scale-in overflow-hidden">
        <ParallaxImage
          src="/images/hero-mobile.png"
          alt="Infinity Global Solutions advisory office — Koh Phangan, Thailand"
          className="[object-position:center_center]"
        />
      </div>

      {/* Desktop image — full advisory scene */}
      <div className="absolute inset-0 hidden sm:block animate-scale-in overflow-hidden">
        <ParallaxImage
          src={heroImageSrc}
          alt={data?.heroImage?.alt ?? "Infinity Global Solutions — Koh Phangan, Thailand"}
          className="[object-position:center_70%]"
        />
      </div>

      {/* Base overlay — slightly stronger on mobile for brighter window image */}
      <div className="absolute inset-0 bg-navy/70 sm:bg-navy/60" />

      {/* Left gradient — stronger darkening behind text block */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Overline */}
          <p
            className="font-body text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-2 sm:mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Infinity Global Solutions — Koh Phangan, Thailand
          </p>

          {/* Gold accent line */}
          <div
            className="mb-3 sm:mb-6 w-12 h-px bg-gold animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          />

          {/* Main heading */}
          <h1
            className="font-display font-bold text-pearl leading-tight text-[2rem] max-w-xs sm:text-5xl sm:max-w-none sm:leading-[1.15] lg:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-6 font-body text-white text-lg leading-relaxed max-w-xs sm:text-xl sm:max-w-none animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          <div
            className="mt-5 sm:mt-9 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            <Button href="/contact" size="lg">
              {ctaText}
            </Button>
            <ScrollAnchorButton
              targetId="services"
              className="hidden sm:inline-flex items-center justify-center font-body font-semibold rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold border border-gold text-gold hover:bg-gold hover:text-navy active:bg-gold/90 active:text-navy px-8 py-4 text-base"
            >
              Explore Services
            </ScrollAnchorButton>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pearl/8 to-transparent pointer-events-none" />
    </section>
  );
}
