import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { urlFor } from "@/sanity/client";
import type { ServiceDivision, HomepageData, SanityImage } from "@/lib/types";

interface ServicesOverviewProps {
  divisions: ServiceDivision[];
  homepage?: HomepageData | null;
}

type CardData = { title?: string; description?: string; image?: SanityImage };

const FALLBACK_DIVISIONS = [
  {
    title: "Property Services",
    slug: { _type: "slug" as const, current: "property-services" },
    subtitle: "Land, residential, and commercial property support",
    description: [],
    servicesList: [],
    heroImage: undefined,
    accentStatement: undefined,
    seo: undefined,
  },
  {
    title: "Law Firm",
    slug: { _type: "slug" as const, current: "law-firm" },
    subtitle: "Legal documentation, visas, and company registration",
    description: [],
    servicesList: [],
    heroImage: undefined,
    accentStatement: undefined,
    seo: undefined,
  },
  {
    title: "Trading Division",
    slug: { _type: "slug" as const, current: "trading-division" },
    subtitle: "Import, export, and international business coordination",
    description: [],
    servicesList: [],
    heroImage: undefined,
    accentStatement: undefined,
    seo: undefined,
  },
];

const FALLBACK_DESCRIPTIONS: Record<string, string> = {
  "property-services":
    "Sourcing, due diligence, ownership structuring, and full transaction support for property buyers and investors in Thailand.",
  "law-firm":
    "Company registration, legal documentation, visas, work permits, and compliance advisory for individuals and businesses.",
  "trading-division":
    "Import and export coordination, supplier sourcing, commercial negotiation, and business representation across borders.",
};

const FALLBACK_IMAGES: Record<string, string> = {
  "property-services": "/images/property-aerial.png",
  "law-firm": "/images/law3.png",
  "trading-division": "/images/trading.png",
};

export default function ServicesOverview({ divisions, homepage }: ServicesOverviewProps) {
  const items = divisions.length > 0 ? divisions : FALLBACK_DIVISIONS;

  const cardDataBySlug: Record<string, CardData> = {
    "property-services": homepage?.divisionProperty ?? {},
    "law-firm":          homepage?.divisionLawFirm  ?? {},
    "trading-division":  homepage?.divisionTrading  ?? {},
  };

  return (
    <section id="services" className="bg-pearl py-8 sm:py-24 px-5 sm:px-6 lg:px-8 md:sticky md:top-20 md:z-[10] md:min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading={homepage?.divisionsHeading ?? "Three Integrated Divisions"}
          subheading={homepage?.divisionsSubheading ?? "One firm. One point of contact. Complete support across property, law, and business."}
        />

        <div className="mt-5 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {items.map((division, i) => {
            const slug      = division.slug.current;
            const cardData  = cardDataBySlug[slug] ?? {};

            const title       = cardData.title       ?? division.title;
            const description = cardData.description ?? FALLBACK_DESCRIPTIONS[slug] ?? division.subtitle ?? "Professional advisory services tailored to your needs in Thailand.";
            const imageSrc    = cardData.image
              ? urlFor(cardData.image).width(800).height(520).url()
              : FALLBACK_IMAGES[slug];

            return (
              <ScrollReveal key={slug} delay={i * 120} className="h-full">
                <ServiceCard
                  icon={slug}
                  title={title}
                  description={description}
                  href={`/${slug}`}
                  imageSrc={imageSrc}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
