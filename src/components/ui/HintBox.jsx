export function HintBox({ children, padding = 12 }) {
  return (
    <div
      style={{
        padding,
        background: "rgba(251,191,36,0.06)",
        borderRadius: 10,
        border: "1px solid rgba(251,191,36,0.12)",
      }}
    >
      {children}
    </div>
  );
}
