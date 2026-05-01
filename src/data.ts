// All facts verified against the Planity profile of Aura Beauty Schweinfurt:
// https://www.planity.com/de-DE/aura-beauty-schweinfurt-97421
// Plus @aurabeauty.sw IG and the Facebook page.
// Site is bilingual DE/EN — Schweinfurt has a sizeable English-speaking
// US Garrison community alongside German locals.

export const studio = {
  name: "Aura Beauty",
  fullName: "Aura Beauty Schweinfurt",
  shortName: "Aura",
  taglineDE: "Permanent Make-up · Wimpern · Brauen · Hautpflege · Körper",
  taglineEN: "Permanent Make-up · Lashes · Brows · Skin · Body",
  city: "Schweinfurt",
  postalCode: "97421",
  country: "Deutschland",
  artist: {
    firstName: "Rabia",
    lastName: "Cihan",
    fullName: "Rabia Cihan",
    roleDE: "Inhaberin & PMU Artist",
    roleEN: "Owner & PMU Artist",
  },
  team: [
    { firstName: "Rabia", roleDE: "Inhaberin & PMU Artist", roleEN: "Owner & PMU Artist", photo: "/photos/team.jpg" },
  ],
  hero: {
    eyebrowDE: "Studio · Schweinfurt",
    eyebrowEN: "Studio · Schweinfurt",
    headlineDE: "Eine Aura,\ndie zu dir\ngehört.",
    headlineEN: "An aura\nthat belongs\nto you.",
    subDE: "Permanent Make-up, Wimpern, Brauen, Hautpflege und Körper — von Hand gearbeitet, im Studio in der Niederwerrner Straße. Über 40 Behandlungen. Erstberatung jederzeit kostenlos.",
    subEN: "Permanent make-up, lashes, brows, skin and body — done by hand at the studio on Niederwerrner Straße. Over 40 treatments. Consultation always free.",
  },
  contact: {
    phone: "+49 173 5236401",
    phoneDisplay: "0173 5236401",
    email: "aurabeautysw@outlook.de",
    whatsapp: "https://wa.me/491735236401",
    whatsappDisplay: "+49 173 5236401",
    instagram: "https://www.instagram.com/aurabeauty.sw/",
    instagramHandle: "@aurabeauty.sw",
    facebook: "https://www.facebook.com/p/Aura-Beauty-61554794506176/",
    planity: "https://www.planity.com/de-DE/aura-beauty-schweinfurt-97421",
    googleReviews: "https://www.google.com/maps/search/?api=1&query=Aura+Beauty+Schweinfurt+Niederwerrner",
    address: "Niederwerrner Str. 14 1/2",
  },
  hours: [
    { day: "Mo", hoursDE: "09:30 – 18:00", hoursEN: "09:30 – 18:00" },
    { day: "Di", hoursDE: "09:30 – 18:00", hoursEN: "09:30 – 18:00", dayEN: "Tu" },
    { day: "Mi", hoursDE: "09:30 – 18:00", hoursEN: "09:30 – 18:00", dayEN: "We" },
    { day: "Do", hoursDE: "09:30 – 18:00", hoursEN: "09:30 – 18:00", dayEN: "Th" },
    { day: "Fr", hoursDE: "09:30 – 18:00", hoursEN: "09:30 – 18:00" },
    { day: "Sa", hoursDE: "12:00 – 18:00", hoursEN: "12:00 – 18:00" },
    { day: "So", hoursDE: "Geschlossen", hoursEN: "Closed", dayEN: "Su" },
  ],
  social: {
    rating: 5.0,
    reviewCount: 102,
    reviewSource: "Google",
    instagramHandle: "@aurabeauty.sw",
  },
  paymentsDE: ["Bar", "Karte", "Überweisung"],
  paymentsEN: ["Cash", "Card", "Bank transfer"],
} as const;

