import { sanityClient } from "../client";
import type { ContactPageData } from "@/lib/types";

const query = `*[_type == "contactPage" && _id == "contactPage"][0] {
  heroSubtitle,
  heroImage { asset, alt, hotspot },
  branchAddress,
  branchPhone,
  branchEmail,
  branchEmail2,
  hqAddress,
  hqPhoneLabel,
  hqPhone,
  hqPhone2Label,
  hqPhone2,
  hqEmail,
  hqEmail2,
  findUsAddress
}`;

export async function getContactPage(): Promise<ContactPageData | null> {
  return sanityClient.fetch<ContactPageData | null>(query, {}, { next: { revalidate: 60 } });
}
