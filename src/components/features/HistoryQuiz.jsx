import { useState } from "react";
import { HISTORY_QUIZ } from "../../data/historyQuiz.js";
import { theme as S } from "../../styles/theme.js";

export function HistoryQuiz() {
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const q = HISTORY_QUIZ[qi];

  const select = (i) => {
    if (sel !== null) return;
    setSel(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setSel(null);
    setQi((qi + 1) % HISTORY_QUIZ.length);
  };

  return (
    <div style={{ maxWidth: 440, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ color: S.dim, fontSize: 12, fontFamily: S.font }}>
          Q{qi + 1}/{HISTORY_QUIZ.length}
        </span>
        <span style={{ color: S.gold, fontSize: 12, fontFamily: S.font }}>Score: {score}</span>
      </div>
      <p style={{ color: S.text, fontSize: 16, fontWeight: 600, marginBottom: 14, lineHeight: 1.5, fontFamily: S.font }}>
        📜 {q.q}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {q.options.map((o, i) => (
          <button
            key={i}
            onClick={() => select(i)}
            style={{
              padding: "11px 14px",
              textAlign: "left",
              borderRadius: 9,
              border:
                sel !== null
                  ? i === q.answer
                    ? "1px solid #22c55e"
                    : i === sel
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(255,255,255,0.08)",
              background:
                sel !== null
                  ? i === q.answer
                    ? "rgba(34,197,94,0.1)"
                    : i === sel
                    ? "rgba(239,68,68,0.1)"
                    : "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.03)",
              color: S.text,
              cursor: sel !== null ? "default" : "pointer",
              fontSize: 13,
              fontFamily: S.font,
            }}
          >
            {o}
          </button>
        ))}
      </div>
      {sel !== null && (
        <div
          style={{
            marginTop: 14,
            padding: 14,
            borderRadius: 10,
            background: sel === q.answer ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
            border: `1px solid ${sel === q.answer ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
            animation: "fadeIn 0.4s",
          }}
        >
          <p style={{ color: sel === q.answer ? "#22c55e" : "#ef4444", fontWeight: 700, margin: 0, fontSize: 13, fontFamily: S.font }}>
            {sel === q.answer ? "✅ Correct !" : "❌ Raté !"}
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 6, lineHeight: 1.5, fontFamily: S.font }}>
            {q.fact}
          </p>
          <button onClick={next} style={{ ...S.btn(true), marginTop: 10, fontSize: 12 }}>
            Suivante →
          </button>
        </div>
      )}
    </div>
  );
}
