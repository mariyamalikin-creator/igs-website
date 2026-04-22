import type { Metadata } from "next";
import { getHomepage } from "@/sanity/queries/homepage";
import { getAllServiceDivisions } from "@/sanity/queries/serviceDivision";
import { urlFor } from "@/sanity/client";
import HomeHero from "@/components/sections/home/HomeHero";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyIGS from "@/components/sections/home/WhyIGS";
import LeadershipTeaser from "@/components/sections/home/LeadershipTeaser";
import HomeContact from "@/components/sections/home/HomeContact";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepage().catch(() => null);
  const ogImageUrl = data?.seo?.ogImage
    ? urlFor(data.seo.ogImage).width(1200).height(630).url()
    : undefined;
  return {
    title: data?.seo?.pageTitle,
    description: data?.seo?.metaDescription,
    openGraph: ogImageUrl
      ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function HomePage() {
  const [homepage, divisions] = await Promise.all([
    getHomepage().catch(() => null),
    getAllServiceDivisions().catch(() => []),
  ]);

  return (
    <>
      <HomeHero data={homepage} />
      <ServicesOverview divisions={divisions} />
      <WhyIGS />
      <LeadershipTeaser />
      <HomeContact />
    </>
  );
}
