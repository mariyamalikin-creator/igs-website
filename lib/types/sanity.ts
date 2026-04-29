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

interface HomepageCardData {
  title?: string;
  description?: string;
  image?: SanityImage;
}

export interface HomepageData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: SanityImage;
  divisionsHeading?: string;
  divisionsSubheading?: string;
  divisionProperty?: HomepageCardData;
  divisionLawFirm?: HomepageCardData;
  divisionTrading?: HomepageCardData;
  whySubtitle?: string;
  whyItem1Title?: string;
  whyItem1?: string;
  whyItem2Title?: string;
  whyItem2?: string;
  whyItem3Title?: string;
  whyItem3?: string;
  whyItem4Title?: string;
  whyItem4?: string;
  leadershipHeading?: string;
  leadershipSubtitle?: string;
  ctaSubtitle?: string;
  seo?: SEOFields;
}

// ============================================================
// Service divisions
// ============================================================

export interface ServiceItem {
  _key: string;
  icon?: string;
  title: string;
  description?: string;
}

export interface LegalTeamMember {
  _key: string;
  name: string;
  role: string;
  email?: string;
  bio?: string;
  photo?: SanityImage;
}

export interface ServiceDivision {
  title: string;
  slug: SanitySlug;
  subtitle?: string;
  description?: SanityPortableText;
  accentStatement?: string;
  servicesHeading?: string;
  servicesSubheading?: string;
  servicesList?: ServiceItem[];
  trustHeading?: string;
  trustSubheading?: string;
  trustPoints?: string[];
  legalTeam?: LegalTeamMember[];
  ctaHeading?: string;
  ctaSubheading?: string;
  heroImage?: SanityImage;
  seo?: SEOFields;
}

// ============================================================
// Leadership page
// ============================================================

export interface LeadershipPageData {
  heroSubtitle?: string;
  heroImage?: SanityImage;
  value1Label?: string;
  value1Body?: string;
  value2Label?: string;
  value2Body?: string;
  value3Label?: string;
  value3Body?: string;
  ctaHeading?: string;
  ctaSubheading?: string;
  seo?: SEOFields;
}

// ============================================================
// Leadership
// ============================================================

export interface LeaderProfile {
  name: string;
  role: string;
  shortBio?: string;
  email?: string;
  photo?: SanityImage;
}

/** @deprecated use LeaderProfile[] from getLeadershipTeam() */
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

export interface ContactPageData {
  heroSubtitle?: string;
  heroImage?: SanityImage;
  branchAddress?: string;
  branchPhone?: string;
  branchEmail?: string;
  branchEmail2?: string;
  hqAddress?: string;
  hqPhoneLabel?: string;
  hqPhone?: string;
  hqPhone2Label?: string;
  hqPhone2?: string;
  hqEmail?: string;
  hqEmail2?: string;
  findUsAddress?: string;
}

// ============================================================
// Footer
// ============================================================

export interface FooterData {
  email: string;
  email2?: string;
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
