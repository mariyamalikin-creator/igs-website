import { PortableText } from "@portabletext/react";
import type { SanityPortableText } from "@/lib/types";

interface PortableTextBlockProps {
  value: SanityPortableText;
  className?: string;
}

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-onyx/75 text-base leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-bold text-navy text-3xl mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-body font-semibold text-navy text-xl mt-6 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gold pl-5 py-1 my-6 italic text-muted">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside pl-5 space-y-2 mb-4 font-body text-base text-onyx/75">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside pl-5 space-y-2 mb-4 font-body text-base text-onyx/75">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

export default function PortableTextBlock({
  value,
  className = "",
}: PortableTextBlockProps) {
  if (!value || value.length === 0) return null;
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
