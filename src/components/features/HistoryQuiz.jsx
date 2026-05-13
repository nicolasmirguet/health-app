import { useState } from "react";
import { HISTORY_QUIZ } from "../../data/historyQuiz.js";
import { theme as S, colors } from "../../styles/theme.js";

const OPTION_STYLES = {
  idle:    { border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" },
  correct: { border: "1px solid #22c55e",                background: "rgba(34,197,94,0.1)" },
  wrong:   { border: "1px solid #ef4444",                background: "rgba(239,68,68,0.1)" },
  neutral: { border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" },
};

const getOptionStatus = (i, sel, answer) => {
  if (sel === null) return "idle";
  if (i === answer) return "correct";
  if (i === sel) return "wrong";
  return "neutral";
};

export function HistoryQuiz() {
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const q = HISTORY_QUIZ[qi];
  const isCorrect = sel === q.answer;

  const select = (i) => {
    if (sel !== null) return;
    setSel(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setSel(null);
    setQi((q) => (q + 1) % HISTORY_QUIZ.length);
  };

  return (
    <div style={{ maxWidth: 440, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ color: S.dim, fontSize: 12 }}>
          Q{qi + 1}/{HISTORY_QUIZ.length}
        </span>
        <span style={{ color: S.gold, fontSize: 12 }}>Score: {score}</span>
      </div>
      <p style={{ color: S.text, fontSize: 16, fontWeight: 600, marginBottom: 14, lineHeight: 1.5 }}>
        📜 {q.q}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {q.options.map((o, i) => (
          <button
            key={o}
            onClick={() => select(i)}
            disabled={sel !== null}
            style={{
              padding: "11px 14px",
              textAlign: "left",
              borderRadius: 9,
              ...OPTION_STYLES[getOptionStatus(i, sel, q.answer)],
              color: S.text,
              cursor: sel !== null ? "default" : "pointer",
              fontSize: 13,
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
            background: isCorrect ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
            border: `1px solid ${isCorrect ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
            animation: "fadeIn 0.4s",
          }}
        >
          <p style={{ color: isCorrect ? colors.success : colors.danger, fontWeight: 700, margin: 0, fontSize: 13 }}>
            {isCorrect ? "✅ Correct !" : "❌ Raté !"}
          </p>
          <p style={{ ...S.muted, marginTop: 6 }}>{q.fact}</p>
          <button onClick={next} style={{ ...S.btn(true), marginTop: 10, fontSize: 12 }}>
            Suivante →
          </button>
        </div>
      )}
    </div>
  );
}
