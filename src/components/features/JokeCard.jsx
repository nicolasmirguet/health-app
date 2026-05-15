import { useState } from "react";
import { JOKES } from "../../data/jokes.js";
import { theme as S, colors } from "../../styles/theme.js";
import { Icon } from "../ui/Icon.jsx";

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
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              marginTop: 14,
            }}
          >
            <span style={{ color: colors.primary, marginTop: 6, flexShrink: 0 }} aria-hidden="true">
              <Icon name="arrowRight" size={14} strokeWidth={2.25} />
            </span>
            <p
              className="display"
              style={{
                color: colors.primary,
                fontSize: 17,
                fontStyle: "italic",
                lineHeight: 1.5,
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {j.punchline}
            </p>
          </div>
          <button
            onClick={next}
            style={{
              ...S.btn(true),
              marginTop: 18,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Suivante
            <Icon name="arrowRight" size={14} strokeWidth={2} />
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
