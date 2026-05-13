export const RED_FLAGS = [
  { severity: "critical", flag: "🔴 Fièvre > 38°C", desc: "Neutropénie fébrile = URGENCE ABSOLUE. Va aux urgences IMMÉDIATEMENT. Ne prends pas de doliprane en attendant — le médecin doit voir la vraie température.", action: "URGENCES sans délai" },
  { severity: "critical", flag: "🔴 Toux sèche / Essoufflement", desc: "Peut être une toxicité pulmonaire de la bléomycine (pneumopathie interstitielle → SDRA). Arrête tout effort physique.", action: "Consultation urgente même jour" },
  { severity: "critical", flag: "🔴 Saignements spontanés", desc: "Plaquettes <10,000/µL = risque de saignement intracrânien spontané. Hématomes, sang dans les urines/selles, saignements de nez qui ne s'arrêtent pas.", action: "URGENCES + repos absolu" },
  { severity: "urgent", flag: "🟠 Pâleur + vertiges + cœur qui s'emballe", desc: "Anémie critique (hémoglobine <8 g/dL). Possible besoin de transfusion. Arrête toute activité.", action: "Appeler l'oncologue immédiatement" },
  { severity: "urgent", flag: "🟠 Vomissements >24h", desc: "Déshydratation + perte d'électrolytes. Les reins sont déjà stressés par le cisplatine.", action: "Appeler l'oncologue ou aller aux urgences si incapable de garder des liquides" },
  { severity: "urgent", flag: "🟠 Douleur thoracique", desc: "Peut être liée à la bléomycine ou à une embolie pulmonaire (risque accru sous chimio).", action: "URGENCES" },
  { severity: "watch", flag: "🟡 Fourmillements mains/pieds intenses", desc: "Neuropathie grade ≥2. Signale à l'oncologue — peut nécessiter ajustement de dose cisplatine.", action: "Signaler au prochain RDV (ou avant si ça progresse vite)" },
  { severity: "watch", flag: "🟡 SpO2 < 95% sur oxymètre", desc: "Désaturation = indicateur précoce de toxicité pulmonaire bléomycine.", action: "Consultation urgente" },
];
