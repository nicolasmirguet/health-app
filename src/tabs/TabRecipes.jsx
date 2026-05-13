import { useState } from "react";
import { RECIPES } from "../data/recipes.js";
import { theme as S } from "../styles/theme.js";

export function TabRecipes() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {RECIPES.map((r, i) => (
        <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ ...S.card, cursor: "pointer" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 22 }}>{r.emoji}</span>
              <span style={{ color: S.text, fontSize: 14, fontWeight: 600, marginLeft: 10, fontFamily: S.font }}>
                {r.name}
              </span>
            </div>
            <span style={{ color: S.dim, fontSize: 11, fontFamily: S.font }}>⏱ {r.time}</span>
          </div>
          {open === i && (
            <div style={{ marginTop: 12, animation: "fadeIn 0.3s" }}>
              <p style={{ color: S.gold, fontSize: 11, fontWeight: 700, marginBottom: 4, fontFamily: S.font }}>
                INGRÉDIENTS
              </p>
              {r.ingredients.map((ing, j) => (
                <p key={j} style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: "2px 0", fontFamily: S.font }}>
                  • {ing}
                </p>
              ))}
              <div
                style={{
                  marginTop: 10,
                  padding: 8,
                  background: "rgba(251,191,36,0.06)",
                  borderRadius: 7,
                  border: "1px solid rgba(251,191,36,0.1)",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 0, fontFamily: S.font }}>
                  💡 {r.why}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
