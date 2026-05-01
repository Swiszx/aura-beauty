import { studio } from '../data';
import { useLocale } from '../i18n';

export default function ImpressumPage() {
  const { t } = useLocale();
  return (
    <div className="bg-bg text-pearl min-h-screen pt-32 md:pt-40 pb-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow text-rose mb-6">{t('Rechtliches', 'Legal')}</p>
        <h1 className="display-mega text-5xl md:text-7xl mb-12">
          {t('Impressum', 'Imprint')}<span className="text-rose">.</span>
        </h1>

        <div className="space-y-7 text-mist leading-relaxed">
          <section>
            <h2 className="text-pearl font-display text-xl mb-2">{t('Angaben gemäß § 5 TMG', 'Information per § 5 TMG')}</h2>
            <p>
              {studio.fullName}<br />
              {studio.artist.fullName}<br />
              {studio.contact.address}<br />
              {studio.postalCode} {studio.city}<br />
              {studio.country}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">{t('Kontakt', 'Contact')}</h2>
            <p>
              {t('Telefon', 'Phone')}: <a href={`tel:${studio.contact.phone}`} className="text-rose underline">{studio.contact.phoneDisplay}</a><br />
              {t('E-Mail', 'Email')}: <a href={`mailto:${studio.contact.email}`} className="text-rose underline">{studio.contact.email}</a><br />
              WhatsApp: <a href={studio.contact.whatsapp} target="_blank" rel="noreferrer" className="text-rose underline">{studio.contact.whatsappDisplay}</a><br />
              Instagram: {studio.contact.instagramHandle}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">
              {t('Verantwortlich für den Inhalt', 'Responsible for content')}
            </h2>
            <p>
              {studio.artist.fullName}<br />
              {studio.contact.address}, {studio.postalCode} {studio.city}
            </p>
          </section>

          <section>
            <h2 className="text-pearl font-display text-xl mb-2">{t('Streitschlichtung', 'Dispute resolution')}</h2>
            <p>
              {t(
                'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
                'The European Commission provides a platform for online dispute resolution (OS):'
              )}{' '}
              <a className="text-rose underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>.
            </p>
            <p className="mt-3">
              {t(
                'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
                'We are neither willing nor obliged to participate in dispute resolution procedures before a consumer arbitration board.'
              )}
            </p>
          </section>

          <section className="pt-6 border-t hairline">
            <p className="text-xs text-fog">
              {t(
                'Hinweis: Diese Seite ist ein Vorschau-Vorschlag. Die offiziellen Angaben (Steuer-Nr., USt-IdNr., ggf. Aufsichtsbehörde) werden vor dem Live-Gang ergänzt.',
                'Note: This page is a preview proposal. Official details (tax ID, VAT ID, supervising authority if applicable) will be added before the site goes live.'
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
