import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/shared/PageHero";
import PageCTA from "@/components/sections/shared/PageCTA";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team behind Infinity Global Solutions — driving integrated legal, property, and business advisory services in Thailand.",
  openGraph: {
    title: "Leadership — Infinity Global Solutions",
    description:
      "Meet the leadership team behind Infinity Global Solutions — driving integrated legal, property, and business advisory services in Thailand.",
  },
};

const LEADERS = [
  {
    name: "Suwaree Chaijiraphan",
    role: "Chief Executive Officer",
    photo: null as string | null,
    bio: "Suwaree Chaijiraphan founded and leads Infinity Global Solutions with a practical, client-centred approach to Thailand's legal, property, and business environment. Her work focuses on helping international clients navigate complex Thai regulations with clarity, confidence, and professional structure — from initial enquiry through to long-term operational support.",
    email: "suwaree-hq@igs-thailand.com",
  },
  {
    name: "Prashant Dubey",
    role: "Chief Operating Officer",
    photo: null as string | null,
    bio: "Prashant Dubey oversees operations across IGS's service divisions, coordinating the firm's property, legal, and trading functions into a coherent, high-standard client experience. He brings cross-sector experience in international business management and B2B operations, ensuring that every client engagement is handled with efficiency, accuracy, and commercial awareness.",
    email: "prashant-operations@igs-thailand.com",
  },
] as const;

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        overline="Leadership"
        title="Leadership"
        subtitle="Experienced leadership guiding legal, property, and business services in Thailand."
        image="/images/igs-about-us2.png"
        imagePosition="sm:object-[right_62%]"
      />

      {/* ── Leadership profiles ─────────────────────────────────── */}
      <section className="bg-pearl pt-8 pb-8 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="space-y-8 sm:space-y-12">
            {LEADERS.map((leader) => (
              <article key={leader.name} className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">

                {/* Portrait — fixed 240px wide, 4:5 ratio */}
                <div className="shrink-0 w-44 sm:w-60">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded bg-silk">
                    {leader.photo ? (
                      <Image
                        src={leader.photo}
                        alt={leader.name}
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

                {/* Text — aligned to top of image */}
                <div className="flex-1 pt-0 sm:pt-1">
                  <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                    {leader.role}
                  </p>
                  <h2 className="font-display font-bold text-navy text-base sm:text-2xl leading-snug">
                    {leader.name}
                  </h2>
                  <div className="mt-3 w-8 h-px bg-gold" />
                  <p className="mt-4 font-body text-base text-onyx/70 leading-relaxed">
                    {leader.bio}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="mt-4 inline-block font-body text-sm text-navy/50 hover:text-gold transition-colors duration-200"
                  >
                    {leader.email}
                  </a>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company values strip ────────────────────────────────── */}
      <section className="bg-silk py-8 sm:py-14 px-5 sm:px-6 lg:px-8 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-center">
            {[
              {
                label: "Professional",
                body: "Consistent standards across every service and every client engagement.",
              },
              {
                label: "International",
                body: "Oriented to the needs and expectations of foreign nationals in Thailand.",
              },
              {
                label: "Integrated",
                body: "Property, legal, and trading expertise available from a single firm.",
              },
            ].map((value) => (
              <div key={value.label}>
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
        heading="Work With Us"
        subheading="Reach out to discuss your legal, property, or business needs in Thailand."
      />
    </>
  );
}
