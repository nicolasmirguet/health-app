import { useEffect, useRef, useState } from "react";
import { colors, withAlpha } from "../../styles/theme.js";
import { QUOTES } from "../../data/quotes.js";
import { Icon } from "./Icon.jsx";

const MANTRAS = [
  "Un jour à la fois. Un pas à la fois. Une victoire à la fois.",
  "Ton corps est un champ de bataille. Tu es l'armée.",
  "Aujourd'hui n'a pas besoin d'être parfait. Juste traversé.",
  "Plus fort que la peur. Plus tenace que la fatigue.",
  "Respire. Tu es exactement là où tu dois être.",
];

const AUTOPLAY_MS = 6000;

function CycleSlide() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      <span
        className="kicker"
        style={{ color: colors.spark, display: "flex", alignItems: "center", gap: 8 }}
      >
        <Icon name="sparkle" size={11} strokeWidth={2} /> Cycle BEP · 4 sur 4
      </span>
      <p
        className="display"
        style={{
          margin: 0,
          fontSize: 22,
          lineHeight: 1.15,
          fontWeight: 500,
          color: colors.onSurface,
          letterSpacing: "-0.02em",
        }}
      >
        <span className="display-wonk" style={{ color: colors.primary }}>89%</span>{" "}
        du chemin parcouru.
      </p>
      <div
        style={{
          marginTop: 6,
          height: 4,
          borderRadius: 999,
          background: withAlpha(colors.primarySolid, 0.12),
          overflow: "hidden",
          position: "relative",
        }}
        role="progressbar"
        aria-valuenow={89}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression du traitement"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "89%",
            background: `linear-gradient(90deg, ${colors.primarySolid}, ${colors.spark})`,
            transformOrigin: "left",
            animation: "progressFill 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
            boxShadow: `0 0 18px ${withAlpha(colors.primarySolid, 0.5)}`,
          }}
        />
      </div>
    </div>
  );
}

function MantraSlide({ text }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      <span
        className="kicker"
        style={{ color: colors.primary, display: "flex", alignItems: "center", gap: 8 }}
      >
        <Icon name="dot" size={10} /> Mantra du jour
      </span>
      <p
        className="display-wonk"
        style={{
          margin: 0,
          fontSize: 21,
          lineHeight: 1.25,
          fontWeight: 400,
          color: colors.onSurface,
          letterSpacing: "-0.015em",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function QuoteSlide({ quote }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      <span
        className="kicker"
        style={{ color: colors.spark, display: "flex", alignItems: "center", gap: 8 }}
      >
        <Icon name="quote" size={11} strokeWidth={2} /> Voix d'ailleurs
      </span>
      <p
        className="display"
        style={{
          margin: 0,
          fontSize: 18,
          lineHeight: 1.35,
          fontWeight: 400,
          color: colors.onSurface,
          letterSpacing: "-0.01em",
          fontStyle: "italic",
        }}
      >
        « {quote.text} »
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: colors.onSurfaceVariant,
          fontWeight: 500,
        }}
      >
        — {quote.author}
      </p>
    </div>
  );
}

export function HeaderCarousel() {
  const [mantraIdx] = useState(() => Math.floor(Math.random() * MANTRAS.length));
  const [quoteIdx] = useState(() => Math.floor(Math.random() * QUOTES.length));

  const slides = [
    { id: "cycle", node: <CycleSlide /> },
    { id: "mantra", node: <MantraSlide text={MANTRAS[mantraIdx]} /> },
    { id: "quote", node: <QuoteSlide quote={QUOTES[quoteIdx]} /> },
  ];

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoplayDone, setAutoplayDone] = useState(false);
  const [userControlled, setUserControlled] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const autoplayOn = !paused && !reducedMotion && !autoplayDone && !userControlled;

  useEffect(() => {
    if (!autoplayOn) return;
    timerRef.current = setTimeout(() => {
      setIdx((i) => {
        const next = i + 1;
        if (next >= slides.length) {
          setAutoplayDone(true);
          return slides.length - 1;
        }
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [idx, autoplayOn, slides.length]);

  const go = (next) => {
    setUserControlled(true);
    setIdx((i) => (next + slides.length) % slides.length);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{
        position: "relative",
        marginTop: 14,
        padding: "16px 18px 14px",
        borderRadius: 20,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
        border: `1px solid ${withAlpha(colors.primarySolid, 0.18)}`,
        boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 32px ${withAlpha(colors.primarySolid, 0.06)}`,
        overflow: "hidden",
      }}
      aria-roledescription="carousel"
      aria-label="Repères du jour"
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${withAlpha(colors.spark, 0.18)}, transparent 65%)`,
          filter: "blur(6px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 12,
          minHeight: 96,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            position: "relative",
            textAlign: "left",
          }}
        >
          <div
            key={slides[idx].id}
            style={{
              width: "100%",
              animation: "slideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} sur ${slides.length}`}
          >
            {slides[idx].node}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 6,
          }}
        >
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Reprendre" : "Mettre en pause"}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1px solid ${withAlpha(colors.primarySolid, 0.25)}`,
              background: "transparent",
              color: colors.onSurfaceVariant,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              padding: 0,
            }}
          >
            <Icon name={paused ? "play" : "pause"} size={13} strokeWidth={2} />
          </button>

          <div style={{ display: "flex", gap: 4 }}>
            <button
              type="button"
              onClick={() => go(idx - 1)}
              aria-label="Précédent"
              style={navBtnStyle()}
            >
              <Icon name="arrowLeft" size={14} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(idx + 1)}
              aria-label="Suivant"
              style={navBtnStyle()}
            >
              <Icon name="arrowRight" size={14} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          display: "flex",
          gap: 6,
          justifyContent: "center",
        }}
        role="tablist"
        aria-label="Sélection de slide"
      >
        {slides.map((s, i) => {
          const active = i === idx;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
              style={{
                position: "relative",
                width: active ? 32 : 18,
                height: 28,
                borderRadius: 999,
                border: "none",
                padding: 0,
                background: "transparent",
                cursor: "pointer",
                transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "stretch",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  flex: 1,
                  height: 4,
                  borderRadius: 999,
                  overflow: "hidden",
                  background: active
                    ? withAlpha(colors.primarySolid, 0.15)
                    : "rgba(255,255,255,0.08)",
                }}
              >
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(90deg, ${colors.primarySolid}, ${colors.spark})`,
                      transformOrigin: "left",
                      animation: autoplayOn
                        ? `progressFill ${AUTOPLAY_MS}ms linear both`
                        : "none",
                      transform: autoplayOn ? undefined : "scaleX(1)",
                    }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function navBtnStyle() {
  return {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "transparent",
    color: colors.onSurfaceVariant,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    padding: 0,
  };
}
