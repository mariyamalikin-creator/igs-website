import { sanityClient } from "../client";
import type { LeadershipPageData } from "@/lib/types";

const query = `*[_type == "leadershipPage" && _id == "leadershipPage"][0] {
  heroSubtitle,
  heroImage { asset, alt, hotspot },
  value1Label, value1Body,
  value2Label, value2Body,
  value3Label, value3Body,
  ctaHeading,
  ctaSubheading,
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getLeadershipPage(): Promise<LeadershipPageData | null> {
  return sanityClient.fetch<LeadershipPageData | null>(query, {}, { next: { revalidate: 60 } });
}
