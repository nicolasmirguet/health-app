import { colors, withAlpha } from "../../styles/theme.js";

export function PillButton({ active, accent = colors.primarySolid, onClick, children, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 18px",
        background: active ? withAlpha(accent, 0.12) : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? withAlpha(accent, 0.4) : "rgba(255,255,255,0.06)"}`,
        borderRadius: 9999,
        color: active ? accent : colors.onSurfaceVariant,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        transition: "all 0.2s ease",
        boxShadow: active ? `0 0 20px 0 ${withAlpha(accent, 0.15)}` : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
