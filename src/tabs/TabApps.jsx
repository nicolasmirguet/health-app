import { APPS_LIST } from "../data/apps.js";
import { theme as S } from "../styles/theme.js";
import { SectionLabel } from "../components/ui/SectionLabel.jsx";
import { groupBy } from "../utils/pick.js";

const GROUPED = Object.entries(groupBy(APPS_LIST, "cat"));

export function TabApps() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {GROUPED.map(([cat, items]) => (
        <div key={cat}>
          <SectionLabel style={{ marginBottom: 6 }}>{cat.toUpperCase()}</SectionLabel>
          {items.map((app) => (
            <div key={app.name} style={{ ...S.card, marginBottom: 6 }}>
              <p style={{ color: S.text, fontSize: 13, fontWeight: 600, margin: 0 }}>{app.name}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: "3px 0 0" }}>
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      ))}
      <div
        style={{
          marginTop: 12,
          padding: 16,
          background: "rgba(251,191,36,0.06)",
          borderRadius: 12,
          border: "1px solid rgba(251,191,36,0.12)",
          textAlign: "center",
        }}
      >
        <p style={{ color: S.gold, fontSize: 15, fontWeight: 600, fontFamily: S.serif }}>Moments difficiles ?</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8, lineHeight: 1.7 }}>
          Pleure si tu dois pleurer. Crie si tu dois crier. Chaque séance te rapproche de la guérison.
          Chaque jour dur est un jour de moins à traverser. Respire : 4 sec inspir, 7 sec hold, 8 sec expir.
        </p>
      </div>
    </div>
  );
}
