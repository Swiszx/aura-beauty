import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../i18n';
import RevealText from '../components/RevealText';

export default function NotFoundPage() {
  const { t } = useLocale();
  return (
    <div className="relative bg-bg text-pearl min-h-screen flex items-center justify-center px-5 md:px-10">
      <div className="relative text-center max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="eyebrow text-rose mb-6"
        >
          404
        </motion.p>
        <h1 className="display-mega text-7xl md:text-9xl leading-[0.85] mb-6">
          <RevealText text={t('Verloren', 'Lost')} by="letter" delay={0.25} stagger={0.07} duration={0.85} className="inline-block" />
          <motion.span
            initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, type: 'spring', damping: 10, stiffness: 220 }}
            className="display-italic text-rose inline-block"
          >?</motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-mist mb-10"
        >
          {t(
            'Diese Seite gibt es nicht. Aber die Leistungen, das Studio und der Termin warten auf dich.',
            "This page doesn't exist. But the services, the studio and your appointment are waiting."
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Link
            to="/"
            className="cta-shimmer inline-flex items-center gap-3 bg-pearl text-bg font-semibold px-7 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-rose transition-colors"
          >
            {t('Zurück zum Anfang', 'Back to start')} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
