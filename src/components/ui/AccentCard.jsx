import { theme as S, withAlpha } from "../../styles/theme.js";

export function AccentCard({ color, tint = false, children }) {
  return (
    <div
      style={{
        ...S.card,
        borderLeft: `3px solid ${color}`,
        background: tint ? withAlpha(color, 0.06) : S.card.background,
      }}
    >
      {children}
    </div>
  );
}
