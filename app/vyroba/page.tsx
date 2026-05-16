import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Výroba autopotahů na míru Brno',
  description:
    'Zakázková výroba autopotahů na míru v Brně. Přesné střihy pro auta od roku 1990. Materiály v kvalitě prvovýroby. Individuální přístup ke každé zakázce.',
  alternates: { canonical: '/vyroba' },
  openGraph: {
    title: 'Výroba autopotahů na míru Brno | Reflek Plus',
    description:
      'Zakázková výroba autopotahů na míru. Přesné střihy pro auta od 90. let, materiály v kvalitě prvovýroby.',
    url: '/vyroba',
  },
};

export default function VyrobaPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative w-full min-h-[614px] flex items-center justify-center overflow-hidden bg-deep-charcoal border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxusní autopotahy na míru"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAYs_vHNBd5x-f2Aoxg_BjhB6uXTJt7DoxBLdnaaD3IazlNxoOfGqLDPTyKucXz3kJv-SQpmbG_s8FcOMYBvpfTl3TqmJVVuZzurrMGCbzWg_zRacUepFFLGoo9DGOomZ_fln0M0odhGa2EDnvCLOfvLMcA_xrLY6wyghW4y1g-XEOQKscq4Dh3G7S-iVbIoys32TYTny2QlMBPVPtYdVgGWp59dSuGlF5KcsGB93zBA3xem6E3FiLvaooRpiwhXiQN1jyh3FfWG9"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/60 to-carbon-black" />
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin py-20 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-brushed-chrome/30 bg-deep-charcoal/80 rounded-sm font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-reflek-red mr-2" /> Precizní čalounictví
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-6 max-w-3xl">
            Výroba autopotahů na míru
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Více než čtvrt století zkušeností. Na většinu aut od 90. let disponujeme hotovým střihem, ale povlečeme v podstatě cokoliv, co nám přistavíte.
          </p>
          <Link
            href="/kontakt"
            className="bg-reflek-red text-white font-label-md text-label-md px-8 py-4 rounded btn-primary hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center group"
          >
            Nezávazná poptávka{' '}
            <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="w-full max-w-container-max mx-auto px-4 md:px-margin py-24 space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-white mb-6">
              Technická dokonalost pro každý model
            </h2>
            <p className="font-body-md text-body-md text-on-secondary-container mb-8">
              Zakládáme si na individuálním přístupu. Od historických vozů z devadesátých let až po nejmodernější elektromobily, naše střihy respektují originální linie sedadel a zajišťují perfektní obepnutí.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-reflek-red mr-3 mt-0.5">check_circle</span>
                <span className="text-on-surface">Přesné střihy pro auta od 90. let</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-reflek-red mr-3 mt-0.5">check_circle</span>
                <span className="text-on-surface">Individuální zakázková výroba na přání</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-reflek-red mr-3 mt-0.5">check_circle</span>
                <span className="text-on-surface">Materiály v kvalitě prvovýroby</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-deep-charcoal border border-white/5 rounded p-6 flex flex-col items-start justify-between min-h-[200px] hover:border-reflek-red/50 transition-colors group">
              <span className="material-symbols-outlined text-4xl text-brushed-chrome mb-4 group-hover:text-reflek-red transition-colors">
                precision_manufacturing
              </span>
              <div>
                <h3 className="font-headline-md text-body-lg font-semibold text-white mb-2">Strojová přesnost</h3>
                <p className="font-body-sm text-label-sm text-on-secondary-container">
                  Využíváme pokročilé technologie pro přesný střih materiálů.
                </p>
              </div>
            </div>
            <div className="bg-deep-charcoal border border-white/5 rounded p-6 flex flex-col items-start justify-between min-h-[200px] hover:border-reflek-red/50 transition-colors group">
              <span className="material-symbols-outlined text-4xl text-brushed-chrome mb-4 group-hover:text-reflek-red transition-colors">
                airline_seat_recline_extra
              </span>
              <div>
                <h3 className="font-headline-md text-body-lg font-semibold text-white mb-2">Ergonomie</h3>
                <p className="font-body-sm text-label-sm text-on-secondary-container">
                  Potahy nenarušují komfort ani bezpečnostní prvky sedadla.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
