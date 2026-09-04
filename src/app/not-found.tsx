import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o fue movida.',
};

export default function NotFound() {
  return (
    <div className="bg-[var(--color-canvas)]">
      <section className="container-editorial py-32 md:py-48 text-center max-w-2xl mx-auto">
        <p className="caption-label text-[var(--color-brass)] mb-6">404</p>
        <h1
          data-reveal
          className="font-display italic text-[var(--color-navy)] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Esta página no existe.
        </h1>
        <p data-reveal data-reveal-delay="1" className="font-body text-[15px] text-[var(--color-muted)] leading-relaxed mb-12">
          Puede que la URL sea incorrecta o que la página haya sido movida.
          Si buscas un equipo, revisa nuestro catálogo.
        </p>
        <div data-reveal data-reveal-delay="2" className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/" className="cta-link text-[15px]">
            Volver al inicio
            <span className="arrow">→</span>
          </Link>
          <Link href="/equipos" className="cta-link text-[15px]">
            Ver catálogo
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
