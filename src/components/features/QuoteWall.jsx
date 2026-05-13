import { useState } from "react";
import { QUOTES } from "../../data/quotes.js";
import { colors, withAlpha } from "../../styles/theme.js";
import { pickRandomIndex } from "../../utils/pick.js";

export function QuoteWall() {
  const [idx, setIdx] = useState(() => pickRandomIndex(QUOTES.length));
  const q = QUOTES[idx];

  return (
    <div
      style={{
        position: "relative",
        background: colors.surfaceCard,
        borderRadius: 28,
        padding: "40px 32px",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 32px ${withAlpha(colors.primarySolid, 0.06)}`,
        overflow: "hidden",
        maxWidth: 560,
        margin: "0 auto",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 12,
          right: 18,
          fontSize: 120,
          lineHeight: 1,
          color: withAlpha(colors.primarySolid, 0.08),
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          pointerEvents: "none",
        }}
      >
        “
      </div>
      <p
        style={{
          position: "relative",
          color: colors.primary,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
          margin: 0,
        }}
      >
        Daily Spark
      </p>
      <blockquote
        style={{
          position: "relative",
          color: colors.onSurface,
          fontSize: 24,
          lineHeight: 1.4,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginTop: 14,
          marginBottom: 0,
        }}
      >
        “{q.text}”
      </blockquote>
      <p style={{ color: colors.onSurfaceVariant, fontSize: 15, marginTop: 16, fontWeight: 500 }}>— {q.author}</p>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setIdx((i) => pickRandomIndex(QUOTES.length, i))}
          aria-label="Citation suivante"
          style={{
            width: 48,
            height: 48,
            borderRadius: 9999,
            background: "transparent",
            border: `1px solid ${withAlpha(colors.primarySolid, 0.4)}`,
            color: colors.primary,
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          ↻
        </button>
      </div>
    </div>
  );
}
