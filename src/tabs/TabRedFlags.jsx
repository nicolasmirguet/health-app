import { RED_FLAGS } from "../data/redFlags.js";
import { SEVERITY_COLORS, colors, withAlpha } from "../styles/theme.js";
import { AccentCard } from "../components/ui/AccentCard.jsx";
import { Icon } from "../components/ui/Icon.jsx";

export function TabRedFlags() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          padding: "20px 22px",
          background: withAlpha(colors.danger, 0.08),
          borderRadius: 24,
          border: `1px solid ${withAlpha(colors.danger, 0.3)}`,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ color: colors.danger }} aria-hidden="true">
          <Icon name="printer" size={20} strokeWidth={1.75} />
        </span>
        <p style={{ color: colors.danger, fontSize: 15, fontWeight: 700, margin: 0, letterSpacing: "-0.005em" }}>
          Imprime cette page · colle-la sur le frigo
        </p>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 13, margin: 0 }}>
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
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: `1px solid ${withAlpha(colors.danger, 0.25)}`,
            }}
          >
            <Icon name="arrowRight" size={12} strokeWidth={2.25} style={{ color: colors.danger }} />
            <p style={{ color: colors.danger, fontSize: 12, fontWeight: 600, margin: 0, letterSpacing: "0.02em" }}>
              {rf.action}
            </p>
          </div>
        </AccentCard>
      ))}
    </div>
  );
}
