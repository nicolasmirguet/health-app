import { DOC_QUESTIONS } from "../data/docQuestions.js";
import { Accordion } from "../components/ui/Accordion.jsx";
import { colors } from "../styles/theme.js";

export function TabQuestions() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <p style={{ color: colors.onSurfaceVariant, fontSize: 14, textAlign: "center", marginBottom: 10, lineHeight: 1.6 }}>
        Coche les questions posées au fur et à mesure des rendez-vous
      </p>
      {DOC_QUESTIONS.map((doc, di) => (
        <Accordion key={doc.who} title={doc.who} defaultOpen={di === 0}>
          {doc.qs.map((q) => (
            <div
              key={q}
              style={{
                padding: "14px 18px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <p style={{ color: colors.onSurfaceVariant, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q}</p>
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
