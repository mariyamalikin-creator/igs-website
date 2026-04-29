import { homepage } from "./homepage";
import { propertyServicesPage } from "./propertyServicesPage";
import { tradingDivisionPage } from "./tradingDivisionPage";
import { leadershipPage } from "./leadershipPage";
import { lawFirmPage } from "./lawFirmPage";
import { serviceDivision } from "./serviceDivision";
import { leadership } from "./leadership";
import { contactInfo } from "./contactInfo";
import { contactPage } from "./contactPage";
import { footer } from "./footer";
import { legalPage } from "./legalPage";
import { seoFields } from "./objects/seoFields";
import { teamMember } from "./objects/teamMember";

export const schemaTypes = [
  // Object types (must come first)
  seoFields,
  teamMember,
  // Document types
  homepage,
  propertyServicesPage,
  tradingDivisionPage,
  leadershipPage,
  lawFirmPage,
  serviceDivision,
  leadership,
  contactInfo,
  contactPage,
  footer,
  legalPage,
];
