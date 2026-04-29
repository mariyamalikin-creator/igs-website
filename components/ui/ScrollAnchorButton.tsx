"use client";

interface ScrollAnchorButtonProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollAnchorButton({
  targetId,
  className = "",
  children,
}: ScrollAnchorButtonProps) {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }
      className={className}
    >
      {children}
    </button>
  );
}
