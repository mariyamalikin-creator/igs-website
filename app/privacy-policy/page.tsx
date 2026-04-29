import type { Metadata } from "next";

export const revalidate = 60;

import { getLegalPage } from "@/sanity/queries/legalPage";
import { urlFor } from "@/sanity/client";
import LegalContent from "@/components/sections/shared/LegalContent";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLegalPage("privacy-policy").catch(() => null);
  const ogImageUrl = data?.seo?.ogImage
    ? urlFor(data.seo.ogImage).width(1200).height(630).url()
    : undefined;
  return {
    title: data?.seo?.pageTitle ?? "Privacy Policy",
    description:
      data?.seo?.metaDescription ??
      "Privacy Policy for Infinity Global Solutions Co., Ltd.",
    openGraph: ogImageUrl
      ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function PrivacyPolicyPage() {
  const data = await getLegalPage("privacy-policy").catch(() => null);
  return (
    <LegalContent
      data={data}
      defaultTitle="Privacy Policy"
      defaultOverline="Legal"
    />
  );
}
