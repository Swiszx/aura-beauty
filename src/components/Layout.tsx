import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import CookieBanner from './CookieBanner';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-pearl relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-pearl focus:text-bg focus:px-4 focus:py-3 focus:rounded-md focus:font-semibold focus:text-sm"
      >
        Zum Hauptinhalt springen
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <CookieBanner />
    </div>
  );
}
