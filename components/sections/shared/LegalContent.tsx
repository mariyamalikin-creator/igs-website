import Link from "next/link";
import PageHero from "./PageHero";
import PortableTextBlock from "./PortableTextBlock";
import type { LegalPage } from "@/lib/types";

interface LegalContentProps {
  data: LegalPage | null;
  defaultTitle: string;
  defaultOverline: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function LegalContent({
  data,
  defaultTitle,
  defaultOverline,
}: LegalContentProps) {
  const title = data?.title ?? defaultTitle;
  const hasContent = data?.body && data.body.length > 0;

  return (
    <>
      <PageHero overline={defaultOverline} title={title} />

      <section className="bg-pearl py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Last updated */}
          {data?.lastUpdated && (
            <p className="font-body text-xs text-muted mb-8 pb-8 border-b border-border">
              Last updated: {formatDate(data.lastUpdated)}
            </p>
          )}

          {/* Body content */}
          {hasContent ? (
            <PortableTextBlock value={data!.body} />
          ) : (
            /* Fallback when Sanity document has no content yet */
            <div className="py-8">
              <p className="font-body text-base text-onyx/70 leading-relaxed mb-4">
                This document is currently being prepared.
              </p>
              <p className="font-body text-base text-onyx/70 leading-relaxed">
                For any questions regarding our{" "}
                {defaultOverline.toLowerCase()}, please{" "}
                <Link
                  href="/contact"
                  className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors"
                >
                  contact us directly
                </Link>
                .
              </p>
            </div>
          )}

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-border">
            <Link
              href="/"
              className="font-body text-sm text-muted hover:text-navy transition-colors"
            >
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