export interface Treatment {
  nameDE: string;
  nameEN: string;
  duration?: string;
  price: number | [number, number] | 'free';
  noteDE?: string;
  noteEN?: string;
}

export interface ServiceFamily {
  id: string;
  eyebrowDE: string;
  eyebrowEN: string;
  titleDE: string;
  titleEN: string;
  italicDE: string;
  italicEN: string;
  taglineDE: string;
  taglineEN: string;
  descriptionDE: string;
  descriptionEN: string;
  auraClass: string;
  accent: string;
  /** Real studio photo for tile/section background */
  photo: string;
  ritualDE: string[];
  ritualEN: string[];
  /** Optional sub-groups inside a family — used for long lists like Body & Beyond. */
  groups?: { titleDE: string; titleEN: string; treatments: Treatment[] }[];
  treatments: Treatment[];
  aftercareDE?: string;
  aftercareEN?: string;
  shortLabelDE: string;
  shortLabelEN: string;
}

export const services: ServiceFamily[] = [
  {
    id: 'pmu',
    eyebrowDE: '01 — Permanent Make-up',
    eyebrowEN: '01 — Permanent Make-up',
    titleDE: 'Brauen, Wimpernkranz,',
    titleEN: 'Brows, lash line,',
    italicDE: 'Babyliner.',
    italicEN: 'baby liner.',
    taglineDE: 'Pigmente, präzise von Hand gesetzt. Hält Jahre, wirkt wie frisches Tages-Make-up.',
    taglineEN: 'Pigments, hand-placed. Lasts years, looks like fresh morning make-up.',
    descriptionDE: 'Permanent Make-up ist Pigmenttechnik, kein Tattoo. Mit feinster Nadel werden mineralische Pigmente in die obere Hautschicht gesetzt — natürlich, weich, individuell auf deinen Hauttyp und Look abgestimmt. Jede Behandlung beinhaltet eine Nachbehandlung nach 4 Wochen.',
    descriptionEN: 'Permanent make-up is pigment technique, not a tattoo. With the finest needle, mineral pigments are placed into the upper skin layer — natural, soft, tuned to your skin type and look. Every treatment includes a touch-up at 4 weeks.',
    auraClass: 'aura-pmu',
    accent: 'copper',
    photo: '/photos/neon-pmu.jpg',
    ritualDE: [
      'Kostenlose Erstberatung — Form, Farbe, Erwartung',
      'Vorzeichnung & Freigabe',
      'Pigmentierung (Erstsitzung)',
      'Nachbehandlung nach 4 Wochen',
    ],
    ritualEN: [
      'Free first consultation — shape, colour, expectation',
      'Pre-drawing & approval',
      'Pigmentation (first session)',
      'Touch-up at 4 weeks',
    ],
    treatments: [
      { nameDE: 'Powderbrows', nameEN: 'Powder brows', duration: '2 Std. 30 Min.', price: 319 },
      { nameDE: 'Nachbehandlung Powderbrows', nameEN: 'Powder brows touch-up', duration: '1 Std.', price: 69 },
      { nameDE: 'Wimpernkranzverdichtung', nameEN: 'Lash line enhancement', duration: '2 Std.', price: 249 },
      { nameDE: 'Nachbehandlung Wimpernkranzverdichtung', nameEN: 'Lash line touch-up', duration: '1 Std.', price: 59 },
      { nameDE: 'Wimpernkranzverdichtung mit Babyliner', nameEN: 'Lash line with baby liner', duration: '2 Std.', price: 289 },
      { nameDE: 'Pigmententfernung (BB Remover)', nameEN: 'Pigment removal (BB remover)', duration: '1 Std.', price: 99 },
      { nameDE: 'Beratungsgespräch PMU', nameEN: 'PMU consultation', duration: '15 Min.', price: 'free', noteDE: 'Unverbindlich, jederzeit', noteEN: 'No commitment, any time' },
    ],
    aftercareDE: 'Erste 7 Tage: Sonne, Sauna und Make-up auf der Stelle vermeiden. Pflegecreme nach Plan. Termin zur Nachpflege nach 4 Wochen ist im Preis enthalten.',
    aftercareEN: 'First 7 days: avoid sun, sauna and make-up on the area. Care cream per plan. The 4-week touch-up is included in the price.',
    shortLabelDE: 'PMU',
    shortLabelEN: 'PMU',
  },
  {
    id: 'lashes',
    eyebrowDE: '02 — Wimpern',
    eyebrowEN: '02 — Lashes',
    titleDE: 'Classic, Volumen,',
    titleEN: 'Classic, volume,',
    italicDE: 'Lifting.',
    italicEN: 'lifting.',
    taglineDE: 'Drei Wimpern-Techniken — von dezent bis dramatisch — plus klassisches Lifting ohne Kleber.',
    taglineEN: 'Three lash techniques — from subtle to dramatic — plus a classic lift without glue.',
    descriptionDE: 'Klassische 1:1-Verlängerung für natürliche Länge, Soft Volumen für mehr Tiefe, Deluxe Volumen für maximalen Effekt. Jede Wimper einzeln auf deine Naturwimper geklebt. Hält 4–6 Wochen, mit Refill auch länger. Lash-Lifting hebt deine eigenen Wimpern für 6–8 Wochen — ohne Kleber, ohne Refill.',
    descriptionEN: 'Classic 1:1 extensions for natural length, soft volume for more depth, deluxe volume for maximum effect. Each lash glued individually to your natural lash. Lasts 4–6 weeks with refill. Lash lifting raises your own lashes for 6–8 weeks — no glue, no refill.',
    auraClass: 'aura-lashes',
    accent: 'violet',
    photo: '/photos/eye-lashes.jpg',
    ritualDE: [
      'Stilberatung — Classic, Volumen oder Lift',
      'Mapping auf deine Augenform',
      'Auftrag mit medizinischem Kleber',
      'Refill-Termin in 3–4 Wochen',
    ],
    ritualEN: [
      'Style consultation — classic, volume or lift',
      'Mapping to your eye shape',
      'Application with medical-grade adhesive',
      'Refill appointment in 3–4 weeks',
    ],
    groups: [
      {
        titleDE: 'Wimpernverlängerung',
        titleEN: 'Lash extensions',
        treatments: [
          { nameDE: 'Natural Classic 1:1 — Neumodel', nameEN: 'Natural Classic 1:1 — full set', duration: '2 Std.', price: 119 },
          { nameDE: 'Auffüllen Natural Classic', nameEN: 'Refill — Natural Classic', duration: '1 Std.', price: 60 },
          { nameDE: 'Soft Volumen — Neumodel', nameEN: 'Soft Volume — full set', duration: '2 Std.', price: 129 },
          { nameDE: 'Auffüllen Soft Volumen', nameEN: 'Refill — Soft Volume', duration: '1 Std.', price: 65 },
          { nameDE: 'Deluxe Volumen — Neumodel', nameEN: 'Deluxe Volume — full set', duration: '2 Std.', price: 149 },
        ],
      },
      {
        titleDE: 'Lash & Browlifting',
        titleEN: 'Lash & brow lifting',
        treatments: [
          { nameDE: 'Lashlifting inkl. Färben & Keratinpflege', nameEN: 'Lash lifting incl. tint & keratin', duration: '50 Min.', price: 69 },
          { nameDE: 'Korean Lashlifting', nameEN: 'Korean lash lifting', duration: '50 Min.', price: 69 },
          { nameDE: 'Browlifting mit Keratinpflege', nameEN: 'Brow lifting with keratin', duration: '50 Min.', price: 69 },
          { nameDE: 'Kombi: Lash & Browlifting', nameEN: 'Combo: lash & brow lifting', duration: '1 Std. 20 Min.', price: 99 },
          { nameDE: 'Browlifting & Hybrid Brows', nameEN: 'Brow lifting + hybrid brows', duration: '1 Std. 5 Min.', price: 89 },
        ],
      },
    ],
    treatments: [],
    aftercareDE: 'Erste 24 Std. Wasser meiden. Keine Wimperntusche auf Ölbasis, kein Reiben. Refill alle 3–4 Wochen für gleichbleibendes Volumen.',
    aftercareEN: 'First 24 hours: avoid water. No oil-based mascara, no rubbing. Refill every 3–4 weeks for consistent volume.',
    shortLabelDE: 'Wimpern',
    shortLabelEN: 'Lashes',
  },
  {
    id: 'brows',
    eyebrowDE: '03 — Brauen',
    eyebrowEN: '03 — Brows',
    titleDE: 'Threading, Hybrid,',
    titleEN: 'Threading, hybrid,',
    italicDE: 'Lifting.',
    italicEN: 'lifting.',
    taglineDE: 'Form, Farbe, Wuchs — die Brauen, die dein Gesicht rahmen.',
    taglineEN: 'Shape, colour, direction — the brows that frame your face.',
    descriptionDE: 'Klassisches orientalisches Faden-Threading entfernt Härchen exakt an der richtigen Stelle. Hybrid Brows kombinieren Färbung und Henna für definierte Form ohne Permanent-Pigment. Browlifting setzt deine Brauenhaare in eine gestreckte Form für 6–8 Wochen.',
    descriptionEN: 'Classic oriental thread threading removes hairs exactly where needed. Hybrid brows combine tint and henna for a defined shape without permanent pigment. Brow lifting sets your brow hairs in a lifted, defined position for 6–8 weeks.',
    auraClass: 'aura-brows',
    accent: 'gold',
    photo: '/photos/lash-serum.jpg',
    ritualDE: [
      'Vermessung & goldener Schnitt',
      'Form festlegen',
      'Threading, Henna oder Lift',
      'Tönung passend zum Haupthaar',
    ],
    ritualEN: [
      'Measure & golden ratio',
      'Define the shape',
      'Threading, henna or lift',
      'Tint to match your hair',
    ],
    groups: [
      {
        titleDE: 'Threading (Faden zupfen)',
        titleEN: 'Threading',
        treatments: [
          { nameDE: 'Augenbrauen zupfen & formen', nameEN: 'Brows — full shape', duration: '20 Min.', price: 20 },
          { nameDE: 'Augenbrauen — nur Außenrum', nameEN: 'Brows — outline only', duration: '15 Min.', price: 12 },
          { nameDE: 'Damenbart', nameEN: 'Upper lip thread', duration: '5 Min.', price: 8 },
          { nameDE: 'Kinn', nameEN: 'Chin', duration: '10 Min.', price: 8 },
          { nameDE: 'Hals', nameEN: 'Neck', duration: '15 Min.', price: 10 },
        ],
      },
      {
        titleDE: 'Hybrid Brows & Lifting',
        titleEN: 'Hybrid brows & lifting',
        treatments: [
          { nameDE: 'Hybrid Brows (Henna + Färbung)', nameEN: 'Hybrid brows (henna + tint)', duration: '45 Min.', price: 39 },
          { nameDE: 'Browlifting & Hybrid Kombi', nameEN: 'Brow lifting + hybrid combo', duration: '1 Std.', price: 89 },
          { nameDE: 'Browlifting mit Keratinpflege', nameEN: 'Brow lifting with keratin', duration: '50 Min.', price: 69 },
        ],
      },
    ],
    treatments: [],
    shortLabelDE: 'Brauen',
    shortLabelEN: 'Brows',
  },
  {
    id: 'skin',
    eyebrowDE: '04 — Hautpflege',
    eyebrowEN: '04 — Skin',
    titleDE: 'Aquafacial, Microneedling,',
    titleEN: 'Aquafacial, microneedling,',
    italicDE: 'Aquarücken.',
    italicEN: 'back facial.',
    taglineDE: 'Sanfte Tiefenreinigung und kontrollierte Hauterneuerung — mit Lichttherapie.',
    taglineEN: 'Gentle deep cleanse and controlled skin renewal — with light therapy.',
    descriptionDE: 'Aquafacial reinigt die Haut mit Vakuum und Wirkstoffserum — sanft, aber tief, mit integrierter Lichttherapie. Drei Stufen, je nach Hautziel. Microneedling regt die Kollagenbildung an, sichtbar nach 3–5 Sitzungen. Auch für den Rücken: Aquarücken-Tiefenreinigung gegen Pickel und unreine Haut an Schultern und Rücken.',
    descriptionEN: 'Aquafacial cleanses the skin with vacuum and active rinse — gentle but deep, with integrated light therapy. Three levels depending on skin goal. Microneedling triggers collagen, visible after 3–5 sessions. Also for the back: Aqua-back deep cleanse against breakouts on shoulders and back.',
    auraClass: 'aura-skin',
    accent: 'rose',
    photo: '/photos/treatment-room.jpg',
    ritualDE: [
      'Kostenlose Hautanalyse',
      'Reinigung & Vorbereitung',
      'Behandlung in 4–6 Schritten',
      'Wirkstoff-Maske & Pflegeplan',
    ],
    ritualEN: [
      'Free skin analysis',
      'Cleanse & prep',
      'Treatment in 4–6 steps',
      'Active mask & home routine',
    ],
    groups: [
      {
        titleDE: 'Gesicht',
        titleEN: 'Face',
        treatments: [
          { nameDE: 'Aquafacial — Light Edition', nameEN: 'Aquafacial — light edition', duration: '45 Min.', price: 89, noteDE: 'Inkl. Lichttherapie', noteEN: 'Incl. light therapy' },
          { nameDE: 'Aquafacial — Standard', nameEN: 'Aquafacial — standard', duration: '1 Std.', price: 99, noteDE: 'Inkl. Lichttherapie', noteEN: 'Incl. light therapy' },
          { nameDE: 'Aquafacial — Deluxe', nameEN: 'Aquafacial — deluxe', duration: '1 Std. 30 Min.', price: 129, noteDE: 'Inkl. Lichttherapie', noteEN: 'Incl. light therapy' },
          { nameDE: 'Microneedling inkl. Lichttherapie', nameEN: 'Microneedling incl. light therapy', duration: '1 Std.', price: 95 },
          { nameDE: 'Extra Wirkstoff-Ampulle', nameEN: 'Extra active ampule', duration: '10 Min.', price: 7 },
        ],
      },
      {
        titleDE: 'Rücken',
        titleEN: 'Back',
        treatments: [
          { nameDE: 'Aquarücken Tiefenreinigung', nameEN: 'Aqua-back deep cleanse', duration: '50 Min.', price: 47 },
          { nameDE: 'Extra Ampulle (Rücken)', nameEN: 'Extra ampule (back)', duration: '10 Min.', price: 14 },
        ],
      },
      {
        titleDE: 'Beratung',
        titleEN: 'Consultation',
        treatments: [
          { nameDE: 'Hautanalyse & Beratung', nameEN: 'Skin analysis & consultation', duration: '15 Min.', price: 'free' },
        ],
      },
    ],
    treatments: [],
    aftercareDE: 'Nach Microneedling: 24 Std. ohne Make-up, 48 Std. ohne Sonne. Hochwertige Pflegecreme nach Plan, mindestens LSF 30 vor jedem Spaziergang.',
    aftercareEN: 'After microneedling: 24 hrs no make-up, 48 hrs no sun. Quality moisturiser per plan, at least SPF 30 before any time outdoors.',
    shortLabelDE: 'Hautpflege',
    shortLabelEN: 'Skin',
  },
  {
    id: 'body',
    eyebrowDE: '05 — Körper',
    eyebrowEN: '05 — Body',
    titleDE: 'G8, Waxing,',
    titleEN: 'G8, waxing,',
    italicDE: 'Fußpflege.',
    italicEN: 'pedicure.',
    taglineDE: 'Glätten, formen, pflegen — Körperbehandlungen mit ruhiger Hand.',
    taglineEN: 'Smooth, shape, restore — body treatments, done by hand.',
    descriptionDE: 'G8 Anti-Cellulite arbeitet mit kontrolliertem Vakuum — gezielt nach Körperzone. Waxing mit hochwertigem Wachs für die wichtigsten Gesichtspartien. Klassische Fußpflege für gesunde, gepflegte Füße. Beratung zum G8 Bodyforming jederzeit kostenlos.',
    descriptionEN: 'G8 anti-cellulite with controlled vacuum suction — targeted by body zone. Waxing with high-quality wax in every area of the face. Classic pedicure for healthy, cared-for feet. Free body forming consultation any time.',
    auraClass: 'aura-body',
    accent: 'pearl-glow',
    photo: '/photos/skin-face.jpg',
    ritualDE: [
      'Beratung & Zielfestlegung',
      'Vorbereitung der Zone',
      'Behandlung mit Pausen',
      'Beruhigung & Pflege-Empfehlung',
    ],
    ritualEN: [
      'Consultation & goal setting',
      'Zone preparation',
      'Treatment with rests',
      'Calm-down & home care',
    ],
    groups: [
      {
        titleDE: 'G8 Anti-Cellulite & HOT Vakuum',
        titleEN: 'G8 anti-cellulite & HOT vacuum',
        treatments: [
          { nameDE: 'G8 Massage — Bauch', nameEN: 'G8 — abdomen', duration: '25 Min.', price: 29 },
          { nameDE: 'G8 Massage — Po', nameEN: 'G8 — glutes', duration: '20 Min.', price: 29 },
          { nameDE: 'G8 Massage — Oberarme', nameEN: 'G8 — upper arms', duration: '20 Min.', price: 29 },
          { nameDE: 'G8 Massage — Oberschenkel vorne & hinten', nameEN: 'G8 — thighs front & back', duration: '35 Min.', price: 39 },
          { nameDE: 'G8 — Oberschenkel + Innenschenkel', nameEN: 'G8 — thighs incl. inner', duration: '35 Min.', price: 49 },
          { nameDE: 'Beratungsgespräch G8 Bodyforming', nameEN: 'G8 body forming consultation', duration: '15 Min.', price: 'free' },
        ],
      },
      {
        titleDE: 'Waxing (Gesicht)',
        titleEN: 'Waxing (face)',
        treatments: [
          { nameDE: 'Augenbrauen', nameEN: 'Brows', duration: '10 Min.', price: 10 },
          { nameDE: 'Oberlippe', nameEN: 'Upper lip', duration: '5 Min.', price: 10 },
          { nameDE: 'Kinn', nameEN: 'Chin', duration: '5 Min.', price: 10 },
          { nameDE: 'Nase', nameEN: 'Nose', duration: '5 Min.', price: 8 },
          { nameDE: 'Achseln', nameEN: 'Underarms', duration: '15 Min.', price: 20 },
        ],
      },
      {
        titleDE: 'Fußpflege',
        titleEN: 'Foot care',
        treatments: [
          { nameDE: 'Fachfußpflege inkl. Fußbad', nameEN: 'Pedicure incl. foot bath', duration: '1 Std.', price: 38 },
          { nameDE: 'Shellac entfernen (Fremdarbeit)', nameEN: 'Shellac removal (external)', duration: '15 Min.', price: 10 },
        ],
      },
    ],
    treatments: [],
    shortLabelDE: 'Körper',
    shortLabelEN: 'Body',
  },
];

