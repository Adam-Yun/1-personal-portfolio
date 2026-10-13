"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

type Props = {
  project: Project;
  onClose: () => void;
};

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function ProjectGallery({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const count = project.images.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i === 0 ? count - 1 : i - 1)), [count]);

  // Lock background scroll while the dialog is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Move focus into the dialog, and return it to the opener on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => opener?.focus();
  }, []);

  // Escape to close, arrows to navigate, Tab trapped inside the dialog.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        next();
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [next, prev, onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id={titleId} className="modal-title">
            {project.title}
          </h3>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close preview"
          >
            ✕
          </button>
        </div>

        <div className="modal-image-container">
          <Image
            key={project.images[index]}
            src={project.images[index]}
            alt={`${project.title} preview ${index + 1} of ${count}`}
            fill
            sizes="(min-width: 1000px) 1000px, 100vw"
            className="modal-image"
          />
        </div>

        <div className="modal-controls">
          <button type="button" className="btn btn-sm" onClick={prev} disabled={count < 2}>
            ← Prev
          </button>
          <span className="modal-counter" aria-live="polite">
            {index + 1} / {count}
          </span>
          <button type="button" className="btn btn-sm" onClick={next} disabled={count < 2}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
