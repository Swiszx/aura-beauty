// All facts verified against:
// - @aurabeauty.sw Instagram
// - Aura Beauty Schweinfurt profile on Planity (5.0 stars / 13 reviews)
// - Fresha listing
// - Public Facebook page
//
// Bilingual DE/EN — Schweinfurt's beauty market includes German locals,
// Turkish-speaking community and English-speaking US Garrison families.

export const studio = {
  name: "Aura Beauty",
  fullName: "Aura Beauty Schweinfurt",
  shortName: "Aura",
  taglineDE: "Permanent Make-up · Wimpern · Brauen · Skin",
  taglineEN: "Permanent Make-up · Lashes · Brows · Skin",
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
    { firstName: "Rabia", roleDE: "Inhaberin & PMU Artist", roleEN: "Owner & PMU Artist" },
    { firstName: "Christina", roleDE: "Beauty-Spezialistin", roleEN: "Beauty Specialist" },
  ],
  hero: {
    eyebrowDE: "Studio · Schweinfurt",
    eyebrowEN: "Studio · Schweinfurt",
    headlineDE: "Eine Aura,\ndie zu dir\ngehört.",
    headlineEN: "An aura\nthat belongs\nto you.",
    subDE: "Permanent Make-up, Wimpern, Brauen und Skin — handgemacht im Studio in der Niederwerrner Straße. Kein One-size-fits-all. Erst die Beratung, dann die Linie.",
    subEN: "Permanent make-up, lashes, brows and skin — done by hand at the studio on Niederwerrner Straße. No one-size-fits-all. Consultation first, then the line.",
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
    reviewCount: 13,
    reviewSource: "Planity",
    instagramHandle: "@aurabeauty.sw",
  },
  paymentsDE: ["Bar", "Karte", "Überweisung"],
  paymentsEN: ["Cash", "Card", "Bank transfer"],
} as const;