// Top picks for homepage snapshot
export const featuredPrices = [
  { labelDE: 'Powderbrows PMU', labelEN: 'Powder Brows PMU', price: 319, duration: '2,5 Std.' },
  { labelDE: 'Wimpernverlängerung', labelEN: 'Lash Extensions', price: 119, duration: '2 Std.', from: true },
  { labelDE: 'Aquafacial', labelEN: 'Aquafacial', price: 89, duration: '45 Min.' },
  { labelDE: 'Beratung', labelEN: 'Consultation', price: 0, duration: '15 Min.', free: true },
];

export const philosophy = [
  {
    eyebrowDE: 'Hauttyp zuerst', eyebrowEN: 'Skin type first',
    titleDE: 'Beratung vor jeder Linie.', titleEN: 'Consultation before any line.',
    bodyDE: 'Permanent Make-up ist nicht eine Nadel und Farbe — es ist Form, Hautton, Pigmenthaltbarkeit. Jede Behandlung beginnt mit einem ruhigen Vorgespräch — kostenlos.',
    bodyEN: 'Permanent make-up is not just needle and pigment — it is shape, undertone, pigment retention. Every treatment starts with a calm conversation — free of charge.',
  },
  {
    eyebrowDE: 'Präzision von Hand', eyebrowEN: 'Hand-precise',
    titleDE: 'Mineralische Pigmente, feine Mikronadel.', titleEN: 'Mineral pigments, fine micro-needle.',
    bodyDE: 'Wir arbeiten mit feinster Mikronadel und mineralischen Pigmenten, die mit der Zeit weich verblassen — nie blau, nie kalt.',
    bodyEN: 'We work with the finest micro-needle and mineral pigments that fade softly over time — never blue, never cold.',
  },
  {
    eyebrowDE: 'Nachsorge inklusive', eyebrowEN: 'Aftercare included',
    titleDE: 'Vier Wochen später sehen wir uns wieder.', titleEN: 'Four weeks later, we meet again.',
    bodyDE: 'Jede PMU-Behandlung beinhaltet einen Termin zur Nachpflege. Ohne Aufpreis. Heilung ist Teil des Ergebnisses.',
    bodyEN: 'Every PMU treatment includes a follow-up appointment. No surcharge. Healing is part of the result.',
  },
];

