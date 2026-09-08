import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capacitaciones | TechPro',
  description:
    'Programas de certificación láser para odontólogos. Diploma universitario, práctica clínica supervisada, grupos reducidos.',
  alternates: {
    canonical: 'https://techpro-demo.com/capacitaciones',
  },
};

const sessions = [
  {
    num: '01',
    title: 'Introducción al láser de diodo en odontología',
    date: '15 ago 2026',
    time: '9:00 — 13:00',
    location: 'Sede TechPro, San Isidro',
    status: 'Inscripción abierta',
    spots: '6/15 cupos libres',
  },
  {
    num: '02',
    title: 'Láser en endodoncia: desinfección y sellado',
    date: '22 ago 2026',
    time: '9:00 — 17:00',
    location: 'Sede TechPro, San Isidro',
    status: 'Inscripción abierta',
    spots: '10/15 cupos libres',
  },
  {
    num: '03',
    title: 'Periodoncia regenerativa con láser de baja potencia',
    date: '05 sep 2026',
    time: '9:00 — 13:00',
    location: 'Sede TechPro, San Isidro',
    status: 'Próximamente',
    spots: '15/15 cupos libres',
  },
  {
    num: '04',
    title: 'Blanqueamiento láser: protocolo Dentalase',
    date: '12 sep 2026',
    time: '9:00 — 13:00',
    location: 'Sede TechPro, San Isidro',
    status: 'Próximamente',
    spots: '15/15 cupos libres',
  },
];

export default function CapacitacionesPage() {
  return (
    <div className="bg-[var(--color-canvas)] overflow-x-hidden">
      {/* Hero */}
      <section className="pt-[72px] md:pt-[80px] pb-8 md:pb-12">
        <div className="container-editorial grid grid-cols-12 gap-0 items-start">
          <div className="col-span-12 md:col-span-8 mb-8 md:mb-0">
            <p className="caption-label text-[var(--color-brass)] mb-6">
              01 / Academia Clínica
            </p>
            <h1
              data-reveal
              className="font-display leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
            >
              Aprender láser de quienes lo usan todos los días.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 mt-8 md:mt-0 flex flex-col justify-end">
            <p className="font-body text-[15px] leading-relaxed text-[var(--color-navy)]/70 border-l border-[var(--color-brass)] pl-6">
              Nuestra metodología de formación se aleja del discurso comercial para
              centrarse en la realidad del sillón dental. Protocolos quirúrgicos y
              terapéuticos validados por práctica clínica extensiva.
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed clinical image */}
      <section className="mb-12 md:mb-16">
        <div className="container-editorial">
          <div className="w-full h-[300px] md:h-[500px] lg:h-[614px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--color-navy)]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image src="/images/stitch/capacitaciones-clinical.webp" alt="Equipo láser dental en entorno clínico" width={512} height={279} sizes="100vw" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
          </div>
        </div>
      </section>

      {/* Course table */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="mb-8">
            <h2 className="caption-label">Próximas sesiones presenciales</h2>
          </div>

          {/* Table header (hidden mobile) */}
          <div className="hidden md:grid grid-cols-12 py-4 border-b border-[var(--color-navy)]/20 font-label text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy)]/60">
            <div className="col-span-5">Programa del curso</div>
            <div className="col-span-2">Fecha y hora</div>
            <div className="col-span-2">Ubicación</div>
            <div className="col-span-1">Estado</div>
            <div className="col-span-2 text-right">Acción</div>
          </div>

          {/* Rows */}
          {sessions.map((session, i) => (
            <div
              key={session.num}
              data-reveal
              data-reveal-delay={String(i + 1)}
              className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-10 border-b border-[var(--color-rule)] items-baseline group hover:bg-[var(--color-cream)]/30 transition-colors"
            >
              <div className="col-span-12 md:col-span-5 mb-4 md:mb-0">
                <span className="font-display text-xl md:text-2xl lg:text-3xl text-[var(--color-navy)] block group-hover:translate-x-2 transition-transform duration-500">
                  {session.num}. {session.title}
                </span>
              </div>
              <div className="col-span-12 md:col-span-2 font-label text-[12px] text-[var(--color-navy)]/80 mb-2 md:mb-0">
                <p>{session.date}</p>
                <p className="text-[var(--color-navy)]/40 uppercase text-[10px]">
                  {session.time}
                </p>
              </div>
              <div className="col-span-12 md:col-span-2 font-label text-[12px] text-[var(--color-navy)]/80 mb-4 md:mb-0">
                {session.location}
              </div>
              <div className="col-span-12 md:col-span-1 mb-6 md:mb-0">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-tighter text-[var(--color-blue)] font-bold">
                    {session.status}
                  </span>
                  <span className="text-[11px] text-[var(--color-navy)]/50 italic">
                    {session.spots}
                  </span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <Link
                  href="/contacto?asunto=capacitacion"
                  className="font-label text-[11px] uppercase tracking-[0.15em] font-bold border-b border-[var(--color-navy)] hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] transition-all pb-1 inline-block"
                >
                  Inscribirse →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28">
        <div className="container-editorial text-center flex flex-col items-center">
          <p data-reveal className="caption-label !text-[var(--color-paper)]/40 mb-6">
            ¿No encontraste lo que buscabas?
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-display italic text-[var(--color-paper)] leading-[1.05] mb-12"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Diseñamos cursos a medida.
          </h2>
          <div data-reveal data-reveal-delay="2">
            <Link href="/contacto?asunto=capacitacion" className="cta-link cta-link--inverse text-[15px]">
              Solicitar programa personalizado
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
