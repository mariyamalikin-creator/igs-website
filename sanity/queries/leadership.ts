import { sanityClient } from "../client";
import type { Leadership } from "@/lib/types";

const query = `*[_type == "leadership"][0] {
  name,
  role,
  biography,
  photo { asset, alt, hotspot },
  experience,
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getLeadership(): Promise<Leadership | null> {
  return sanityClient.fetch<Leadership | null>(query);
}
