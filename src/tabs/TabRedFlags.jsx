import { RED_FLAGS } from "../data/redFlags.js";
import { theme as S, SEVERITY_COLORS, colors } from "../styles/theme.js";
import { AccentCard } from "../components/ui/AccentCard.jsx";

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
        <p style={{ color: colors.danger, fontSize: 14, fontWeight: 700, margin: 0 }}>
          🚨 IMPRIME CETTE PAGE ET COLLE-LA SUR LE FRIGO
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 4 }}>
          Chaque minute compte en urgence oncologique
        </p>
      </div>
      {RED_FLAGS.map((rf) => (
        <AccentCard key={rf.flag} color={SEVERITY_COLORS[rf.severity]}>
          <p style={{ color: S.text, fontSize: 14, fontWeight: 700, margin: 0 }}>{rf.flag}</p>
          <p style={{ ...S.muted, marginTop: 6 }}>{rf.desc}</p>
          <div
            style={{
              marginTop: 8,
              padding: "6px 10px",
              background: "rgba(239,68,68,0.08)",
              borderRadius: 6,
              display: "inline-block",
            }}
          >
            <p style={{ color: colors.danger, fontSize: 11, fontWeight: 700, margin: 0 }}>
              → {rf.action}
            </p>
          </div>
        </AccentCard>
      ))}
    </div>
  );
}
