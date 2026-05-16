'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const base = 'font-label-md text-label-md transition-colors duration-200';
    if (pathname === path) {
      return `${base} text-reflek-red border-b-2 border-reflek-red font-bold pb-1`;
    }
    return `${base} text-on-surface hover:text-reflek-red`;
  };

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-white/5 w-full shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-margin py-4 md:py-base max-w-site mx-auto">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <img
            alt="Reflek Plus Logo"
            className="h-8 md:h-10 w-auto object-contain max-h-10"
            src="https://lh3.googleusercontent.com/aida/ADBb0ug1ycpwe4kINVlX_ekxcJeYWwyMCCfyQsKQ0RtX7iBrQQMmSbgaqbz-nub5FD9sJFcAlaf1U0dEtY16bWODRuZqJt9Mo6V_2FhjUFZk-g_aTxQ4v3ytp0FVqeas4QKMDHnGnJ4NYV-PmVQAyauYDii4nBwZl5q_5raA41n1N6fJc4PU-7nA0b9lgF_QFGYJhSWSZx93jE9ugU2MwuLEslolTbMD-1BAAVa_4dnyWWFhJI3g_N-18AciG_E"
          />
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className={getLinkClass('/')}>Domů</Link>
          <Link href="/vyroba" className={getLinkClass('/vyroba')}>Výroba autopotahů</Link>
          <Link href="/oprava" className={getLinkClass('/oprava')}>Oprava sedadel</Link>
          <Link href="/kontakt" className={getLinkClass('/kontakt')}>Kontakt</Link>
          <Link
            href="/kontakt"
            className="bg-reflek-red text-white font-label-md text-label-md px-6 py-2 rounded machined-border hover:bg-on-primary-fixed-variant transition-colors ml-4 btn-primary"
          >
            Nezávazná poptávka
          </Link>
        </nav>

        <button
          className="md:hidden text-on-surface hover:text-reflek-red p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
        >
          <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-white/5 flex flex-col p-4 gap-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-on-surface hover:text-reflek-red font-label-md">Domů</Link>
          <Link href="/vyroba" onClick={() => setMobileMenuOpen(false)} className="text-on-surface hover:text-reflek-red font-label-md">Výroba autopotahů</Link>
          <Link href="/oprava" onClick={() => setMobileMenuOpen(false)} className="text-on-surface hover:text-reflek-red font-label-md">Oprava sedadel</Link>
          <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)} className="text-on-surface hover:text-reflek-red font-label-md">Kontakt</Link>
          <Link
            href="/kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-reflek-red text-white text-center font-label-md px-4 py-2 rounded"
          >
            Nezávazná poptávka
          </Link>
        </div>
      )}
    </header>
  );
}