export const studioFacts = [
  { eyebrowDE: 'Adresse', eyebrowEN: 'Address', value: 'Niederwerrner Str. 14 1/2, 97421 Schweinfurt' },
  { eyebrowDE: 'Bewertung', eyebrowEN: 'Rating', valueDE: '5,0 / 5 · 102 Bewertungen auf Google', valueEN: '5.0 / 5 · 102 reviews on Google' },
  { eyebrowDE: 'Behandlungen', eyebrowEN: 'Treatments', valueDE: 'Über 40 Behandlungen', valueEN: 'Over 40 treatments' },
  { eyebrowDE: 'Buchung', eyebrowEN: 'Booking', valueDE: 'Planity · WhatsApp · Telefon', valueEN: 'Planity · WhatsApp · Phone' },
];

export function formatPrice(p: number | [number, number] | 'free', locale: 'de' | 'en' = 'de'): string {
  if (p === 'free') return locale === 'de' ? 'kostenlos' : 'free';
  const fromLabel = locale === 'de' ? 'ab' : 'from';
  if (Array.isArray(p)) return `${fromLabel} ${p[0]} €`;
  return `${p} €`;
}

/** Total visible treatment count across all families — for the hero "über 40" claim. */
export function totalTreatmentCount(): number {
  return services.reduce((acc, s) => {
    const groupCount = s.groups?.reduce((a, g) => a + g.treatments.length, 0) ?? 0;
    return acc + s.treatments.length + groupCount;
  }, 0);
}
