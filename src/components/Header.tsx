import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, MessageCircle, Phone } from 'lucide-react';
import { studio } from '../data';
import { useLocale } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/leistungen', label: t('Leistungen', 'Services') },
    { to: '/studio', label: t('Studio', 'Studio') },
    { to: '/termin', label: t('Termin', 'Booking') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/85 backdrop-blur-2xl border-b hairline'
            : 'bg-bg/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-baseline gap-2 group select-none"
            translate="no"
            aria-label="Aura Beauty Schweinfurt"
          >
            <span className="font-display text-3xl md:text-[34px] font-light tracking-tight leading-none text-pearl">
              Aura<span className="text-rose">.</span>
            </span>
            <span className="hidden md:inline-block eyebrow text-fog">Beauty</span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-colors ${
                    isActive ? 'text-pearl' : 'text-mist hover:text-pearl'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span layoutId="header-mark" className="absolute -bottom-1.5 left-0 right-0 h-px bg-rose" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher />
            <Link
              to="/termin"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] tracking-widest uppercase font-medium border border-pearl/30 hover:border-rose hover:text-rose text-pearl transition-colors rounded-full"
            >
              {t('Termin', 'Book')}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2.5 -mr-2.5 text-pearl tap active:opacity-70"
              aria-label={t('Menü öffnen', 'Open menu')}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-bg/90 backdrop-blur-xl z-[90]"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              onClick={e => e.stopPropagation()}
              className="absolute inset-y-0 right-0 w-full bg-bg-soft px-7 py-6 flex flex-col overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end p-2 -mr-2 text-pearl"
                aria-label={t('Schließen', 'Close')}
              >
                <X size={24} />
              </button>
              <div className="mt-8 flex flex-col">
                {links.map(l => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `font-display text-[44px] leading-[1.05] font-light tracking-tight transition-colors py-3 tap active:opacity-70 ${
                        isActive ? 'text-rose' : 'text-pearl hover:text-rose'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <Link
                to="/termin"
                className="cta-shimmer tap mt-10 inline-flex items-center justify-center gap-3 bg-pearl text-bg px-6 py-4 text-sm tracking-widest uppercase font-semibold rounded-full active:bg-rose"
              >
                {t('Termin buchen', 'Book appointment')}
              </Link>
              <div className="mt-auto pt-8 border-t hairline">
                <a
                  href={studio.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-pearl text-sm font-medium hover:text-rose transition-colors py-3 tap active:bg-pearl/[0.04] -mx-2 px-2 rounded"
                >
                  <MessageCircle size={18} /> WhatsApp · {studio.contact.whatsappDisplay}
                </a>
                <a
                  href={`tel:${studio.contact.phone}`}
                  className="flex items-center gap-3 text-mist text-sm hover:text-pearl transition-colors py-3 tap active:bg-pearl/[0.04] -mx-2 px-2 rounded"
                >
                  <Phone size={18} /> {studio.contact.phoneDisplay}
                </a>
                <a
                  href={studio.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-mist text-sm hover:text-pearl transition-colors py-3 tap active:bg-pearl/[0.04] -mx-2 px-2 rounded"
                >
                  <Instagram size={18} /> {studio.contact.instagramHandle}
                </a>
                <p className="eyebrow text-fog mt-5">Schweinfurt · {studio.contact.address}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
