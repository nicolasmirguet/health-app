import { HACKS } from "../data/hacks.js";
import { Accordion } from "../components/ui/Accordion.jsx";
import { Tip } from "../components/ui/Tip.jsx";

export function TabHacks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {HACKS.map((cat, ci) => (
        <Accordion key={cat.cat} title={cat.cat} defaultOpen={ci === 0}>
          {cat.hacks.map((h) => (
            <Tip key={h.title} title={h.title} desc={h.desc} danger={h.danger} />
          ))}
        </Accordion>
      ))}
    </div>
  );
}
