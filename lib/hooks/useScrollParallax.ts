import { RefObject, useEffect } from "react";

/**
 * Ties a direct-DOM translateY to the element's scroll progress through
 * the viewport.  No React state — writes style directly for zero re-render
 * overhead.
 *
 * progress 0  → element bottom is entering the viewport bottom (transform = 0)
 * progress 1  → element top is leaving the viewport top   (transform = -maxPx)
 *
 * Disabled automatically when:
 *   • prefers-reduced-motion is set
 *   • viewport is narrower than 768 px (mobile)
 */
export function useScrollParallax(
  ref: RefObject<HTMLElement | null>,
  maxPx: number
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || maxPx === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile =
      window.innerWidth < 768 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (reducedMotion || isMobile) return;

    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const progress = (wh - rect.top) / (wh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      el.style.transform = `translateY(${-clamped * maxPx}px)`;
    }

    el.style.willChange = "transform";
    window.addEventListener("scroll", update, { passive: true });
    update(); // set initial position

    return () => {
      window.removeEventListener("scroll", update);
      if (el) {
        el.style.transform = "";
        el.style.willChange = "";
      }
    };
  }, [ref, maxPx]);
}
