import { useEffect, useRef, useState } from "react";
import { MAGIC_BALL } from "../../data/magicBall.js";
import { colors, withAlpha } from "../../styles/theme.js";
import { pickRandomIndex } from "../../utils/pick.js";

export function MagicBall() {
  const [idx, setIdx] = useState(null);
  const [shaking, setShaking] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const shake = () => {
    if (shaking) return;
    setShaking(true);
    timeoutRef.current = setTimeout(() => {
      setIdx((prev) => pickRandomIndex(MAGIC_BALL.length, prev ?? -1));
      setShaking(false);
    }, 1000);
  };

  const pred = idx !== null ? MAGIC_BALL[idx] : null;

  return (
    <div style={{ textAlign: "center", padding: "32px 0 20px" }}>
      <button
        onClick={shake}
        aria-label="Secouer la boule magique"
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${colors.surfaceHigh}, ${colors.bg})`,
          margin: "0 auto",
          cursor: shaking ? "wait" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${withAlpha(colors.primarySolid, 0.2)}`,
          padding: 0,
          animation: shaking
            ? "shake 0.5s ease-in-out infinite"
            : "pulseGlow 3s ease-in-out infinite, float 4s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: 78,
            height: 78,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.surfaceLow}, #050510)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${withAlpha(colors.primarySolid, 0.4)}`,
            boxShadow: `inset 0 0 12px ${withAlpha(colors.primarySolid, 0.2)}`,
          }}
        >
          <span
            className="display-wonk"
            style={{
              color: colors.primary,
              fontSize: 30,
              fontWeight: 500,
              textShadow: `0 0 14px ${withAlpha(colors.primarySolid, 0.5)}`,
              lineHeight: 1,
            }}
          >
            8
          </span>
        </div>
      </button>
      <p style={{ color: colors.onSurfaceVariant, marginTop: 24, fontSize: 15, letterSpacing: "-0.005em" }}>
        {shaking ? "Consultation des astres…" : "Touche la boule pour une réponse"}
      </p>
      {pred && !shaking && (
        <div
          style={{
            marginTop: 28,
            padding: "24px 28px",
            background: colors.surfaceCard,
            borderRadius: 24,
            border: `1px solid ${withAlpha(colors.primarySolid, 0.2)}`,
            maxWidth: 380,
            margin: "28px auto 0",
            animation: "fadeIn 0.5s ease-out",
            boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 32px ${withAlpha(colors.primarySolid, 0.08)}`,
          }}
        >
          <p
            className="display"
            style={{
              color: colors.primary,
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.4,
              margin: 0,
              letterSpacing: "-0.015em",
              fontVariationSettings: "'SOFT' 60, 'WONK' 0",
            }}
          >
            {pred}
          </p>
        </div>
      )}
    </div>
  );
}
