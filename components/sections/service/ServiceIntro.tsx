import PortableTextBlock from "@/components/sections/shared/PortableTextBlock";
import type { SanityPortableText } from "@/lib/types";

interface ServiceIntroProps {
  body?: SanityPortableText | null;
}

export default function ServiceIntro({ body }: ServiceIntroProps) {
  if (!body || body.length === 0) return null;
  return (
    <section className="bg-pearl pt-8 pb-8 sm:py-16 px-5 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <PortableTextBlock value={body} />
      </div>
    </section>
  );
}
