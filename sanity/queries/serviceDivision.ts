import { sanityClient } from "../client";
import type { ServiceDivision } from "@/lib/types";

const allQuery = `*[_type == "serviceDivision"] | order(_createdAt asc) {
  title,
  slug,
  subtitle,
  description,
  accentStatement,
  servicesList[] { _key, icon, label, description },
  heroImage { asset, alt, hotspot },
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

const bySlugQuery = `*[_type == "serviceDivision" && slug.current == $slug][0] {
  title,
  slug,
  subtitle,
  description,
  accentStatement,
  servicesList[] { _key, icon, label, description },
  heroImage { asset, alt, hotspot },
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

export async function getAllServiceDivisions(): Promise<ServiceDivision[]> {
  return sanityClient.fetch<ServiceDivision[]>(allQuery);
}

export async function getServiceDivision(slug: string): Promise<ServiceDivision | null> {
  return sanityClient.fetch<ServiceDivision | null>(bySlugQuery, { slug });
}
