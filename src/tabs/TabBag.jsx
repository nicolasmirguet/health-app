import { CHEMO_BAG } from "../data/chemoBag.js";
import { theme as S, colors, withAlpha } from "../styles/theme.js";
import { useLocalState } from "../utils/useLocalState.js";
import { Icon } from "../components/ui/Icon.jsx";

export function TabBag() {
  const [checked, setChecked] = useLocalState("force-frere/chemoBag", {});
  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  const allKeys = CHEMO_BAG.flatMap((cat) => cat.items.map((item) => `${cat.cat}::${item}`));
  const total = allKeys.length;
  const done = allKeys.filter((k) => checked[k]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const ready = done === total;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          padding: "16px 20px",
          background: ready
            ? withAlpha(colors.success, 0.08)
            : withAlpha(colors.primarySolid, 0.06),
          border: `1px solid ${ready ? withAlpha(colors.success, 0.3) : withAlpha(colors.primarySolid, 0.18)}`,
          borderRadius: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <span
            className="kicker"
            style={{
              color: ready ? colors.success : colors.primary,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icon name="bag" size={12} strokeWidth={2} />
            {ready ? "Sac prêt" : "Préparation"}
          </span>
          <span
            className="display"
            style={{
              fontSize: 18,
              color: ready ? colors.success : colors.primary,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              fontVariationSettings: "'SOFT' 80, 'WONK' 0",
            }}
          >
            <span style={{ color: colors.onSurface }}>{done}</span>
            <span style={{ opacity: 0.5 }}> / {total}</span>
          </span>
        </div>
        <div
          style={{
            height: 4,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            overflow: "hidden",
            position: "relative",
          }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Préparation du sac"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: `${pct}%`,
              background: ready
                ? `linear-gradient(90deg, ${colors.success}, ${colors.primarySolid})`
                : `linear-gradient(90deg, ${colors.primarySolid}, ${colors.spark})`,
              boxShadow: `0 0 14px ${withAlpha(ready ? colors.success : colors.primarySolid, 0.4)}`,
              transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </div>

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
                    width: 22,
                    height: 22,
                    borderRadius: 7,
                    border: `1.75px solid ${isChecked ? colors.primary : "rgba(255,255,255,0.15)"}`,
                    background: isChecked ? withAlpha(colors.primarySolid, 0.15) : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: colors.primary,
                    boxShadow: isChecked ? `0 0 12px ${withAlpha(colors.primarySolid, 0.3)}` : "none",
                    transition: "all 0.2s ease",
                  }}
                  aria-hidden="true"
                >
                  {isChecked && <Icon name="check" size={13} strokeWidth={2.5} />}
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
