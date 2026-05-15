import { useState } from "react";
import { RECIPES } from "../data/recipes.js";
import { theme as S, colors, withAlpha } from "../styles/theme.js";
import { HintBox } from "../components/ui/HintBox.jsx";
import { Icon } from "../components/ui/Icon.jsx";

const TAG_COLOR = {
  "Anti-nausée": "#a2eeff",
  "Nadir-safe": "#a7f3d0",
  "Rapide": "#fde68a",
  "Riche en calories": "#e0b364",
  "Protéiné": "#adc6ff",
  "Aphtes-friendly": "#fbcfe8",
  "Réconfort": "#fbbf24",
  "Hydratant": "#8aebff",
};

const RECIPE_TAGS = {
  "Smoothie Guerrier": ["Riche en calories", "Protéiné", "Rapide"],
  "Bouillon Réparateur": ["Anti-nausée", "Hydratant"],
  "Riz Anti-Nausée": ["Anti-nausée", "Nadir-safe"],
  "Compote Express": ["Anti-nausée", "Aphtes-friendly"],
  "Œufs Velours": ["Protéiné", "Aphtes-friendly"],
  "Bowl Énergie": ["Riche en calories", "Réconfort"],
  "Purée Réconfort": ["Aphtes-friendly", "Réconfort"],
  "Pasta Froide": ["Anti-nausée", "Protéiné"],
  "Crêpes Protéinées": ["Protéiné", "Réconfort"],
  "Avocat Toast": ["Nadir-safe", "Rapide"],
  "Riz au Lait Menthe": ["Anti-nausée", "Réconfort"],
  "Houmous Doux": ["Protéiné", "Aphtes-friendly"],
  "Velouté Carottes": ["Anti-nausée", "Aphtes-friendly"],
  "Banana Bread": ["Riche en calories", "Réconfort"],
  "Milkshake Vanille": ["Riche en calories", "Rapide", "Protéiné"],
  "Semoule au Lait": ["Aphtes-friendly", "Réconfort"],
  "Tartine Ricotta Miel": ["Rapide", "Aphtes-friendly"],
  "Pomme au Four": ["Anti-nausée", "Aphtes-friendly"],
  "Gâteau de Riz": ["Réconfort", "Aphtes-friendly"],
  "Smoothie Tropical": ["Nadir-safe", "Rapide"],
};

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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }} aria-hidden="true">{r.emoji}</span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <span
                    style={{
                      display: "block",
                      color: colors.onSurface,
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {r.name}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                    {(RECIPE_TAGS[r.name] || []).map((tag) => {
                      const c = TAG_COLOR[tag] || colors.primary;
                      return (
                        <span
                          key={tag}
                          style={{
                            fontSize: 9.5,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            padding: "2px 7px",
                            borderRadius: 999,
                            color: c,
                            background: withAlpha(c, 0.08),
                            border: `1px solid ${withAlpha(c, 0.25)}`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <span
                style={{
                  color: colors.onSurfaceVariant,
                  fontSize: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  flexShrink: 0,
                }}
              >
                <Icon name="clock" size={13} strokeWidth={1.75} />
                {r.time}
              </span>
            </div>
            {isOpen && (
              <div style={{ marginTop: 18, animation: "fadeIn 0.3s" }}>
                <p
                  className="kicker"
                  style={{
                    color: colors.primary,
                    marginBottom: 10,
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
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: colors.spark, marginTop: 2, flexShrink: 0 }}>
                        <Icon name="lightbulb" size={14} strokeWidth={1.75} />
                      </span>
                      <p style={{ color: colors.onSurface, fontSize: 13, margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
                        {r.why}
                      </p>
                    </div>
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
