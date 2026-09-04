import Link from 'next/link';
import Image from 'next/image';
import SupportForm from '@/components/SupportForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicio Técnico | LaserTech',
  description:
    'Soporte técnico directo del fabricante. Garantía internacional, repuestos originales, respuesta en menos de 24 horas.',
  alternates: {
    canonical: 'https://lasertech-demo.com/servicio-tecnico',
  },
};

const standards = [
  {
    num: '01',
    title: 'Respuesta inicial <24h hábiles',
    desc: 'Priorizamos la continuidad operativa de su clínica con diagnósticos remotos inmediatos para maximizar el Clinical Uptime.',
  },
  {
    num: '02',
    title: 'Garantía directa Italia/Brasil',
    desc: 'Protección integral respaldada por los fabricantes originales, asegurando una cobertura sin intermediarios ni demoras burocráticas.',
  },
  {
    num: '03',
    title: 'Repuestos originales',
    desc: 'Integridad de componentes garantizada mediante calibración láser certificada y piezas de ingeniería de alta precisión.',
  },
  {
    num: '04',
    title: 'Mantenimiento preventivo programado',
    desc: 'Protocolos de revisión trimestral para prevenir fallos y extender la vida útil del equipo más allá de 10 años.',
  },
  {
    num: '05',
    title: 'Soporte remoto en tiempo real',
    desc: 'Diagnóstico asistido por videoconferencia para resolución inmediata de problemas de configuración y protocolo.',
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo dura la garantía?',
    a: 'La garantía estándar es de 24 meses para equipos nuevos, con opción de extensión a 36 meses. Equipos reacondicionados incluyen 12 meses de garantía completa.',
  },
  {
    q: '¿Pueden reparar equipos de otras marcas?',
    a: 'Nuestro servicio técnico especializado cubre exclusivamente las marcas que distribuimos: Apex Laser y Vitalase. Para otros equipos, podemos ofrecer orientación.',
  },
  {
    q: '¿La capacitación inicial está incluida?',
    a: 'Sí. Todo equipo nuevo incluye una sesión de capacitación presencial de 4 horas en sus instalaciones, más material de protocolo clínico impreso y digital.',
  },
  {
    q: '¿Cómo solicito servicio técnico?',
    a: 'Puede comunicarse al +51 999 888 777 o enviar un email a demo@lasertech-demo.com. Respondemos en menos de 24 horas hábiles con un diagnóstico preliminar.',
  },
];

export default function ServicioTecnicoPage() {
  return (
    <div className="bg-[var(--color-canvas)] overflow-x-hidden">
      {/* Hero */}
      <section className="pt-[72px] md:pt-[80px] pb-8 md:pb-12">
        <div className="container-editorial grid grid-cols-12 gap-0 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="caption-label text-[var(--color-brass)] mb-4 md:mb-6">01 — Soporte</p>
            <h1
              data-reveal
              className="font-display leading-[0.95] tracking-[-0.03em] max-w-4xl"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
            >
              Soporte técnico directo del fabricante.
            </h1>
          </div>
          <div className="hidden lg:block col-span-4">
            <div className="h-[160px] overflow-hidden">
              <Image src="/images/support-tech.webp" alt="Soporte técnico LaserTech" width={400} height={160} sizes="33vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main split: Standards + Request Form */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial grid grid-cols-12 gap-0 items-start">
          {/* Left — Technical standards */}
          <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
            <div className="space-y-0">
              {standards.map((item, i) => (
                <div
                  key={item.num}
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                  className="hairline py-8 md:py-10 group"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-xl italic text-[var(--color-navy)]/40 shrink-0">
                      {item.num}.
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg md:text-xl lg:text-2xl mb-3 text-[var(--color-navy)]">
                        {item.title}
                      </h3>
                      <p className="font-body text-[13px] text-[var(--color-navy)]/70 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quick request form */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:sticky md:top-24">
            <div className="mb-10">
              <p className="caption-label text-[var(--color-brass)] mb-4">
                Solicitud de soporte
              </p>
              <h2 className="font-display text-xl md:text-2xl text-[var(--color-navy)] mb-3">
                Cuéntanos tu problema técnico.
              </h2>
              <p className="font-body text-[13px] text-[var(--color-muted)]">
                Nuestro equipo evaluará tu caso y responderá con un diagnóstico
                preliminar en menos de 24 horas hábiles.
              </p>
            </div>

            <SupportForm />

            <div className="mt-12 pt-6 border-t border-[var(--color-rule)]">
              <p className="font-label text-[10px] leading-relaxed text-[var(--color-navy)]/40 max-w-xs">
                Para emergencias clínicas fuera del horario laboral, contacte
                directamente al +51 932 433 154.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical imagery */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="w-full h-[200px] md:h-[350px] overflow-hidden">
            <Image src="/images/stitch/servicio-clinical.webp" alt="Soporte técnico de equipo láser dental" width={512} height={279} sizes="100vw" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-editorial">
          <h2 className="caption-label mb-10">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((faq, i) => (
              <div key={i} data-reveal data-reveal-delay={String(i + 1)}>
                <h3 className="font-display text-lg text-[var(--color-navy)] mb-3">
                  {faq.q}
                </h3>
                <p className="font-body text-[13px] text-[var(--color-muted)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28">
        <div className="container-editorial text-center flex flex-col items-center">
          <p data-reveal className="caption-label !text-[var(--color-paper)]/40 mb-4 md:mb-6">
            ¿Necesitas soporte urgente?
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-display italic text-[var(--color-paper)] leading-[1.05] mb-8 md:mb-12"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
          >
            Llámanos directo.
          </h2>
          <div data-reveal data-reveal-delay="2">
            <a
              href="https://wa.me/51999888777?text=Hola%20LaserTech%2C%20necesito%20soporte%20t%C3%A9cnico"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link cta-link--inverse text-[15px]"
            >
              WhatsApp: +51 999 888 777
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
