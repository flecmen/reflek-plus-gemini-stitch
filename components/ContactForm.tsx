'use client';

import Link from 'next/link';
import { useState } from 'react';

type Status = { ok: true } | { ok: false; error: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Chyba serveru.');
      setStatus({ ok: true });
      form.reset();
    } catch (err) {
      setStatus({ ok: false, error: err instanceof Error ? err.message : 'Nepodařilo se odeslat zprávu.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {status?.ok && (
        <div className="mb-4 p-4 bg-green-900/30 border border-green-600 text-green-300 rounded">
          Poptávka odeslána. Ozveme se vám co nejdříve.
        </div>
      )}
      {status && !status.ok && (
        <div className="mb-4 p-4 bg-reflek-red/20 border border-reflek-red text-white rounded">
          {status.error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
              Jméno a příjmení
            </label>
            <input
              name="name"
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
              name="phone"
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
            name="email"
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
            name="message"
            rows={4}
            className="w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md resize-none"
            placeholder="Popište nám, co potřebujete..."
            required
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
            disabled={loading}
            className="bg-reflek-red text-white font-label-md text-label-md px-8 py-3 rounded uppercase tracking-widest metallic-gradient border-t border-white/20 hover:bg-primary-container transition-colors w-full md:w-auto shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Odesílám…' : 'Odeslat poptávku'}
          </button>
        </div>
      </form>
    </>
  );
}
