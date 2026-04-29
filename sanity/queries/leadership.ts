import { sanityClient } from "../client";
import type { LeaderProfile } from "@/lib/types";

const query = `*[_type == "leadership"] | order(_createdAt asc) {
  name,
  role,
  shortBio,
  email,
  photo { asset, alt, hotspot }
}`;

export async function getLeadershipTeam(): Promise<LeaderProfile[]> {
  return sanityClient.fetch<LeaderProfile[]>(query, {}, { next: { revalidate: 60 } });
}
