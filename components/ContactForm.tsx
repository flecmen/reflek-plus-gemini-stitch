'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Poptávka byla úspěšně odeslána (Demo).');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <>
      {formStatus && (
        <div className="mb-4 p-4 bg-reflek-red/20 border border-reflek-red text-white rounded">
          {formStatus}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
              Jméno a příjmení
            </label>
            <input
              type="text"
              className="w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md"
              placeholder="Jan Novák"
              required
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
              Telefon
            </label>
            <input
              type="tel"
              className="w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md"
              placeholder="+420..."
            />
          </div>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
            E-mail
          </label>
          <input
            type="email"
            className="w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md"
            placeholder="jan@novak.cz"
            required
          />
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
            Zpráva
          </label>
          <textarea
            rows={4}
            className="w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md resize-none"
            placeholder="Popište nám, co potřebujete..."
          />
        </div>
        <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-label-sm text-label-sm text-on-secondary-container max-w-sm">
            Odesláním souhlasíte se zpracováním osobních údajů za účelem odpovědi na vaši poptávku.{' '}
            <Link href="/zasady" className="text-reflek-red hover:underline">
              Zásady ochrany osobních údajů
            </Link>
          </p>
          <button
            type="submit"
            className="bg-reflek-red text-white font-label-md text-label-md px-8 py-3 rounded uppercase tracking-widest metallic-gradient border-t border-white/20 hover:bg-primary-container transition-colors w-full md:w-auto shrink-0"
          >
            Odeslat poptávku
          </button>
        </div>
      </form>
    </>
  );
}
