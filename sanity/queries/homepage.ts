import { sanityClient } from "../client";
import type { HomepageData } from "@/lib/types";

const query = `*[_type == "homepage"][0] {
  heroTitle,
  heroSubtitle,
  heroImage { asset, alt, hotspot },
  ctaText,
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getHomepage(): Promise<HomepageData | null> {
  return sanityClient.fetch<HomepageData | null>(query);
}
