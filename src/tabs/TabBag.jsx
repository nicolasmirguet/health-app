import { CHEMO_BAG } from "../data/chemoBag.js";
import { theme as S, colors } from "../styles/theme.js";
import { useLocalState } from "../utils/useLocalState.js";

export function TabBag() {
  const [checked, setChecked] = useLocalState("force-frere/chemoBag", {});
  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {CHEMO_BAG.map((cat) => (
        <div key={cat.cat} style={S.card}>
          <p style={{ color: S.gold, fontSize: 14, fontWeight: 700, margin: "0 0 10px" }}>
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
                  gap: 10,
                  padding: "6px 0",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    border: `2px solid ${isChecked ? colors.success : "rgba(255,255,255,0.15)"}`,
                    background: isChecked ? "rgba(34,197,94,0.15)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    flexShrink: 0,
                    color: colors.success,
                  }}
                  aria-hidden="true"
                >
                  {isChecked && "✓"}
                </div>
                <span
                  style={{
                    color: isChecked ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    textDecoration: isChecked ? "line-through" : "none",
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
