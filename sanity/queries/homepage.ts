import { sanityClient } from "../client";
import type { HomepageData } from "@/lib/types";

const query = `*[_type == "homepage"][0] {
  heroTitle,
  heroSubtitle,
  heroImage { asset, alt, hotspot },
  divisionsHeading,
  divisionsSubheading,
  divisionProperty { title, description, image { asset, alt, hotspot } },
  divisionLawFirm  { title, description, image { asset, alt, hotspot } },
  divisionTrading  { title, description, image { asset, alt, hotspot } },
  whySubtitle,
  whyItem1Title, whyItem1,
  whyItem2Title, whyItem2,
  whyItem3Title, whyItem3,
  whyItem4Title, whyItem4,
  leadershipHeading,
  leadershipSubtitle,
  ctaSubtitle,
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getHomepage(): Promise<HomepageData | null> {
  return sanityClient.fetch<HomepageData | null>(query, {}, { next: { revalidate: 60 } });
}
