export const BEP_CYCLE = [
  { day: "J1", phase: "chimio", title: "Début du cycle", icon: "💉", body: "Perfusion Cisplatine + Étoposide + Bléomycine. Hyperhydratation IV. Antiémétiques (ondansétron + aprépitant + dexaméthasone).", tips: "Sucez des bonbons au citron pendant la perfusion pour masquer le goût métallique sécrété dans la salive. Prenez la dexaméthasone le MATIN, jamais après 14h (sinon insomnie).", alert: false },
  { day: "J2", phase: "chimio", title: "Perfusion J2", icon: "💉", body: "Cisplatine + Étoposide continuent. Hydratation massive.", tips: "Buvez 2-4L d'eau mais PAS pendant les repas (30 min avant/après). Mangez froid — les aliments chauds déclenchent les nausées.", alert: false },
  { day: "J3", phase: "chimio", title: "Perfusion J3", icon: "💉", body: "Cisplatine + Étoposide continuent.", tips: "Utilisez des couverts en plastique ou bois — l'acier empire le goût métallique du cisplatine. Gardez des craquelins sur la table de nuit.", alert: false },
  { day: "J4", phase: "chimio", title: "Perfusion J4", icon: "💉", body: "Cisplatine + Étoposide continuent. Fatigue croissante.", tips: "Marche intra-hospitalière 10 min 2×/jour pour prévenir la stase veineuse. Pas d'effort intense.", alert: false },
  { day: "J5", phase: "chimio", title: "Dernière perfusion", icon: "✅", body: "Dernier jour de Cisplatine + Étoposide du cycle. Soulagement.", tips: "Tu as fait le plus dur de la semaine. Protéines 'invisibles' : ajoute de la whey nature dans tes soupes/smoothies.", alert: false },
  { day: "J6", phase: "recup", title: "Début récup", icon: "🌱", body: "Pas de perfusion. Les nausées retardées du cisplatine peuvent arriver maintenant (24-72h post).", tips: "Gingembre en infusion froide ou bière de gingembre dégazée. Régime BRAT si diarrhée (Bananes, Riz, Compote, Toast).", alert: false },
  { day: "J7", phase: "nadir", title: "⚠️ Début du Nadir", icon: "🛡️", body: "Les globules blancs commencent à chuter. L'immunité faiblit.", tips: "RÉGIME CUIT À CŒUR : plus de sushi, charcuterie, fromage au lait cru. Œufs bien cuits. Fruits à peau épaisse uniquement (banane, avocat).", alert: true },
  { day: "J8", phase: "nadir", title: "Bléomycine J8", icon: "💉", body: "Injection de Bléomycine seule. Le nadir s'approfondit.", tips: "Pas de salle de sport publique. Marche douce uniquement. Inspectez vos pieds (la neuropathie masque les blessures).", alert: true },
  { day: "J9-10", phase: "nadir", title: "Nadir profond", icon: "⚠️", body: "Neutrophiles au plus bas. Risque infectieux MAXIMAL. Injection G-CSF possible.", tips: "🚨 Toute fièvre >38°C = URGENCES IMMÉDIATEMENT. Loratadine 10mg si douleurs osseuses du G-CSF.", alert: true },
  { day: "J11-14", phase: "nadir", title: "Creux immunitaire", icon: "🔴", body: "Phase la plus dangereuse. Plaquettes aussi au plus bas.", tips: "Si plaquettes <10,000 : repos ABSOLU, risque de saignement spontané. Évitez les chutes. Brosse à dents ultra-souple.", alert: true },
  { day: "J15", phase: "remontee", title: "Bléomycine J15 + Remontée", icon: "💉", body: "Dernière injection Bléomycine du cycle. Les comptages remontent.", tips: "L'énergie revient doucement. Vélo statique (pieds sanglés) plutôt que tapis de course — la neuropathie altère l'équilibre.", alert: false },
  { day: "J16-18", phase: "remontee", title: "Récupération", icon: "📈", body: "Les globules blancs remontent. L'appétit peut revenir.", tips: "Mets les bouchées doubles sur les protéines et calories. Prépare et CONGÈLE des repas pour le prochain nadir.", alert: false },
  { day: "J19-21", phase: "remontee", title: "Fin de cycle", icon: "🏁", body: "Bilan sanguin pré-cycle suivant. Le corps récupère.", tips: "Profite de cette fenêtre. Mange bien, dors bien, bouge. Prépare ton sac de chimio pour le prochain cycle. Tu as survécu à un cycle — le suivant sera familier.", alert: false },
];

