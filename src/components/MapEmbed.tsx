import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { studio } from '../data';
import { useLocale } from '../i18n';

/**
 * Click-to-load Google Maps embed. Until the user actively asks for the
 * map, no Google scripts/cookies are loaded — keeping the site honest
 * with its "no tracking" promise on the Datenschutz page.
 */
export default function MapEmbed() {
  const { t } = useLocale();
  const [loaded, setLoaded] = useState(false);

  const fullAddress = `${studio.contact.address}, ${studio.postalCode} ${studio.city}`;
  const query = encodeURIComponent(fullAddress);
  const embedUrl = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border hairline bg-bg-soft">
      {loaded ? (
        <iframe
          title={t('Karte zum Studio Aura Beauty Schweinfurt', 'Map to Aura Beauty Schweinfurt')}
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="w-full h-full flex flex-col items-center justify-center gap-2 text-center p-7 md:p-10 tap active:bg-pearl/[0.04] transition-colors group"
          aria-label={t('Karte anzeigen — Google Maps wird geladen', 'Show map — Google Maps will be loaded')}
        >
          <span className="w-14 h-14 rounded-full bg-rose/15 text-rose flex items-center justify-center mb-3">
            <MapPin size={24} />
          </span>
          <p className="font-display text-pearl text-2xl md:text-3xl leading-tight">
            {studio.contact.address}
          </p>
          <p className="text-mist">
            {studio.postalCode} {studio.city}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-rose group-hover:text-pearl transition-colors">
            {t('Karte anzeigen', 'Show map')} <ArrowRight size={14} />
          </span>
          <p className="mt-3 text-[10px] text-fog max-w-xs leading-relaxed">
            {t(
              'Beim Anzeigen wird Google Maps geladen — dabei werden Daten an Google übertragen.',
              'Loading the map embeds Google Maps — this transmits data to Google.'
            )}
          </p>
        </button>
      )}

      {loaded && (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-bg bg-pearl/95 hover:bg-rose hover:text-pearl transition-colors px-4 py-2.5 rounded-full font-semibold backdrop-blur-sm shadow-lg"
        >
          {t('Route', 'Directions')} <ArrowRight size={12} />
        </a>
      )}
    </div>
  );
}
