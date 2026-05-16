import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autopotahy a čalounění Brno | Reflek Plus',
  description:
    'Zakázková výroba autopotahů a opravy autosedadel v Brně. Přesné střihy pro auta od 90. let. Tradice od roku 1996. Nezávazná poptávka zdarma.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Autopotahy a čalounění Brno | Reflek Plus',
    description:
      'Zakázková výroba autopotahů a opravy autosedadel v Brně. Přesné střihy pro auta od 90. let.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[751px] flex items-center justify-center py-24 px-4 md:px-margin overflow-hidden bg-carbon-black">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3ewvHfDhobrwTmtDxUL0PNEmD2iIW2n5SmS9ZrWPGgED8FRDyCPP7BycvN_dOq_IU64NaY1tBf3of-XdiMdKk8pT0dh3sxFv1WTqFqfVDCaqEG76EpkhOV5dqlY_9z7UPMgqK2JPnqwIYk6zWFUsR6ON6CT9r8BKIJcYidR3FxNvjQoFo-WMlzf9_cG1uTzgcLpxjT5mhJZr6BDhPVJ7dLLGON4sDCyDBNOHwZBnImFNMWA7au0ruKx9H-VjMqijTExnZF4iPgC9T')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-carbon-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-carbon-black/80" />
        </div>
        <div className="relative z-10 w-full max-w-site mx-auto flex flex-col items-center text-center">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-6 max-w-4xl text-balance">
            Precizní autopotahy a čalounění z Brna s tradicí od roku 1996
          </h1>
          <p className="font-body-lg text-body-lg text-on-secondary-container mb-12 max-w-2xl text-balance">
            Specializujeme se na zakázkovou výrobu přesných autopotahů a profesionální opravy autosedadel. Kvalita prověřená více než čtvrt stoletím zkušeností.
          </p>
          <Link
            href="/kontakt"
            className="bg-reflek-red text-white font-label-md text-label-md px-8 py-4 rounded machined-border hover:bg-on-primary-fixed-variant transition-colors flex justify-center items-center gap-2 w-full sm:w-auto"
          >
            <span>Nezávazná poptávka</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-margin bg-carbon-black relative" id="sluzby">
        <div className="max-w-site mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-sm text-label-sm text-reflek-red uppercase tracking-[0.1em] mb-2 block">
                Naše Specializace
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white">Prémiové čalounické služby</h2>
            </div>
            <p className="font-body-md text-body-md text-on-secondary-container max-w-md">
              Na většinu aut od 90. let disponujeme hotovým střihem, ale povlečeme v podstatě cokoliv, co nám přistavíte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Výroba card */}
            <div className="col-span-1 md:col-span-8 bg-deep-charcoal rounded-xl border border-white/5 overflow-hidden relative group min-h-[400px] flex flex-col">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_8OAeW9rmctZpuPkeJxtdb7ZCe6y5sn-szSox8eHuJr1Ad2tFyKKWaY_RWx2M5bDxsgq5Fb5DcM-v_ELP2JfMgMl8iprPRhAmkT-GaEgLBUygpi2WaTX8lzE77S8M8sdQlNPb0GknvjPduD_7XheKHYvyVSscc5FBcYcXyJn71k9d0Bsq4QTSH0Qdezk9_GpmA8xOqKHQpcw2TaVemQ3PHjtdMiXzlQ4SlPJfFB7_BUfGObWS1gv0n8denJOPppP9MkEOi0Op5pJY')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
              <div className="relative z-10 p-6 md:p-10 mt-auto">
                <div className="w-12 h-12 rounded bg-surface/80 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-reflek-red">airline_seat_recline_extra</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-3">Výroba autopotahů</h3>
                <p className="font-body-md text-body-md text-on-secondary-container max-w-lg mb-6">
                  Přesné střihy pro konkrétní modely vozidel. Používáme vysoce odolné materiály, které chrání originální čalounění a zvyšují komfort jízdy.
                </p>
                <Link href="/vyroba" className="inline-flex items-center gap-2 font-label-md text-label-md text-white hover:text-reflek-red transition-colors">
                  Více o výrobě <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Oprava card */}
            <div className="col-span-1 md:col-span-4 bg-deep-charcoal rounded-xl border border-white/5 p-6 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 rounded bg-surface/80 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-reflek-red">build</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-3">Oprava sedadel</h3>
                <p className="font-body-md text-body-md text-on-secondary-container">
                  Profesionální renovace poškozených částí sedadel, výměna zborcených molitanů, oprava propálených míst a obnova bočnic.
                </p>
              </div>
              <div className="relative z-10 mt-8">
                <Link href="/oprava" className="inline-flex items-center gap-2 font-label-md text-label-md text-white hover:text-reflek-red transition-colors">
                  Detaily oprav <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
