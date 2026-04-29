import { sanityClient } from "../client";
import type { LegalPage } from "@/lib/types";

const bySlugQuery = `*[_type == "legalPage" && slug.current == $slug][0] {
  title,
  slug,
  body,
  lastUpdated,
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  return sanityClient.fetch<LegalPage | null>(bySlugQuery, { slug }, { next: { revalidate: 60 } });
}
