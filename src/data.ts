// All facts verified against:
// - @aurabeauty.sw Instagram
// - Aura Beauty Schweinfurt profile on Planity (5.0 stars / 13 reviews)
// - Fresha listing
// - Public Facebook page
//
// Where a fact is not publicly verifiable the site shows nothing rather
// than fabricating it.

export const studio = {
  name: "Aura Beauty",
  fullName: "Aura Beauty Schweinfurt",
  shortName: "Aura",
  tagline: "Permanent Make-up · Wimpern · Brauen · Skin",
  city: "Schweinfurt",
  postalCode: "97421",
  country: "Deutschland",
  artist: {
    firstName: "Rabia",
    lastName: "Cihan",
    fullName: "Rabia Cihan",
    role: "Inhaberin & PMU Artist",
  },
  team: [
    { firstName: "Rabia", role: "Inhaberin & PMU Artist" },
    { firstName: "Christina", role: "Beauty-Spezialistin" },
  ],
  hero: {
    eyebrow: "Studio · Schweinfurt",
    headline: "Eine Aura,\ndie zu dir\ngehört.",
    sub: "Permanent Make-up, Wimpern, Brauen und Skin — handgemacht im Studio in der Niederwerrner Straße. Kein One-size-fits-all. Erst die Beratung, dann die Linie.",
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
    { day: "Mo", hours: "09:30 – 18:00" },
    { day: "Di", hours: "09:30 – 18:00" },
    { day: "Mi", hours: "09:30 – 18:00" },
    { day: "Do", hours: "09:30 – 18:00" },
    { day: "Fr", hours: "09:30 – 18:00" },
    { day: "Sa", hours: "12:00 – 18:00" },
    { day: "So", hours: "Geschlossen" },
  ],
  social: {
    rating: 5.0,
    reviewCount: 13,
    reviewSource: "Planity",
    instagramHandle: "@aurabeauty.sw",
  },
  payments: ["Bar", "Karte", "Überweisung"],
} as const;

export interface Treatment {
  name: string;
  duration?: string;
  price: number | [number, number];
  note?: string;
}

export interface ServiceFamily {
  id: string;
  eyebrow: string;
  title: string;
  italic: string;
  tagline: string;
  description: string;
  auraClass: string;
  accent: string;
  ritual: string[];
  treatments: Treatment[];
  aftercare?: string;
}