export const PHASE_COLORS = {
  chimio: "#3b82f6",
  nadir: "#ef4444",
  recup: "#22c55e",
  remontee: "#fbbf24",
};

export const CYCLE_NOTES = {
  1: {
    title: "Cycle 1 — Le Baptême du Feu",
    color: "#3b82f6",
    emoji: "🔥",
    summary: "Semaines 1-3. Tout est nouveau : les perfusions, les sensations, le rythme. L'anxiété est normale. Ton corps découvre la chimio.",
    notes: [
      "Premier contact avec le cisplatine — les nausées peuvent être violentes mais les antiémétiques modernes sont puissants",
      "La perte de cheveux commence généralement vers J14-J21 du premier cycle",
      "C'est le cycle où tu apprends TON corps : quels jours sont les pires, quels hacks marchent pour TOI",
      "CECOS : si pas encore fait, la congélation de sperme est URGENTE avant ce cycle",
      "Audiogramme baseline : demande-le MAINTENANT si pas fait",
    ],
  },
  2: {
    title: "Cycle 2 — Tu Connais la Route",
    color: "#fbbf24",
    emoji: "⚡",
    summary: "Semaines 4-6. Tu sais à quoi t'attendre. La fatigue cumulative commence à s'installer. Mais tu es un vétéran maintenant.",
    notes: [
      "La fatigue est plus profonde qu'au cycle 1 — c'est NORMAL, c'est cumulatif",
      "Le goût métallique peut s'intensifier — les couverts plastique deviennent essentiels",
      "Le nadir peut être plus profond → surveille de plus près la température",
      "Le moral peut flancher vers le milieu du traitement — c'est le moment de contacter un psycho-oncologue si pas déjà fait",
      "Continue la marche quotidienne même 10 min — ça combat la fatigue paradoxalement",
    ],
  },
  3: {
    title: "Cycle 3 — Le Mur… et Tu Le Traverses",
    color: "#f97316",
    emoji: "🧱",
    summary: "Semaines 7-9. Le plus dur physiquement. La neuropathie du cisplatine s'accumule. La fatigue est au max. Mais tu as déjà fait LA MOITIÉ.",
    notes: [
      "⚠️ NEUROPATHIE : fourmillements mains/pieds qui s'aggravent — SIGNALE immédiatement à l'oncologue",
      "Si neuropathie grade ≥2 : possible réduction de dose cisplatine ou switch vers VIP",
      "La fatigue cumulative peut donner l'impression que ça ne finira jamais — c'est un mensonge, il reste 1 cycle",
      "Les numérations sanguines mettent plus longtemps à remonter — patience",
      "Bilan DLCO pulmonaire (bléomycine) : si baisse >25%, la bléomycine sera peut-être arrêtée",
      "C'est LE moment où l'entourage doit redoubler de présence — repas apportés, courses faites, ménage pris en charge",
    ],
  },
  4: {
    title: "Cycle 4 — La Dernière Ligne Droite 🏁",
    color: "#22c55e",
    emoji: "🏆",
    summary: "Semaines 10-12. LE DERNIER. Chaque perfusion est la dernière. Chaque jour de nadir est le dernier. La lumière est au bout.",
    notes: [
      "🎯 DERNIER CYCLE. Chaque perfusion que tu reçois est la DERNIÈRE de ta vie",
      "La neuropathie est à son pic — duloxétine 60mg si pas encore prescrite",
      "Le corps est épuisé mais il sait faire maintenant — fais confiance",
      "Prépare-toi mentalement au scanner de fin de traitement (TAP CT + marqueurs) ~3-4 semaines après J21",
      "Masse résiduelle >1cm au scanner = discussion RPLND (curage chirurgical) dans un centre expert",
      "Marqueurs qui se normalisent (AFP, β-hCG, LDH) = excellent signe — vérifie les demi-vies attendues",
      "🎉 Commence à planifier le kebab de la victoire",
    ],
  },
};
