import { useState } from "react";
import { MAGIC_BALL } from "../../data/magicBall.js";
import { theme as S } from "../../styles/theme.js";

export function MagicBall() {
  const [pred, setPred] = useState(null);
  const [shaking, setShaking] = useState(false);

  const shake = () => {
    setShaking(true);
    setTimeout(() => {
      setPred(MAGIC_BALL[Math.floor(Math.random() * MAGIC_BALL.length)]);
      setShaking(false);
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <div
        onClick={shake}
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #2a2a3e, #0a0a15)",
          margin: "0 auto",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 40px rgba(251,191,36,0.2), inset 0 0 30px rgba(0,0,0,0.5)",
          animation: shaking ? "shake 0.5s ease-in-out infinite" : "float 3s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "radial-gradient(circle, #1a1a2e, #0d0d1a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(251,191,36,0.3)",
          }}
        >
          <span style={{ color: S.gold, fontSize: 20, fontWeight: 700, fontFamily: "serif" }}>8</span>
        </div>
      </div>
      <p style={{ color: S.dim, marginTop: 14, fontSize: 13, fontFamily: S.font }}>
        {shaking ? "✨ Consultation des astres..." : "👆 Secoue la boule"}
      </p>
      {pred && !shaking && (
        <div
          style={{
            marginTop: 18,
            padding: "18px 22px",
            background: "linear-gradient(135deg, rgba(251,191,36,0.1), rgba(251,191,36,0.05))",
            borderRadius: 14,
            border: "1px solid rgba(251,191,36,0.2)",
            maxWidth: 340,
            margin: "18px auto 0",
            animation: "fadeIn 0.5s ease-out",
          }}
        >
          <p style={{ color: S.gold, fontSize: 15, fontWeight: 600, lineHeight: 1.5, margin: 0, fontFamily: S.font }}>
            {pred}
          </p>
        </div>
      )}
    </div>
  );
}
