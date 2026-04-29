import type { Metadata } from "next";

export const revalidate = 60;

import { getServiceDivision } from "@/sanity/queries/serviceDivision";
import { urlFor } from "@/sanity/client";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceIntro from "@/components/sections/service/ServiceIntro";
import ServiceList from "@/components/sections/service/ServiceList";
import ServiceTrust from "@/components/sections/service/ServiceTrust";
import LegalTeam from "@/components/sections/law-firm/LegalTeam";
import PageCTA from "@/components/sections/shared/PageCTA";
import type { ServiceItem } from "@/lib/types";

const SLUG = "law-firm";

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    _key: "1",
    icon: "company-registration",
    title: "Company Registration",
    description:
      "Setting up Thai limited companies, BOI applications, and branch registrations for foreign-owned businesses.",
  },
  {
    _key: "2",
    icon: "contracts-legal-documentation",
    title: "Contracts & Legal Documentation",
    description:
      "Drafting, reviewing, and translating agreements, MOUs, sale and purchase contracts, and corporate documents.",
  },
  {
    _key: "3",
    icon: "visa-work-permits",
    title: "Visa & Work Permits",
    description:
      "Processing non-immigrant visas, retirement visas, business visas, and work permit applications.",
  },
  {
    _key: "4",
    icon: "compliance-advisory",
    title: "Compliance Advisory",
    description:
      "Guidance on Thai regulatory compliance for businesses, including annual filings, reporting obligations, and licensing.",
  },
  {
    _key: "5",
    icon: "business-legal-support",
    title: "Business Legal Support",
    description:
      "Ongoing legal advisory for businesses operating in Thailand — from shareholder agreements to dispute resolution.",
  },
  {
    _key: "6",
    icon: "ownership-structuring",
    title: "Ownership Structuring",
    description:
      "Advising on legal structures for foreign nationals holding property or business interests in Thailand.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServiceDivision(SLUG).catch(() => null);
  const ogImageUrl = data?.seo?.ogImage
    ? urlFor(data.seo.ogImage).width(1200).height(630).url()
    : undefined;
  return {
    title: data?.seo?.pageTitle ?? "Law Firm",
    description:
      data?.seo?.metaDescription ??
      "Professional legal services for businesses and individuals in Thailand — company registration, visas, contracts, and compliance.",
    openGraph: ogImageUrl
      ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function LawFirmPage() {
  const division = await getServiceDivision(SLUG).catch(() => null);

  const heroImageSrc = division?.heroImage
    ? urlFor(division.heroImage).width(1600).height(900).url()
    : "/images/law3.png";

  const services =
    division?.servicesList && division.servicesList.length > 0
      ? division.servicesList
      : FALLBACK_SERVICES;

  return (
    <>
      <ServiceHero
        title={division?.title ?? "Law Firm"}
        subtitle={division?.subtitle ?? ""}
        imageSrc={heroImageSrc}
        imageAlt="IGS law firm office in Koh Phangan"
        accentStatement={division?.accentStatement}
      />

      <ServiceIntro body={division?.description} />

      <ServiceList
        items={services}
        layout="dense"
        heading={division?.servicesHeading ?? "Legal Services"}
        subheading={division?.servicesSubheading ?? "Covering the full spectrum of legal needs for individuals and businesses in Thailand."}
      />

      <ServiceTrust
        variant="legal"
        sanityData={{
          heading: division?.trustHeading,
          subheading: division?.trustSubheading,
          points: division?.trustPoints,
        }}
      />

      <LegalTeam members={division?.legalTeam} />

      <PageCTA
        heading={division?.ctaHeading ?? "Need Legal Support in Thailand?"}
        subheading={division?.ctaSubheading ?? "Our team will advise you clearly on your legal options and guide you through the correct process."}
      />
    </>
  );
}
