export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon-black border-t border-white/5 w-full mt-auto">
      <div className="w-full px-4 md:px-margin py-8 md:py-gutter flex flex-col md:flex-row justify-between items-center max-w-site mx-auto gap-6 mb-16 md:mb-0">
        <div className="font-headline-md text-[18px] md:text-headline-md text-reflek-red text-center md:text-left">
          REFLEK PLUS
          <p className="font-label-sm text-label-sm text-on-secondary-container mt-2 md:hidden">
            © 1996–{year} Reflek Plus s.r.o.
          </p>
        </div>
        <div className="font-body-md text-[12px] md:text-body-md text-on-secondary-container text-center hidden md:block">
          © 1996–{year} Reflek Plus s.r.o.
        </div>
      </div>
    </footer>
  );
}
