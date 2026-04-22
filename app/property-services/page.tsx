import type { Metadata } from "next";
import { getServiceDivision } from "@/sanity/queries/serviceDivision";
import { urlFor } from "@/sanity/client";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceIntro from "@/components/sections/service/ServiceIntro";
import ServiceList from "@/components/sections/service/ServiceList";
import ServiceTrust from "@/components/sections/service/ServiceTrust";
import PageCTA from "@/components/sections/shared/PageCTA";
import type { ServiceItem } from "@/lib/types";

const SLUG = "property-services";

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    _key: "1",
    icon: "land-residential-property-sourcing",
    label: "Land & Residential Property Sourcing",
    description:
      "Identifying suitable land plots, villas, and residential properties aligned with your investment criteria and budget.",
  },
  {
    _key: "2",
    icon: "legal-due-diligence",
    label: "Legal Due Diligence & Title Verification",
    description:
      "Full verification of title deeds, encumbrances, zoning restrictions, and seller authority before any commitment.",
  },
  {
    _key: "3",
    icon: "ownership-structuring",
    label: "Ownership Structuring & Legal Documentation",
    description:
      "Identifying the correct ownership structure for your nationality — leasehold, company, or other — and preparing all legal documentation.",
  },
  {
    _key: "4",
    icon: "property-acquisition",
    label: "Property Acquisition & Transaction Support",
    description:
      "End-to-end support through offer, negotiation, contract review, and closing coordination.",
  },
  {
    _key: "5",
    icon: "ownership-transfer",
    label: "Ownership Transfer & Registration",
    description:
      "Managing the formal transfer and registration process at the Land Department.",
  },
  {
    _key: "6",
    icon: "transaction-coordination",
    label: "Transaction Coordination",
    description:
      "Coordinating between buyers, sellers, agents, and legal parties to ensure a smooth and timely closing.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServiceDivision(SLUG).catch(() => null);
  const ogImageUrl = data?.seo?.ogImage
    ? urlFor(data.seo.ogImage).width(1200).height(630).url()
    : undefined;
  return {
    title: data?.seo?.pageTitle ?? "Property Services",
    description:
      data?.seo?.metaDescription ??
      "Professional property sourcing, due diligence, and transaction support in Thailand.",
    openGraph: ogImageUrl
      ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function PropertyServicesPage() {
  const division = await getServiceDivision(SLUG).catch(() => null);

  const heroImageSrc = division?.heroImage
    ? urlFor(division.heroImage).width(1600).height(900).url()
    : "/images/property-aerial.png";

  const services =
    division?.servicesList && division.servicesList.length > 0
      ? division.servicesList
      : FALLBACK_SERVICES;

  return (
    <>
      <ServiceHero
        title={division?.title ?? "Property Services"}
        subtitle={
          division?.subtitle ??
          "Trusted guidance for property buyers and investors navigating the Thai market."
        }
        imageSrc={heroImageSrc}
        imageAlt="Aerial view of property in Koh Phangan, Thailand"
        accentStatement={division?.accentStatement}
      />

      <ServiceIntro
        fallbackText="Whether you are purchasing a private villa, acquiring land, or exploring investment opportunities in Thailand, Infinity Global Solutions provides complete support — from the initial property search through legal verification, ownership structuring, and formal registration."
        body={division?.description}
      />

      {/* Layout: 2-column grid — balanced detail and readability */}
      <ServiceList
        items={services}
        layout="grid"
        heading="What We Cover"
        subheading="Comprehensive property support from search to registered ownership."
      />

      {/* Trust block — emphasises legal security and due diligence */}
      <ServiceTrust variant="property" />

      <PageCTA
        heading="Interested in Property in Thailand?"
        subheading="Speak with our team about your property goals. We will guide you through the right process from day one."
      />
    </>
  );
}
