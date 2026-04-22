import PortableTextBlock from "@/components/sections/shared/PortableTextBlock";
import type { SanityPortableText } from "@/lib/types";

interface ServiceIntroProps {
  /** Fallback plain text intro shown when no Portable Text body is available */
  fallbackText: string;
  body?: SanityPortableText | null;
}

export default function ServiceIntro({ fallbackText, body }: ServiceIntroProps) {
  return (
    <section className="bg-pearl pt-8 pb-8 sm:py-16 px-5 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-3xl mx-auto">
        {body && body.length > 0 ? (
          <PortableTextBlock value={body} />
        ) : (
          <p className="font-body text-onyx/70 text-lg leading-relaxed">{fallbackText}</p>
        )}
      </div>
    </section>
  );
}
