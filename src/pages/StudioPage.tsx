import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { studio, studioFacts, philosophy } from '../data';
import { useLocale } from '../i18n';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';
import MapEmbed from '../components/MapEmbed';

export default function StudioPage() {
  const { t, pick } = useLocale();
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
            {t('Studio', 'Studio')}
          </motion.p>
          <h1 className="display-mega text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.92]" translate="no">
            <RevealText text={t('Hinter', 'Behind')} by="letter" delay={0.2} stagger={0.06} duration={0.85} className="inline-block" />
            <span>&nbsp;</span>
            <RevealText text={t('der', 'the')} by="letter" delay={0.45} stagger={0.06} duration={0.85} className="display-italic text-rose inline-block" />
            <span>&nbsp;</span>
            <RevealText text={t('Aura.', 'aura.')} by="letter" delay={0.7} stagger={0.06} duration={0.85} className="inline-block" />
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
                  {t(
                    'Aura Beauty wird von Rabia Cihan in der Niederwerrner Straße in Schweinfurt geführt — ein Studio für Permanent Make-up, Wimpern, Brauen, Hautpflege und Körper.',
                    'Aura Beauty is run by Rabia Cihan on Niederwerrner Straße in Schweinfurt — a studio for permanent make-up, lashes, brows, skin and body.'
                  )}
                </p>
              </Reveal>
              <Reveal kind="rise" delay={1.15} duration={0.7}>
                <div className="space-y-5 text-mist leading-relaxed text-base md:text-lg max-w-2xl">
                  <p>
                    {t(
                      'Jede Behandlung mit Ruhe und ehrlicher Beratung. Wenn etwas nicht zu dir passt, sagen wir es dir — auch das gehört zu unserer Arbeit.',
                      'Every treatment with a calm pace and honest consultation. If something isn’t right for you, we’ll tell you — that’s part of our work, too.'
                    )}
                  </p>
                  <p>
                    {t(
                      'Vor jeder Permanent-Make-up-Sitzung nehmen wir uns Zeit für ein ruhiges Vorgespräch — Hauttyp, Form, Erwartungen. Mineralische Pigmente, feine Mikronadel, Nachpflege ist im Termin enthalten.',
                      'Every permanent make-up session starts with a calm conversation — skin type, shape, expectations. Mineral pigments, fine micro-needle, aftercare included in the appointment.'
                    )}
                  </p>
                </div>
              </Reveal>
              <Reveal kind="rise" delay={1.3} duration={0.6}>
                <div className="pt-4">
                  <Link
                    to="/termin"
                    className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                  >
                    {t('Erstberatung buchen', 'Book a consultation')} <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:sticky md:top-32">
              <Reveal kind="rise-blur" delay={1.0} duration={0.8}>
                <div className="rounded-3xl p-7 md:p-9 border hairline bg-bg-soft/60">
                  <p className="eyebrow text-fog mb-6">{t('Studio-Profil', 'Studio profile')}</p>
                  <ul className="space-y-5">
                    {studioFacts.map(f => (
                      <li key={f.eyebrowDE} className="border-b last:border-b-0 hairline pb-4 last:pb-0">
                        <p className="eyebrow text-rose mb-1.5">{pick(f.eyebrowDE, f.eyebrowEN)}</p>
                        <p className="text-pearl text-sm md:text-base">
                          {('valueDE' in f) ? pick(f.valueDE, f.valueEN ?? f.valueDE) : f.value}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="px-5 md:px-10 mb-20 md:mb-28">
        <div className="max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4">{t('Inhaberin', 'Owner')}</p>
            <h2 className="display-mega text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-12 md:mb-16">
              Rabia <span className="display-italic text-rose">Cihan.</span>
            </h2>
          </Reveal>
          <Reveal kind="rise-blur" scroll>
            <div className="rounded-3xl overflow-hidden border hairline bg-bg-soft grid md:grid-cols-12">
              <div
                className="relative bg-cover md:col-span-7 aspect-[4/5] md:aspect-auto md:min-h-[420px]"
                style={{ backgroundImage: 'url(/photos/rabia-studio.jpg)', backgroundPosition: 'center 25%' }}
              />
              <div className="md:col-span-5 p-7 md:p-10 flex flex-col justify-center">
                <p className="eyebrow text-rose mb-4">{t('PMU Artist · Schweinfurt', 'PMU artist · Schweinfurt')}</p>
                <p className="font-display text-2xl md:text-3xl text-pearl leading-snug mb-4">
                  {t(
                    'Mein Studio in der Niederwerrner Straße — wo Zeit, Ruhe und ehrliche Beratung dazugehören.',
                    'My studio on Niederwerrner Straße — where time, calm and honest consultation are part of every appointment.'
                  )}
                </p>
                <p className="text-mist text-sm md:text-base leading-relaxed">
                  {t(
                    'Ich nehme mir Zeit für ein ruhiges Vorgespräch und empfehle nur das, was wirklich zu deiner Haut passt.',
                    'I take time for a calm conversation first, and only recommend what truly suits your skin.'
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative px-5 md:px-10 py-20 md:py-32 border-y hairline">
        <div className="max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4">{t('Philosophie', 'Philosophy')}</p>
            <h2 className="display-mega text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-12 md:mb-16 max-w-3xl">
              {t('Wie wir', 'How we')}{' '}
              <span className="display-italic text-rose">{t('arbeiten.', 'work.')}</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {philosophy.map((p, i) => (
              <Reveal key={p.eyebrowDE} kind="rise" scroll delay={i * 0.1}>
                <div className="space-y-4">
                  <span className="font-mono text-xs text-fog">0{i + 1}</span>
                  <p className="eyebrow text-rose">{pick(p.eyebrowDE, p.eyebrowEN)}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-pearl leading-tight">
                    {pick(p.titleDE, p.titleEN)}
                  </h3>
                  <p className="text-mist leading-relaxed text-sm md:text-base">{pick(p.bodyDE, p.bodyEN)}</p>
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
                  <Clock size={12} className="text-rose" /> {t('Öffnungszeiten', 'Hours')}
                </p>
                <ul className="space-y-1.5 text-sm">
                  {studio.hours.map(h => (
                    <li key={h.day} className="flex justify-between gap-4 max-w-xs">
                      <span className="font-mono w-10">{pick(h.day, 'dayEN' in h && h.dayEN ? h.dayEN : h.day)}</span>
                      <span className={pick(h.hoursDE, h.hoursEN) === 'Geschlossen' || pick(h.hoursDE, h.hoursEN) === 'Closed' ? 'text-fog' : 'text-pearl/90'}>
                        {pick(h.hoursDE, h.hoursEN)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-fog max-w-xs leading-relaxed">
                  {t(
                    'Termine außerhalb dieser Zeiten gerne auf Anfrage. Bezahlung: Bar, Karte, Überweisung.',
                    'Appointments outside these hours gladly on request. Payment: cash, card, bank transfer.'
                  )}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <Reveal kind="rise" scroll delay={0.1}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <MapPin size={12} className="text-rose" /> {t('Adresse', 'Address')}
                </p>
                <p className="font-display text-2xl text-pearl mb-2">{studio.contact.address}</p>
                <p className="text-mist mb-6">97421 Schweinfurt</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(studio.contact.address + ' Schweinfurt')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                >
                  {t('In Karte zeigen', 'Open in map')} <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-4">
              <Reveal kind="rise" scroll delay={0.2}>
                <p className="eyebrow text-fog mb-5 inline-flex items-center gap-2">
                  <Star size={12} className="text-rose" /> {t('Bewertungen', 'Reviews')}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-rose text-rose" />
                  ))}
                  <span className="font-display text-2xl text-pearl ml-1">{studio.social.rating.toFixed(1)}</span>
                </div>
                <p className="text-mist mb-5 text-sm">
                  {t(
                    `${studio.social.reviewCount} verifizierte Bewertungen auf ${studio.social.reviewSource}.`,
                    `${studio.social.reviewCount} verified reviews on ${studio.social.reviewSource}.`
                  )}
                </p>
                <a
                  href={studio.contact.googleReviews}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
                >
                  {t('Bewertungen auf Google', 'Read on Google')} <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Find us — interactive map */}
      <section className="px-5 md:px-10 pt-4 md:pt-8">
        <div className="max-w-[1400px] mx-auto">
          <Reveal kind="rise-blur" scroll>
            <p className="eyebrow text-fog mb-4 inline-flex items-center gap-2">
              <MapPin size={12} className="text-rose" /> {t('So findest du uns', 'How to find us')}
            </p>
            <h2 className="display-mega text-4xl md:text-6xl leading-[0.95] mb-3">
              {t('Niederwerrner', 'Niederwerrner')} <span className="display-italic text-rose">Straße.</span>
            </h2>
            <p className="text-mist text-sm md:text-base leading-relaxed max-w-xl mb-10">
              {t(
                'Direkt im Zentrum von Schweinfurt — gut erreichbar mit Auto, ÖPNV und zu Fuß.',
                'Right in the centre of Schweinfurt — easy to reach by car, public transport or on foot.'
              )}
            </p>
          </Reveal>
          <Reveal kind="rise-blur" scroll delay={0.1}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
