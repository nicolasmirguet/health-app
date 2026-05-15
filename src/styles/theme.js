export const colors = {
  bg: "#000000",
  surface: "#131313",
  surfaceCard: "#10121a",
  surfaceLow: "#1b1b1b",
  surfaceHigh: "#2a2a2a",
  surfaceVariant: "#353535",

  onSurface: "#e2e2e2",
  onSurfaceVariant: "#bbc9cd",
  outline: "#859397",
  outlineVariant: "#3c494c",

  primary: "#8aebff",
  primarySolid: "#22d3ee",
  primaryDark: "#005763",
  sapphire: "#3b82f6",
  secondary: "#adc6ff",

  spark: "#e0b364",
  sparkSolid: "#d4a056",
  sparkDeep: "#8a5a1f",

  danger: "#ffb4ab",
  dangerContainer: "#93000a",
  success: "#a2eeff",
  warn: "#fbbf24",
  watch: "#fde68a",
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
    background: colors.surfaceCard,
    borderRadius: 24,
    padding: "20px 22px",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
  },
  gold: colors.primary,
  dim: colors.onSurfaceVariant,
  text: colors.onSurface,
  font: "'Manrope', system-ui, sans-serif",
  serif: "'Fraunces', 'Times New Roman', serif",
  display: "'Fraunces', 'Times New Roman', serif",
  muted: { color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6 },
  sectionLabel: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    margin: 0,
  },
  btn: (active) => ({
    padding: "12px 22px",
    background: active ? withAlpha(colors.primarySolid, 0.12) : "rgba(255,255,255,0.04)",
    border: `1px solid ${active ? withAlpha(colors.primarySolid, 0.4) : "rgba(255,255,255,0.08)"}`,
    borderRadius: 9999,
    color: active ? colors.primary : colors.onSurfaceVariant,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.2s ease",
    boxShadow: active ? `0 0 20px 0 ${withAlpha(colors.primarySolid, 0.15)}` : "none",
  }),
};

export const SEVERITY_COLORS = {
  critical: colors.danger,
  urgent: colors.warn,
  watch: colors.watch,
};
