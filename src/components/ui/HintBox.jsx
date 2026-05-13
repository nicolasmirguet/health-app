import { colors, withAlpha } from "../../styles/theme.js";

export function HintBox({ children, padding = 14 }) {
  return (
    <div
      style={{
        padding,
        background: withAlpha(colors.primarySolid, 0.06),
        borderRadius: 14,
        border: `1px solid ${withAlpha(colors.primarySolid, 0.16)}`,
      }}
    >
      {children}
    </div>
  );
}
