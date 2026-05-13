import { BEP_CYCLE, PHASE_COLORS, CYCLE_NOTES } from "../data/bepCycle.js";
import { theme as S, withAlpha, colors } from "../styles/theme.js";
import { useLocalState } from "../utils/useLocalState.js";
import { PillButton } from "../components/ui/PillButton.jsx";
import { AccentCard } from "../components/ui/AccentCard.jsx";
import { HintBox } from "../components/ui/HintBox.jsx";
import { SectionLabel } from "../components/ui/SectionLabel.jsx";

export function TabBEP() {
  const [cycle, setCycle] = useLocalState("force-frere/bepCycle", 1);
  const cn = CYCLE_NOTES[cycle];
  const startDay = (cycle - 1) * 21 + 1;
  const endDay = cycle * 21;
  const pct = Math.round((cycle / 4) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 4 }}>
        {[1, 2, 3, 4].map((c) => (
          <PillButton
            key={c}
            active={cycle === c}
            accent={CYCLE_NOTES[c].color}
            onClick={() => setCycle(c)}
            style={{
              flex: 1,
              maxWidth: 80,
              padding: "10px 6px",
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <span style={{ fontSize: 18 }}>{CYCLE_NOTES[c].emoji}</span>
            <span>Cycle {c}</span>
          </PillButton>
        ))}
      </div>

      <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ color: cn.color, fontSize: 12, fontWeight: 700 }}>
            {cn.emoji} {cn.title}
          </span>
          <span style={{ color: S.dim, fontSize: 11 }}>
            Jour {startDay}-{endDay} / 84
          </span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${cn.color}, ${withAlpha(cn.color, 0.67)})`,
              borderRadius: 3,
              transition: "width 0.5s ease",
            }}
          />
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 6 }}>
          {pct}% du traitement complété à la fin de ce cycle
        </p>
      </div>

      <div style={{ padding: 14, background: withAlpha(cn.color, 0.03), borderRadius: 12, border: `1px solid ${withAlpha(cn.color, 0.15)}` }}>
        <p style={{ ...S.muted, margin: "0 0 10px" }}>{cn.summary}</p>
        {cn.notes.map((note) => (
          <div key={note} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
            <span style={{ color: cn.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
            <p style={{ ...S.muted, fontSize: 11, margin: 0 }}>{note}</p>
          </div>
        ))}
      </div>

      <SectionLabel style={{ margin: "8px 0 0" }}>JOUR PAR JOUR — CYCLE {cycle}</SectionLabel>
      {BEP_CYCLE.map((d) => (
        <AccentCard key={d.day} color={PHASE_COLORS[d.phase]} tint={d.alert}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ color: PHASE_COLORS[d.phase], fontSize: 13, fontWeight: 700 }}>
              {d.icon} {d.day} — {d.title}
            </span>
            {d.alert && (
              <span
                style={{
                  background: "rgba(239,68,68,0.15)",
                  color: colors.danger,
                  padding: "2px 8px",
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                VIGILANCE
              </span>
            )}
          </div>
          <p style={{ ...S.muted, margin: "0 0 8px" }}>{d.body}</p>
          <HintBox padding="8px 10px">
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, lineHeight: 1.5, margin: 0 }}>
              💡 {d.tips}
            </p>
          </HintBox>
        </AccentCard>
      ))}

      <div style={{ textAlign: "center", padding: 16, background: withAlpha(cn.color, 0.03), borderRadius: 12, border: `1px solid ${withAlpha(cn.color, 0.08)}` }}>
        <p style={{ color: cn.color, fontSize: 14, fontWeight: 700 }}>
          {cycle < 4
            ? `Fin du Cycle ${cycle} → Cycle ${cycle + 1} commence à J1`
            : "🏆 FIN DU DERNIER CYCLE. Scanner de contrôle dans 3-4 semaines. TU AS GAGNÉ."}
        </p>
        {cycle < 4 && (
          <p style={{ color: S.dim, fontSize: 11, marginTop: 4 }}>
            Encore {4 - cycle} cycle{4 - cycle > 1 ? "s" : ""} — tu peux le faire 💛
          </p>
        )}
      </div>
    </div>
  );
}
