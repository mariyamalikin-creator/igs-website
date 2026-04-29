import Link from "next/link";
import Image from "next/image";
import type { FooterData } from "@/lib/types";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "Property Services", href: "/property-services" },
  { label: "Law Firm", href: "/law-firm" },
  { label: "Trading Division", href: "/trading-division" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];


interface FooterProps {
  data: FooterData | null;
}

const FOOTER_DEFAULTS = {
  email: "suwaree-hq@igs-thailand.com",
  phone: "+66 967 258 165",
  address: "3/12 Moo 4\nKo Phangan\nKo Pha-ngan District\nSurat Thani 84280\nThailand",
};

export default function Footer({ data }: FooterProps) {
  const email = data?.email ?? FOOTER_DEFAULTS.email;
  const email2 = data?.email2 ?? null;
  const phone = data?.phone ?? FOOTER_DEFAULTS.phone;
  const address = data?.address ?? FOOTER_DEFAULTS.address;
  const addressLines = address.split("\n");

  return (
    <footer className="bg-navy text-pearl/80">
      {/* Top gold accent line */}
      <div className="h-px bg-gold/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-6 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Column 1 — Navigation */}
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-pearl/65 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Get in Touch
            </p>
            <address className="not-italic space-y-3 text-sm text-pearl/65">
              <a
                href={`mailto:${email}`}
                className="block hover:text-gold transition-colors break-all"
              >
                {email}
              </a>
              {email2 && (
                <a
                  href={`mailto:${email2}`}
                  className="block hover:text-gold transition-colors break-all"
                >
                  {email2}
                </a>
              )}
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block hover:text-gold transition-colors"
              >
                {phone}
              </a>
              <p className="leading-relaxed">
                {addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
            </address>
          </div>

          {/* Column 3 — Company identity */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pb-2 sm:pb-0">
            <Image
              src="/logo.svg"
              alt="Infinity Global Solutions"
              width={216}
              height={86}
              className="h-[5.4rem] sm:h-20 w-auto object-contain"
            />
            {/* Gold divider */}
            <div className="mt-3 w-8 h-px bg-gold/50" />
            <p className="mt-2 text-sm text-pearl/55 leading-none italic">
              Stay Legal. Stay Safe.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-pearl/35">
            &copy; {new Date().getFullYear()} Infinity Global Solutions Co.,&nbsp;Ltd.
            All rights reserved.
          </p>
          <p className="text-sm text-pearl/35">
            Koh Phangan, Surat Thani, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
}
