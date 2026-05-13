import { useState } from "react";
import { BEP_CYCLE, PHASE_COLORS, CYCLE_NOTES } from "../data/bepCycle.js";
import { theme as S } from "../styles/theme.js";

export function TabBEP() {
  const [cycle, setCycle] = useState(1);
  const cn = CYCLE_NOTES[cycle];
  const startDay = (cycle - 1) * 21 + 1;
  const endDay = cycle * 21;
  const pct = Math.round((cycle / 4) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 4 }}>
        {[1, 2, 3, 4].map((c) => (
          <button
            key={c}
            onClick={() => setCycle(c)}
            style={{
              flex: 1,
              maxWidth: 80,
              padding: "10px 6px",
              borderRadius: 10,
              background: cycle === c ? `${CYCLE_NOTES[c].color}20` : "rgba(255,255,255,0.03)",
              border: cycle === c ? `2px solid ${CYCLE_NOTES[c].color}` : "1px solid rgba(255,255,255,0.08)",
              color: cycle === c ? CYCLE_NOTES[c].color : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: S.font,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <span style={{ fontSize: 18 }}>{CYCLE_NOTES[c].emoji}</span>
            <span>Cycle {c}</span>
          </button>
        ))}
      </div>

      <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ color: cn.color, fontSize: 12, fontWeight: 700, fontFamily: S.font }}>
            {cn.emoji} {cn.title}
          </span>
          <span style={{ color: S.dim, fontSize: 11, fontFamily: S.font }}>
            Jour {startDay}-{endDay} / 84
          </span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${cn.color}, ${cn.color}aa)`,
              borderRadius: 3,
              transition: "width 0.5s ease",
            }}
          />
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 6, fontFamily: S.font }}>
          {pct}% du traitement complété à la fin de ce cycle
        </p>
      </div>

      <div style={{ padding: 14, background: `${cn.color}08`, borderRadius: 12, border: `1px solid ${cn.color}25` }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.5, margin: "0 0 10px", fontFamily: S.font }}>
          {cn.summary}
        </p>
        {cn.notes.map((note, ni) => (
          <div key={ni} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
            <span style={{ color: cn.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, lineHeight: 1.5, margin: 0, fontFamily: S.font }}>
              {note}
            </p>
          </div>
        ))}
      </div>

      <p style={{ color: S.gold, fontSize: 12, fontWeight: 700, letterSpacing: 1, margin: "8px 0 0", fontFamily: S.font }}>
        JOUR PAR JOUR — CYCLE {cycle}
      </p>
      {BEP_CYCLE.map((d, i) => (
        <div
          key={i}
          style={{
            ...S.card,
            borderLeft: `3px solid ${PHASE_COLORS[d.phase]}`,
            background: d.alert ? "rgba(239,68,68,0.04)" : S.card.background,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ color: PHASE_COLORS[d.phase], fontSize: 13, fontWeight: 700, fontFamily: S.font }}>
              {d.icon} {d.day} — {d.title}
            </span>
            {d.alert && (
              <span
                style={{
                  background: "rgba(239,68,68,0.15)",
                  color: "#ef4444",
                  padding: "2px 8px",
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: S.font,
                }}
              >
                VIGILANCE
              </span>
            )}
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.5, margin: "0 0 8px", fontFamily: S.font }}>
            {d.body}
          </p>
          <div style={{ padding: "8px 10px", background: "rgba(251,191,36,0.05)", borderRadius: 7, border: "1px solid rgba(251,191,36,0.1)" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, lineHeight: 1.5, margin: 0, fontFamily: S.font }}>
              💡 {d.tips}
            </p>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", padding: 16, background: `${cn.color}08`, borderRadius: 12, border: `1px solid ${cn.color}15` }}>
        <p style={{ color: cn.color, fontSize: 14, fontWeight: 700, fontFamily: S.font }}>
          {cycle < 4
            ? `Fin du Cycle ${cycle} → Cycle ${cycle + 1} commence à J1`
            : "🏆 FIN DU DERNIER CYCLE. Scanner de contrôle dans 3-4 semaines. TU AS GAGNÉ."}
        </p>
        {cycle < 4 && (
          <p style={{ color: S.dim, fontSize: 11, marginTop: 4, fontFamily: S.font }}>
            Encore {4 - cycle} cycle{4 - cycle > 1 ? "s" : ""} — tu peux le faire 💛
          </p>
        )}
      </div>
    </div>
  );
}
