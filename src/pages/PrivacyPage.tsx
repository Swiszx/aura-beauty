import { studio } from '../data';

export default function PrivacyPage() {
  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow text-rose mb-6">Rechtliches</p>
        <h1 className="display-mega text-5xl md:text-7xl mb-12">
          Datenschutz<span className="text-aurora">.</span>
        </h1>

        <div className="space-y-7 text-mist leading-relaxed">
          <section>
            <h2 className="text-pearl font-display text-xl mb-2">1. Verantwortlich</h2>
            <p>
              {studio.fullName} · {studio.artist.fullName}<br />
              {studio.contact.address}, {studio.postalCode} {studio.city}<br />
              <a href={`mailto:${studio.contact.email}`} className="text-rose underline">{studio.contact.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">2. Welche Daten wir erheben</h2>
            <p>
              Diese Website speichert keine Eingaben auf einem Server. Buchungen erfolgen direkt über{' '}
              <a href={studio.contact.planity} target="_blank" rel="noreferrer" className="text-rose underline">Planity</a>{' '}
              (eigene Datenschutzerklärung), per WhatsApp oder telefonisch.
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">3. Cookies</h2>
            <p>
              Wir verwenden ausschließlich technisch notwendige Cookies (Sprachwahl, Banner-Zustimmung). Keine
              Tracking-Cookies, keine Analyse durch Dritte.
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">4. Eingebettete Inhalte Dritter</h2>
            <p>
              Wir verlinken auf Instagram, Facebook, Planity und Google Fonts. Beim Klick auf solche Links
              bzw. beim Laden externer Schriften können Daten an die jeweiligen Anbieter übertragen werden.
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">5. Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten. Bitte schreib uns
              formlos per{' '}
              <a href={studio.contact.whatsapp} target="_blank" rel="noreferrer" className="text-rose underline">WhatsApp</a>{' '}
              oder an{' '}
              <a href={`mailto:${studio.contact.email}`} className="text-rose underline">{studio.contact.email}</a>.
            </p>
          </section>

          <section className="pt-6 border-t hairline">
            <p className="text-xs text-fog">
              Hinweis: Diese Seite ist ein Vorschau-Vorschlag. Die endgültige Datenschutzerklärung wird
              gemeinsam mit dem Studio vor dem Live-Gang angepasst.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
