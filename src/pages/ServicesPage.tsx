import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { studio, services, type ServiceFamily, formatPrice } from '../data';
import AuroraBackground from '../components/AuroraBackground';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';

export default function ServicesPage() {
  const { id } = useParams();

  // Scroll to anchor after mount
  useEffect(() => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [id]);

  // Also handle hash scroll (for /leistungen#pmu links)
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }, []);

  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24">
      {/* Page intro */}
      <div className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="eyebrow text-rose mb-6"
          >
            Leistungen
          </motion.p>
          <h1 className="display-mega text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.95] mb-8" translate="no">
            <RevealText text="Fünf" by="letter" delay={0.2} stagger={0.05} duration={0.85} className="inline-block" />
            <span>&nbsp;</span>
            <RevealText text="Auras." by="letter" delay={0.45} stagger={0.05} duration={0.85} className="display-italic text-aurora inline-block" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-mist max-w-2xl text-base md:text-lg leading-relaxed"
          >
            Permanent Make-up, Wimpern, Brauen, Skin und Body. Jede Behandlung mit Beratung, Pflegeplan und
            ehrlicher Einschätzung — keine Behandlung ohne Vorgespräch.
          </motion.p>

          {/* Anchor jumps */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-2"
            aria-label="Sprungmenü"
          >
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2.5 rounded-full text-xs tracking-widest uppercase border border-pearl/15 text-mist hover:border-rose hover:text-pearl transition-colors"
              >
                {s.id === 'pmu' ? 'PMU' : s.id === 'lashes' ? 'Wimpern' : s.id === 'brows' ? 'Brauen' : s.id === 'skin' ? 'Skin' : 'Body'}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>

      {/* Each service as a full section */}
      {services.map((s, i) => (
        <ServiceSection key={s.id} service={s} reverse={i % 2 === 1} />
      ))}

      {/* Closing CTA */}
      <section className="px-5 md:px-10 mt-20 md:mt-28">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal kind="rise-blur" scroll>
            <h2 className="display-mega text-4xl md:text-6xl mb-8">
              Unsicher, <span className="display-italic text-aurora">welche?</span>
            </h2>
          </Reveal>
          <Reveal kind="rise" scroll delay={0.1}>
            <p className="text-mist max-w-md mx-auto mb-10 leading-relaxed">
              Schreib einfach kurz auf WhatsApp, was du im Kopf hast. Wir antworten mit Empfehlung — kein
              Verkaufsgespräch.
            </p>
            <a
              href={studio.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="cta-shimmer inline-flex items-center gap-3 bg-pearl text-bg font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
            >
              <MessageCircle size={16} /> Kurz fragen
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({ service: s, reverse }: { service: ServiceFamily; reverse: boolean }) {
  return (
    <section id={s.id} className="relative scroll-mt-24 mb-16 md:mb-24 px-5 md:px-10">
      <div className={`relative max-w-[1400px] mx-auto rounded-3xl overflow-hidden ${s.auraClass} border hairline`}>
        <AuroraBackground intensity="soft" />

        <div className="relative z-10 p-7 md:p-14 lg:p-20">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-14 ${reverse ? 'md:[direction:rtl]' : ''}`}>
            {/* Headline column */}
            <div className="md:col-span-5 md:[direction:ltr]">
              <p className="eyebrow text-rose mb-5">{s.eyebrow}</p>
              <Reveal kind="rise-blur" scroll>
                <h2 className="display-mega text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                  {s.title}
                  <br />
                  <span className="display-italic text-aurora">{s.italic}</span>
                </h2>
              </Reveal>
              <Reveal kind="rise" scroll delay={0.1}>
                <p className="font-display italic text-pearl/90 text-lg md:text-xl mb-8 leading-relaxed">
                  {s.tagline}
                </p>
                <p className="text-mist text-sm md:text-base leading-relaxed mb-10 md:mb-12">
                  {s.description}
                </p>
              </Reveal>

              {/* Ritual */}
              <Reveal kind="rise" scroll delay={0.2}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <Sparkles size={12} className="text-rose" /> Ablauf
                </p>
                <ol className="space-y-3 mb-10">
                  {s.ritual.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-fog mt-1 w-6 flex-shrink-0">0{i + 1}</span>
                      <span className="text-pearl/90 text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            {/* Treatments + price column */}
            <div className="md:col-span-6 md:col-start-7 md:[direction:ltr]">
              <Reveal kind="rise-blur" scroll delay={0.15}>
                <div className="glass rounded-2xl p-6 md:p-8">
                  <p className="eyebrow text-fog mb-6">Behandlungen</p>
                  <ul className="divide-y hairline">
                    {s.treatments.map(t => (
                      <li key={t.name} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-4 mb-1">
                          <span className="font-display text-lg md:text-xl text-pearl">{t.name}</span>
                          <span className="font-display text-aurora text-xl md:text-2xl whitespace-nowrap">
                            {formatPrice(t.price)}
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-xs text-mist/80">{t.note ?? ''}</span>
                          {t.duration && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-fog font-mono">
                              <Clock size={11} /> {t.duration}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {s.aftercare && (
                  <div className="mt-5 px-6 md:px-8 py-5 md:py-6 rounded-2xl border hairline bg-bg/40">
                    <p className="eyebrow text-rose mb-2">Nachpflege</p>
                    <p className="text-mist text-xs md:text-sm leading-relaxed">{s.aftercare}</p>
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/termin"
                    className="cta-shimmer flex-1 inline-flex items-center justify-center gap-2 bg-pearl text-bg font-semibold px-6 py-3.5 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
                  >
                    Termin <ArrowRight size={14} />
                  </Link>
                  <a
                    href={studio.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-pearl/30 text-pearl font-medium px-6 py-3.5 text-sm tracking-widest uppercase rounded-full hover:border-rose hover:text-rose transition-colors"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
