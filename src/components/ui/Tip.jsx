import { theme as S, colors } from "../../styles/theme.js";

export function Tip({ title, desc, danger }) {
  return (
    <div
      style={{
        padding: "12px 14px",
        background: danger ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.02)",
        borderRadius: 9,
        border: danger ? "1px solid rgba(239,68,68,0.15)" : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <p style={{ color: danger ? colors.danger : S.gold, fontSize: 13, fontWeight: 600, margin: 0 }}>
        {title}
      </p>
      <p style={{ ...S.muted, marginTop: 5 }}>{desc}</p>
    </div>
  );
}
