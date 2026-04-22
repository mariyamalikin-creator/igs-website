export type MegaMenuService = {
  icon: string;
  label: string;
};

export type MegaMenuDivision = {
  label: string;
  href: string;
  intro: string;
  services: MegaMenuService[];
};

export const MEGA_MENU_DIVISIONS: MegaMenuDivision[] = [
  {
    label: "Property Services",
    href: "/property-services",
    intro: "Full support for property buyers and investors in Thailand.",
    services: [
      { icon: "land-residential-property-sourcing", label: "Land & Residential Property Sourcing" },
      { icon: "legal-due-diligence", label: "Legal Due Diligence & Title Verification" },
      { icon: "ownership-structuring", label: "Ownership Structuring & Documentation" },
      { icon: "property-acquisition", label: "Property Acquisition Support" },
      { icon: "ownership-transfer", label: "Ownership Transfer & Registration" },
      { icon: "transaction-coordination", label: "Transaction Coordination" },
    ],
  },
  {
    label: "Law Firm",
    href: "/law-firm",
    intro: "Legal services for individuals and businesses in Thailand.",
    services: [
      { icon: "company-registration", label: "Company Registration" },
      { icon: "contracts-legal-documentation", label: "Contracts & Legal Documentation" },
      { icon: "visa-work-permits", label: "Visa & Work Permits" },
      { icon: "compliance-advisory", label: "Compliance Advisory" },
      { icon: "business-legal-support", label: "Business Legal Support" },
      { icon: "ownership-structuring", label: "Ownership Structuring" },
    ],
  },
  {
    label: "Trading Division",
    href: "/trading-division",
    intro: "International trade support and business representation across borders.",
    services: [
      { icon: "import-export-coordination", label: "Import & Export Coordination" },
      { icon: "supplier-sourcing", label: "Supplier Sourcing" },
      { icon: "commercial-negotiation", label: "Commercial Negotiation" },
      { icon: "business-representation", label: "Business Representation" },
      { icon: "legal-due-diligence", label: "Legal Due Diligence" },
    ],
  },
];