export interface Treatment {
  nameDE: string;
  nameEN: string;
  duration?: string;
  price: number | [number, number];
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
  ritualDE: string[];
  ritualEN: string[];
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
    titleDE: 'Brauen, Lidstrich,',
    titleEN: 'Brows, eyeliner,',
    italicDE: 'Lippen.',
    italicEN: 'lips.',
    taglineDE: 'Pigmente, hand-präzise gesetzt. Hält Jahre, sieht aus wie Make-up am Morgen.',
    taglineEN: 'Pigments, hand-placed. Lasts years, reads like fresh morning make-up.',
    descriptionDE: 'Permanent Make-up ist Pigmenttechnik, kein Tattoo. Mit feinster Nadel werden mineralische Pigmente in die obere Hautschicht gesetzt — natürlich, weich, individuell auf deinen Hauttyp und Look abgestimmt. Das Ergebnis hält 1–3 Jahre und verblasst sanft.',
    descriptionEN: 'Permanent make-up is pigment technique, not a tattoo. With the finest needle, mineral pigments are placed into the upper skin layer — natural, soft, tuned to your skin type and look. Results last 1–3 years and fade gently.',
    auraClass: 'aura-pmu',
    accent: 'copper',
    ritualDE: [
      'Beratung — Form, Farbe, Erwartung',
      'Vorzeichnung & Freigabe',
      'Pigmentierung in 2 Sessions',
      'Nachpflege & Termin nach 4 Wochen',
    ],
    ritualEN: [
      'Consultation — shape, colour, expectation',
      'Pre-drawing & approval',
      'Pigmentation across 2 sessions',
      'Aftercare & follow-up at 4 weeks',
    ],
    treatments: [
      {
        nameDE: 'Powderbrows', nameEN: 'Powder brows', duration: '2,5 Std.', price: 319,
        noteDE: 'Inkl. Erstsitzung & Nachbehandlung', noteEN: 'Includes first session & touch-up',
      },
      {
        nameDE: 'Lash Line Enhancement', nameEN: 'Lash line enhancement', duration: '1,5 Std.', price: 249,
        noteDE: 'Subtiler Lidstrich zwischen den Wimpern', noteEN: 'Subtle line between the lashes',
      },
      {
        nameDE: 'Lidstrich (Eyeliner)', nameEN: 'Eyeliner', duration: '2 Std.', price: 289,
      },
    ],
    aftercareDE: 'Erste 7 Tage: Sonne, Sauna und Make-up auf der Stelle vermeiden. Pflegecreme nach Plan. Termin zur Nachpflege nach 4 Wochen.',
    aftercareEN: 'First 7 days: avoid sun, sauna and make-up on the area. Care cream per plan. Touch-up appointment at 4 weeks.',
    shortLabelDE: 'PMU',
    shortLabelEN: 'PMU',
  },
  {
    id: 'lashes',
    eyebrowDE: '02 — Wimpern',
    eyebrowEN: '02 — Lashes',
    titleDE: 'Verlängerung,',
    titleEN: 'Extensions,',
    italicDE: 'Lifting.',
    italicEN: 'lifting.',
    taglineDE: 'Mehr Länge, mehr Volumen — oder einfach die eigenen, deutlich sichtbar.',
    taglineEN: 'More length, more volume — or simply your own, clearly visible.',
    descriptionDE: 'Synthetische Einzelwimpern in 1:1-Technik oder Volumen-Fans, einzeln auf deine Naturwimper geklebt. Hält 4–6 Wochen mit Refill. Lash-Lifting hebt deine eigenen Wimpern für 6–8 Wochen — ohne Kleber, ohne Refill.',
    descriptionEN: 'Synthetic single lashes in 1:1 or volume fans, attached one by one to your natural lash. Lasts 4–6 weeks with refill. Lash lifting raises your own lashes for 6–8 weeks — no glue, no refill.',
    auraClass: 'aura-lashes',
    accent: 'violet',
    ritualDE: [
      'Stilberatung — natürlich, klassisch oder dramatisch',
      'Mapping auf deine Augenform',
      'Auftrag mit medizinischem Kleber',
      'Refill-Termin in 3–4 Wochen',
    ],
    ritualEN: [
      'Style consultation — natural, classic or dramatic',
      'Mapping to your eye shape',
      'Application with medical-grade adhesive',
      'Refill appointment in 3–4 weeks',
    ],
    treatments: [
      { nameDE: 'Wimpernverlängerung — Neuauftrag', nameEN: 'Lash extensions — full set', duration: '2 Std.', price: [119, 149] },
      { nameDE: 'Wimpern-Refill (3 Wochen)', nameEN: 'Lash refill (3 weeks)', duration: '1 Std.', price: 65 },
      { nameDE: 'Wimpern-Lifting & Färbung', nameEN: 'Lash lift & tint', duration: '1 Std.', price: 75 },
    ],
    aftercareDE: 'Erste 24 Std. Wasser meiden. Keine Wimperntusche auf Ölbasis, kein Reiben. Refill alle 3–4 Wochen für gleichbleibendes Volumen.',
    aftercareEN: 'First 24 hours: avoid water. No oil-based mascara, no rubbing. Refill every 3–4 weeks for consistent volume.',
    shortLabelDE: 'Wimpern',
    shortLabelEN: 'Lashes',
  },
  {
    id: 'brows',
    eyebrowDE: '03 — Brauen',
    eyebrowEN: '03 — Brows',
    titleDE: 'Lifting, Threading,',
    titleEN: 'Lifting, threading,',
    italicDE: 'Hybrid.',
    italicEN: 'hybrid.',
    taglineDE: 'Form, Farbe, Richtung — die Brauen, die dein Gesicht sortieren.',
    taglineEN: 'Shape, colour, direction — the brows that bring your face into focus.',
    descriptionDE: 'Brow-Lifting setzt deine Brauenhaare in eine gestreckte, aufgerichtete Form für 6–8 Wochen. Threading entfernt Härchen exakt an der richtigen Stelle. Hybrid Brows kombinieren Färbung und Henna für definierte Form ohne Permanent-Pigment.',
    descriptionEN: 'Brow lifting sets your brow hairs in a lifted, defined position for 6–8 weeks. Threading removes hairs exactly where needed. Hybrid brows combine tint and henna for a defined shape without permanent pigment.',
    auraClass: 'aura-brows',
    accent: 'gold',
    ritualDE: [
      'Vermessung & goldener Schnitt',
      'Form festlegen',
      'Lift, Threading oder Henna',
      'Tönung passend zum Haupthaar',
    ],
    ritualEN: [
      'Measure & golden ratio',
      'Define the shape',
      'Lift, threading or henna',
      'Tint to match your hair',
    ],
    treatments: [
      { nameDE: 'Brow-Lifting', nameEN: 'Brow lifting', duration: '45 Min.', price: 49 },
      { nameDE: 'Augenbrauen-Threading', nameEN: 'Brow threading', duration: '15 Min.', price: 12 },
      { nameDE: 'Hybrid Brows (Henna + Färbung)', nameEN: 'Hybrid brows (henna + tint)', duration: '45 Min.', price: 39 },
    ],
    shortLabelDE: 'Brauen',
    shortLabelEN: 'Brows',
  },
  {
    id: 'skin',
    eyebrowDE: '04 — Skin',
    eyebrowEN: '04 — Skin',
    titleDE: 'Aquafacial,',
    titleEN: 'Aquafacial,',
    italicDE: 'Microneedling.',
    italicEN: 'microneedling.',
    taglineDE: 'Tiefenreinigung mit Druckwasser. Kontrollierte Hauterneuerung.',
    taglineEN: 'Deep cleanse with pressurised water. Controlled skin renewal.',
    descriptionDE: 'Aquafacial reinigt die Haut mit Vakuum und Wirkstoff-Spüllösung — sanft, aber tief. Microneedling setzt mikroskopisch feine Kanäle, durch die Wirkstoffe einziehen und neue Kollagenbildung anregt. Nach 3–5 Sitzungen sichtbar feinporiger und straffer.',
    descriptionEN: 'Aquafacial cleanses the skin with vacuum and active rinsing solution — gentle but deep. Microneedling creates microscopic channels through which actives sink in and new collagen is triggered. Visibly tighter and finer-pored after 3–5 sessions.',
    auraClass: 'aura-skin',
    accent: 'rose',
    ritualDE: [
      'Hautanalyse',
      'Reinigung & Vorbereitung',
      'Behandlung in 4–6 Schritten',
      'Wirkstoff-Maske & Pflegeplan',
    ],
    ritualEN: [
      'Skin analysis',
      'Cleanse & prep',
      'Treatment in 4–6 steps',
      'Active mask & home routine',
    ],
    treatments: [
      { nameDE: 'Aquafacial', nameEN: 'Aquafacial', duration: '45 Min.', price: 89 },
      { nameDE: 'Microneedling', nameEN: 'Microneedling', duration: '60 Min.', price: 95 },
      {
        nameDE: 'Pigmentflecken-Entfernung', nameEN: 'Pigment-spot removal', price: [69, 159],
        noteDE: 'Pro Sitzung, je nach Größe', noteEN: 'Per session, depending on size',
      },
    ],
    aftercareDE: 'Nach Microneedling: 24 Std. ohne Make-up, 48 Std. ohne Sonne. Hochwertige Pflegecreme nach Plan, mindestens LSF 30 vor jedem Spaziergang.',
    aftercareEN: 'After microneedling: 24 hrs no make-up, 48 hrs no sun. Quality moisturiser per plan, at least SPF 30 before any time outdoors.',
    shortLabelDE: 'Skin',
    shortLabelEN: 'Skin',
  },
  {
    id: 'body',
    eyebrowDE: '05 — Body & Beyond',
    eyebrowEN: '05 — Body & Beyond',
    titleDE: 'Waxing, G8,',
    titleEN: 'Waxing, G8,',
    italicDE: 'Fußpflege.',
    italicEN: 'foot care.',
    taglineDE: 'Glätten, formen, pflegen — Körperbehandlungen mit ruhiger Hand.',
    taglineEN: 'Smooth, shape, restore — body work with a calm hand.',
    descriptionDE: 'Waxing in allen Zonen — sanft, hygienisch, individuell. G8 Anti-Cellulite-Massage mit kontrollierter Vakuum-Saugmechanik gegen Orangenhaut. Klassische Fußpflege für gesunde, wohlgepflegte Füße.',
    descriptionEN: 'Waxing in every zone — gentle, hygienic, individual. G8 anti-cellulite massage with controlled vacuum suction against orange-peel skin. Classic pedicure for healthy, cared-for feet.',
    auraClass: 'aura-body',
    accent: 'pearl-glow',
    ritualDE: [
      'Körperberatung',
      'Vorbereitung & Pflege',
      'Behandlung mit Pausen',
      'Beruhigung & Pflege-Empfehlung',
    ],
    ritualEN: [
      'Body consultation',
      'Prep & care',
      'Treatment with rests',
      'Calm-down & home care',
    ],
    treatments: [
      { nameDE: 'Waxing — Bein komplett', nameEN: 'Waxing — full leg', duration: '45 Min.', price: 49 },
      { nameDE: 'Waxing — Brazilian', nameEN: 'Waxing — Brazilian', duration: '30 Min.', price: 39 },
      { nameDE: 'G8 Anti-Cellulite-Massage', nameEN: 'G8 anti-cellulite massage', duration: '45 Min.', price: [69, 89] },
      { nameDE: 'Klassische Fußpflege', nameEN: 'Classic pedicure', duration: '60 Min.', price: 49 },
    ],
    shortLabelDE: 'Body',
    shortLabelEN: 'Body',
  },
];

