import { CHEMO_BAG } from "../data/chemoBag.js";
import { theme as S, colors, withAlpha } from "../styles/theme.js";
import { useLocalState } from "../utils/useLocalState.js";

export function TabBag() {
  const [checked, setChecked] = useLocalState("force-frere/chemoBag", {});
  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {CHEMO_BAG.map((cat) => (
        <div key={cat.cat} style={S.card}>
          <p
            style={{
              color: colors.primary,
              fontSize: 15,
              fontWeight: 600,
              margin: "0 0 14px",
              letterSpacing: "-0.005em",
            }}
          >
            {cat.cat}
          </p>
          {cat.items.map((item) => {
            const k = `${cat.cat}::${item}`;
            const isChecked = !!checked[k];
            return (
              <button
                key={item}
                onClick={() => toggle(k)}
                aria-pressed={isChecked}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "10px 0",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 8,
                    border: `2px solid ${isChecked ? colors.primary : "rgba(255,255,255,0.15)"}`,
                    background: isChecked ? withAlpha(colors.primarySolid, 0.15) : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    flexShrink: 0,
                    color: colors.primary,
                    boxShadow: isChecked ? `0 0 12px ${withAlpha(colors.primarySolid, 0.3)}` : "none",
                    transition: "all 0.2s ease",
                  }}
                  aria-hidden="true"
                >
                  {isChecked && "✓"}
                </div>
                <span
                  style={{
                    color: isChecked ? colors.outline : colors.onSurface,
                    fontSize: 15,
                    textDecoration: isChecked ? "line-through" : "none",
                    fontWeight: 400,
                    transition: "all 0.2s ease",
                  }}
                >
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
