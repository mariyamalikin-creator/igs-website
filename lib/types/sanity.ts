import type { PortableTextBlock } from "@portabletext/types";

// ============================================================
// Sanity primitive types
// ============================================================

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export type SanityPortableText = PortableTextBlock[];

// ============================================================
// SEO fields (reusable across all documents)
// ============================================================

export interface SEOFields {
  pageTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

// ============================================================
// Homepage
// ============================================================

export interface HomepageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: SanityImage;
  ctaText: string;
  seo?: SEOFields;
}

// ============================================================
// Service divisions
// ============================================================

export interface ServiceItem {
  _key: string;
  icon: string;
  label: string;
  description: string;
}

export interface ServiceDivision {
  title: string;
  slug: SanitySlug;
  subtitle: string;
  description: SanityPortableText;
  servicesList: ServiceItem[];
  heroImage?: SanityImage;
  accentStatement?: string;
  seo?: SEOFields;
}

// ============================================================
// Leadership
// ============================================================

export interface Leadership {
  name: string;
  role: string;
  biography: SanityPortableText;
  photo?: SanityImage;
  experience: string[];
  seo?: SEOFields;
}

// ============================================================
// Contact
// ============================================================

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapLink?: string;
}

// ============================================================
// Footer
// ============================================================

export interface FooterData {
  email: string;
  phone: string;
  address: string;
}

// ============================================================
// Legal pages (Privacy Policy + Terms)
// ============================================================

export interface LegalPage {
  title: string;
  slug: SanitySlug;
  body: SanityPortableText;
  lastUpdated?: string;
  seo?: SEOFields;
}
