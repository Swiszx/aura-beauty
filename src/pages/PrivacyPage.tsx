import { studio } from '../data';
import { useLocale } from '../i18n';

export default function PrivacyPage() {
  const { t } = useLocale();
  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow text-rose mb-6">{t('Rechtliches', 'Legal')}</p>
        <h1 className="display-mega text-5xl md:text-7xl mb-12">
          {t('Datenschutz', 'Privacy')}<span className="text-rose">.</span>
        </h1>

        <div className="space-y-7 text-mist leading-relaxed">
          <section>
            <h2 className="text-pearl font-display text-xl mb-2">1. {t('Verantwortlich', 'Data controller')}</h2>
            <p>
              {studio.fullName} · {studio.artist.fullName}<br />
              {studio.contact.address}, {studio.postalCode} {studio.city}<br />
              <a href={`mailto:${studio.contact.email}`} className="text-rose underline">{studio.contact.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">2. {t('Welche Daten wir erheben', 'What data we collect')}</h2>
            <p>
              {t(
                'Diese Website speichert keine Eingaben auf einem Server. Buchungen erfolgen direkt über',
                'This website does not store any inputs on a server. Bookings are made directly via'
              )}{' '}
              <a href={studio.contact.planity} target="_blank" rel="noreferrer" className="text-rose underline">Planity</a>{' '}
              {t('(eigene Datenschutzerklärung), per WhatsApp oder telefonisch.', '(separate privacy policy), via WhatsApp or by phone.')}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">3. {t('Cookies', 'Cookies')}</h2>
            <p>
              {t(
                'Wir verwenden ausschließlich technisch notwendige Cookies (Sprachwahl, Banner-Zustimmung). Keine Tracking-Cookies, keine Analyse durch Dritte.',
                'We use only technically necessary cookies (language preference, banner consent). No tracking cookies, no third-party analytics.'
              )}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">4. {t('Eingebettete Inhalte Dritter', 'Embedded third-party content')}</h2>
            <p>
              {t(
                'Wir verlinken auf Instagram, Facebook, Planity und Google Fonts. Beim Klick auf solche Links bzw. beim Laden externer Schriften können Daten an die jeweiligen Anbieter übertragen werden.',
                'We link to Instagram, Facebook, Planity and Google Fonts. Clicking those links or loading external fonts may transmit data to the respective providers.'
              )}
            </p>
            <p className="mt-3">
              {t(
                'Die Karte unseres Studios wird über Google Maps eingebunden. Beim Aufruf der entsprechenden Seite sowie beim Klick auf „Route" können Daten (z. B. IP-Adresse) an Google Ireland Limited übermittelt werden.',
                'The map of our studio is embedded via Google Maps. When the corresponding page is loaded or when "Directions" is clicked, data (e.g. IP address) may be transmitted to Google Ireland Limited.'
              )}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">5. {t('Deine Rechte', 'Your rights')}</h2>
            <p>
              {t(
                'Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Bitte schreib uns formlos per',
                'You have the right to information, correction and deletion of your data. Please write informally via'
              )}{' '}
              <a href={studio.contact.whatsapp} target="_blank" rel="noreferrer" className="text-rose underline">WhatsApp</a>{' '}
              {t('oder an', 'or to')}{' '}
              <a href={`mailto:${studio.contact.email}`} className="text-rose underline">{studio.contact.email}</a>.
            </p>
          </section>

          <section className="pt-6 border-t hairline">
            <p className="text-xs text-fog">
              {t(
                'Hinweis: Diese Seite ist ein Vorschau-Vorschlag. Die endgültige Datenschutzerklärung wird gemeinsam mit dem Studio vor dem Live-Gang angepasst.',
                'Note: This page is a preview proposal. The final privacy statement will be adjusted together with the studio before the site goes live.'
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
