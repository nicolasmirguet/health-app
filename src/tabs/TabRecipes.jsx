import { useState } from "react";
import { RECIPES } from "../data/recipes.js";
import { theme as S } from "../styles/theme.js";
import { HintBox } from "../components/ui/HintBox.jsx";

export function TabRecipes() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {RECIPES.map((r) => {
        const isOpen = open === r.name;
        return (
          <button
            key={r.name}
            onClick={() => setOpen(isOpen ? null : r.name)}
            aria-expanded={isOpen}
            style={{
              ...S.card,
              cursor: "pointer",
              textAlign: "left",
              color: S.text,
              width: "100%",
              display: "block",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: 22 }}>{r.emoji}</span>
                <span style={{ color: S.text, fontSize: 14, fontWeight: 600, marginLeft: 10 }}>
                  {r.name}
                </span>
              </div>
              <span style={{ color: S.dim, fontSize: 11 }}>⏱ {r.time}</span>
            </div>
            {isOpen && (
              <div style={{ marginTop: 12, animation: "fadeIn 0.3s" }}>
                <p style={{ color: S.gold, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>
                  INGRÉDIENTS
                </p>
                {r.ingredients.map((ing) => (
                  <p key={ing} style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: "2px 0" }}>
                    • {ing}
                  </p>
                ))}
                <div style={{ marginTop: 10 }}>
                  <HintBox padding={8}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 0 }}>💡 {r.why}</p>
                  </HintBox>
                </div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
