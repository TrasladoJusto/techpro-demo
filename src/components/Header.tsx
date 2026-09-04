"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { name: 'Tecnología', href: '/equipos' },
  { name: 'Capacitaciones', href: '/capacitaciones' },
  { name: 'Testimonios', href: '/testimonios' },
  { name: 'Servicio Técnico', href: '/servicio-tecnico' },
  { name: 'Nosotros', href: '/nosotros' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      const timer = setTimeout(() => firstLinkRef.current?.focus(), 100);
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = panel.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener('keydown', handleTab);
    return () => panel.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return (
    <>
      {/* ─── Desktop Header — Stitch exact ─── */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#FAFBFC]/80 backdrop-blur-md border-b border-[#0A2540]/10">
        <nav className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
          <Link href="/" className="font-headline text-2xl font-semibold tracking-tighter text-[#0A2540] hover:opacity-80 transition-opacity">
            LaserTech
          </Link>

          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-[#0A2540] opacity-70 hover:opacity-100 transition-all duration-500"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contacto"
            className="font-body text-[11px] uppercase tracking-[0.2em] bg-[#0A2540] text-white px-8 py-3 hover:bg-[#1E5A96] transition-colors duration-500"
          >
            Consulta
          </Link>
        </nav>
      </header>

      {/* ─── Mobile Header — Stitch exact ─── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#FAFBFC] border-b border-[#0A2540]/10">
        <nav className="flex justify-between items-center h-[56px] px-6">
          <Link href="/" className="font-headline text-2xl font-semibold tracking-tighter text-[#0A2540]">
            LaserTech
          </Link>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#0A2540]"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>
      </header>

      {/* ─── Mobile Backdrop + Panel (outside header stacking context) ─── */}
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[56px] bg-black/30 z-40 animate-[fadeIn_400ms_ease-out]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navegación móvil"
            className="md:hidden fixed top-[56px] right-0 bottom-0 w-[320px] bg-[#FAFBFC] z-50 border-l border-[#0A2540]/10 overflow-y-auto animate-[slideIn_400ms_cubic-bezier(0.16,1,0.3,1)]"
          >
            <nav className="flex flex-col p-8">
              <p className="font-label text-[11px] uppercase tracking-[0.22em] text-[#5a6373] mb-6">— Navegación</p>
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className="font-display text-2xl py-4 text-[#0A2540] border-t border-[#0A2540]/10 last:border-b last:mt-2 focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-label text-[11px] mr-3 text-[#d4a574]">0{i + 1}</span>
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-[#1E5A96] font-medium text-sm mt-8 uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Consulta
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
                  arrow_forward
                </span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
