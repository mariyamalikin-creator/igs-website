import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { getContactPage } from "@/sanity/queries/contactPage";
import { urlFor } from "@/sanity/client";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Infinity Global Solutions. We are ready to assist with your legal, property, or business needs in Thailand.",
};

const FALLBACK = {
  heroSubtitle: "We are ready to assist with your property, legal, or business needs in Thailand.",
  branchAddress: "3/12 Moo 4\nKo Phangan\nKo Pha-ngan District\nSurat Thani 84280\nThailand",
  branchPhone: "+66 967 258 165",
  branchEmail: "suwaree-hq@igs-thailand.com",
  branchEmail2: "prashant-operations@igs-thailand.com",
  hqAddress: "918/165 Villaggio Pracha Uthit 90, Moo 10\nNai Khlong Bang Pla Kot\nPhra Samut Chedi District\nSamut Prakan 10290\nThailand",
  hqPhoneLabel: "B2B & Trading",
  hqPhone: "+66 98 638 9665",
  hqPhone2Label: "Legal",
  hqPhone2: "+66 96 725 8165",
  hqEmail: "suwaree-hq@igs-thailand.com",
  hqEmail2: "prashant-operations@igs-thailand.com",
  findUsAddress: "3/12 Moo 4, Ko Phangan, Ko Pha-ngan District, Surat Thani 84280, Thailand",
};

export default async function ContactPage() {
  const data = await getContactPage().catch(() => null);

  const heroSubtitle  = data?.heroSubtitle  ?? FALLBACK.heroSubtitle;
  const heroImageSrc  = data?.heroImage
    ? urlFor(data.heroImage).width(1600).height(900).url()
    : "/images/contact-us.jpg";

  const branchAddress  = data?.branchAddress  ?? FALLBACK.branchAddress;
  const branchPhone    = data?.branchPhone    ?? FALLBACK.branchPhone;
  const branchEmail    = data?.branchEmail    ?? FALLBACK.branchEmail;
  const branchEmail2   = data?.branchEmail2   ?? FALLBACK.branchEmail2;

  const hqAddress      = data?.hqAddress      ?? FALLBACK.hqAddress;
  const hqPhoneLabel   = data?.hqPhoneLabel   ?? FALLBACK.hqPhoneLabel;
  const hqPhone        = data?.hqPhone        ?? FALLBACK.hqPhone;
  const hqPhone2Label  = data?.hqPhone2Label  ?? FALLBACK.hqPhone2Label;
  const hqPhone2       = data?.hqPhone2       ?? FALLBACK.hqPhone2;
  const hqEmail        = data?.hqEmail        ?? FALLBACK.hqEmail;
  const hqEmail2       = data?.hqEmail2       ?? FALLBACK.hqEmail2;
  const findUsAddress  = data?.findUsAddress  ?? FALLBACK.findUsAddress;

  return (
    <>
      <PageHero
        overline="Get in Touch"
        title="Contact Us"
        subtitle={heroSubtitle}
        image={heroImageSrc}
        imagePosition="object-[60%_45%]"
        gradient="linear-gradient(to right, rgba(28,48,74,0.85) 0%, rgba(28,48,74,0.7) 40%, rgba(28,48,74,0.35) 70%, rgba(28,48,74,0.15) 100%)"
      />

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <section className="bg-pearl pt-8 pb-8 sm:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left column — contact information */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-10">

              {/* ── Koh Phangan Branch ── */}
              <div>
                <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-5">
                  IGS Law Firm — Koh Phangan Branch
                </p>

                <div className="space-y-5">
                  <OfficeAddress lines={branchAddress.split("\n")} />

                  <ContactDetail
                    label="Phone"
                    href={`tel:${branchPhone.replace(/\s+/g, "")}`}
                    text={branchPhone}
                  />

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Email
                    </p>
                    <div className="space-y-1">
                      <EmailLink address={branchEmail} />
                      {branchEmail2 && <EmailLink address={branchEmail2} />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gold divider */}
              <div className="w-12 h-px bg-gold/40" />

              {/* ── Corporate Head Office ── */}
              <div>
                <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-5">
                  Corporate Head Office
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-1.5">
                      Infinity Global Solutions Co., Ltd.
                    </p>
                    <OfficeAddress lines={hqAddress.split("\n")} />
                  </div>

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Phone
                    </p>
                    <div className="space-y-1.5">
                      <PhoneLine
                        label={hqPhoneLabel}
                        href={`tel:${hqPhone.replace(/\s+/g, "")}`}
                        number={hqPhone}
                      />
                      {hqPhone2 && (
                        <PhoneLine
                          label={hqPhone2Label}
                          href={`tel:${hqPhone2.replace(/\s+/g, "")}`}
                          number={hqPhone2}
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Email
                    </p>
                    <div className="space-y-1">
                      <EmailLink address={hqEmail} />
                      {hqEmail2 && <EmailLink address={hqEmail2} />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours note */}
              <p className="font-body text-sm text-muted leading-relaxed border-t border-border pt-6">
                Available Monday – Friday, 9:00 – 18:00 ICT (UTC+7)
              </p>
            </div>

            {/* Right column — contact form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-6">
                Send a Message
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────── */}
      <section className="bg-silk border-t border-border px-5 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-2">
              Find Us
            </p>
            <h2 className="font-display font-bold text-navy text-[2rem] sm:text-3xl leading-snug">
              IGS Law Firm — Koh Phangan
            </h2>
            <p className="font-body text-sm text-muted mt-2">
              {findUsAddress}
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-lg border border-border shadow-sm" style={{ height: "460px" }}>
            <iframe
              title="IGS Law Firm — Koh Phangan location"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=3%2F12+Moo+4%2C+Ko+Phangan%2C+Ko+Pha-ngan+District%2C+Surat+Thani+84280%2C+Thailand&output=embed&z=14"
            />
          </div>

          <p className="mt-4 font-body text-sm text-muted">
            <a
              href="https://maps.google.com/maps?q=Ko+Pha-ngan+District,+Surat+Thani,+Thailand"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ──────────────────────────────────────────────── */

function OfficeAddress({ lines }: { lines: string[] }) {
  return (
    <address className="not-italic font-body text-sm text-onyx/75 leading-relaxed">
      {lines.map((line) => (
        <span key={line} className="block">{line}</span>
      ))}
    </address>
  );
}

function ContactDetail({ label, href, text }: { label: string; href: string; text: string }) {
  return (
    <div>
      <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-1.5">
        {label}
      </p>
      <a href={href} className="font-body text-sm text-onyx/80 hover:text-gold transition-colors">
        {text}
      </a>
    </div>
  );
}

function PhoneLine({ label, href, number }: { label?: string; href: string; number: string }) {
  return (
    <p className="font-body text-sm text-onyx/80">
      {label && <span className="text-muted">{label}: </span>}
      <a href={href} className="hover:text-gold transition-colors">{number}</a>
    </p>
  );
}

function EmailLink({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="block font-body text-sm text-onyx/80 hover:text-gold transition-colors break-all"
    >
      {address}
    </a>
  );
}
