// ============================================================
// UI component prop types
// ============================================================

export type ButtonVariant = "solid" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
}
