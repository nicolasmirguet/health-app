import { TABS, TAB_TITLES, TAB_SUBTITLES } from "./constants/tabs.js";
import { theme as S, colors, withAlpha } from "./styles/theme.js";
import { useLocalState } from "./utils/useLocalState.js";
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

const DEFAULT_TAB = TABS[0].id;
const isValidTab = (t) => Object.prototype.hasOwnProperty.call(VIEWS, t);

export default function App() {
  const [tab, setTab] = useLocalState("force-frere/tab", DEFAULT_TAB);
  const activeTab = isValidTab(tab) ? tab : DEFAULT_TAB;
  const View = VIEWS[activeTab];
  const title = TAB_TITLES[activeTab];
  const subtitle = TAB_SUBTITLES[activeTab];

  return (
    <div className="sapphire-aurora" style={{ minHeight: "100vh", color: colors.onSurface }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(19,19,19,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${withAlpha(colors.outlineVariant, 0.4)}`,
        }}
      >
        <div style={{ padding: "16px 24px", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: colors.primary,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Force Frère
          </h1>
          <p
            style={{
              color: colors.onSurfaceVariant,
              fontSize: 11,
              marginTop: 3,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            4 cycles · 12 semaines · 89%
          </p>
        </div>
      </header>

      <nav
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "16px 16px 4px",
          gap: 8,
          scrollbarWidth: "none",
        }}
        aria-label="Navigation principale"
      >
        {TABS.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              aria-current={isActive ? "page" : undefined}
              style={{
                flex: "0 0 auto",
                padding: "10px 16px",
                background: isActive ? withAlpha(colors.primarySolid, 0.12) : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? withAlpha(colors.primarySolid, 0.4) : "rgba(255,255,255,0.06)"}`,
                borderRadius: 9999,
                color: isActive ? colors.primary : colors.onSurfaceVariant,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                boxShadow: isActive ? `0 0 20px 0 ${withAlpha(colors.primarySolid, 0.15)}` : "none",
              }}
            >
              <span style={{ fontSize: 16 }} aria-hidden="true">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </nav>

      <main style={{ padding: "32px 24px 48px", maxWidth: 720, margin: "0 auto" }}>
        {title && (
          <div style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: colors.onSurface,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                style={{
                  color: colors.onSurfaceVariant,
                  fontSize: 16,
                  marginTop: 8,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <View />
      </main>

      <footer style={{ textAlign: "center", padding: "24px 24px 32px", borderTop: `1px solid ${withAlpha(colors.outlineVariant, 0.3)}`, marginTop: 24 }}>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 11, marginBottom: 6, opacity: 0.7 }}>
          Non substitut à l'avis médical. En cas de doute, contacte ton oncologue.
        </p>
        <p style={{ color: colors.outline, fontSize: 11, opacity: 0.5 }}>
          Fait avec amour par un frère pour son frère
        </p>
      </footer>
    </div>
  );
}
