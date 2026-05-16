'use client';

import Link from 'next/link';
import { useState } from 'react';

type Status = { ok: true } | { ok: false; error: string } | null;

function validate(data: { name: string; email: string; phone: string; message: string }): string | null {
  if (!data.name.trim()) return 'Vyplňte jméno a příjmení.';
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Zadejte platnou e-mailovou adresu.';
  if (!data.phone.trim() || !/^[+\d][\d\s\-().]{6,}$/.test(data.phone)) return 'Zadejte platné telefonní číslo.';
  if (data.message.trim().length < 20) return 'Zpráva musí mít alespoň 20 znaků.';
  return null;
}

const inputClass = 'w-full bg-deep-charcoal border border-surface-container-high rounded focus:border-reflek-red focus:ring-0 text-on-surface px-4 py-3 font-body-md';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const validationError = validate(data);
    if (validationError) {
      setStatus({ ok: false, error: validationError });
      return;
    }

    setLoading(true);
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
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
              Jméno a příjmení <span className="text-reflek-red">*</span>
            </label>
            <input name="name" type="text" className={inputClass} placeholder="Jan Novák" required />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
              Telefon <span className="text-reflek-red">*</span>
            </label>
            <input name="phone" type="tel" className={inputClass} placeholder="+420 123 456 789" required />
          </div>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
            E-mail <span className="text-reflek-red">*</span>
          </label>
          <input name="email" type="email" className={inputClass} placeholder="jan@novak.cz" required />
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-secondary-container uppercase mb-2">
            Zpráva <span className="text-reflek-red">*</span>
            <span className="ml-2 normal-case text-on-secondary-container/60">(min. 20 znaků)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Popište nám, co potřebujete..."
            required
            minLength={20}
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
