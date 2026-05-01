import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { studio, studioFacts, philosophy } from '../data';
import AuroraBackground from '../components/AuroraBackground';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';

export default function StudioPage() {
  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24">
      {/* Hero */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="eyebrow text-rose mb-6"
          >
            Studio
          </motion.p>
          <h1 className="display-mega text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.92]" translate="no">
            <RevealText text="Hinter" by="letter" delay={0.2} stagger={0.06} duration={0.85} className="inline-block" />
            <span>&nbsp;</span>
            <RevealText text="der" by="letter" delay={0.45} stagger={0.06} duration={0.85} className="display-italic text-aurora inline-block" />
            <span>&nbsp;</span>
            <RevealText text="Aura." by="letter" delay={0.7} stagger={0.06} duration={0.85} className="inline-block" />
          </h1>
        </div>
      </section>

      {/* Owner intro + facts grid */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7 space-y-8">
              <Reveal kind="rise-blur" delay={1.0} duration={0.8}>
                <p className="font-display italic text-pearl text-2xl md:text-3xl leading-snug">
                  Aura Beauty wird von Rabia Cihan in der Niederwerrner Straße in Schweinfurt geführt — Studio
                  für Permanent Make-up, Wimpern, Brauen, Skin und Body.
                </p>
              </Reveal>
              <Reveal kind="rise" delay={1.15} duration={0.7}>
                <div className="space-y-5 text-mist leading-relaxed text-base md:text-lg max-w-2xl">
                  <p>
                    Mit Christina im Team werden hier Behandlungen mit ruhiger Hand und ehrlicher Beratung
                    angeboten. Beratung in Deutsch und Türkisch — bei Fragen wird die richtige Empfehlung gegeben,
                    auch wenn das heißt, eine Behandlung nicht zu empfehlen.
                  </p>
                  <p>
                    Vor jeder Permanent-Make-up-Sitzung steht ein ruhiges Vorgespräch über Hauttyp, Form und
                    Erwartung. Pigmente sind mineralisch, Mikronadel-Technik ist hand-präzise, Nachpflege gehört
                    zum Termin dazu.
                  </p>
                </div>
              </Reveal>
              <Reveal kind="rise" delay={1.3} duration={0.6}>
                <div className="pt-4">
                  <Link
                    to="/termin"
                    className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                  >
                    Erstberatung buchen <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Facts */}
            <div className="md:col-span-5 md:sticky md:top-32">
              <Reveal kind="rise-blur" delay={1.0} duration={0.8}>
                <div className="relative glass-soft rounded-3xl p-7 md:p-9 overflow-hidden">
                  <AuroraBackground intensity="soft" />
                  <div className="relative z-10">
                    <p className="eyebrow text-fog mb-6">Studio-Profil</p>
                    <ul className="space-y-5">
                      {studioFacts.map(f => (
                        <li key={f.eyebrow} className="border-b last:border-b-0 hairline pb-4 last:pb-0">
                          <p className="eyebrow text-rose mb-1.5">{f.eyebrow}</p>
                          <p className="text-pearl text-sm md:text-base">{f.value}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4">Team</p>
            <h2 className="display-mega text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-12 md:mb-16">
              Zwei Hände,
              <br />
              <span className="display-italic text-aurora">vier Wimpern.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {studio.team.map((m, i) => (
              <Reveal key={m.firstName} kind="rise" scroll delay={i * 0.1}>
                <div className="relative aura-pmu rounded-3xl p-7 md:p-10 overflow-hidden tile-hover hairline border min-h-[220px]">
                  <AuroraBackground intensity="soft" />
                  <div className="relative z-10">
                    <p className="eyebrow text-rose mb-4">0{i + 1}</p>
                    <p className="font-display text-4xl md:text-5xl text-pearl leading-tight mb-2">
                      {m.firstName}
                    </p>
                    <p className="text-mist text-sm">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy expanded */}
      <section className="relative px-5 md:px-10 py-20 md:py-32 overflow-hidden border-y hairline">
        <AuroraBackground intensity="soft" />
        <div className="relative max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4">Philosophie</p>
            <h2 className="display-mega text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-12 md:mb-16 max-w-3xl">
              Wie wir <span className="display-italic text-aurora">arbeiten.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {philosophy.map((p, i) => (
              <Reveal key={p.eyebrow} kind="rise" scroll delay={i * 0.1}>
                <div className="space-y-4">
                  <span className="font-mono text-xs text-fog">0{i + 1}</span>
                  <p className="eyebrow text-rose">{p.eyebrow}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-pearl leading-tight">{p.title}</h3>
                  <p className="text-mist leading-relaxed text-sm md:text-base">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours + Address + Reviews */}
      <section className="px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-4">
              <Reveal kind="rise" scroll>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <Clock size={12} className="text-rose" /> Öffnungszeiten
                </p>
                <ul className="space-y-1.5 text-sm">
                  {studio.hours.map(h => (
                    <li key={h.day} className="flex justify-between gap-4 max-w-xs">
                      <span className="font-mono w-10">{h.day}</span>
                      <span className={h.hours === 'Geschlossen' ? 'text-fog' : 'text-pearl/90'}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-fog max-w-xs leading-relaxed">
                  Termine außerhalb der Zeiten auf Anfrage. Bezahlung: Bar, Karte, Überweisung.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <Reveal kind="rise" scroll delay={0.1}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <MapPin size={12} className="text-rose" /> Adresse
                </p>
                <p className="font-display text-2xl text-pearl mb-2">{studio.contact.address}</p>
                <p className="text-mist mb-6">97421 Schweinfurt</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(studio.contact.address + ' Schweinfurt')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                >
                  In Karte zeigen <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <Reveal kind="rise" scroll delay={0.2}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <Star size={12} className="text-rose" /> Bewertungen
                </p>
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-rose text-rose" />
                  ))}
                  <span className="font-display text-2xl text-pearl ml-1">{studio.social.rating.toFixed(1)}</span>
                </div>
                <p className="text-mist mb-5 text-sm">
                  {studio.social.reviewCount} verifizierte Bewertungen auf {studio.social.reviewSource}.
                </p>
                <a
                  href={studio.contact.planity}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                >
                  Bewertungen lesen <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
