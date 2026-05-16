import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oprava autosedadel a čalounění Brno',
  description:
    'Profesionální opravy autosedadel v Brně. Opravy poškozených potahů, rekonstrukce molitanových výplní, čalounění stropnic. Kontaktujte nás pro nezávaznou poptávku.',
  alternates: { canonical: '/oprava' },
  openGraph: {
    title: 'Oprava autosedadel a čalounění Brno | Reflek Plus',
    description:
      'Profesionální opravy autosedadel v Brně. Opravy propálených potahů, výměna molitanů, čalounění stropnic.',
    url: '/oprava',
  },
};

export default function OpravaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[530px] flex items-center justify-center bg-deep-charcoal border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuHF-nFCgRDgN4l8v84XxuCXzDXEKr-HqwCWuHWsPXEcoKImPu5ZbnfZmRjb3GtQnYOON68DN70MRYahrd0loqQpIDYKmVKMM_sThv5MQFP6McpykIDwt3iJ4BTwauL_2RvLNJc_2D3ZAh7pu52tWa0ObdIK3xBXAWkaAU8qKUdodWWQTDOLRqBmIp7jgpC49ztXrSZM-_6j1Wq1ZouWh1WzkYOy8rwBp0NK_5olfrA05Q5DvuUfVo4yFpzxcMWXpZTK0ps6LxFHf-')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black to-transparent" />
        <div className="relative z-10 max-w-site mx-auto px-4 md:px-margin text-center">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-6">
            Precizní <span className="text-reflek-red">Oprava Sedadel</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto mb-8">
            Vracíme život poškozeným autosedačkám. Od opravy roztrženého čalounění po kompletní rekonstrukci molitanových výplní a stropnic.
          </p>
          <Link href="/kontakt" className="machined-button font-label-md text-label-md text-white px-8 py-3 rounded inline-block">
            Kontaktujte nás
          </Link>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 px-4 md:px-margin max-w-site mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Naše Specializace</h2>
          <div className="h-1 w-16 bg-reflek-red mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-deep-charcoal p-8 rounded machined-border hover:border-reflek-red/50 transition-colors group flex flex-col">
            <span
              className="material-symbols-outlined text-reflek-red text-4xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              car_repair
            </span>
            <h3 className="font-headline-md text-headline-md text-white mb-4">Opravy Poškození</h3>
            <p className="font-body-md text-body-md text-on-secondary-container mb-6 flex-grow">
              Lokální i celkové opravy propálených, prodřených nebo roztržených potahů. Používáme originální nebo vysoce kvalitní náhradní materiály pro dokonalé sladění.
            </p>
          </div>
          <div className="bg-deep-charcoal p-8 rounded machined-border hover:border-reflek-red/50 transition-colors group flex flex-col">
            <span
              className="material-symbols-outlined text-reflek-red text-4xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              weekend
            </span>
            <h3 className="font-headline-md text-headline-md text-white mb-4">Rekonstrukce Pěn</h3>
            <p className="font-body-md text-body-md text-on-secondary-container mb-6 flex-grow">
              Obnova zhroucených bočnic a prosezených sedáků. Výměna a doplnění molitanových částí pro obnovení původní ergonomie a komfortu sedadla.
            </p>
          </div>
          <div className="bg-deep-charcoal p-8 rounded machined-border hover:border-reflek-red/50 transition-colors group flex flex-col">
            <span
              className="material-symbols-outlined text-reflek-red text-4xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              roofing
            </span>
            <h3 className="font-headline-md text-headline-md text-white mb-4">Čalounění Stropů</h3>
            <p className="font-body-md text-body-md text-on-secondary-container mb-6 flex-grow">
              Oprava odlepených nebo prověšených stropnic. Kompletní přečalounění stropů do nových materiálů včetně sloupků pro dokonalý vzhled interiéru.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
