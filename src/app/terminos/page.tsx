import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | TechPro Solutions',
  description:
    'Términos y condiciones de uso de los servicios y productos de TechPro Solutions.',
  alternates: {
    canonical: 'https://techpro-demo.com/terminos',
  },
};

export default function TerminosPage() {
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
              Términos y Condiciones
            </h1>

            <div className="space-y-12">
              <div data-reveal data-reveal-delay="1">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  1. Aceptación de los términos
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Al acceder y utilizar el sitio web de TechPro Solutions
                  (techpro-demo.com), usted acepta estos términos y
                  condiciones en su totalidad. Si no está de acuerdo con alguno
                  de estos términos, no debe utilizar nuestro sitio web.
                </p>
              </div>

              <div data-reveal data-reveal-delay="2">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  2. Servicios
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  TechPro Solutions S.A.C. es distribuidor oficial de equipos
                  láser odontológicos Dr. Smile (Italia) y Quicklase (Brasil) en
                  Perú. Los precios mostrados son de referencia y pueden variar.
                  Las cotizaciones formales se proporcionan previa evaluación
                  técnica del caso clínico.
                </p>
              </div>

              <div data-reveal data-reveal-delay="3">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  3. Propiedad intelectual
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo textos,
                  imágenes, logotipos, gráficos y diseños, es propiedad de
                  TechPro Solutions o de sus proveedores y está protegido por
                  las leyes de propiedad intelectual de Perú.
                </p>
              </div>

              <div data-reveal data-reveal-delay="4">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  4. Garantía y soporte
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Los equipos cuentan con garantía directa del fabricante. El
                  soporte técnico es proporcionado directamente por TechPro
                  Solutions. Las condiciones específicas de garantía se detallan
                  en cada cotización y contrato de venta.
                </p>
              </div>

              <div data-reveal data-reveal-delay="5">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  5. Limitación de responsabilidad
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  TechPro Solutions no se hace responsable por el uso indebido
                  de los equipos láser. La capacitación clínica es un requisito
                  previo para el uso de cualquier equipo distribuido por nuestra
                  empresa.
                </p>
              </div>

              <div data-reveal data-reveal-delay="6">
                <h2 className="font-display text-xl text-[var(--color-navy)] mb-4">
                  6. Legislación aplicable
                </h2>
                <p className="font-body text-[14px] text-[var(--color-muted)] leading-relaxed">
                  Estos términos se rigen por las leyes de la República del Perú.
                  Cualquier disputa será sometida a los tribunales competentes de
                  la ciudad de Lima, Perú.
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
