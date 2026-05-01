import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n';

const KEY = 'aura-cookie-consent';

export default function CookieBanner() {
  const { t } = useLocale();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(KEY)) {
      const id = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(id);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, 'essential');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
          className="fixed inset-x-4 md:inset-x-auto md:left-6 md:right-6 z-[120] max-w-3xl md:mx-auto"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="rounded-2xl p-5 md:p-6 text-pearl flex flex-col md:flex-row gap-4 md:items-center shadow-2xl border hairline bg-bg-soft/95 backdrop-blur-xl">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-rose/15 text-rose flex items-center justify-center flex-shrink-0 text-base">
                ✦
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">{t('Cookies', 'Cookies')}</p>
                <p className="text-mist">
                  {t(
                    'Nur technisch notwendige Cookies (Sprache, Banner-Zustimmung). Kein Tracking. Details in der ',
                    'Only essential cookies (language preference, banner consent). No tracking. Details in our '
                  )}
                  <Link to="/datenschutz" className="underline hover:text-rose">
                    {t('Datenschutzerklärung', 'privacy policy')}
                  </Link>.
                </p>
              </div>
              <button
                onClick={accept}
                className="md:hidden p-2 -m-2 text-mist hover:text-pearl"
                aria-label={t('Schließen', 'Close')}
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex gap-2 md:flex-shrink-0">
              <button
                onClick={accept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-pearl text-bg text-sm font-semibold hover:bg-rose transition-colors"
              >
                {t('Verstanden', 'Got it')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
