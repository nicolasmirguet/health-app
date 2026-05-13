import { APPS_LIST } from "../data/apps.js";
import { theme as S } from "../styles/theme.js";

export function TabApps() {
  const cats = [...new Set(APPS_LIST.map((a) => a.cat))];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {cats.map((cat) => (
        <div key={cat}>
          <p style={{ color: S.gold, fontSize: 12, fontWeight: 700, marginBottom: 6, letterSpacing: 1, fontFamily: S.font }}>
            {cat.toUpperCase()}
          </p>
          {APPS_LIST.filter((a) => a.cat === cat).map((app, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 6 }}>
              <p style={{ color: S.text, fontSize: 13, fontWeight: 600, margin: 0, fontFamily: S.font }}>{app.name}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: "3px 0 0", fontFamily: S.font }}>
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
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8, lineHeight: 1.7, fontFamily: S.font }}>
          Pleure si tu dois pleurer. Crie si tu dois crier. Chaque séance te rapproche de la guérison.
          Chaque jour dur est un jour de moins à traverser. Respire : 4 sec inspir, 7 sec hold, 8 sec expir.
        </p>
      </div>
    </div>
  );
}
