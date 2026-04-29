"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TrustVariant = "property" | "legal" | "trading";

interface ServiceTrustProps {
  variant: TrustVariant;
  sanityData?: {
    heading?: string | null;
    subheading?: string | null;
    points?: string[] | null;
  } | null;
}

const FALLBACK_DATA: Record<
  TrustVariant,
  { heading: string; subheading: string; points: string[] }
> = {
  property: {
    heading: "Protected at Every Step",
    subheading:
      "Property transactions in Thailand carry real legal complexity. We ensure your investment is properly verified, structured, and documented.",
    points: [
      "Full title deed and encumbrance verification before any commitment",
      "Ownership structures tailored to your nationality and investment goals",
      "Independent legal review at every stage of the transaction",
      "Clear documentation in English throughout the process",
    ],
  },
  legal: {
    heading: "Professional Legal Standards",
    subheading:
      "Our legal team works to the standards expected by international clients — precise, thorough, and transparent at every stage.",
    points: [
      "Rigorous compliance with Thai law and regulatory requirements",
      "English-language documentation for all agreements and registrations",
      "Experienced support across business setup, immigration, and property law",
      "Consistent, professional communication from first inquiry to completion",
    ],
  },
  trading: {
    heading: "Reliable International Support",
    subheading:
      "Operating across borders requires local knowledge and trustworthy representation. We provide both.",
    points: [
      "On-the-ground presence in Thailand for real-time coordination",
      "Established relationships with local suppliers, authorities, and partners",
      "Clear, documented processes for import, export, and commercial agreements",
      "English-speaking team with international business experience",
    ],
  },
};

export default function ServiceTrust({ variant, sanityData }: ServiceTrustProps) {
  const fallback = FALLBACK_DATA[variant];

  const heading   = sanityData?.heading   || fallback.heading;
  const subheading = sanityData?.subheading || fallback.subheading;
  const points    = sanityData?.points && sanityData.points.length > 0
    ? sanityData.points
    : fallback.points;

  return (
    <section className="bg-pearl py-8 sm:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-20 items-start">

          <div>
            <ScrollReveal delay={0}>
              <SectionHeading heading={heading} subheading={subheading} align="left" />
            </ScrollReveal>
          </div>

          <div className="pt-2">
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="list-none">
                  <ScrollReveal delay={180 + i * 90} className="flex items-start gap-3 sm:gap-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-body text-base text-onyx/75 leading-relaxed">
                      {point}
                    </p>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
