import type { Metadata } from "next";
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
    label: "Import & Export Coordination",
    description:
      "Managing logistics, customs, and documentation for goods moving in and out of Thailand.",
  },
  {
    _key: "2",
    icon: "supplier-sourcing",
    label: "Supplier Sourcing",
    description:
      "Identifying and vetting Thai suppliers, manufacturers, and distributors on behalf of international clients.",
  },
  {
    _key: "3",
    icon: "commercial-negotiation",
    label: "Commercial Negotiation",
    description:
      "Representing clients in commercial negotiations with Thai counterparties — price, terms, and agreements.",
  },
  {
    _key: "4",
    icon: "business-representation",
    label: "Business Representation",
    description:
      "Acting as local representative for foreign companies operating or entering the Thai market.",
  },
  {
    _key: "5",
    icon: "transaction-coordination",
    label: "Transaction Coordination",
    description:
      "Coordinating commercial transactions from initial agreement through payment, delivery, and documentation.",
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
      {/* Internationally-framed hero */}
      <ServiceHero
        title={division?.title ?? "Trading Division"}
        subtitle={
          division?.subtitle ??
          "Supporting international businesses with trade coordination, supplier sourcing, and local representation in Thailand."
        }
        imageSrc={heroImageSrc}
        imageAlt="IGS Trading Division office"
        accentStatement={division?.accentStatement}
      />

      <ServiceIntro
        fallbackText="The IGS Trading Division bridges the gap between international businesses and the Thai market. Whether you are importing goods, sourcing local suppliers, or need a trusted representative on the ground, we provide the coordination and local expertise to operate effectively across borders."
        body={division?.description}
      />

      {/* Card layout — spacious, suits a commerce-oriented audience */}
      <ServiceList
        items={services}
        layout="cards"
        heading="Trading & Business Support"
        subheading="Practical, cross-border coordination for international businesses working with Thailand."
        showWorldMap
      />

      {/* Trust block — emphasises local presence and reliability */}
      <ServiceTrust variant="trading" />

      <PageCTA
        heading="Working With Thailand?"
        subheading="Talk to our trading team about your sourcing, logistics, or representation needs. We are on the ground and ready to help."
      />
    </>
  );
}
