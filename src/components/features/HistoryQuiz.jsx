import { useState } from "react";
import { HISTORY_QUIZ } from "../../data/historyQuiz.js";
import { theme as S, colors, withAlpha } from "../../styles/theme.js";

const OPTION_STYLES = {
  idle:    { border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" },
  correct: { border: `1px solid ${withAlpha(colors.success, 0.6)}`, background: withAlpha(colors.success, 0.12) },
  wrong:   { border: `1px solid ${withAlpha(colors.danger, 0.6)}`, background: withAlpha(colors.danger, 0.12) },
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
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
        <span
          style={{
            color: colors.onSurfaceVariant,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Question {qi + 1} / {HISTORY_QUIZ.length}
        </span>
        <span style={{ color: colors.primary, fontSize: 13, fontWeight: 600 }}>Score · {score}</span>
      </div>
      <p
        style={{
          color: colors.onSurface,
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 20,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
        }}
      >
        {q.q}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((o, i) => (
          <button
            key={o}
            onClick={() => select(i)}
            disabled={sel !== null}
            style={{
              padding: "14px 18px",
              textAlign: "left",
              borderRadius: 18,
              ...OPTION_STYLES[getOptionStatus(i, sel, q.answer)],
              color: colors.onSurface,
              cursor: sel !== null ? "default" : "pointer",
              fontSize: 15,
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            {o}
          </button>
        ))}
      </div>
      {sel !== null && (
        <div
          style={{
            marginTop: 18,
            padding: 18,
            borderRadius: 22,
            background: isCorrect ? withAlpha(colors.success, 0.08) : withAlpha(colors.danger, 0.08),
            border: `1px solid ${isCorrect ? withAlpha(colors.success, 0.3) : withAlpha(colors.danger, 0.3)}`,
            animation: "fadeIn 0.4s",
          }}
        >
          <p style={{ color: isCorrect ? colors.success : colors.danger, fontWeight: 700, margin: 0, fontSize: 15 }}>
            {isCorrect ? "Correct" : "Raté"}
          </p>
          <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>{q.fact}</p>
          <button onClick={next} style={{ ...S.btn(true), marginTop: 14 }}>
            Suivante →
          </button>
        </div>
      )}
    </div>
  );
}
