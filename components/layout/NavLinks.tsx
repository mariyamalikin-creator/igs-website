"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/types";

interface NavLinksProps {
  items: NavItem[];
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
}

export default function NavLinks({
  items,
  onNavigate,
  orientation = "horizontal",
}: NavLinksProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (orientation === "vertical") {
    return (
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={[
                "block px-6 py-3 font-body text-base transition-colors",
                isActive(item.href)
                  ? "text-gold font-semibold"
                  : "text-pearl/80 hover:text-gold",
              ].join(" ")}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-7">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={[
              "relative font-body text-sm font-medium transition-colors",
              "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full",
              "after:origin-left after:scale-x-0 after:bg-gold after:transition-transform",
              "hover:text-gold hover:after:scale-x-100",
              isActive(item.href)
                ? "text-gold after:scale-x-100"
                : "text-pearl/90",
            ].join(" ")}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
