import { useState } from "react";
import { QUOTES } from "../../data/quotes.js";
import { theme as S } from "../../styles/theme.js";
import { pickRandomIndex } from "../../utils/pick.js";

export function QuoteWall() {
  const [idx, setIdx] = useState(() => pickRandomIndex(QUOTES.length));
  const q = QUOTES[idx];

  return (
    <div style={{ textAlign: "center", padding: "30px 16px" }}>
      <div style={{ fontSize: 56, lineHeight: 1, color: "rgba(251,191,36,0.15)", fontFamily: "Georgia, serif", marginBottom: -18 }}>
        "
      </div>
      <p style={{ color: S.text, fontSize: 19, fontWeight: 300, lineHeight: 1.7, maxWidth: 460, margin: "0 auto", fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
        {q.text}
      </p>
      <p style={{ color: S.gold, fontSize: 13, marginTop: 14 }}>— {q.author}</p>
      <button
        onClick={() => setIdx((i) => pickRandomIndex(QUOTES.length, i))}
        style={{
          marginTop: 20,
          padding: "9px 22px",
          background: "transparent",
          border: "1px solid rgba(251,191,36,0.3)",
          borderRadius: 18,
          color: S.gold,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        Prochaine ✨
      </button>
    </div>
  );
}
