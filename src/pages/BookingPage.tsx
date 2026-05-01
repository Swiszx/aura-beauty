import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { studio, services } from '../data';
import AuroraBackground from '../components/AuroraBackground';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';

export default function BookingPage() {
  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24">
      {/* Hero */}
      <section className="px-5 md:px-10 mb-16 md:mb-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="eyebrow text-rose mb-6"
          >
            Termin
          </motion.p>
          <h1 className="display-mega text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.92] mb-8" translate="no">
            <RevealText text="Buch" by="letter" delay={0.2} stagger={0.06} duration={0.85} className="inline-block" />
            <span>&nbsp;</span>
            <RevealText text="dir" by="letter" delay={0.42} stagger={0.06} duration={0.85} className="display-italic text-aurora inline-block" />
            <br />
            <RevealText text="deine Aura." by="letter" delay={0.65} stagger={0.06} duration={0.85} className="inline-block" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-mist max-w-xl text-base md:text-lg leading-relaxed"
          >
            Drei Wege zum Termin. Wähl was zu dir passt — Antwort meist am gleichen Tag.
          </motion.p>
        </div>
      </section>

      {/* Three booking channels */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {/* Planity — primary */}
            <Reveal kind="rise-blur" scroll>
              <a
                href={studio.contact.planity}
                target="_blank"
                rel="noreferrer"
                className="relative aura-pmu rounded-3xl p-7 md:p-9 block overflow-hidden tile-hover hairline border h-full"
              >
                <AuroraBackground intensity="soft" />
                <div className="relative z-10 flex flex-col h-full min-h-[260px]">
                  <Calendar size={24} className="text-rose mb-6" />
                  <p className="eyebrow text-mist mb-3">Online · empfohlen</p>
                  <h3 className="font-display text-3xl md:text-4xl text-pearl mb-4 leading-tight">Planity</h3>
                  <p className="text-mist text-sm leading-relaxed mb-8 flex-1">
                    Live-Kalender, alle freien Termine sofort sichtbar. Eintragen, fertig.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose">
                    Online buchen <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </Reveal>

            {/* WhatsApp */}
            <Reveal kind="rise-blur" scroll delay={0.1}>
              <a
                href={studio.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="relative aura-lashes rounded-3xl p-7 md:p-9 block overflow-hidden tile-hover hairline border h-full"
              >
                <AuroraBackground intensity="soft" />
                <div className="relative z-10 flex flex-col h-full min-h-[260px]">
                  <MessageCircle size={24} className="text-rose mb-6" />
                  <p className="eyebrow text-mist mb-3">Schnell & Persönlich</p>
                  <h3 className="font-display text-3xl md:text-4xl text-pearl mb-4 leading-tight">WhatsApp</h3>
                  <p className="text-mist text-sm leading-relaxed mb-8 flex-1">
                    Kurz schreiben, was du machen lassen willst — Antwort meist am gleichen Tag.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose">
                    Chat starten <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </Reveal>

            {/* Phone */}
            <Reveal kind="rise-blur" scroll delay={0.2}>
              <a
                href={`tel:${studio.contact.phone}`}
                className="relative aura-skin rounded-3xl p-7 md:p-9 block overflow-hidden tile-hover hairline border h-full"
              >
                <AuroraBackground intensity="soft" />
                <div className="relative z-10 flex flex-col h-full min-h-[260px]">
                  <Phone size={24} className="text-rose mb-6" />
                  <p className="eyebrow text-mist mb-3">Direkt am Hörer</p>
                  <h3 className="font-display text-3xl md:text-4xl text-pearl mb-4 leading-tight">Anrufen</h3>
                  <p className="text-mist text-sm leading-relaxed mb-8 flex-1">
                    {studio.contact.phoneDisplay} — Mo–Fr 9:30–18:00, Sa 12:00–18:00.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose">
                    Anrufen <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick reference: services + price */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4">Auf einen Blick</p>
            <h2 className="display-mega text-4xl md:text-6xl leading-[0.95] mb-12 md:mb-16">
              Was es <span className="display-italic text-aurora">gibt.</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {services.map((s, i) => (
              <Reveal key={s.id} kind="rise" scroll delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-4 py-5 border-b hairline group">
                  <div>
                    <p className="eyebrow text-fog mb-1">{s.eyebrow}</p>
                    <p className="font-display text-xl md:text-2xl text-pearl group-hover:text-aurora transition-colors">
                      {s.title} <span className="display-italic">{s.italic}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-fog whitespace-nowrap">
                    ab {Math.min(...s.treatments.map(t => Array.isArray(t.price) ? t.price[0] : t.price))} €
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio orientation */}
      <section className="relative px-5 md:px-10 py-20 md:py-28 border-t hairline overflow-hidden">
        <AuroraBackground intensity="soft" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            <Reveal kind="rise" scroll>
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
                In Karte öffnen <ArrowRight size={14} />
              </a>
            </Reveal>
            <Reveal kind="rise" scroll delay={0.1}>
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
            </Reveal>
            <Reveal kind="rise" scroll delay={0.2}>
              <p className="eyebrow text-fog mb-5">Bezahlung</p>
              <ul className="space-y-2 text-pearl/90 text-sm">
                {studio.payments.map(p => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="text-rose">·</span> {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-fog max-w-xs leading-relaxed">
                Anzahlung nur bei besonders langen Behandlungen, sonst nicht.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
