import { ArrowRight } from 'lucide-react';
import { studio } from '../data';
import { useLocale } from '../i18n';

export default function MapEmbed() {
  const { t } = useLocale();

  const fullAddress = `${studio.contact.address}, ${studio.postalCode} ${studio.city}`;
  const query = encodeURIComponent(fullAddress);
  const embedUrl = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border hairline bg-bg-soft">
      <iframe
        title={t('Karte zum Studio Aura Beauty Schweinfurt', 'Map to Aura Beauty Schweinfurt')}
        src={embedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute top-3 right-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-bg bg-pearl/95 hover:bg-rose hover:text-pearl transition-colors px-4 py-2.5 rounded-full font-semibold backdrop-blur-sm shadow-lg"
      >
        {t('Route', 'Directions')} <ArrowRight size={12} />
      </a>
    </div>
  );
}
