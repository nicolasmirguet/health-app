import { HACKS } from "../data/hacks.js";
import { Accordion } from "../components/ui/Accordion.jsx";
import { Tip } from "../components/ui/Tip.jsx";

export function TabHacks() {
  return (
    <div>
      {HACKS.map((cat, ci) => (
        <Accordion key={ci} title={cat.cat} defaultOpen={ci === 0}>
          {cat.hacks.map((h, hi) => (
            <Tip key={hi} title={h.title} desc={h.desc} danger={h.title.startsWith("🚫")} />
          ))}
        </Accordion>
      ))}
    </div>
  );
}
