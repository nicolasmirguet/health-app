import { BEP_CYCLE, PHASE_COLORS, CYCLE_NOTES } from "../data/bepCycle.js";
import { colors, withAlpha } from "../styles/theme.js";
import { useLocalState } from "../utils/useLocalState.js";
import { PillButton } from "../components/ui/PillButton.jsx";
import { AccentCard } from "../components/ui/AccentCard.jsx";
import { HintBox } from "../components/ui/HintBox.jsx";
import { SectionLabel } from "../components/ui/SectionLabel.jsx";
import { Icon } from "../components/ui/Icon.jsx";

const PHASE_ACCENTS = {
  chimio: colors.primarySolid,
  nadir: colors.danger,
  recup: colors.success,
  remontee: colors.warn,
};

const CYCLE_ACCENTS = {
  1: colors.sapphire,
  2: colors.primarySolid,
  3: colors.warn,
  4: colors.success,
};

export function TabBEP() {
  const [cycle, setCycle] = useLocalState("force-frere/bepCycle", 1);
  const cn = CYCLE_NOTES[cycle];
  const startDay = (cycle - 1) * 21 + 1;
  const endDay = cycle * 21;
  const pct = Math.round((cycle / 4) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {[1, 2, 3, 4].map((c) => (
          <PillButton
            key={c}
            active={cycle === c}
            accent={CYCLE_ACCENTS[c]}
            onClick={() => setCycle(c)}
            style={{
              flex: "0 0 auto",
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }} aria-hidden="true">{CYCLE_NOTES[c].emoji}</span>
            <span>Cycle {c}</span>
          </PillButton>
        ))}
      </div>

      <div
        style={{
          padding: "18px 22px",
          background: colors.surfaceCard,
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, gap: 12 }}>
          <span style={{ color: colors.primary, fontSize: 15, fontWeight: 600, letterSpacing: "-0.005em" }}>
            {cn.emoji} {cn.title}
          </span>
          <span
            className="display"
            style={{
              color: colors.onSurfaceVariant,
              fontSize: 14,
              letterSpacing: "-0.005em",
              fontVariationSettings: "'SOFT' 50, 'WONK' 0",
            }}
          >
            J<span style={{ color: colors.onSurface, fontWeight: 500 }}>{startDay}</span>
            <span style={{ opacity: 0.6 }}> – </span>
            J<span style={{ color: colors.onSurface, fontWeight: 500 }}>{endDay}</span>
            <span style={{ opacity: 0.5 }}> / 84</span>
          </span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 9999, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${colors.primarySolid}, ${colors.spark})`,
              borderRadius: 9999,
              transition: "width 0.5s ease",
              boxShadow: `0 0 12px ${withAlpha(colors.primarySolid, 0.4)}`,
            }}
          />
        </div>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 13, marginTop: 12 }}>
          <span
            className="display-wonk"
            style={{ color: colors.primary, fontSize: 16, fontWeight: 500, marginRight: 6 }}
          >
            {pct}%
          </span>
          du traitement complété à la fin de ce cycle
        </p>
      </div>

      <div
        style={{
          padding: 20,
          background: withAlpha(colors.primarySolid, 0.04),
          borderRadius: 24,
          border: `1px solid ${withAlpha(colors.primarySolid, 0.15)}`,
        }}
      >
        <p style={{ color: colors.onSurfaceVariant, fontSize: 15, lineHeight: 1.6, margin: "0 0 14px" }}>{cn.summary}</p>
        {cn.notes.map((note) => (
          <div key={note} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ color: colors.primary, marginTop: 4, flexShrink: 0 }} aria-hidden="true">
              <Icon name="chevronRight" size={12} strokeWidth={2.25} />
            </span>
            <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{note}</p>
          </div>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 14 }}>Jour par jour — Cycle {cycle}</SectionLabel>
      {BEP_CYCLE.map((d) => (
        <AccentCard key={d.day} color={PHASE_ACCENTS[d.phase] || PHASE_COLORS[d.phase]} tint={d.alert}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ color: PHASE_ACCENTS[d.phase] || PHASE_COLORS[d.phase], fontSize: 15, fontWeight: 600 }}>
              {d.icon} {d.day} — {d.title}
            </span>
            {d.alert && (
              <span
                style={{
                  background: withAlpha(colors.danger, 0.15),
                  color: colors.danger,
                  padding: "4px 10px",
                  borderRadius: 9999,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Vigilance
              </span>
            )}
          </div>
          <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>{d.body}</p>
          <HintBox padding="12px 14px">
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: colors.spark, marginTop: 2, flexShrink: 0 }} aria-hidden="true">
                <Icon name="lightbulb" size={14} strokeWidth={1.75} />
              </span>
              <p style={{ color: colors.onSurface, fontSize: 13, lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                {d.tips}
              </p>
            </div>
          </HintBox>
        </AccentCard>
      ))}

      <div
        style={{
          textAlign: "center",
          padding: 24,
          background: withAlpha(colors.primarySolid, 0.04),
          borderRadius: 24,
          border: `1px solid ${withAlpha(colors.primarySolid, 0.15)}`,
          marginTop: 8,
        }}
      >
        <p
          className="display"
          style={{
            color: colors.primary,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "-0.015em",
            margin: 0,
            fontVariationSettings: "'SOFT' 80, 'WONK' 0",
          }}
        >
          {cycle < 4
            ? `Fin du Cycle ${cycle} — Cycle ${cycle + 1} commence à J1`
            : "Fin du dernier cycle. Scanner de contrôle dans 3–4 semaines."}
        </p>
        {cycle < 4 && (
          <p style={{ color: colors.onSurfaceVariant, fontSize: 13, marginTop: 8 }}>
            Encore{" "}
            <span
              className="display-wonk"
              style={{ color: colors.spark, fontSize: 15, fontWeight: 500 }}
            >
              {4 - cycle}
            </span>{" "}
            cycle{4 - cycle > 1 ? "s" : ""} — tu peux le faire
          </p>
        )}
      </div>
    </div>
  );
}
