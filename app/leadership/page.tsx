import type { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;
import PageHero from "@/components/sections/shared/PageHero";
import PageCTA from "@/components/sections/shared/PageCTA";
import { getLeadershipTeam } from "@/sanity/queries/leadership";
import { getLeadershipPage } from "@/sanity/queries/leadershipPage";
import { urlFor } from "@/sanity/client";
import type { LeaderProfile } from "@/lib/types";

const FALLBACK_LEADERS: LeaderProfile[] = [
  {
    name: "Suwaree Chaijiraphan",
    role: "Chief Executive Officer",
    shortBio:
      "Suwaree Chaijiraphan founded and leads Infinity Global Solutions with a practical, client-centred approach to Thailand's legal, property, and business environment. Her work focuses on helping international clients navigate complex Thai regulations with clarity, confidence, and professional structure — from initial enquiry through to long-term operational support.",
    email: "suwaree-hq@igs-thailand.com",
  },
  {
    name: "Prashant Dubey",
    role: "Chief Operating Officer",
    shortBio:
      "Prashant Dubey oversees operations across IGS's service divisions, coordinating the firm's property, legal, and trading functions into a coherent, high-standard client experience. He brings cross-sector experience in international business management and B2B operations, ensuring that every client engagement is handled with efficiency, accuracy, and commercial awareness.",
    email: "prashant-operations@igs-thailand.com",
  },
];

const FALLBACK_VALUES = [
  { key: "1", label: "Professional",   body: "Consistent standards across every service and every client engagement." },
  { key: "2", label: "International",  body: "Oriented to the needs and expectations of foreign nationals in Thailand." },
  { key: "3", label: "Integrated",     body: "Property, legal, and trading expertise available from a single firm." },
];

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getLeadershipPage().catch(() => null);
  return {
    title: pageData?.seo?.pageTitle ?? "Leadership",
    description:
      pageData?.seo?.metaDescription ??
      "Meet the leadership team behind Infinity Global Solutions — driving integrated legal, property, and business advisory services in Thailand.",
  };
}

export default async function LeadershipPage() {
  const [leaders, pageData] = await Promise.all([
    getLeadershipTeam().catch(() => [] as LeaderProfile[]),
    getLeadershipPage().catch(() => null),
  ]);

  const profiles = leaders.length > 0 ? leaders : FALLBACK_LEADERS;

  const values = [
    { key: "1", label: pageData?.value1Label ?? "Professional",  body: pageData?.value1Body ?? "Consistent standards across every service and every client engagement." },
    { key: "2", label: pageData?.value2Label ?? "International", body: pageData?.value2Body ?? "Oriented to the needs and expectations of foreign nationals in Thailand." },
    { key: "3", label: pageData?.value3Label ?? "Integrated",    body: pageData?.value3Body ?? "Property, legal, and trading expertise available from a single firm." },
  ];

  const heroImageSrc = pageData?.heroImage
    ? urlFor(pageData.heroImage).width(1600).height(900).url()
    : "/images/igs-about-us2.png";

  return (
    <>
      <PageHero
        overline="Leadership"
        title="Leadership"
        subtitle={pageData?.heroSubtitle ?? "Experienced leadership guiding legal, property, and business services in Thailand."}
        image={heroImageSrc}
        imagePosition="sm:object-[right_62%]"
      />

      {/* ── Leadership profiles ─────────────────────────────────── */}
      <section className="bg-pearl pt-8 pb-8 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {profiles.map((leader) => {
              const photoUrl = leader.photo
                ? urlFor(leader.photo).width(480).height(600).url()
                : null;

              return (
                <article
                  key={leader.name}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
                >
                  {/* Portrait — fixed 240px wide, 4:5 ratio */}
                  <div className="shrink-0 w-44 sm:w-60">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded bg-silk">
                      {photoUrl ? (
                        <Image
                          src={photoUrl}
                          alt={leader.photo?.alt ?? leader.name}
                          fill
                          priority
                          className="object-cover object-[center_20%]"
                          sizes="(max-width: 640px) 100vw, 240px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-navy/8 flex items-center justify-center">
                            <Image
                              src="/icons/user-round.svg"
                              alt=""
                              aria-hidden="true"
                              width={28}
                              height={28}
                              className="opacity-20"
                            />
                          </div>
                          <p className="font-body text-sm text-muted">Profile image pending</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-0 sm:pt-1">
                    <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                      {leader.role}
                    </p>
                    <h2 className="font-display font-bold text-navy text-base sm:text-2xl leading-snug">
                      {leader.name}
                    </h2>
                    <div className="mt-3 w-8 h-px bg-gold" />
                    {leader.shortBio && (
                      <p className="mt-4 font-body text-base text-onyx/70 leading-relaxed">
                        {leader.shortBio}
                      </p>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="mt-4 inline-block font-body text-sm text-navy/50 hover:text-gold transition-colors duration-200"
                      >
                        {leader.email}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company values strip ────────────────────────────────── */}
      <section className="bg-silk py-8 sm:py-14 px-5 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-center">
            {values.map((value) => (
              <div key={value.key}>
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <h3 className="font-body font-semibold text-navy text-base mb-2">
                  {value.label}
                </h3>
                <p className="font-body text-base text-muted leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading={pageData?.ctaHeading ?? "Work With Us"}
        subheading={pageData?.ctaSubheading ?? "Reach out to discuss your legal, property, or business needs in Thailand."}
      />
    </>
  );
}
