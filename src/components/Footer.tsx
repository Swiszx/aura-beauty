import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import { studio } from '../data';

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep border-t hairline mt-32 overflow-hidden">
      {/* Soft aurora wash at the top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(232, 168, 180, 0.4), transparent 60%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 pb-10">
        <Link to="/" className="block mb-12 md:mb-16" translate="no">
          <h2 className="display-mega text-7xl sm:text-8xl md:text-[12rem] lg:text-[14rem] leading-[0.85]">
            <span className="text-aurora">Aura</span>
            <span className="text-pearl">.</span>
          </h2>
          <p className="font-display italic text-2xl md:text-4xl text-mist/60 -mt-3 md:-mt-6">Beauty Schweinfurt</p>
        </Link>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="eyebrow text-fog mb-5">Termin</p>
            <p className="text-mist leading-relaxed mb-4">
              Online über Planity, per WhatsApp oder telefonisch — Antwort meist am gleichen Tag.
            </p>
            <Link
              to="/termin"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-rose hover:text-pearl transition-colors"
            >
              Termin buchen →
            </Link>
          </div>

          <div>
            <p className="eyebrow text-fog mb-5">Kontakt</p>
            <div className="space-y-3">
              <a
                href={studio.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-mist hover:text-rose transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={`tel:${studio.contact.phone}`}
                className="flex items-center gap-2 text-mist hover:text-rose transition-colors"
              >
                <Phone size={14} /> {studio.contact.phoneDisplay}
              </a>
              <a
                href={studio.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-mist hover:text-rose transition-colors"
              >
                <Instagram size={14} /> {studio.contact.instagramHandle}
              </a>
              <a
                href={studio.contact.planity}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-mist hover:text-rose transition-colors"
              >
                <span className="text-[14px]">◇</span> Online via Planity
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-fog mb-5">Studio</p>
            <p className="text-mist leading-relaxed mb-3 inline-flex items-start gap-2">
              <MapPin size={14} className="mt-1 flex-shrink-0" />
              <span>{studio.contact.address}<br />97421 Schweinfurt</span>
            </p>
            <ul className="space-y-1.5 text-xs text-mist/80 mt-5">
              {studio.hours.map(h => (
                <li key={h.day} className="flex justify-between gap-4 max-w-[14rem]">
                  <span className="font-mono w-8">{h.day}</span>
                  <span className={h.hours === 'Geschlossen' ? 'text-fog' : ''}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-xs text-fog">
          <span>© {new Date().getFullYear()} Aura Beauty · {studio.artist.fullName}</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-pearl transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-pearl transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
