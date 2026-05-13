import { theme as S } from "../../styles/theme.js";

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
      <p style={{ color: danger ? "#ef4444" : S.gold, fontSize: 13, fontWeight: 600, margin: 0, fontFamily: S.font }}>
        {title}
      </p>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 5, lineHeight: 1.5, margin: "5px 0 0", fontFamily: S.font }}>
        {desc}
      </p>
    </div>
  );
}
