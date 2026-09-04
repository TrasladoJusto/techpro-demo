import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Endovita Technology',
  description:
    'Conoce cómo Endovita Technology recopila, usa y protege tu información personal.',
  alternates: {
    canonical: 'https://endovitatechnology.com/privacidad',
  },
};

export default function PrivacidadPage() {
  return (
    <div className="bg-[var(--color-canvas)]">
      <section className="pt-[72px] md:pt-[80px] pb-24 md:pb-32">
        <div className="container-editorial grid grid-cols-12 gap-0">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="caption-label text-[var(--color-brass)] mb-6">Legal</p>
            <h1
              data-reveal
              className="font-display italic text-[var(--color-navy)] mb-12"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Política de Privacidad
            </h1>

            <div className="space-y-12">
              <div data-reveal data-reveal-delay="1">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  1. Información que recopilamos
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Recopilamos información que usted nos proporciona directamente al
                  completar formularios de contacto o soporte, incluyendo: nombre
                  completo, dirección de correo electrónico, número de teléfono,
                  nombre de la clínica y descripción de su consulta.
                </p>
              </div>

              <div data-reveal data-reveal-delay="2">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  2. Uso de la información
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Utilizamos su información para: responder a sus consultas técnicas
                  y comerciales, enviar cotizaciones de equipos, coordinar
                  capacitaciones y servicios técnicos, y enviar información sobre
                  productos y novedades de Endovita Technology (solo si usted ha
                  dado su consentimiento).
                </p>
              </div>

              <div data-reveal data-reveal-delay="3">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  3. Protección de datos
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Sus datos personales son almacenados en servidores seguros y no
                  son compartidos con terceros sin su consentimiento expreso, salvo
                  obligación legal. Implementamos medidas de seguridad técnicas y
                  organizativas para proteger su información contra acceso no
                  autorizado.
                </p>
              </div>

              <div data-reveal data-reveal-delay="4">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  4. Sus derechos
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Usted tiene derecho a: acceder a sus datos personales, solicitar
                  su rectificación o eliminación, oponerse al procesamiento de sus
                  datos, y solicitar la portabilidad de sus datos. Para ejercer
                  estos derechos, contáctenos a través de nuestros canales
                  oficiales.
                </p>
              </div>

              <div data-reveal data-reveal-delay="5">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  5. Cookies
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Utilizamos cookies esenciales para el funcionamiento del sitio
                  web. No utilizamos cookies de rastreo publicitario. Las cookies
                  funcionales nos ayudan a mejorar la experiencia del usuario.
                </p>
              </div>

              <div data-reveal data-reveal-delay="6">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  6. Contacto
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Para consultas sobre esta política de privacidad o sobre el
                  tratamiento de sus datos personales, comuníquese con nosotros a
                  través de{' '}
                  <a href="mailto:endovitatechnology@gmail.com" className="underline underline-offset-4 decoration-[var(--color-navy)]/20 hover:decoration-[var(--color-navy)] transition-colors">
                    endovitatechnology@gmail.com
                  </a>{' '}
                  o al +51 932 433 154.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[var(--color-rule)]">
              <p className="font-label text-[10px] tracking-[0.15em] text-[var(--color-subtle)]">
                Última actualización: julio 2026
              </p>
            </div>

            <div className="mt-8">
              <Link href="/" className="cta-link text-[13px]">
                Volver al inicio
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
