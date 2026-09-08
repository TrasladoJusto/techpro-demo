import Link from 'next/link';
import { CheckCircle, ChatCircle } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mensaje enviado | TechPro',
  description: 'Hemos recibido tu mensaje. Te responderemos pronto.',
};

export default function ThanksPage() {
  return (
    <div className="bg-[var(--color-canvas)]">
      <section className="container-editorial py-24 lg:py-32 max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={32} className="text-[var(--color-success)]" />
        </div>
        <h1
          data-reveal
          className="font-display text-[var(--color-navy)] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Mensaje enviado
        </h1>
        <p data-reveal data-reveal-delay="1" className="font-body text-[15px] text-[var(--color-muted)] leading-relaxed mb-12">
          Hemos recibido tu mensaje. Te contactaremos pronto.
        </p>

        <div data-reveal data-reveal-delay="2" className="py-8 px-6 bg-[var(--color-cream)] text-left mb-10">
          <h2 className="font-display text-lg text-[var(--color-navy)] mb-5">Próximos pasos</h2>
          <div className="space-y-4">
            {[
              { step: '01', text: 'Revisa tu correo electrónico (confirmación automática)' },
              { step: '02', text: 'Un odontólogo te contacta en menos de 24 horas hábiles' },
              { step: '03', text: 'Si es urgente, escríbenos por WhatsApp para respuesta inmediata' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 py-3 border-b border-[var(--color-rule)] last:border-0">
                <span className="font-display text-xl text-[var(--color-brass)]/40 shrink-0 w-10">
                  {item.step}
                </span>
                <p className="font-body text-[13px] text-[var(--color-muted)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="3" className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/" className="cta-link text-[15px]">
            Volver al inicio
            <span className="arrow">→</span>
          </Link>
          <a
            href="https://wa.me/51900000000?text=Hola%20TechPro%2C%20necesito%20atenci%C3%B3n%20urgente"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link text-[15px]"
          >
            <ChatCircle size={14} />
            WhatsApp urgente
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
