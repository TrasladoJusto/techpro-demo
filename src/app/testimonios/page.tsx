import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonios | Endovita Technology',
  description:
    'Lo que dicen quienes invirtieron en tecnología láser dental con Endovita. Experiencias reales de odontólogos peruanos.',
  alternates: {
    canonical: 'https://endovitatechnology.com/testimonios',
  },
};

const testimonials = [
  {
    quote:
      'Cuando otros vendedores me repetían las mismas especificaciones, Endovita me dijo: \'Para tu caso no te conviene eso.\' Buscaba asesores, no vendedores.',
    author: 'Dra. Carmen Ríos-Vela',
    context: 'Clínica San Felipe — equipada 2023',
    align: 'left',
    span: 'col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 text-center md:text-left',
  },
  {
    quote:
      'El soporte técnico no es una promesa, es un estándar. Ante cualquier duda, la respuesta es inmediata y en el consultorio.',
    author: 'Compromiso Técnico Post-Venta',
    context: '',
    align: 'center',
    span: 'col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-9 text-center',
  },
  {
    quote:
      'La curva de aprendizaje desapareció en una tarde. La capacitación in-situ transformó nuestra dinámica de trabajo desde el primer día.',
    author: 'Excelencia en Capacitación Clínica',
    context: '',
    align: 'right',
    span: 'col-span-12 md:col-start-1 md:col-span-12 lg:col-start-4 lg:col-span-8 md:text-right',
  },
];

const stats = [
  { value: '50+', label: 'clínicas equipadas' },
  { value: '4+', label: 'años' },
  { value: '98%', label: 'satisfacción' },
  { value: '<24h', label: 'respuesta' },
];

export default function TestimoniosPage() {
  return (
    <div className="bg-[#FAFBFC] overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Stitch exact (massive headline)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 pt-[72px] md:pt-[80px] max-w-[1600px] mx-auto mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-[#D4A574] mb-6 block">
              Perspectivas
            </span>
            <h1
              data-reveal
              className="font-headline text-6xl md:text-[110px] leading-[0.95] tracking-tight text-[#0A2540] massive-headline"
            >
              Lo que dicen quienes{' '}
              <br />
              <span className="italic font-normal">invirtieron.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — Stitch exact (3 editorial quotes)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
        {testimonials.map((t, i) => (
          <div key={i}>
            <div className="hairline-divider" />
            <article
              data-reveal
              className="py-24 md:py-32 grid grid-cols-12 gap-6 editorial-reveal"
            >
              <div className={t.span}>
                <blockquote className={`font-headline italic text-3xl md:text-5xl lg:text-6xl text-[#0A2540] leading-tight mb-12 quote-text ${t.align === 'center' ? 'text-center' : ''} ${t.align === 'right' ? 'md:text-right' : ''}`}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className={`not-italic flex flex-col md:flex-row items-center gap-4 ${t.align === 'right' ? 'md:flex-row-reverse' : ''} ${t.align === 'center' ? 'justify-center' : ''}`}>
                  <span className="w-8 h-[1px] bg-[#0A2540] hidden md:block" />
                  <span className="font-body text-xs md:text-sm uppercase tracking-widest text-[#0A2540]">
                    {t.author}{t.context ? ` — ${t.context}` : ''}
                  </span>
                </cite>
              </div>
            </article>
          </div>
        ))}
        <div className="hairline-divider" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS — Stitch exact (cream bg, 4 columns)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5F0] py-32 md:py-48 mt-12">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col space-y-6">
                <span className="font-headline text-6xl md:text-8xl text-[#D4A574] leading-none tabular-nums">
                  {stat.value}
                </span>
                <div className="hairline-divider !bg-[#0A2540]/20" />
                <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#0A2540]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DARK CTA — Stitch exact (brass label links, "E" watermark)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0A2540] text-[#FAFBFC] py-40 md:py-64 overflow-hidden relative">
        {/* "E" watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <span className="font-headline text-[30rem] leading-none select-none">E</span>
        </div>

        <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col items-start max-w-4xl">
            <h2
              data-reveal
              className="font-headline text-7xl md:text-[140px] leading-tight mb-16 italic"
            >
              Conversemos.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <Link
                href="/contacto"
                data-reveal
                data-reveal-delay="1"
                className="group flex flex-col items-start gap-4"
              >
                <span className="font-label text-[11px] uppercase tracking-widest text-[#D4A574] opacity-80">
                  Asesoría de inversión
                </span>
                <span className="font-headline text-2xl md:text-3xl border-b border-[#FAFBFC]/40 group-hover:border-[#FAFBFC] transition-colors pb-1">
                  Solicitar Diagnóstico Clínico
                </span>
              </Link>
              <Link
                href="https://wa.me/51932433154?text=Hola%20Endovita%2C%20quiero%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                data-reveal-delay="2"
                className="group flex flex-col items-start gap-4"
              >
                <span className="font-label text-[11px] uppercase tracking-widest text-[#D4A574] opacity-80">
                  Contacto Directo
                </span>
                <span className="font-headline text-2xl md:text-3xl border-b border-[#FAFBFC]/40 group-hover:border-[#FAFBFC] transition-colors pb-1">
                  WhatsApp Directo
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
