import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/lib/data';
import { LocalBusinessJsonLd, OrganizationJsonLd } from '@/components/JsonLd';

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="bg-[#FAFBFC] overflow-x-hidden selection:bg-[#D4A574]/30">
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      {/* ═══════════════════════════════════════════════════
          HERO — 7/4/1 grid con vertical sidebar
          ═══════════════════════════════════════════════════ */}
      <section className="grid grid-cols-12 gap-0 min-h-[85dvh] md:min-h-[85vh] items-center relative mt-24 md:mt-32 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-7 pl-6 md:pl-12 pr-6 md:pr-24 flex flex-col justify-center">
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-[#D4A574] mb-8">
            Clinical Authority
          </p>
          <h1 className="font-display text-[5vw] leading-[1.05] editorial-spacing mb-8" style={{letterSpacing: '-0.01em'}}>
            Tecnología láser italiana para clínicas que{' '}
            <br />
            <span className="italic font-light">se toman en serio la precisión.</span>
          </h1>
          <p className="max-w-lg font-body text-lg text-[#0A2540]/70 mb-10 leading-relaxed">
            Sistemas de cirugía láser avanzada diseñados para el mercado peruano,
            garantizando resultados quirúrgicos superiores y una recuperación
            post-operatoria drásticamente acelerada en entornos clínicos de alta gama.
          </p>
          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <Link
              href="/equipos"
              className="font-label text-[11px] uppercase tracking-widest text-[#0A2540] border-b border-[#0A2540]/20 pb-1 group-hover:border-[#0A2540] transition-colors"
            >
              Explorar Catálogo Maestro
            </Link>
            <span className="material-symbols-outlined text-[#0A2540] group-hover:translate-x-2 transition-transform duration-500 text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
              arrow_forward
            </span>
          </div>
          <div className="mt-24 pt-12 border-t border-[#0A2540]/10">
            <p className="font-label text-[11px] uppercase tracking-[0.2em] text-[#0A2540]/40">
              LIMA &middot; PER&Uacute; &mdash; desde 2021
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 relative h-full mt-8 md:mt-0">
          <div className="absolute inset-0 bg-[#0A2540] -z-10 translate-x-12 translate-y-12" />
          <div className="relative w-full h-[50dvh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
            <Image
              src="/images/stitch/home-hero-product.webp"
              alt="Equipo láser dental de alta precisión — TechPro Solutions"
              fill
              className="object-cover scale-110 translate-x-8 md:translate-x-12"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
        <div className="col-span-1 hidden md:flex justify-center items-center">
          <span className="text-vertical font-label text-[10px] uppercase tracking-[0.5em] text-[#0A2540]/30 whitespace-nowrap">
            TECHPRO DISTRIBUIDOR AUTORIZADO — 2024
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AUTHORITY STATEMENT
          ═══════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 mb-32">
        <div className="hairline-t pt-20 flex justify-center text-center">
          <h2 className="font-display italic text-3xl md:text-4xl max-w-[42rem] leading-snug text-[#0A2540]/80">
            &ldquo;No vendemos catálogos. Asesoramos inversiones de seis
            cifras a odontólogos desde 2021.&rdquo;
          </h2>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 01 — ÍNDICE (5/7 grid)
          ═══════════════════════════════════════════════════ */}
      <section className="grid grid-cols-12 gap-0 px-6 md:px-12 mb-40">
        <div className="col-span-12 md:col-span-5 md:pr-12 order-2 md:order-1 mt-16 md:mt-0">
          <div className="md:sticky md:top-40">
            <span className="font-display text-7xl font-light italic text-[#D4A574]/20 block mb-4">
              01
            </span>
            <h3 className="font-label text-[11px] uppercase tracking-[0.3em] mb-12 text-[#0A2540]">
              Índice de Tecnologías
            </h3>
            <div className="flex flex-col">
              {featured.map((product) => (
                <Link
                  key={product.id}
                  href={`/equipos/${product.id}`}
                  className="group flex justify-between items-end py-8 hairline hover:bg-[#F8F5F0]/50 transition-colors px-4 -mx-4 cursor-pointer"
                >
                  <div>
                    <h4 className="font-display text-xl md:text-2xl group-hover:italic transition-all text-[#0A2540]">
                      {product.name}
                    </h4>
                    <p className="font-label text-[10px] uppercase tracking-widest text-[#0A2540]/40 mt-2">
                      {product.category === 'diodo'
                        ? 'Soft Tissue Management'
                        : product.category === 'terapia'
                          ? 'Biostimulation'
                          : product.category}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity">
                    add
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l border-[#0A2540]/5 order-1 md:order-2 mb-10 md:mb-0">
          <div className="aspect-[4/5] bg-[#F8F5F0] relative overflow-hidden mb-8">
            <Image
              alt="Control panel de equipo láser dental TechPro"
              src="/images/stitch/control-panel.webp"
              fill
              className="object-cover mix-blend-multiply opacity-80"
              sizes="(max-width: 768px) 100vw, 58vw"
              loading="lazy"
            />
            <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12">
              <p className="font-body text-sm max-w-sm text-[#0A2540]/60 italic leading-relaxed">
                Nuestra fibra de cuarzo de alta fidelidad garantiza una
                entrega de energía constante, minimizando el daño térmico
                colateral en intervenciones de tejidos blandos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 02 — CÓMO TRABAJAMOS
          ═══════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 mb-40">
        <div className="grid grid-cols-12 gap-0 items-start mb-20">
          <div className="col-span-12 md:col-span-4">
            <span className="font-display text-7xl font-light italic text-[#D4A574]/20 block mb-4">
              02
            </span>
            <h3 className="font-label text-[11px] uppercase tracking-[0.3em] text-[#0A2540]">
              Cómo Trabajamos
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-24 mt-10 md:mt-0">
            <div>
              <span className="font-display text-lg md:text-xl italic text-[#D4A574] block mb-4">
                01. Auditoría de Flujo
              </span>
              <p className="font-body text-[#0A2540]/70 leading-relaxed text-sm">
                Analizamos la carga operativa actual de su clínica para
                determinar qué procedimientos láser impactarán más su
                facturación mensual.
              </p>
            </div>
            <div>
              <span className="font-display text-lg md:text-xl italic text-[#D4A574] block mb-4">
                02. Demostración in-situ
              </span>
              <p className="font-body text-[#0A2540]/70 leading-relaxed text-sm">
                Llevamos el equipamiento a su consultorio para una prueba
                clínica real bajo su propia casuística de pacientes.
              </p>
            </div>
            <div>
              <span className="font-display text-lg md:text-xl italic text-[#D4A574] block mb-4">
                03. Certificación Clínica
              </span>
              <p className="font-body text-[#0A2540]/70 leading-relaxed text-sm">
                Capacitación exhaustiva por especialistas clínicos
                internacionales para garantizar el dominio total de la
                tecnología.
              </p>
            </div>
            <div>
              <span className="font-display text-lg md:text-xl italic text-[#D4A574] block mb-4">
                04. Soporte Local 24/7
              </span>
              <p className="font-body text-[#0A2540]/70 leading-relaxed text-sm">
                Ingeniería técnica basada en Lima con respuesta inmediata para
                garantizar que su inversión nunca deje de producir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PULL QUOTE — dark navy + portrait
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A2540] text-white py-32 px-6 md:px-12 relative overflow-hidden mb-40">
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full opacity-10">
          <Image
            alt="Retrato de odontólogo clínico con bata profesional"
            src="/images/stitch/home-brand-wiser.webp"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="max-w-4xl relative z-10">
          <span className="material-symbols-outlined text-6xl text-[#D4A574] mb-8" style={{fontVariationSettings: "'FILL' 1"}}>
            format_quote
          </span>
          <blockquote className="font-display text-[3.5vw] leading-tight editorial-spacing mb-12">
            &ldquo;La integración láser transformó nuestra percepción de
            la cirugía periodontal. No es solo tecnología, es la confianza de
            saber que el post-operatorio de mis pacientes es ahora
            predecible.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <span className="font-label text-[11px] uppercase tracking-widest text-[#D4A574] block mb-1">
              Dr. Carlos Mendoza
            </span>
            <span className="font-body text-sm opacity-50 uppercase tracking-wider">
              Especialista en Rehabilitación Oral, Lima
            </span>
          </cite>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 03 — RETORNO DE INVERSIÓN
          ═══════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 mb-40">
        <div className="grid grid-cols-12 gap-0 items-start">
          <div className="col-span-12 md:col-span-4 mb-10 md:mb-0">
            <span className="font-display text-7xl font-light italic text-[#D4A574]/20 block mb-4">
              03
            </span>
            <h3 className="font-label text-[11px] uppercase tracking-[0.3em] text-[#0A2540]">
              Retorno de Inversión
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-12 text-center">
            <div className="py-12 border-r border-[#0A2540]/5">
              <span className="font-display text-5xl md:text-8xl font-light text-[#0A2540] block mb-4">
                +37%
              </span>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/60">
                Incremento en Facturación Quirúrgica
              </p>
            </div>
            <div className="py-12 border-r border-[#0A2540]/5">
              <span className="font-display text-5xl md:text-8xl font-light text-[#0A2540] block mb-4">
                -62%
              </span>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/60">
                Reducción de Tiempo en Sillón
              </p>
            </div>
            <div className="py-12">
              <span className="font-display text-5xl md:text-8xl font-light text-[#0A2540] block mb-4">
                8 <span className="text-3xl md:text-4xl">m</span>
              </span>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/60">
                Tiempo Promedio de Payback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER CTA — dark navy
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A2540] text-[#FAFBFC] py-40 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-6xl md:text-8xl editorial-spacing mb-20 italic">
            Conversemos
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
            <Link
              href="/contacto"
              className="group relative py-4"
            >
              <span className="font-display text-xl md:text-3xl text-[#FAFBFC]">
                Solicitar Diagnóstico Clínico
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4A574] scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
            </Link>
            <span className="font-label text-[#D4A574] opacity-50 uppercase text-[10px] tracking-[0.4em]">
              O POR CANALES DIRECTOS
            </span>
            <a
              href="https://wa.me/51900000000?text=Hola%20TechPro%2C%20quiero%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-4"
            >
              <span className="font-display text-xl md:text-3xl text-[#FAFBFC]">
                Línea WhatsApp Business
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4A574] scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}