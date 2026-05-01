import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import { studio } from '../data';
import { useLocale } from '../i18n';

export default function Footer() {
  const { t, pick } = useLocale();
  return (
    <footer className="relative bg-bg-deep border-t hairline mt-20 md:mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 pb-10">
        <Link to="/" className="block mb-12 md:mb-16" translate="no">
          <h2 className="display-mega text-7xl sm:text-8xl md:text-[12rem] lg:text-[14rem] leading-[0.85] text-pearl">
            Aura<span className="text-rose">.</span>
          </h2>
          <p className="font-display italic text-2xl md:text-4xl text-mist/60 -mt-3 md:-mt-6">
            Beauty Schweinfurt
          </p>
        </Link>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="eyebrow text-fog mb-5">{t('Termin', 'Booking')}</p>
            <p className="text-mist leading-relaxed mb-4">
              {t(
                'Online über Planity, per WhatsApp oder telefonisch — Antwort meist am gleichen Tag.',
                'Online via Planity, by WhatsApp or phone — usually a same-day reply.'
              )}
            </p>
            <Link
              to="/termin"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
            >
              {t('Termin buchen', 'Book appointment')} →
            </Link>
          </div>

          <div>
            <p className="eyebrow text-fog mb-5">{t('Kontakt', 'Contact')}</p>
            <div className="space-y-1">
              <a
                href={studio.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-mist hover:text-rose transition-colors py-2.5 -mx-2 px-2 rounded tap active:bg-pearl/[0.04]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`tel:${studio.contact.phone}`}
                className="flex items-center gap-3 text-mist hover:text-rose transition-colors py-2.5 -mx-2 px-2 rounded tap active:bg-pearl/[0.04]"
              >
                <Phone size={16} /> {studio.contact.phoneDisplay}
              </a>
              <a
                href={studio.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-mist hover:text-rose transition-colors py-2.5 -mx-2 px-2 rounded tap active:bg-pearl/[0.04]"
              >
                <Instagram size={16} /> {studio.contact.instagramHandle}
              </a>
              <a
                href={studio.contact.planity}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-mist hover:text-rose transition-colors py-2.5 -mx-2 px-2 rounded tap active:bg-pearl/[0.04]"
              >
                <span className="text-[16px]">◇</span> {t('Online via Planity', 'Online via Planity')}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-fog mb-5">{t('Studio', 'Studio')}</p>
            <p className="text-mist leading-relaxed mb-3 inline-flex items-start gap-2">
              <MapPin size={14} className="mt-1 flex-shrink-0" />
              <span>{studio.contact.address}<br />97421 Schweinfurt</span>
            </p>
            <ul className="space-y-1.5 text-xs text-mist/80 mt-5">
              {studio.hours.map(h => (
                <li key={h.day} className="flex justify-between gap-4 max-w-[14rem]">
                  <span className="font-mono w-8">{pick(h.day, 'dayEN' in h && h.dayEN ? h.dayEN : h.day)}</span>
                  <span className={pick(h.hoursDE, h.hoursEN) === 'Geschlossen' || pick(h.hoursDE, h.hoursEN) === 'Closed' ? 'text-fog' : ''}>
                    {pick(h.hoursDE, h.hoursEN)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-xs text-fog">
          <span>© {new Date().getFullYear()} Aura Beauty · {studio.artist.fullName}</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-pearl transition-colors">{t('Impressum', 'Imprint')}</Link>
            <Link to="/datenschutz" className="hover:text-pearl transition-colors">{t('Datenschutz', 'Privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
