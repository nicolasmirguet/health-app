import { useState } from "react";
import { RECIPES } from "../data/recipes.js";
import { theme as S, colors } from "../styles/theme.js";
import { HintBox } from "../components/ui/HintBox.jsx";

export function TabRecipes() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
              color: colors.onSurface,
              width: "100%",
              display: "block",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }} aria-hidden="true">{r.emoji}</span>
                <span
                  style={{
                    color: colors.onSurface,
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {r.name}
                </span>
              </div>
              <span style={{ color: colors.onSurfaceVariant, fontSize: 13 }}>⏱ {r.time}</span>
            </div>
            {isOpen && (
              <div style={{ marginTop: 18, animation: "fadeIn 0.3s" }}>
                <p
                  style={{
                    color: colors.primary,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Ingrédients
                </p>
                {r.ingredients.map((ing) => (
                  <p
                    key={ing}
                    style={{ color: colors.onSurfaceVariant, fontSize: 14, margin: "4px 0", lineHeight: 1.5 }}
                  >
                    • {ing}
                  </p>
                ))}
                <div style={{ marginTop: 14 }}>
                  <HintBox padding={12}>
                    <p style={{ color: colors.onSurface, fontSize: 13, margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
                      💡 {r.why}
                    </p>
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
