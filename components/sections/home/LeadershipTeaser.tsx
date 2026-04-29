import Image from "next/image";
import Button from "@/components/ui/Button";
import { urlFor } from "@/sanity/client";
import type { LeaderProfile, HomepageData } from "@/lib/types";

interface LeadershipTeaserProps {
  leaders: LeaderProfile[];
  homepage?: HomepageData | null;
}

const FALLBACK_LEADERS: LeaderProfile[] = [
  { name: "Suwaree Chaijiraphan", role: "Chief Executive Officer" },
  { name: "Prashant Dubey",       role: "Chief Operating Officer" },
];

export default function LeadershipTeaser({ leaders, homepage }: LeadershipTeaserProps) {
  const profiles = leaders.length > 0 ? leaders : FALLBACK_LEADERS;

  return (
    <section
      id="leadership-teaser"
      className="bg-pearl py-8 sm:py-24 px-5 sm:px-6 lg:px-8 border-t border-border md:sticky md:top-20 md:z-[30]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Centered header block */}
        <div className="text-center mb-4 sm:mb-14">
          <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-4">
            Leadership
          </p>
          <h2 className="font-display font-bold text-navy text-[2rem] sm:text-5xl leading-tight">
            {homepage?.leadershipHeading ?? "Our Leadership"}
          </h2>
          <div className="mt-3 mb-4 sm:mt-5 sm:mb-6 w-12 h-px bg-gold mx-auto" />
          <p className="font-body text-onyx/70 text-lg leading-relaxed max-w-xl mx-auto">
            {homepage?.leadershipSubtitle ??
              "Infinity Global Solutions is built on deep knowledge of Thailand’s legal and property landscape, and a commitment to guiding international clients safely through every process."}
          </p>
          <div className="mt-5 sm:mt-8">
            <Button href="/leadership" variant="outline">
              Meet the Team
            </Button>
          </div>
        </div>

        {/* Portrait grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {profiles.map((person) => {
            const photoUrl = person.photo
              ? urlFor(person.photo).width(600).height(450).url()
              : null;

            return (
              <div
                key={person.name}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-silk"
              >
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={person.photo?.alt ?? person.name}
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-silk">
                    <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-3">
                      <Image
                        src="/icons/user-round.svg"
                        alt=""
                        aria-hidden="true"
                        width={32}
                        height={32}
                        className="opacity-30"
                      />
                    </div>
                    <p className="font-body text-sm text-muted">Profile image pending</p>
                  </div>
                )}

                {/* Name + title overlay — bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent pt-12 pb-5 px-5">
                  <p className="font-display font-bold text-pearl text-lg leading-snug">
                    {person.name}
                  </p>
                  <p className="font-body text-gold text-sm font-medium uppercase tracking-wider mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
