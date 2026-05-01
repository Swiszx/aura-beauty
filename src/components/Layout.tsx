import { Outlet } from 'react-router-dom';
import { useLocale } from '../i18n';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import MobileActionBar from './MobileActionBar';
import CookieBanner from './CookieBanner';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-bg text-pearl relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-pearl focus:text-bg focus:px-4 focus:py-3 focus:rounded-md focus:font-semibold focus:text-sm"
      >
        {t('Zum Hauptinhalt springen', 'Skip to main content')}
      </a>
      <ScrollProgress />
      <Header />
      {/* Reserve room at the bottom of the page on mobile so content
       * doesn't sit under the action bar. */}
      <main id="main" className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileActionBar />
      <CookieBanner />
    </div>
  );
}