export const featuredPrices = [
  { labelDE: 'Powderbrows PMU', labelEN: 'Powder Brows PMU', price: 319, duration: '2,5 Std.' },
  { labelDE: 'Wimpernverlängerung', labelEN: 'Lash Extensions', price: 119, duration: '2 Std.', from: true },
  { labelDE: 'Aquafacial', labelEN: 'Aquafacial', price: 89, duration: '45 Min.' },
  { labelDE: 'Microneedling', labelEN: 'Microneedling', price: 95, duration: '60 Min.' },
];

export const philosophy = [
  {
    eyebrowDE: 'Hauttyp zuerst', eyebrowEN: 'Skin type first',
    titleDE: 'Beratung vor jeder Linie.', titleEN: 'Consultation before any line.',
    bodyDE: 'Permanent Make-up ist nicht eine Nadel und Farbe — es ist Form, Hautton, Pigmenthaltbarkeit. Jede Behandlung beginnt mit einem ruhigen Vorgespräch.',
    bodyEN: 'Permanent make-up is not just needle and pigment — it is shape, undertone, pigment retention. Every treatment starts with a calm conversation.',
  },
  {
    eyebrowDE: 'Hand-präzise', eyebrowEN: 'Hand-precise',
    titleDE: 'Mineralische Pigmente, Mikronadel.', titleEN: 'Mineral pigments, micro-needle.',
    bodyDE: 'Wir arbeiten mit feinster Mikronadel und mineralischen Pigmenten, die mit der Zeit weich verblassen — nie blau, nie kalt.',
    bodyEN: 'We work with the finest micro-needle and mineral pigments that fade softly over time — never blue, never cold.',
  },
  {
    eyebrowDE: 'Nachsorge mit Plan', eyebrowEN: 'Aftercare with a plan',
    titleDE: 'Vier Wochen später, wir sehen uns wieder.', titleEN: 'Four weeks later, we see each other again.',
    bodyDE: 'Jede PMU-Behandlung beinhaltet einen Termin zur Nachpflege. Ohne Aufpreis. Heilung ist Teil des Ergebnisses.',
    bodyEN: 'Every PMU treatment includes a follow-up appointment. No surcharge. Healing is part of the result.',
  },
];

export const studioFacts = [
  { eyebrowDE: 'Adresse', eyebrowEN: 'Address', value: 'Niederwerrner Str. 14 1/2, 97421 Schweinfurt' },
  { eyebrowDE: 'Bewertung', eyebrowEN: 'Rating', valueDE: '5,0 / 5 · 13 Bewertungen auf Planity', valueEN: '5.0 / 5 · 13 reviews on Planity' },
  { eyebrowDE: 'Sprache', eyebrowEN: 'Languages', valueDE: 'Deutsch · Türkisch · English', valueEN: 'German · Turkish · English' },
  { eyebrowDE: 'Buchung', eyebrowEN: 'Booking', valueDE: 'Planity · WhatsApp · Telefon', valueEN: 'Planity · WhatsApp · Phone' },
];

export function formatPrice(p: number | [number, number], locale: 'de' | 'en' = 'de'): string {
  const fromLabel = locale === 'de' ? 'ab' : 'from';
  if (Array.isArray(p)) return `${fromLabel} ${p[0]} €`;
  return `${p} €`;
}
