import Link from "next/link";
import Image from "next/image";
import MegaMenuNav from "./MegaMenuNav";
import MobileMenu from "./MobileMenu";
import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Property Services", href: "/property-services" },
  { label: "Law Firm", href: "/law-firm" },
  { label: "Trading Division", href: "/trading-division" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy">
      {/* Subtle gold bottom border */}
      <div className="border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Infinity Global Solutions — Home"
              className="shrink-0"
            >
              <Image
                src="/logo.svg"
                alt="Infinity Global Solutions"
                width={160}
                height={60}
                className="h-[3.3rem] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop navigation + CTA */}
            <div className="hidden md:flex items-center gap-8">
              <nav aria-label="Main navigation">
                <MegaMenuNav />
              </nav>

              <Link
                href="/contact"
                className="
                  shrink-0 px-5 py-2.5 rounded
                  bg-gold text-navy
                  font-body text-sm font-semibold
                  hover:bg-gold/90 active:bg-gold/80
                  transition-colors
                "
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
