import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt a nezávazná poptávka Brno',
  description:
    'Kontaktujte Reflek Plus v Brně. Adresa: Gajdošova 80, 615 00 Brno. Email: info@reflekplus.cz. Poptejte autopotahy nebo opravu sedadel nezávazně.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | Reflek Plus Brno',
    description:
      'Kontaktujte nás pro nezávaznou poptávku autopotahů nebo opravy sedadel. Jsme v Brně na Gajdošově 80.',
    url: '/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-margin overflow-hidden bg-surface border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmAzhYWyPiY4Y99_ADQUj2kPQntTnvAkafzmgdqMxH4r_2iA_lBKNt1PQkH0NoNQps4m2FGSmtTDY761Vk-kp_ViRHnMwqQgE9Xu9ihoU5oSRGZJ6Q2YCQ8bTqXHWrmdGKxOR_iEoeGrEYLAZ9poc0iROHUwTeVYKuojJ31GPCCsLGkTlZnWy-zSQBBJqTxwq1P9qwL84l7fLeOlS8BrUm9dUIjwzy3VKWmiKZDDk8Ci3_JCUmMHArzV6_0aoRLJTynfBJm49tcdV"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 to-carbon-black" />
        </div>
        <div className="relative z-10 max-w-site mx-auto">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 md:w-2/3">
            Spojte se s námi.
          </h1>
          <p className="font-body-lg text-body-lg text-on-secondary-container md:w-1/2">
            Jsme tu pro vás, ať už potřebujete opravit sedadlo, ušít nové potahy nebo poradit s interiérem vašeho vozu.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 md:py-20 px-4 md:px-margin bg-carbon-black">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Contact info */}
          <div className="md:col-span-5 bg-deep-charcoal border border-surface-container-high rounded-lg p-6 md:p-8 metallic-gradient relative overflow-hidden group hover:border-reflek-red/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-reflek-red/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <h2 className="font-headline-md text-headline-md text-on-surface mb-8 relative z-10">Kontaktní údaje</h2>
            <div className="space-y-6 md:space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface border border-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-reflek-red">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">Adresa</h3>
                  <p className="font-body-md text-body-md text-on-surface">
                    Gajdošova 80<br />615 00 Brno
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface border border-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-reflek-red">mail</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">E-mail</h3>
                  <a
                    href="mailto:info@reflekplus.cz"
                    className="font-body-md text-body-md text-on-surface hover:text-reflek-red transition-colors"
                  >
                    info@reflekplus.cz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface border border-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-reflek-red">call</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-1">Telefon</h3>
                  <a
                    href="tel:+420123456789"
                    className="block font-body-md text-body-md text-on-surface hover:text-reflek-red transition-colors"
                  >
                    +420 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-surface border border-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-reflek-red">schedule</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-widest mb-3">Otevírací doba</h3>
                  <div className="space-y-1">
                    {[
                      { day: 'Po – Pá', hours: '7:00 – 17:00', open: true },
                      { day: 'So', hours: 'Zavřeno', open: false },
                      { day: 'Ne', hours: 'Zavřeno', open: false },
                      { day: 'Svátky', hours: 'Zavřeno', open: false },
                    ].map(({ day, hours, open }) => (
                      <div key={day} className="flex justify-between gap-4 font-body-md text-body-md">
                        <span className="text-on-secondary-container">{day}</span>
                        <span className={open ? 'text-on-surface' : 'text-on-secondary-container/50'}>{hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 font-label-sm text-label-sm text-on-secondary-container/70 italic">
                    Po telefonické domluvě možné setkání i mimo pracovní dobu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-surface border border-surface-container-high rounded-lg p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Nezávazná poptávka</h2>
            <p className="font-body-md text-body-md text-on-secondary-container mb-8">
              Napište nám, co pro vás můžeme udělat.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 md:px-margin pb-12 md:pb-20 bg-carbon-black">
        <div className="max-w-site mx-auto rounded-lg overflow-hidden border border-white/5">
          <iframe
            title="Reflek Plus – mapa"
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Reflek%20plus%20&maptype=roadmap&zoom=14"
            style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(0.85) brightness(0.9)' }}
          />
        </div>
      </section>
    </>
  );
}
