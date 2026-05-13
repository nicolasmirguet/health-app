export const theme = {
  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: 14,
    padding: "16px 18px",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  gold: "#fbbf24",
  dim: "rgba(255,255,255,0.45)",
  text: "#e2e8f0",
  font: "'DM Sans', sans-serif",
  serif: "'Playfair Display', Georgia, serif",
  btn: (active) => ({
    padding: "10px 18px",
    background: active ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${active ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    color: active ? "#fbbf24" : "rgba(255,255,255,0.5)",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
  }),
};
