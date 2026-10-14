"use client";

import { useEffect } from "react";

/**
 * Viewport band, as fractions of the viewport height.
 *
 * ENTER is the line an element must cross to reveal; EXIT sits slightly lower
 * so an element parked exactly on the boundary cannot flicker between states
 * on sub-pixel scroll jitter.
 */
const ENTER = 0.92;
const EXIT = 0.98;

/**
 * Shows every [data-reveal] element while it is in view and hides it again
 * once it leaves, in both directions, for as long as the page is open.
 *
 * Uses a rAF-throttled position sweep rather than IntersectionObserver: an
 * observer never reports an element that is jumped over (anchor link, restored
 * scroll position, fast flick), because it passes from below the viewport to
 * above it without an intersecting frame.
 *
 * The hidden state lives in CSS gated behind the `js` class on <html>, so the
 * page renders fully visible without JavaScript and there is no flash of
 * hidden content on hydration.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    let frame = 0;

    const sweep = () => {
      frame = 0;
      const height = window.innerHeight;
      const enterLine = height * ENTER;
      const exitLine = height * EXIT;

      for (const el of targets) {
        const { top, bottom } = el.getBoundingClientRect();
        const shown = el.classList.contains("is-visible");

        if (!shown && top < enterLine && bottom > 0) {
          el.classList.add("is-visible");
        } else if (shown && (top > exitLine || bottom <= 0)) {
          el.classList.remove("is-visible");
        }
      }
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    sweep();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
