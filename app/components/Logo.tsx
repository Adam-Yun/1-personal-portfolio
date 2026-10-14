/**
 * The "AY" monogram, drawn as Black Ops One glyph outlines.
 *
 * Vector paths rather than live text: the same artwork ships as the favicon
 * (app/icon.svg), which renders outside page context and so cannot reference a
 * webfont. Keep the two in sync if the mark ever changes.
 */
export default function Logo() {
  return (
    <svg className="logo" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="12" className="logo-tile" />
      <g transform="translate(7.85 43.32)">
        <path d="M25.43 0L17.81 0L16.85-2.47L9.45-2.47L11.02-6.96L15.11-6.96L9.06-22.64L16.41-22.64L25.43 0M7.44 0L0.15 0L8.24-21.61L11.58-12.62L7.44 0M40.38 0L32.82 0L32.82-7.20L25.14-22.64L32.55-22.64L40.38-6.67L40.38 0M48.15-22.64L40.85-8.26L37.19-15.69L40.90-22.64" className="logo-mark" />
      </g>
    </svg>
  );
}
