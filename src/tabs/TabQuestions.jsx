import { DOC_QUESTIONS } from "../data/docQuestions.js";
import { Accordion } from "../components/ui/Accordion.jsx";
import { theme as S } from "../styles/theme.js";

export function TabQuestions() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <p style={{ color: S.dim, fontSize: 12, textAlign: "center", marginBottom: 4, fontFamily: S.font }}>
        Coche les questions posées au fur et à mesure des rendez-vous
      </p>
      {DOC_QUESTIONS.map((doc, di) => (
        <Accordion key={di} title={doc.who} defaultOpen={di === 0}>
          {doc.qs.map((q, qi) => (
            <div
              key={qi}
              style={{
                padding: "10px 12px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, lineHeight: 1.5, margin: 0, fontFamily: S.font }}>
                ❓ {q}
              </p>
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
