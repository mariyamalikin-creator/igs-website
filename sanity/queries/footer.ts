import { sanityClient } from "../client";
import type { FooterData } from "@/lib/types";

const query = `*[_type == "footer"][0] {
  email,
  email2,
  phone,
  address
}`;

export async function getFooterData(): Promise<FooterData | null> {
  return sanityClient.fetch<FooterData | null>(query, {}, { next: { revalidate: 60 } });
}
