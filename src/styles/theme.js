export const colors = {
  gold: "#fbbf24",
  goldSoft: "rgba(251,191,36,0.15)",
  text: "#e2e8f0",
  dim: "rgba(255,255,255,0.45)",
  muted: "rgba(255,255,255,0.6)",
  faint: "rgba(255,255,255,0.3)",
  danger: "#ef4444",
  success: "#22c55e",
  warn: "#f97316",
  warnSoft: "#eab308",
  blue: "#3b82f6",
};

export const withAlpha = (color, a) => {
  if (color.startsWith("#") && color.length === 7) {
    const hex = Math.round(a * 255).toString(16).padStart(2, "0");
    return `${color}${hex}`;
  }
  return color;
};

export const theme = {
  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: 14,
    padding: "16px 18px",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  gold: colors.gold,
  dim: colors.dim,
  text: colors.text,
  font: "'DM Sans', sans-serif",
  serif: "'Playfair Display', Georgia, serif",
  muted: { color: colors.muted, fontSize: 12, lineHeight: 1.5 },
  sectionLabel: { color: colors.gold, fontSize: 12, fontWeight: 700, letterSpacing: 1, margin: 0 },
  btn: (active) => ({
    padding: "10px 18px",
    background: active ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${active ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    color: active ? colors.gold : "rgba(255,255,255,0.5)",
    cursor: "pointer",
    fontSize: 13,
  }),
};

export const SEVERITY_COLORS = {
  critical: colors.danger,
  urgent: colors.warn,
  watch: colors.warnSoft,
};
