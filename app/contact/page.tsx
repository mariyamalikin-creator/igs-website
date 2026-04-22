import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Infinity Global Solutions. We are ready to assist with your legal, property, or business needs in Thailand.",
  openGraph: {
    title: "Contact — Infinity Global Solutions",
    description:
      "Get in touch with Infinity Global Solutions. We are ready to assist with your legal, property, or business needs in Thailand.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Get in Touch"
        title="Contact Us"
        subtitle="We are ready to assist with your property, legal, or business needs in Thailand."
        image="/images/contact-us.jpg"
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
                  <OfficeAddress
                    lines={[
                      "3/12 Moo 4",
                      "Ko Phangan",
                      "Ko Pha-ngan District",
                      "Surat Thani 84280",
                      "Thailand",
                    ]}
                  />

                  <ContactDetail label="Phone" href="tel:+66967258165" text="+66 967 258 165" />

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Email
                    </p>
                    <div className="space-y-1">
                      <EmailLink address="suwaree-hq@igs-thailand.com" />
                      <EmailLink address="prashant-operations@igs-thailand.com" />
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
                    <OfficeAddress
                      lines={[
                        "918/165 Villaggio Pracha Uthit 90, Moo 10",
                        "Nai Khlong Bang Pla Kot",
                        "Phra Samut Chedi District",
                        "Samut Prakan 10290",
                        "Thailand",
                      ]}
                    />
                  </div>

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Phone
                    </p>
                    <div className="space-y-1.5">
                      <PhoneLine label="B2B & Trading" href="tel:+66986389665" number="+66 98 638 9665" />
                      <PhoneLine label="Legal" href="tel:+66967258165" number="+66 96 725 8165" />
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                      Email
                    </p>
                    <div className="space-y-1">
                      <EmailLink address="suwaree-hq@igs-thailand.com" />
                      <EmailLink address="prashant-operations@igs-thailand.com" />
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
              3/12 Moo 4, Ko Phangan, Ko Pha-ngan District, Surat Thani 84280, Thailand
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
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </address>
  );
}

function ContactDetail({
  label,
  href,
  text,
}: {
  label: string;
  href: string;
  text: string;
}) {
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

function PhoneLine({
  label,
  href,
  number,
}: {
  label: string;
  href: string;
  number: string;
}) {
  return (
    <p className="font-body text-sm text-onyx/80">
      <span className="text-muted">{label}: </span>
      <a href={href} className="hover:text-gold transition-colors">
        {number}
      </a>
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
