import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { studio, services, type ServiceFamily, type Treatment, formatPrice } from '../data';
import { useLocale } from '../i18n';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';

export default function ServicesPage() {
  const { id } = useParams();
  const { t, pick } = useLocale();

  useEffect(() => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }, [id]);

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }, []);

  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24">
      {/* Page intro — clean, no aurora */}
      <div className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="eyebrow text-rose mb-6"
          >
            {t('Leistungen', 'Services')}
          </motion.p>
          <h1 className="display-mega text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.95] mb-8" translate="no">
            <RevealText text={t('Fünf', 'Five')} by="letter" delay={0.2} stagger={0.05} duration={0.85} className="inline-block" />
            <span>&nbsp;</span>
            <RevealText text={t('Auren.', 'auras.')} by="letter" delay={0.45} stagger={0.05} duration={0.85} className="display-italic text-rose inline-block" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-mist max-w-2xl text-base md:text-lg leading-relaxed"
          >
            {t(
              'Permanent Make-up, Wimpern, Brauen, Hautpflege und Körper. Jede Behandlung beginnt mit einem Vorgespräch — mit ehrlicher Einschätzung und einem Pflegeplan, der zu deiner Haut passt.',
              'Permanent make-up, lashes, brows, skin and body. Every treatment starts with a conversation — an honest assessment and an aftercare plan tailored to your skin.'
            )}
          </motion.p>

          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-2"
            aria-label={t('Sprungmenü', 'Quick nav')}
          >
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2.5 rounded-full text-xs tracking-widest uppercase border border-pearl/15 text-mist hover:border-rose hover:text-pearl transition-colors tap active:bg-pearl/[0.04]"
              >
                {pick(s.shortLabelDE, s.shortLabelEN)}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>

      {services.map((s, i) => (
        <ServiceSection key={s.id} service={s} reverse={i % 2 === 1} />
      ))}

      {/* Closing CTA */}
      <section className="px-5 md:px-10 mt-20 md:mt-28">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal kind="rise-blur" scroll>
            <h2 className="display-mega text-4xl md:text-6xl mb-8">
              {t('Unsicher,', 'Not sure')}{' '}
              <span className="display-italic text-rose">{t('welche?', 'which?')}</span>
            </h2>
          </Reveal>
          <Reveal kind="rise" scroll delay={0.1}>
            <p className="text-mist max-w-md mx-auto mb-10 leading-relaxed">
              {t(
                'Schreib uns kurz auf WhatsApp, was du im Kopf hast. Wir antworten mit einer Empfehlung — kein Verkaufsgespräch.',
                'Just send a short WhatsApp with what you have in mind. We reply with a recommendation — no sales pitch.'
              )}
            </p>
            <a
              href={studio.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="cta-shimmer inline-flex items-center gap-3 bg-pearl text-bg font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
            >
              <MessageCircle size={16} /> {t('Kurz fragen', 'Quick question')}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({ service: s, reverse }: { service: ServiceFamily; reverse: boolean }) {
  const { t, pick } = useLocale();
  return (
    <section id={s.id} className="relative scroll-mt-24 mb-16 md:mb-24 px-5 md:px-10">
      <div className="relative max-w-[1400px] mx-auto rounded-3xl overflow-hidden border hairline bg-bg-soft">
        {/* Photo strip at top — sets the mood without flooding the section in color. */}
        <div
          className="relative h-44 md:h-72 photo-tile"
          style={{ backgroundImage: `url(${s.photo})` }}
        >
          <div className="absolute inset-0 z-[1] flex items-end p-6 md:p-10">
            <p className="eyebrow text-rose">{pick(s.eyebrowDE, s.eyebrowEN)}</p>
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-14 lg:p-20">
          <div className={`grid md:grid-cols-12 gap-10 md:gap-14 ${reverse ? 'md:[direction:rtl]' : ''}`}>
            <div className="md:col-span-5 md:[direction:ltr]">
              <Reveal kind="rise-blur" scroll>
                <h2 className="display-mega text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                  {pick(s.titleDE, s.titleEN)}
                  <br />
                  <span className="display-italic text-rose">{pick(s.italicDE, s.italicEN)}</span>
                </h2>
              </Reveal>
              <Reveal kind="rise" scroll delay={0.1}>
                <p className="font-display italic text-pearl/90 text-lg md:text-xl mb-8 leading-relaxed">
                  {pick(s.taglineDE, s.taglineEN)}
                </p>
                <p className="text-mist text-sm md:text-base leading-relaxed mb-10 md:mb-12">
                  {pick(s.descriptionDE, s.descriptionEN)}
                </p>
              </Reveal>

              <Reveal kind="rise" scroll delay={0.2}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <Sparkles size={12} className="text-rose" /> {t('Ablauf', 'Ritual')}
                </p>
                <ol className="space-y-3 mb-10">
                  {pick(s.ritualDE, s.ritualEN).map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-fog mt-1 w-6 flex-shrink-0">0{i + 1}</span>
                      <span className="text-pearl/90 text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <div className="md:col-span-6 md:col-start-7 md:[direction:ltr]">
              <Reveal kind="rise-blur" scroll delay={0.15}>
                <div className="rounded-2xl p-6 md:p-8 border hairline bg-bg/50 backdrop-blur-sm">
                  <p className="eyebrow text-fog mb-6">{t('Behandlungen', 'Treatments')}</p>
                  {s.groups ? (
                    <div className="space-y-7">
                      {s.groups.map((g, gi) => (
                        <div key={g.titleDE} className={gi > 0 ? 'pt-7 border-t hairline' : ''}>
                          <p className="eyebrow text-rose mb-4">{pick(g.titleDE, g.titleEN)}</p>
                          <ul className="divide-y hairline">
                            {g.treatments.map(t2 => (
                              <TreatmentRow key={t2.nameDE} treatment={t2} />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="divide-y hairline">
                      {s.treatments.map(t2 => (
                        <TreatmentRow key={t2.nameDE} treatment={t2} />
                      ))}
                    </ul>
                  )}
                </div>

                {(s.aftercareDE || s.aftercareEN) && (
                  <div className="mt-5 px-6 md:px-8 py-5 md:py-6 rounded-2xl border hairline bg-bg/40">
                    <p className="eyebrow text-rose mb-2">{t('Nachpflege', 'Aftercare')}</p>
                    <p className="text-mist text-xs md:text-sm leading-relaxed">
                      {pick(s.aftercareDE ?? '', s.aftercareEN ?? s.aftercareDE ?? '')}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/termin"
                    className="cta-shimmer flex-1 inline-flex items-center justify-center gap-2 bg-pearl text-bg font-semibold px-6 py-3.5 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
                  >
                    {t('Termin', 'Book')} <ArrowRight size={14} />
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

function TreatmentRow({ treatment: t2 }: { treatment: Treatment }) {
  const { pick, locale } = useLocale();
  const isFree = t2.price === 'free';
  return (
    <li className="py-4 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <span className="font-display text-base md:text-lg text-pearl leading-tight">
          {pick(t2.nameDE, t2.nameEN)}
        </span>
        <span
          className={`font-display text-lg md:text-xl whitespace-nowrap ${
            isFree ? 'text-rose italic' : 'text-rose'
          }`}
        >
          {formatPrice(t2.price, locale)}
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-xs text-mist/70">
          {t2.noteDE && pick(t2.noteDE, t2.noteEN ?? t2.noteDE)}
        </span>
        {t2.duration && (
          <span className="inline-flex items-center gap-1.5 text-xs text-fog font-mono">
            <Clock size={10} /> {t2.duration}
          </span>
        )}
      </div>
    </li>
  );
}
