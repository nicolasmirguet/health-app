import { colors, withAlpha } from "../../styles/theme.js";

export function Tip({ title, desc, danger }) {
  return (
    <div
      style={{
        padding: "16px 18px",
        background: danger ? withAlpha(colors.danger, 0.08) : colors.surfaceCard,
        borderRadius: 20,
        border: `1px solid ${danger ? withAlpha(colors.danger, 0.25) : "rgba(255,255,255,0.06)"}`,
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      }}
    >
      <p
        style={{
          color: danger ? colors.danger : colors.primary,
          fontSize: 15,
          fontWeight: 600,
          margin: 0,
          letterSpacing: "-0.005em",
        }}
      >
        {title}
      </p>
      <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>
        {desc}
      </p>
    </div>
  );
}
