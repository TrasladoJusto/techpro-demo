import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | LaserTech',
  description:
    'Tres personas detrás de cada láser. Equipo de LaserTech — odontología láser en Perú desde 2021.',
  alternates: {
    canonical: 'https://lasertech-demo.com/nosotros',
  },
};

const team = [
  {
    role: 'CEO / FUNDADOR ODONTÓLOGO',
    name: 'Dr. Alejandro V.',
    desc: 'Especialista en odontología láser con más de 15 años de experiencia clínica.',
    img: '/images/team-ceo-odontologo.webp',
  },
  {
    role: 'INGENIERO DE SOPORTE',
    name: 'Ing. Roberto S.',
    desc: 'Certificado en mantenimiento de sistemas fotónicos y protocolos de seguridad láser.',
    img: '/images/team-coordinator.webp',
  },
  {
    role: 'COORDINADORA DE CAPACITACIONES',
    name: 'Lucía F.',
    desc: 'Gestión de programas educativos de posgrado para la certificación clínica de especialistas.',
    img: '/images/team-tech-lead.avif',
  },
];

const brands = [
  {
    name: 'Apex Laser',
    origin: 'Italia',
    desc: 'Láser de diodo de alta precisión para odontología quirúrgica y terapéutica. Certificación CE europea.',
    img: '/images/product-dr-smile.webp',
  },
  {
    name: 'Vitalase',
    origin: 'Brasil',
    desc: 'Láser de diodo compacto de alta potencia. Diseñado para clínicas de alta demanda en Latinoamérica.',
    img: '/images/product-quicklase.webp',
  },
  {
    name: 'Vitalase',
    origin: 'Italia',
    desc: 'Sistema de blanqueamiento láser de luz fría. Resultados clínicos superiores en una sola sesión.',
    img: '/images/product-dentalase.webp',
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-[var(--color-canvas)] overflow-x-hidden">
      {/* Hero header */}
      <section className="pt-[72px] md:pt-[80px] pb-12 md:pb-16">
        <div className="container-editorial grid grid-cols-12 gap-0 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="caption-label text-[var(--color-brass)] mb-4 md:mb-6">01 — Equipo</p>
            <h1
              data-reveal
              className="font-display italic leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Tres personas
              <br />
              detrás de cada láser.
            </h1>
          </div>
          <div className="hidden lg:block col-span-4">
            <div className="h-[200px] overflow-hidden">
              <Image src="/images/about-office.avif" alt="Oficina Endovita Technology" width={400} height={200} sizes="33vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Index */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial grid grid-cols-12 gap-0">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className="hairline py-8 md:py-10 group transition-all duration-700"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] shrink-0 overflow-hidden bg-[var(--color-cream)]">
                    <Image src={member.img} alt={member.name} width={140} height={140} sizes="140px" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-label text-[10px] tracking-[0.3em] text-[var(--color-brass)] mb-2 uppercase">
                      {member.role}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[var(--color-navy)] mb-3 group-hover:italic transition-all">
                      {member.name}
                    </h2>
                    <p className="font-body text-[13px] text-[var(--color-muted)] leading-relaxed max-w-md">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="hairline w-full" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container-editorial flex justify-center text-center">
          <blockquote data-reveal className="max-w-2xl">
            <p
              className="font-display italic text-[var(--color-navy)] leading-tight"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 2.25rem)' }}
            >
              &ldquo;Existimos porque la tecnología láser se merece ser explicada, no
              vendida.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 md:py-24">
        <div className="container-editorial grid grid-cols-12 gap-0 items-start">
          <div className="col-span-12 lg:col-span-3 mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <div className="hairline mb-4" />
              <p className="caption-label">Marcas que representamos</p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {brands.map((brand, i) => (
                <div
                  key={brand.name}
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                  className="flex flex-col"
                >
                  <div className="h-[160px] bg-[var(--color-cream)] overflow-hidden mb-6">
                    <Image src={brand.img} alt={brand.name} width={400} height={160} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-cover" />
                  </div>
                  <div className="mb-4">
                    <h3 className="font-display text-xl md:text-2xl text-[var(--color-navy)] mb-1">
                      {brand.name}
                    </h3>
                    <span className="font-label text-[10px] tracking-[0.2em] text-[var(--color-brass)] uppercase">
                      {brand.origin}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-[var(--color-muted)] leading-relaxed">
                    {brand.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DARK CTA CLOSER */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28">
        <div className="container-editorial text-center flex flex-col items-center">
          <p data-reveal className="caption-label !text-[var(--color-paper)]/40 mb-4 md:mb-6">
            ¿Quieres conocernos?
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-display italic text-[var(--color-paper)] leading-[1.05] mb-8 md:mb-12"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
          >
            Visítenos en San Isidro.
          </h2>
          <div data-reveal data-reveal-delay="2">
            <Link href="/contacto" className="cta-link cta-link--inverse text-[15px]">
              Solicitar visita
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
