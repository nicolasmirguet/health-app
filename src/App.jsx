import { useEffect, useRef } from "react";
import { TABS, TAB_TITLES, TAB_SUBTITLES } from "./constants/tabs.js";
import { theme as S, colors, withAlpha } from "./styles/theme.js";
import { useLocalState } from "./utils/useLocalState.js";
import { Icon } from "./components/ui/Icon.jsx";
import { HeaderCarousel } from "./components/ui/HeaderCarousel.jsx";
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
  const navRef = useRef(null);
  const tabRefs = useRef({});

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeTab]);

  return (
    <div
      className="sapphire-aurora app-shell"
      style={{
        color: colors.onSurface,
        position: "relative",
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(8,10,14,0.72)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
          borderBottom: `1px solid ${withAlpha(colors.outlineVariant, 0.35)}`,
        }}
      >
        <div
          style={{
            padding: "18px 20px 18px",
            paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
            paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(circle at 30% 30%, ${withAlpha(colors.spark, 0.55)}, ${withAlpha(colors.primarySolid, 0.18)} 60%, transparent 75%)`,
                border: `1px solid ${withAlpha(colors.spark, 0.45)}`,
                color: colors.spark,
                boxShadow: `0 0 18px ${withAlpha(colors.spark, 0.25)}`,
              }}
            >
              <Icon name="sparkle" size={13} strokeWidth={2} />
            </span>
            <h1
              className="display"
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                margin: 0,
                fontVariationSettings: "'SOFT' 50, 'WONK' 0",
              }}
            >
              Force <span className="display-wonk" style={{ color: colors.primary, fontWeight: 400 }}>Frère</span>
            </h1>
          </div>

          <HeaderCarousel />
        </div>
      </header>

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 6,
            width: 28,
            background: "linear-gradient(90deg, #000 10%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 6,
            width: 28,
            background: "linear-gradient(270deg, #000 10%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <nav
          ref={navRef}
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "16px 0 8px",
            paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
            paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
            gap: 6,
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
          aria-label="Navigation principale"
        >
        {TABS.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => { tabRefs.current[t.id] = el; }}
              onClick={() => setTab(t.id)}
              aria-current={isActive ? "page" : undefined}
              style={{
                flex: "0 0 auto",
                minHeight: 44,
                padding: "11px 16px",
                background: isActive ? withAlpha(colors.primarySolid, 0.13) : "rgba(255,255,255,0.025)",
                border: `1px solid ${isActive ? withAlpha(colors.primarySolid, 0.42) : "rgba(255,255,255,0.06)"}`,
                borderRadius: 9999,
                color: isActive ? colors.primary : colors.onSurfaceVariant,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                letterSpacing: "0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: isActive ? `0 0 22px 0 ${withAlpha(colors.primarySolid, 0.18)}, inset 0 1px 0 0 rgba(255,255,255,0.06)` : "none",
              }}
            >
              <Icon name={t.icon} size={15} strokeWidth={isActive ? 2 : 1.75} />
              <span>{t.label}</span>
            </button>
          );
        })}
        </nav>
      </div>

      <main
        style={{
          padding: "32px 20px 48px",
          paddingLeft: "max(20px, env(safe-area-inset-left, 0px))",
          paddingRight: "max(20px, env(safe-area-inset-right, 0px))",
          maxWidth: 720,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title && (
          <div style={{ marginBottom: 32, animation: "slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both" }}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(26px, 7.5vw, 36px)",
                fontWeight: 500,
                color: colors.onSurface,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                margin: 0,
                fontVariationSettings: "'SOFT' 80, 'WONK' 0",
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                style={{
                  color: colors.onSurfaceVariant,
                  fontSize: 15.5,
                  marginTop: 10,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: 560,
                }}
              >
                {subtitle}
              </p>
            )}
            <div
              aria-hidden="true"
              style={{
                marginTop: 16,
                height: 1,
                width: 48,
                background: `linear-gradient(90deg, ${colors.spark}, transparent)`,
                opacity: 0.7,
              }}
            />
          </div>
        )}
        <View />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "28px 24px",
          paddingBottom: "calc(36px + env(safe-area-inset-bottom, 0px))",
          paddingLeft: "max(24px, env(safe-area-inset-left, 0px))",
          paddingRight: "max(24px, env(safe-area-inset-right, 0px))",
          borderTop: `1px solid ${withAlpha(colors.outlineVariant, 0.25)}`,
          marginTop: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          className="kicker"
          style={{ color: colors.spark, opacity: 0.75, marginBottom: 12 }}
        >
          · Fait avec amour ·
        </p>
        <p style={{ color: colors.onSurfaceVariant, fontSize: 11.5, marginBottom: 6, opacity: 0.75, lineHeight: 1.6 }}>
          Non substitut à l'avis médical. En cas de doute, contacte ton oncologue.
        </p>
        <p
          className="display-wonk"
          style={{ color: colors.outline, fontSize: 13, opacity: 0.6, fontStyle: "italic" }}
        >
          d'un frère pour son frère.
        </p>
      </footer>
    </div>
  );
}
