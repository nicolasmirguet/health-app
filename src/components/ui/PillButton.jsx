import { theme as S, withAlpha, colors } from "../../styles/theme.js";

export function PillButton({ active, accent = colors.gold, onClick, children, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 14px",
        background: active ? withAlpha(accent, 0.15) : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? withAlpha(accent, 0.3) : "rgba(255,255,255,0.08)"}`,
        borderRadius: 10,
        color: active ? accent : "rgba(255,255,255,0.5)",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: active ? 600 : 400,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
