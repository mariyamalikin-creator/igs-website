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

const SLUG = "property-services";

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    _key: "1",
    icon: "land-residential-property-sourcing",
    title: "Property Search & Selection",
    description:
      "We identify properties that match your needs, budget, and investment goals across Koh Phangan, Samui, and beyond.",
  },
  {
    _key: "2",
    icon: "legal-due-diligence",
    title: "Title Deed Verification",
    description:
      "We verify the legal status and ownership history of every property before you commit to a purchase.",
  },
  {
    _key: "3",
    icon: "legal-due-diligence",
    title: "Due Diligence Support",
    description:
      "We carry out thorough checks on planning permissions, land use rights, and any outstanding encumbrances on the property.",
  },
  {
    _key: "4",
    icon: "contracts-legal-documentation",
    title: "Lease Agreement Review",
    description:
      "We review and negotiate long-term lease agreements to ensure your rights as a tenant or lessee are fully protected.",
  },
  {
    _key: "5",
    icon: "property-acquisition",
    title: "Buyer Representation",
    description:
      "We represent your interests throughout the negotiation and purchase process, ensuring fair terms and full transparency.",
  },
  {
    _key: "6",
    icon: "ownership-transfer",
    title: "Land Office Registration",
    description:
      "We handle the full registration process at the Land Office to ensure your ownership or lease is legally recorded.",
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
        subtitle={division?.subtitle ?? ""}
        imageSrc={heroImageSrc}
        imageAlt="Aerial view of property in Koh Phangan, Thailand"
        accentStatement={division?.accentStatement}
      />

      <ServiceIntro body={division?.description} />

      <ServiceList
        items={services}
        layout="grid"
        heading={division?.servicesHeading ?? "What We Cover"}
        subheading={division?.servicesSubheading ?? "Comprehensive property support from search to registered ownership."}
      />

      <ServiceTrust
        variant="property"
        sanityData={{
          heading: division?.trustHeading,
          subheading: division?.trustSubheading,
          points: division?.trustPoints,
        }}
      />

      <PageCTA
        heading={division?.ctaHeading ?? "Interested in Property in Thailand?"}
        subheading={division?.ctaSubheading ?? "Speak with our team about your property goals. We will guide you through the right process from day one."}
      />
    </>
  );
}
