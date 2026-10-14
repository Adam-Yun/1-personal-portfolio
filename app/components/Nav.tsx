"use client";

import { useEffect, useState } from "react";
import { developer, navLinks } from "@/data/portfolio";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Close the mobile menu when the viewport grows past the breakpoint,
  // otherwise the panel can stay mounted behind the desktop links.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Highlight the link for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      // Band across the upper-middle of the viewport, so the active link
      // changes as a section reaches reading position rather than on first pixel.
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        {/* The pill wraps both rows so the mobile panel expands the floating
            bar instead of spilling out below it. */}
        <div className="nav-bar">
          <div className="nav-inner">
            <a href="#hero" className="nav-brand" aria-label={`${developer.name} — back to top`}>
              <Logo />
            </a>

            <div className="nav-links">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} aria-current={active === href ? "true" : undefined}>
                  {label}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div id="mobile-menu" className="nav-mobile" hidden={!open}>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={active === href ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