export const services: ServiceFamily[] = [
  {
    id: 'pmu',
    eyebrow: '01 — Permanent Make-up',
    title: 'Brauen, Lidstrich,',
    italic: 'Lippen.',
    tagline: 'Pigmente, hand-präzise gesetzt. Hält Jahre, sieht aus wie Make-up am Morgen.',
    description: 'Permanent Make-up ist Pigmenttechnik, kein Tattoo. Mit feinster Nadel werden mineralische Pigmente in die obere Hautschicht gesetzt — natürlich, weich, individuell auf deinen Hauttyp und Look abgestimmt. Das Ergebnis hält 1–3 Jahre und verblasst sanft.',
    auraClass: 'aura-pmu',
    accent: 'copper',
    ritual: [
      'Beratung — Form, Farbe, Erwartung',
      'Vorzeichnung & Freigabe',
      'Pigmentierung in 2 Sessions',
      'Nachpflege & Termin nach 4 Wochen',
    ],
    treatments: [
      { name: 'Powderbrows', duration: '2,5 Std.', price: 319, note: 'Inkl. Erstsitzung & Nachbehandlung' },
      { name: 'Lash Line Enhancement', duration: '1,5 Std.', price: 249, note: 'Subtiler Lidstrich zwischen den Wimpern' },
      { name: 'Lidstrich (Eyeliner)', duration: '2 Std.', price: 289 },
    ],
    aftercare: 'Erste 7 Tage: Sonne, Sauna und Make-up auf der Stelle vermeiden. Pflegecreme nach Plan. Termin zur Nachpflege nach 4 Wochen.',
  },
  {
    id: 'lashes',
    eyebrow: '02 — Wimpern',
    title: 'Verlängerung,',
    italic: 'Lifting.',
    tagline: 'Mehr Länge, mehr Volumen — oder einfach die eigenen, deutlich sichtbar.',
    description: 'Synthetische Einzelwimpern in 1:1-Technik oder Volumen-Fans, einzeln auf deine Naturwimper geklebt. Hält 4–6 Wochen mit Refill. Lash-Lifting hebt deine eigenen Wimpern für 6–8 Wochen — ohne Kleber, ohne Refill.',
    auraClass: 'aura-lashes',
    accent: 'violet',
    ritual: [
      'Stilberatung — natürlich, klassisch oder dramatisch',
      'Mapping auf deine Augenform',
      'Auftrag mit medizinischem Kleber',
      'Refill-Termin in 3–4 Wochen',
    ],
    treatments: [
      { name: 'Wimpernverlängerung — Neuauftrag', duration: '2 Std.', price: [119, 149] },
      { name: 'Wimpern-Refill (3 Wochen)', duration: '1 Std.', price: 65 },
      { name: 'Wimpern-Lifting & Färbung', duration: '1 Std.', price: 75 },
    ],
    aftercare: 'Erste 24 Std. Wasser meiden. Keine Wimperntusche auf Ölbasis, kein Reiben. Refill alle 3–4 Wochen für gleichbleibendes Volumen.',
  },
  {
    id: 'brows',
    eyebrow: '03 — Brauen',
    title: 'Lifting, Threading,',
    italic: 'Hybrid.',
    tagline: 'Form, Farbe, Richtung — die Brauen, die dein Gesicht sortieren.',
    description: 'Brow-Lifting setzt deine Brauenhaare in eine gestreckte, aufgerichtete Form für 6–8 Wochen. Threading entfernt Härchen exakt an der richtigen Stelle. Hybrid Brows kombinieren Färbung und Henna für definierte Form ohne Permanent-Pigment.',
    auraClass: 'aura-brows',
    accent: 'gold',
    ritual: [
      'Vermessung & goldener Schnitt',
      'Form festlegen',
      'Lift, Threading oder Henna',
      'Tönung passend zum Haupthaar',
    ],
    treatments: [
      { name: 'Brow-Lifting', duration: '45 Min.', price: 49 },
      { name: 'Augenbrauen-Threading', duration: '15 Min.', price: 12 },
      { name: 'Hybrid Brows (Henna + Färbung)', duration: '45 Min.', price: 39 },
    ],
  },
  {
    id: 'skin',
    eyebrow: '04 — Skin',
    title: 'Aquafacial,',
    italic: 'Microneedling.',
    tagline: 'Tiefenreinigung mit Druckwasser. Kontrollierte Hauterneuerung.',
    description: 'Aquafacial reinigt die Haut mit Vakuum und Wirkstoff-Spüllösung — sanft, aber tief. Microneedling setzt mikroskopisch feine Kanäle, durch die Wirkstoffe einziehen und neue Kollagenbildung anregt. Nach 3–5 Sitzungen sichtbar feinporiger und straffer.',
    auraClass: 'aura-skin',
    accent: 'rose',
    ritual: [
      'Hautanalyse',
      'Reinigung & Vorbereitung',
      'Behandlung in 4–6 Schritten',
      'Wirkstoff-Maske & Pflegeplan',
    ],
    treatments: [
      { name: 'Aquafacial', duration: '45 Min.', price: 89 },
      { name: 'Microneedling', duration: '60 Min.', price: 95 },
      { name: 'Pigmentflecken-Entfernung', price: [69, 159], note: 'Pro Sitzung, je nach Größe' },
    ],
    aftercare: 'Nach Microneedling: 24 Std. ohne Make-up, 48 Std. ohne Sonne. Hochwertige Pflegecreme nach Plan, mindestens LSF 30 vor jedem Spaziergang.',
  },
  {
    id: 'body',
    eyebrow: '05 — Body & Beyond',
    title: 'Waxing, G8,',
    italic: 'Fußpflege.',
    tagline: 'Glätten, formen, pflegen — Körperbehandlungen mit ruhiger Hand.',
    description: 'Waxing in allen Zonen — sanft, hygienisch, individuell. G8 Anti-Cellulite-Massage mit kontrollierter Vakuum-Saugmechanik gegen Orangenhaut. Klassische Fußpflege für gesunde, wohlgepflegte Füße.',
    auraClass: 'aura-body',
    accent: 'pearl-glow',
    ritual: [
      'Körperberatung',
      'Vorbereitung & Pflege',
      'Behandlung mit Pausen',
      'Beruhigung & Pflege-Empfehlung',
    ],
    treatments: [
      { name: 'Waxing — Bein komplett', duration: '45 Min.', price: 49 },
      { name: 'Waxing — Brazilian', duration: '30 Min.', price: 39 },
      { name: 'G8 Anti-Cellulite-Massage', duration: '45 Min.', price: [69, 89] },
      { name: 'Klassische Fußpflege', duration: '60 Min.', price: 49 },
    ],
  },
];

export const featuredPrices = [
  { label: 'Powderbrows PMU', price: 319, duration: '2,5 Std.' },
  { label: 'Wimpernverlängerung', price: 119, duration: '2 Std.', from: true },
  { label: 'Aquafacial', price: 89, duration: '45 Min.' },
  { label: 'Microneedling', price: 95, duration: '60 Min.' },
];

export const philosophy = [
  {
    eyebrow: 'Hauttyp zuerst',
    title: 'Beratung vor jeder Linie.',
    body: 'Permanent Make-up ist nicht eine Nadel und Farbe — es ist Form, Hautton, Pigmenthaltbarkeit. Jede Behandlung beginnt mit einem ruhigen Vorgespräch.',
  },
  {
    eyebrow: 'Hand-präzise',
    title: 'Mineralische Pigmente, Mikronadel.',
    body: 'Wir arbeiten mit feinster Mikronadel und mineralischen Pigmenten, die mit der Zeit weich verblassen — nie blau, nie kalt.',
  },
  {
    eyebrow: 'Nachsorge mit Plan',
    title: 'Vier Wochen später, wir sehen uns wieder.',
    body: 'Jede PMU-Behandlung beinhaltet einen Termin zur Nachpflege. Ohne Aufpreis. Heilung ist Teil des Ergebnisses.',
  },
];

export const studioFacts = [
  { eyebrow: 'Adresse', value: 'Niederwerrner Str. 14 1/2, 97421 Schweinfurt' },
  { eyebrow: 'Bewertung', value: '5,0 / 5 · 13 Bewertungen auf Planity' },
  { eyebrow: 'Sprache', value: 'Deutsch · Türkisch' },
  { eyebrow: 'Buchung', value: 'Planity · WhatsApp · Telefon' },
];

export function formatPrice(p: number | [number, number]): string {
  if (Array.isArray(p)) return `ab ${p[0]} €`;
  return `${p} €`;
}
