import { useLocale, type Locale } from '../i18n';

const OPTIONS: Locale[] = ['de', 'en'];

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div role="group" aria-label="Language" className={`inline-flex items-center ${className}`}>
      {OPTIONS.map((l, i) => {
        const active = locale === l;
        return (
          <span key={l} className="flex items-center">
            <button
              onClick={() => setLocale(l)}
              aria-pressed={active}
              aria-label={l === 'de' ? 'Deutsch' : 'English'}
              className={`px-2 py-2 text-[12px] md:text-[11px] tracking-widest font-semibold transition-colors min-h-[36px] inline-flex items-center ${
                active ? 'text-pearl' : 'text-fog hover:text-pearl'
              }`}
            >
              {l.toUpperCase()}
            </button>
            {i === 0 && <span className="text-veil" aria-hidden="true">·</span>}
          </span>
        );
      })}
    </div>
  );
}
