import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, MessageCircle, Phone } from 'lucide-react';
import { studio } from '../data';

const links = [
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/studio', label: 'Studio' },
  { to: '/termin', label: 'Termin' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
          scrolled ? 'bg-bg/80 backdrop-blur-2xl border-b hairline' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-baseline gap-2 group select-none"
            translate="no"
            aria-label="Aura Beauty Schweinfurt"
          >
            <span className="font-display text-3xl md:text-[34px] font-light tracking-tight leading-none">
              <span className="text-aurora">Aura</span>
              <span className="text-pearl">.</span>
            </span>
            <span className="hidden md:inline-block eyebrow text-mist">Beauty</span>
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
            <Link
              to="/termin"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] tracking-widest uppercase font-medium border border-pearl/30 hover:border-rose hover:text-rose text-pearl transition-colors rounded-full"
            >
              Termin
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-2 text-pearl"
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
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
                aria-label="Schließen"
              >
                <X size={24} />
              </button>
              <div className="mt-10 flex flex-col gap-5">
                {links.map(l => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `font-display text-[44px] leading-[1.05] font-light tracking-tight transition-colors ${
                        isActive ? 'text-aurora' : 'text-pearl hover:text-rose'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <Link
                to="/termin"
                className="cta-shimmer mt-10 inline-flex items-center justify-center gap-3 bg-pearl text-bg px-6 py-4 text-sm tracking-widest uppercase font-semibold rounded-full"
              >
                Termin buchen
              </Link>
              <div className="mt-auto pt-10 border-t hairline space-y-3">
                <a
                  href={studio.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-pearl text-sm font-medium hover:text-rose transition-colors py-1"
                >
                  <MessageCircle size={16} /> WhatsApp · {studio.contact.whatsappDisplay}
                </a>
                <a
                  href={`tel:${studio.contact.phone}`}
                  className="flex items-center gap-2 text-mist text-sm hover:text-pearl transition-colors py-1"
                >
                  <Phone size={16} /> {studio.contact.phoneDisplay}
                </a>
                <a
                  href={studio.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-mist text-sm hover:text-pearl transition-colors py-1"
                >
                  <Instagram size={16} /> {studio.contact.instagramHandle}
                </a>
                <p className="eyebrow text-fog mt-4">Schweinfurt · {studio.contact.address}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
