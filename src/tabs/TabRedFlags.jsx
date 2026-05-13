import { RED_FLAGS } from "../data/redFlags.js";
import { theme as S } from "../styles/theme.js";

export function TabRedFlags() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          padding: 14,
          background: "rgba(239,68,68,0.08)",
          borderRadius: 12,
          border: "1px solid rgba(239,68,68,0.2)",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        <p style={{ color: "#ef4444", fontSize: 14, fontWeight: 700, margin: 0, fontFamily: S.font }}>
          🚨 IMPRIME CETTE PAGE ET COLLE-LA SUR LE FRIGO
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 4, fontFamily: S.font }}>
          Chaque minute compte en urgence oncologique
        </p>
      </div>
      {RED_FLAGS.map((rf, i) => (
        <div
          key={i}
          style={{
            ...S.card,
            borderLeft: rf.flag.startsWith("🔴")
              ? "3px solid #ef4444"
              : rf.flag.startsWith("🟠")
              ? "3px solid #f97316"
              : "3px solid #eab308",
          }}
        >
          <p style={{ color: S.text, fontSize: 14, fontWeight: 700, margin: 0, fontFamily: S.font }}>{rf.flag}</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 6, lineHeight: 1.5, fontFamily: S.font }}>
            {rf.desc}
          </p>
          <div
            style={{
              marginTop: 8,
              padding: "6px 10px",
              background: "rgba(239,68,68,0.08)",
              borderRadius: 6,
              display: "inline-block",
            }}
          >
            <p style={{ color: "#ef4444", fontSize: 11, fontWeight: 700, margin: 0, fontFamily: S.font }}>
              → {rf.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
