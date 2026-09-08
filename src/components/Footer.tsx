import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F5F0] px-6 md:px-12 py-16 md:py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 max-w-[1920px] mx-auto">
        {/* Left — Logo + tagline */}
        <div className="md:col-span-4">
          <p className="font-headline text-xl text-[#0A2540] mb-6 md:mb-8">TechPro</p>
          <p className="font-body text-[11px] uppercase tracking-[0.2em] opacity-60 max-w-xs leading-relaxed">
            Surgical Excellence in Dental Innovation. Distribuidor autorizado para el mercado sudamericano.
          </p>
        </div>

        {/* Right — Links + bottom row */}
        <div className="md:col-span-8 flex flex-col justify-end">
          <div className="flex flex-wrap gap-6 md:gap-12 mb-8 md:mb-12">
            <Link
              href="/privacidad"
              className="font-body text-[11px] uppercase tracking-[0.2em] hover:text-[#1E5A96] transition-colors"
            >
              Regulatory Compliance
            </Link>
            <Link
              href="/privacidad#aviso"
              className="font-body text-[11px] uppercase tracking-[0.2em] hover:text-[#1E5A96] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/servicio-tecnico"
              className="font-body text-[11px] uppercase tracking-[0.2em] hover:text-[#1E5A96] transition-colors"
            >
              Service &amp; Support
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#0A2540]/10 pt-6 md:pt-8 gap-4">
            <p className="font-body text-[11px] uppercase tracking-[0.2em] opacity-40">
              &copy; {currentYear} TechPro. Lima, Peru.
            </p>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-[#D4A574]" />
              <span className="w-2 h-2 rounded-full bg-[#0A2540]/20" />
              <span className="w-2 h-2 rounded-full bg-[#0A2540]/20" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
