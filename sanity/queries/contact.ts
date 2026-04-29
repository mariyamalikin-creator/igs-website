import { sanityClient } from "../client";
import type { ContactInfo } from "@/lib/types";

const query = `*[_type == "contactInfo"][0] {
  email,
  phone,
  address,
  mapLink
}`;

export async function getContactInfo(): Promise<ContactInfo | null> {
  return sanityClient.fetch<ContactInfo | null>(query);
}
