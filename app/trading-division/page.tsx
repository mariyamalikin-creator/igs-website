import type { Metadata } from "next";

export const revalidate = 60;

import { getServiceDivision } from "@/sanity/queries/serviceDivision";
import { urlFor } from "@/sanity/client";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceIntro from "@/components/sections/service/ServiceIntro";
import ServiceList from "@/components/sections/service/ServiceList";
import ServiceTrust from "@/components/sections/service/ServiceTrust";
import PageCTA from "@/components/sections/shared/PageCTA";
import type { ServiceItem } from "@/lib/types";

const SLUG = "trading-division";

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    _key: "1",
    icon: "import-export-coordination",
    title: "Import & Export Coordination",
    description:
      "We manage the full import and export process including customs documentation, freight coordination, and regulatory compliance.",
  },
  {
    _key: "2",
    icon: "supplier-sourcing",
    title: "Supplier Sourcing",
    description:
      "We identify and vet reliable suppliers across Thailand and Southeast Asia, matched to your product and quality requirements.",
  },
  {
    _key: "3",
    icon: "commercial-negotiation",
    title: "Commercial Negotiation",
    description:
      "We negotiate directly with suppliers and partners on your behalf to secure the best commercial terms.",
  },
  {
    _key: "4",
    icon: "business-representation",
    title: "Business Representation",
    description:
      "We act as your local representative in Thailand, managing supplier relationships and day-to-day commercial operations.",
  },
  {
    _key: "5",
    icon: "transaction-coordination",
    title: "Transaction Coordination",
    description:
      "We coordinate all stages of the transaction — from purchase order to final delivery — with full progress reporting.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServiceDivision(SLUG).catch(() => null);
  const ogImageUrl = data?.seo?.ogImage
    ? urlFor(data.seo.ogImage).width(1200).height(630).url()
    : undefined;
  return {
    title: data?.seo?.pageTitle ?? "Trading Division",
    description:
      data?.seo?.metaDescription ??
      "International trade support, supplier sourcing, and business representation in Thailand.",
    openGraph: ogImageUrl
      ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function TradingDivisionPage() {
  const division = await getServiceDivision(SLUG).catch(() => null);

  const heroImageSrc = division?.heroImage
    ? urlFor(division.heroImage).width(1600).height(900).url()
    : "/images/trading.png";

  const services =
    division?.servicesList && division.servicesList.length > 0
      ? division.servicesList
      : FALLBACK_SERVICES;

  return (
    <>
      <ServiceHero
        title={division?.title ?? "Trading Division"}
        subtitle={division?.subtitle ?? ""}
        imageSrc={heroImageSrc}
        imageAlt="IGS Trading Division office"
        accentStatement={division?.accentStatement}
      />

      <ServiceIntro body={division?.description} />

      <ServiceList
        items={services}
        layout="cards"
        heading={division?.servicesHeading ?? "Trading & Business Support"}
        subheading={division?.servicesSubheading ?? "Practical, cross-border coordination for international businesses working with Thailand."}
        showWorldMap
      />

      <ServiceTrust
        variant="trading"
        sanityData={{
          heading: division?.trustHeading,
          subheading: division?.trustSubheading,
          points: division?.trustPoints,
        }}
      />

      <PageCTA
        heading={division?.ctaHeading ?? "Working With Thailand?"}
        subheading={division?.ctaSubheading ?? "Talk to our trading team about your sourcing, logistics, or representation needs. We are on the ground and ready to help."}
      />
    </>
  );
}
