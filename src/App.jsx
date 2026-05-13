import { useState } from "react";
import { TABS, TAB_TITLES, TAB_SUBTITLES } from "./constants/tabs.js";
import { theme as S } from "./styles/theme.js";
import { MagicBall } from "./components/features/MagicBall.jsx";
import { JokeCard } from "./components/features/JokeCard.jsx";
import { HistoryQuiz } from "./components/features/HistoryQuiz.jsx";
import { QuoteWall } from "./components/features/QuoteWall.jsx";
import { TabBEP } from "./tabs/TabBEP.jsx";
import { TabHacks } from "./tabs/TabHacks.jsx";
import { TabRedFlags } from "./tabs/TabRedFlags.jsx";
import { TabBag } from "./tabs/TabBag.jsx";
import { TabQuestions } from "./tabs/TabQuestions.jsx";
import { TabRecipes } from "./tabs/TabRecipes.jsx";
import { TabApps } from "./tabs/TabApps.jsx";

const VIEWS = {
  ball: MagicBall,
  bep: TabBEP,
  hacks: TabHacks,
  flags: TabRedFlags,
  bag: TabBag,
  recettes: TabRecipes,
  questions: TabQuestions,
  rire: JokeCard,
  quiz: HistoryQuiz,
  quotes: QuoteWall,
  apps: TabApps,
};

export default function App() {
  const [tab, setTab] = useState("ball");
  const View = VIEWS[tab];
  const title = TAB_TITLES[tab];
  const subtitle = TAB_SUBTITLES[tab];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a15 0%, #111127 50%, #0a0a15 100%)",
        color: S.text,
        fontFamily: S.font,
      }}
    >
      <header
        style={{
          padding: "28px 16px 16px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <h1
          style={{
            fontFamily: S.serif,
            fontSize: 26,
            fontWeight: 700,
            color: S.gold,
            letterSpacing: 1,
            margin: 0,
          }}
        >
          FORCE FRÈRE
        </h1>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 5, letterSpacing: 2 }}>
          4 CYCLES · 12 SEMAINES · IGCCCG 2021 : 89%
        </p>
      </header>

      <nav
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "10px 8px 0",
          gap: 2,
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          scrollbarWidth: "none",
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: "0 0 auto",
              padding: "8px 10px",
              background: tab === t.id ? "rgba(251,191,36,0.12)" : "transparent",
              border: tab === t.id ? "1px solid rgba(251,191,36,0.25)" : "1px solid transparent",
              borderRadius: "8px 8px 0 0",
              color: tab === t.id ? S.gold : "rgba(255,255,255,0.35)",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: tab === t.id ? 600 : 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: 16 }}>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>

      <main style={{ padding: "20px 14px 40px", maxWidth: 640, margin: "0 auto" }}>
        {title && (
          <div style={{ textAlign: "center", marginBottom: 20, animation: "fadeIn 0.4s" }}>
            <h2 style={{ fontFamily: S.serif, fontSize: 20, color: S.text, fontWeight: 700 }}>{title}</h2>
            {subtitle && <p style={{ color: S.dim, fontSize: 13, marginTop: 5 }}>{subtitle}</p>}
          </div>
        )}
        <div key={tab} style={{ animation: "fadeIn 0.4s" }}>
          <View />
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: 16, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>Fait avec amour par un frère pour son frère 💛</p>
      </footer>
    </div>
  );
}
