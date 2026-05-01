import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Locale = 'de' | 'en';

const STORAGE_KEY = 'aura-locale';

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (de: string, en: string) => string;
  pick: <T>(de: T, en: T) => T;
}

const LocaleContext = createContext<Ctx | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'de';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') return saved;
  } catch { /* localStorage may be blocked */ }
  const nav = navigator.language?.toLowerCase() ?? '';
  return nav.startsWith('en') ? 'en' : 'de';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    setLocaleState(l);
  };

  const t = (de: string, en: string) => (locale === 'de' ? de : en);
  const pick = <T,>(de: T, en: T): T => (locale === 'de' ? de : en);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, pick }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
