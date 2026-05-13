import { useState } from "react";
import { CHEMO_BAG } from "../data/chemoBag.js";
import { theme as S } from "../styles/theme.js";

export function TabBag() {
  const [checked, setChecked] = useState({});
  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {CHEMO_BAG.map((cat, ci) => (
        <div key={ci} style={S.card}>
          <p style={{ color: S.gold, fontSize: 14, fontWeight: 700, margin: "0 0 10px", fontFamily: S.font }}>
            {cat.cat}
          </p>
          {cat.items.map((item, ii) => {
            const k = `${ci}-${ii}`;
            return (
              <div
                key={ii}
                onClick={() => toggle(k)}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", cursor: "pointer" }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    border: `2px solid ${checked[k] ? "#22c55e" : "rgba(255,255,255,0.15)"}`,
                    background: checked[k] ? "rgba(34,197,94,0.15)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  {checked[k] && "✓"}
                </div>
                <span
                  style={{
                    color: checked[k] ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    textDecoration: checked[k] ? "line-through" : "none",
                    fontFamily: S.font,
                  }}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
