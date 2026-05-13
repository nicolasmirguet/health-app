import { useState } from "react";
import { JOKES } from "../../data/jokes.js";
import { theme as S, colors } from "../../styles/theme.js";

export function JokeCard() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const j = JOKES[idx];

  const next = () => {
    setShow(false);
    setIdx((i) => (i + 1) % JOKES.length);
  };

  return (
    <div style={{ ...S.card, maxWidth: 480, margin: "0 auto" }}>
      <p style={{ color: colors.onSurface, fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: "-0.01em" }}>
        {j.setup}
      </p>
      {show ? (
        <div style={{ animation: "fadeIn 0.4s" }}>
          <p
            style={{
              color: colors.primary,
              fontSize: 16,
              marginTop: 14,
              fontStyle: "italic",
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            → {j.punchline}
          </p>
          <button onClick={next} style={{ ...S.btn(true), marginTop: 18 }}>
            Suivante →
          </button>
        </div>
      ) : (
        <button onClick={() => setShow(true)} style={{ ...S.btn(true), marginTop: 18 }}>
          Voir la réponse
        </button>
      )}
    </div>
  );
}
