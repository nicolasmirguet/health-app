import { APPS_LIST } from "../data/apps.js";
import { theme as S, colors, withAlpha } from "../styles/theme.js";
import { SectionLabel } from "../components/ui/SectionLabel.jsx";
import { groupBy } from "../utils/pick.js";

const GROUPED = Object.entries(groupBy(APPS_LIST, "cat"));

export function TabApps() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {GROUPED.map(([cat, items]) => (
        <div key={cat} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <SectionLabel>{cat}</SectionLabel>
          {items.map((app) => (
            <div key={app.name} style={S.card}>
              <p style={{ color: colors.onSurface, fontSize: 15, fontWeight: 600, margin: 0, letterSpacing: "-0.005em" }}>
                {app.name}
              </p>
              <p style={{ color: colors.onSurfaceVariant, fontSize: 14, margin: "6px 0 0", lineHeight: 1.6 }}>
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      ))}
      <div
        style={{
          marginTop: 18,
          padding: 24,
          background: withAlpha(colors.primarySolid, 0.06),
          borderRadius: 24,
          border: `1px solid ${withAlpha(colors.primarySolid, 0.18)}`,
          textAlign: "center",
        }}
      >
        <p style={{ color: colors.primary, fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em" }}>
          Moments difficiles ?
        </p>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 15, marginTop: 12, lineHeight: 1.7 }}>
          Pleure si tu dois pleurer. Crie si tu dois crier. Chaque séance te rapproche de la guérison.
          Chaque jour dur est un jour de moins à traverser. Respire : 4 sec inspir, 7 sec hold, 8 sec expir.
        </p>
      </div>
    </div>
  );
}
