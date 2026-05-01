import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDown, MessageCircle, Star, MapPin, Phone } from 'lucide-react';
import { studio, services, philosophy, featuredPrices } from '../data';
import AuroraBackground from '../components/AuroraBackground';
import Reveal from '../components/Reveal';
import RevealText from '../components/RevealText';

export default function HomePage() {
  return (
    <div className="bg-bg text-pearl">
      <Hero />
      <ServiceConstellation />
      <Philosophy />
      <PriceSnapshot />
      <ProofStrip />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const fadeOut = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const headlineLines = studio.hero.headline.split('\n');

  return (
    <section ref={ref} className="relative min-h-[100vh] md:min-h-[110vh] overflow-hidden">
      <AuroraBackground />

      {/* Top frame info */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute top-20 md:top-28 left-0 right-0 px-5 md:px-10 z-20 flex items-center justify-between text-mist eyebrow"
      >
        <span>{studio.hero.eyebrow}</span>
        <span className="hidden md:inline-flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
          Termine offen
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ y: titleY, opacity: fadeOut }}
        className="absolute inset-0 flex items-center px-5 md:px-10 z-20"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-rose mb-6 md:mb-10"
          >
            Permanent Make-up · Wimpern · Brauen · Skin
          </motion.p>

          <h1 className="display-mega text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] max-w-[14ch]" translate="no">
            {headlineLines.map((line, i) => {
              const isItalic = i === 1;
              return (
                <span key={i} className="block">
                  <RevealText
                    text={line}
                    by="letter"
                    delay={0.25 + i * 0.18}
                    stagger={0.04}
                    duration={0.85}
                    className={isItalic ? 'display-italic text-aurora' : ''}
                  />
                </span>
              );
            })}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-12 max-w-md"
          >
            <p className="text-mist text-base md:text-lg leading-relaxed">
              {studio.hero.sub}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.6 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md"
          >
            <Link
              to="/termin"
              className="cta-shimmer inline-flex items-center justify-center gap-3 bg-pearl text-bg font-semibold px-7 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
            >
              Termin buchen <ArrowRight size={16} />
            </Link>
            <a
              href={studio.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm tracking-widest uppercase font-medium border border-pearl/30 hover:border-rose hover:text-rose text-pearl rounded-full transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.7, duration: 0.8 },
          y: { delay: 1.7, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-mist"
      >
        <span className="eyebrow">Scrollen</span>
        <ArrowDown size={14} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="hidden md:flex absolute right-10 bottom-10 z-20 items-center gap-3 text-mist"
      >
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-rose text-rose" />
          ))}
        </div>
        <span className="eyebrow">{studio.social.rating.toFixed(1)} · Planity</span>
      </motion.div>
    </section>
  );
}

