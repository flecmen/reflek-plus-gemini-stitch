import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů',
  description:
    'Informace o zpracování osobních údajů společností Reflek Plus s.r.o. dle nařízení GDPR.',
  alternates: { canonical: '/zasady' },
  robots: { index: false, follow: false },
};

export default function ZasadyPage() {
  return (
    <div className="max-w-site mx-auto px-4 md:px-margin py-16 md:py-24">
      <h1 className="font-display-lg text-headline-lg md:text-display-lg text-white mb-4">
        Zásady ochrany osobních údajů
      </h1>
      <p className="font-body-md text-body-md text-on-secondary-container mb-12 max-w-2xl">
        Vaše soukromí bereme vážně. Tyto zásady vysvětlují, jak nakládáme s osobními údaji, které nám poskytnete přes kontaktní formulář na našem webu.
      </p>

      <div className="space-y-10 max-w-3xl font-body-md text-body-md text-on-surface">

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">1. Kdo vaše údaje zpracovává (Správce)</h2>
          <p className="text-on-secondary-container mb-3">Správcem vašich osobních údajů je společnost:</p>
          <div className="bg-deep-charcoal border border-white/5 rounded p-5 space-y-1 text-on-surface">
            <p className="font-semibold">REFLEK plus s.r.o.</p>
            <p>Sídlo: Mlýnská 326/13, Brno-střed, 602 00 Brno</p>
            <p>IČO: 27713458</p>
            <p>DIČ: CZ27713458</p>
            <p>Zapsaná v obchodním rejstříku vedeném u Krajského soudu v Brně, oddíl C, vložka 53694</p>
          </div>
          <p className="text-on-secondary-container mt-3">
            Máte-li jakýkoliv dotaz ohledně svých údajů, kontaktujte nás na:{' '}
            <a href="mailto:info@reflekplus.cz" className="text-reflek-red hover:underline">info@reflekplus.cz</a>.
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">2. Jaké údaje zpracováváme a proč</h2>
          <p className="text-on-secondary-container mb-4">
            Když vyplníte náš kontaktní formulář, zpracováváme pouze údaje, které do něj sami zadáte:
          </p>
          <ul className="list-disc list-inside space-y-1 text-on-secondary-container mb-4 ml-2">
            <li>Jméno a příjmení</li>
            <li>E-mailová adresa</li>
            <li>Telefonní číslo</li>
            <li>Obsah vaší zprávy (poptávky)</li>
          </ul>
          <p className="text-on-secondary-container">
            Vaše údaje potřebujeme výhradně proto, abychom vám mohli odpovědět na váš dotaz, zpracovat vaši nezávaznou poptávku a případně se s vámi domluvit na další spolupráci.
            Vaše údaje nebudeme používat pro rozesílání reklamních e-mailů ani je nebudeme prodávat třetím stranám.
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">3. Právní základ zpracování</h2>
          <p className="text-on-secondary-container">
            Nepotřebujeme od vás žádný souhlas. Zpracování těchto údajů je nezbytné pro provedení opatření přijatých před uzavřením smlouvy na vaši žádost (dle čl. 6 odst. 1 písm. b) GDPR). Abychom se s vámi mohli domluvit na případném obchodu, musíme s vámi umět komunikovat.
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">4. Jak dlouho vaše údaje uchováváme</h2>
          <p className="text-on-secondary-container">
            Vaše osobní údaje uchováváme po dobu nezbytnou k vyřízení vaší poptávky a následné komunikaci. Pokud nedojde k uzavření smlouvy, uchováváme komunikaci po dobu 3 let pro účely ochrany našich právních nároků a případné budoucí spolupráce. Pokud smlouvu uzavřeme, údaje uchováváme po dobu stanovenou zákonem (např. 10 let u daňových dokladů).
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">5. Kdo další má k údajům přístup</h2>
          <p className="text-on-secondary-container mb-3">
            Vaše údaje zpracováváme primárně my. K údajům mohou mít přístup pouze naši prověření dodavatelé (zpracovatelé), kteří nám pomáhají s chodem webu:
          </p>
          <ul className="list-disc list-inside space-y-1 text-on-secondary-container ml-2 mb-3">
            <li>Poskytovatel webhostingu: Vercel, Inc. (USA) — provozovatel platformy, na které web běží</li>
          </ul>
          <p className="text-on-secondary-container">Vercel zpracovává data v rámci standardních smluvních doložek EU pro přenos do třetích zemí.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-headline-md text-white mb-4">6. Vaše práva</h2>
          <p className="text-on-secondary-container mb-3">Podle GDPR máte právo:</p>
          <ul className="list-disc list-inside space-y-2 text-on-secondary-container ml-2 mb-4">
            <li>Zeptat se nás, jaké vaše údaje zpracováváme, a požádat o přístup k nim.</li>
            <li>Požádat o opravu údajů, pokud jsou nepřesné.</li>
            <li>Požádat o výmaz údajů, pokud je již nepotřebujeme.</li>
            <li>Požádat o omezení zpracování.</li>
          </ul>
          <p className="text-on-secondary-container mb-3">
            Svá práva uplatníte napsáním na:{' '}
            <a href="mailto:info@reflekplus.cz" className="text-reflek-red hover:underline">info@reflekplus.cz</a>.
          </p>
          <p className="text-on-secondary-container">
            Pokud byste měli pocit, že s vašimi údaji nezacházíme v souladu se zákonem, máte právo podat stížnost u Úřadu pro ochranu osobních údajů:{' '}
            <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-reflek-red hover:underline">www.uoou.cz</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
