import { useState } from "react";
import { QUOTES } from "../../data/quotes.js";
import { colors, withAlpha } from "../../styles/theme.js";
import { pickRandomIndex } from "../../utils/pick.js";
import { Icon } from "../ui/Icon.jsx";

export function QuoteWall() {
  const [idx, setIdx] = useState(() => pickRandomIndex(QUOTES.length));
  const q = QUOTES[idx];

  return (
    <div
      style={{
        position: "relative",
        background: colors.surfaceCard,
        borderRadius: 24,
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
          top: 4,
          right: 22,
          fontSize: 140,
          lineHeight: 1,
          color: withAlpha(colors.spark, 0.1),
          fontWeight: 500,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          pointerEvents: "none",
        }}
      >
        «
      </div>
      <p
        className="kicker"
        style={{
          position: "relative",
          color: colors.spark,
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Icon name="sparkle" size={11} strokeWidth={2} />
        Inspiration du jour
      </p>
      <blockquote
        className="display"
        style={{
          position: "relative",
          color: colors.onSurface,
          fontSize: 26,
          lineHeight: 1.3,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          marginTop: 18,
          marginBottom: 0,
          fontStyle: "italic",
          fontVariationSettings: "'SOFT' 80, 'WONK' 0",
        }}
      >
        « {q.text} »
      </blockquote>
      <p
        style={{
          color: colors.onSurfaceVariant,
          fontSize: 13,
          marginTop: 18,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        — {q.author}
      </p>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setIdx((i) => pickRandomIndex(QUOTES.length, i))}
          aria-label="Citation suivante"
          style={{
            width: 44,
            height: 44,
            borderRadius: 9999,
            background: "transparent",
            border: `1px solid ${withAlpha(colors.primarySolid, 0.4)}`,
            color: colors.primary,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          <Icon name="refresh" size={16} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
