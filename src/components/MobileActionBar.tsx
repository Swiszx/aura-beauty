import { Link, useLocation } from 'react-router-dom';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { studio } from '../data';
import { useLocale } from '../i18n';

/**
 * App-like bottom action bar on mobile. Three persistent actions:
 * Call · Book · WhatsApp. Always reachable with one thumb. The middle
 * action is the primary one (book a slot). iOS safe-area aware.
 */
export default function MobileActionBar() {
  const { t } = useLocale();
  const { pathname } = useLocation();
  const onBooking = pathname === '/termin';

  return (
    <nav
      aria-label={t('Schnellaktionen', 'Quick actions')}
      className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-bg/95 backdrop-blur-2xl border-t hairline"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-3 h-16">
        <a
          href={`tel:${studio.contact.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-mist active:bg-pearl/5 active:text-pearl transition-colors"
        >
          <Phone size={20} strokeWidth={1.6} />
          <span className="text-[10px] tracking-widest uppercase">{t('Anruf', 'Call')}</span>
        </a>
        <Link
          to="/termin"
          className={`flex flex-col items-center justify-center gap-1 transition-colors active:scale-[0.97] ${
            onBooking
              ? 'bg-rose text-bg'
              : 'bg-pearl text-bg active:bg-rose'
          }`}
        >
          <Calendar size={20} strokeWidth={1.7} />
          <span className="text-[10px] tracking-widest uppercase font-semibold">
            {t('Termin', 'Book')}
          </span>
        </Link>
        <a
          href={studio.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-mist active:bg-pearl/5 active:text-pearl transition-colors"
        >
          <MessageCircle size={20} strokeWidth={1.6} />
          <span className="text-[10px] tracking-widest uppercase">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
