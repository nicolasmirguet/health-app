import { RED_FLAGS } from "../data/redFlags.js";
import { SEVERITY_COLORS, colors, withAlpha } from "../styles/theme.js";
import { AccentCard } from "../components/ui/AccentCard.jsx";

export function TabRedFlags() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          padding: "18px 22px",
          background: withAlpha(colors.danger, 0.08),
          borderRadius: 22,
          border: `1px solid ${withAlpha(colors.danger, 0.25)}`,
          textAlign: "center",
        }}
      >
        <p style={{ color: colors.danger, fontSize: 15, fontWeight: 700, margin: 0, letterSpacing: "-0.005em" }}>
          Imprime cette page · colle-la sur le frigo
        </p>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 13, marginTop: 6 }}>
          Chaque minute compte en urgence oncologique
        </p>
      </div>
      {RED_FLAGS.map((rf) => (
        <AccentCard key={rf.flag} color={SEVERITY_COLORS[rf.severity]}>
          <p style={{ color: colors.onSurface, fontSize: 16, fontWeight: 600, margin: 0, letterSpacing: "-0.005em" }}>
            {rf.flag}
          </p>
          <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>{rf.desc}</p>
          <div
            style={{
              marginTop: 12,
              padding: "8px 14px",
              background: withAlpha(colors.danger, 0.12),
              borderRadius: 9999,
              display: "inline-block",
              border: `1px solid ${withAlpha(colors.danger, 0.25)}`,
            }}
          >
            <p style={{ color: colors.danger, fontSize: 12, fontWeight: 600, margin: 0, letterSpacing: "0.02em" }}>
              → {rf.action}
            </p>
          </div>
        </AccentCard>
      ))}
    </div>
  );
}
