import { sanityClient } from "../client";
import type { ServiceDivision } from "@/lib/types";

const projection = `{
  title,
  slug,
  subtitle,
  description,
  accentStatement,
  servicesHeading,
  servicesSubheading,
  servicesList[] { _key, icon, title, description },
  trustHeading,
  trustSubheading,
  trustPoints,
  legalTeam[] { _key, name, role, email, bio, photo { asset, alt, hotspot } },
  ctaHeading,
  ctaSubheading,
  heroImage { asset, alt, hotspot },
  seo { pageTitle, metaDescription, ogImage { asset, alt } }
}`;

const allQuery = `*[_type == "serviceDivision"] | order(_createdAt asc) ${projection}`;
const bySlugQuery = `*[_type == "serviceDivision" && slug.current == $slug][0] ${projection}`;

export async function getAllServiceDivisions(): Promise<ServiceDivision[]> {
  return sanityClient.fetch<ServiceDivision[]>(allQuery, {}, { next: { revalidate: 60 } });
}

export async function getServiceDivision(slug: string): Promise<ServiceDivision | null> {
  return sanityClient.fetch<ServiceDivision | null>(bySlugQuery, { slug }, { next: { revalidate: 60 } });
}
