import { useState } from "react";
import { JOKES } from "../../data/jokes.js";
import { theme as S } from "../../styles/theme.js";

export function JokeCard() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const j = JOKES[idx];

  const next = () => {
    setShow(false);
    setIdx((i) => (i + 1) % JOKES.length);
  };

  return (
    <div style={{ ...S.card, maxWidth: 420, margin: "0 auto" }}>
      <p style={{ color: S.text, fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>
        😂 {j.setup}
      </p>
      {show ? (
        <div style={{ animation: "fadeIn 0.4s" }}>
          <p style={{ color: S.gold, fontSize: 14, marginTop: 10, fontStyle: "italic", lineHeight: 1.5 }}>
            → {j.punchline}
          </p>
          <button onClick={next} style={S.btn(true)}>
            Suivante →
          </button>
        </div>
      ) : (
        <button onClick={() => setShow(true)} style={{ ...S.btn(true), marginTop: 10 }}>
          Voir la réponse 👀
        </button>
      )}
    </div>
  );
}
