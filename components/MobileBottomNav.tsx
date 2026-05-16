'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const itemClass = (path: string) =>
    pathname === path
      ? 'text-reflek-red border-t-2 border-reflek-red pt-1 font-bold'
      : 'text-on-surface-variant hover:text-reflek-red transition-colors pt-1.5';

  const fillStyle = (path: string): React.CSSProperties =>
    pathname === path ? { fontVariationSettings: "'FILL' 1" } : {};

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-surface border-t border-white/5 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={`flex flex-col items-center justify-center w-full h-full ${itemClass('/')}`}>
          <span className="material-symbols-outlined text-[24px]" style={fillStyle('/')}>home</span>
          <span className="font-label-sm text-[10px] mt-1">Domů</span>
        </Link>
        <Link href="/vyroba" className={`flex flex-col items-center justify-center w-full h-full ${itemClass('/vyroba')}`}>
          <span className="material-symbols-outlined text-[24px]" style={fillStyle('/vyroba')}>car_repair</span>
          <span className="font-label-sm text-[10px] mt-1">Výroba</span>
        </Link>
        <Link href="/oprava" className={`flex flex-col items-center justify-center w-full h-full ${itemClass('/oprava')}`}>
          <span className="material-symbols-outlined text-[24px]" style={fillStyle('/oprava')}>build</span>
          <span className="font-label-sm text-[10px] mt-1">Oprava</span>
        </Link>
        <Link href="/kontakt" className={`flex flex-col items-center justify-center w-full h-full ${itemClass('/kontakt')}`}>
          <span className="material-symbols-outlined text-[24px]" style={fillStyle('/kontakt')}>mail</span>
          <span className="font-label-sm text-[10px] mt-1">Kontakt</span>
        </Link>
      </div>
    </nav>
  );
}