function ServiceConstellation() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow text-fog mb-4">Leistungen</p>
            <Reveal kind="rise-blur" scroll>
              <h2 className="display-mega text-5xl md:text-6xl lg:text-7xl">
                Fünf <span className="display-italic text-aurora">Auras.</span>
                <br />
                Eine Adresse.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <Reveal kind="rise" scroll delay={0.1}>
              <p className="text-mist leading-relaxed text-base md:text-lg">
                Permanent Make-up, Wimpern, Brauen, Skin und Body. Jede Behandlung mit eigener Handschrift —
                eigener Beratungsstil, eigener Pflegerhythmus. Wähl deine Aura.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              kind="rise-blur"
              scroll
              delay={Math.min(i * 0.08, 0.4)}
              className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <Link
                to={`/leistungen#${s.id}`}
                className={`relative ${s.auraClass} block group rounded-3xl p-7 md:p-10 h-full overflow-hidden tile-hover hairline border min-h-[300px] md:min-h-[340px] ${i === 0 ? 'lg:min-h-[700px]' : ''}`}
              >
                {/* Floating accent dot */}
                <div
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-40 blur-3xl"
                  style={{
                    background: `var(--color-${s.accent}, var(--color-rose))`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <p className="eyebrow text-mist mb-6 md:mb-8">{s.eyebrow}</p>

                  <h3 className={`font-display font-light leading-[0.95] ${i === 0 ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-4xl'}`}>
                    {s.title}
                    <br />
                    <span className="display-italic text-aurora">{s.italic}</span>
                  </h3>

                  <p className={`text-mist leading-relaxed ${i === 0 ? 'text-base md:text-lg mt-6 max-w-md' : 'text-sm mt-5'}`}>
                    {s.tagline}
                  </p>

                  <div className="mt-auto pt-8 flex items-center gap-2 text-pearl/80 group-hover:text-rose text-sm tracking-widest uppercase transition-colors">
                    Entdecken <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 overflow-hidden">
      <AuroraBackground intensity="soft" />
      <div className="relative max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="eyebrow text-fog mb-4">Philosophie</p>
          <Reveal kind="rise-blur" scroll>
            <h2 className="display-mega text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Drei Dinge,
              <br />
              <span className="display-italic text-aurora">die unter der Haut bleiben.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {philosophy.map((p, i) => (
            <Reveal key={p.eyebrow} kind="rise" scroll delay={i * 0.1}>
              <div className="glass-soft rounded-3xl p-7 md:p-10 h-full flex flex-col">
                <span className="font-mono text-xs text-fog mb-6">0{i + 1}</span>
                <p className="eyebrow text-rose mb-4">{p.eyebrow}</p>
                <h3 className="font-display text-2xl md:text-3xl text-pearl leading-tight mb-6">{p.title}</h3>
                <p className="text-mist leading-relaxed text-sm">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceSnapshot() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 border-t hairline bg-bg-soft">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow text-fog mb-4">Preise</p>
            <Reveal kind="rise-blur" scroll>
              <h2 className="display-mega text-5xl md:text-6xl lg:text-7xl">
                Klar.
                <br />
                <span className="display-italic text-aurora">Auch im Voraus.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <Reveal kind="rise" scroll delay={0.1}>
              <p className="text-mist leading-relaxed">
                Vier ausgewählte Behandlungen, die die meisten Gäste bei uns buchen. Komplette Preisliste auf
                der{' '}
                <Link to="/leistungen" className="text-rose underline underline-offset-4 hover:text-pearl">
                  Leistungsseite
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {featuredPrices.map((p, i) => (
            <Reveal key={p.label} kind="rise" scroll delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 md:p-7 h-full flex flex-col tile-hover hairline border">
                <p className="font-mono text-[10px] text-fog tracking-widest mb-5 uppercase">{p.duration}</p>
                <p className="font-display text-pearl text-base md:text-lg mb-6 leading-tight">{p.label}</p>
                <p className="font-display text-3xl md:text-4xl text-aurora mt-auto">
                  {p.from && <span className="text-mist text-base mr-1">ab</span>}
                  {p.price}
                  <span className="text-mist text-base ml-1">€</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal kind="rise-blur" scroll>
              <div className="flex items-center gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-rose text-rose" />
                ))}
                <span className="font-display text-3xl md:text-4xl text-pearl ml-2">{studio.social.rating.toFixed(1)}</span>
              </div>
              <p className="text-mist leading-relaxed text-base md:text-lg max-w-md mb-8">
                {studio.social.reviewCount} verifizierte Bewertungen auf {studio.social.reviewSource}. Keine
                Fake-Stimmen, keine erkauften Sternchen — echte Gäste, die wiederkommen.
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

          <div className="md:col-span-6 md:col-start-7">
            <Reveal kind="rise-blur" scroll delay={0.15}>
              <div className="relative aspect-[4/5] md:aspect-[5/6] glass-soft rounded-3xl overflow-hidden">
                <AuroraBackground intensity="full" />
                <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-10">
                  <p className="eyebrow text-rose">Studio · {studio.city}</p>
                  <div>
                    <p className="font-display italic text-mist/80 text-lg mb-3">„Sehr professionell, ich komme wieder."</p>
                    <p className="text-xs text-fog">— Eine von 13 Bewertungen auf Planity</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 px-5 md:px-10 border-t hairline overflow-hidden">
      <AuroraBackground />
      <div className="relative max-w-[1200px] mx-auto text-center">
        <p className="eyebrow text-rose mb-6">Termin</p>
        <Reveal kind="rise-blur" scroll>
          <h2 className="display-mega text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.95] md:leading-[0.9] mb-10" translate="no">
            <span className="block">Buch dir</span>
            <span className="display-italic text-aurora">deine Aura.</span>
          </h2>
        </Reveal>
        <Reveal kind="rise" scroll delay={0.15}>
          <p className="max-w-md mx-auto text-mist text-sm md:text-base leading-relaxed mb-10">
            Online über Planity, per WhatsApp oder telefonisch. Erstberatung kostenlos und unverbindlich.
            Antwort meist am gleichen Tag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Link
              to="/termin"
              className="cta-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-pearl text-bg font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
            >
              Termin buchen <ArrowRight size={16} />
            </Link>
            <a
              href={studio.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-pearl text-pearl font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-pearl hover:text-bg transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-mist text-xs">
            <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Niederwerrner Str. 14 1/2</span>
            <span className="inline-flex items-center gap-1.5"><Phone size={12} /> {studio.contact.phoneDisplay}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
