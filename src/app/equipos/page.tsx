import Link from 'next/link';
import Image from 'next/image';
import { getAllProducts, getUniqueCategories } from '@/lib/data';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Catálogo de Equipos Láser | TechPro',
  description:
    'Apex Laser, Vitalase. Equipos láser de precisión para odontología. Distribuidor autorizado en Perú.',
  alternates: {
    canonical: 'https://techpro-demo.com/equipos',
  },
};

const categoryLabels: Record<string, string> = {
  diodo: 'Láser de diodo',
  co2: 'Láser CO₂',
  'nd-yag': 'Láser Nd:YAG',
  terapia: 'Bioestimulación',
};

export default function EquiposPage() {
  const allProducts = getAllProducts();
  const categories = getUniqueCategories();

  return (
    <div className="bg-[#FAFBFC] overflow-x-hidden selection:bg-[#D4A574]/20">
      {/* ═══════════════════════════════════════════════════
          HERO — editorial-grid 7/5
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 pt-24 pb-32">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-7">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-[#D4A574] mb-8 block">
              Distribuidores Autorizados — Perú
            </span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight text-[#0A2540] mb-12">
              Índice de equipos láser — tres piezas que cambiaron la práctica en
              Perú.
            </h1>
            <div className="max-w-md">
              <p className="text-[#0A2540]/70 leading-relaxed text-lg mb-8">
                Instrumentación quirúrgica de precisión diseñada para la excelencia
                clínica. Nuestra selección representa el pináculo de la ingeniería
                láser dental a nivel global.
              </p>
              <Link
                href="/contacto"
                className="group flex items-center gap-4 text-[#1E5A96] uppercase text-[10px] tracking-widest font-bold border-b border-[#1E5A96]/20 pb-2 hover:border-[#1E5A96] transition-all"
              >
                Explorar Catálogo Técnico
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] bg-[#F8F5F0] relative overflow-hidden group">
              <Image
                src="/images/stitch/home-hero-product.webp"
                alt="Equipo láser dental de alta precisión en estudio clínico"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl hidden md:block max-w-[200px]">
              <span className="font-headline text-4xl block mb-2">01/</span>
              <span className="font-label text-[10px] uppercase tracking-wider text-[#0A2540]/40">
                Dr. Smile Wiser 3®
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CATEGORY FILTERS + TABLE
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5F0] py-32 border-y border-[#0A2540]/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl mb-4">Especificaciones</h2>
              <p className="font-label text-[11px] uppercase tracking-widest text-[#0A2540]/50">
                Curación por precisión milimétrica
              </p>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#0A2540]/20">
                  <th className="py-6 font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/40">
                    Modelo
                  </th>
                  <th className="py-6 font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/40">
                    Longitud de Onda
                  </th>
                  <th className="py-6 font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/40">
                    Aplicación Principal
                  </th>
                  <th className="py-6 font-label text-[10px] uppercase tracking-[0.2em] text-[#0A2540]/40">
                    Marca
                  </th>
                  <th className="py-6" />
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                {allProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="group hover:bg-[#0A2540]/5 transition-colors"
                  >
                    <td className="py-8 font-headline text-lg md:text-xl">
                      <Link href={`/equipos/${product.id}`} className="hover:italic transition-all">
                        {product.name}
                      </Link>
                    </td>
                    <td className="py-8 text-[#0A2540]/60">
                      {product.specs.longitudDeOnda}
                    </td>
                    <td className="py-8 text-[#0A2540]/60">
                      {product.applications[0]}
                    </td>
                    <td className="py-8 text-[#0A2540]/60">
                      {product.brand}
                    </td>
                    <td className="py-8 text-right">
                      <Link
                        href={`/equipos/${product.id}`}
                      >
                        <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-[#D4A574]" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
                          arrow_forward
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ASYMMETRIC PRODUCT GRID
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Hero Product */}
          <div className="col-span-12 lg:col-span-8 mb-16 md:mb-24">
            <div className="relative overflow-hidden group mb-8">
              <Image
                alt="Detalle macro de fibra láser dental emitiendo luz azul clínica"
                src="/images/stitch/product-fiber.webp"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 !relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                sizes="(max-width: 768px) 100vw, 67vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A2540]/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-headline text-3xl md:text-5xl block mb-2">
                  Tecnología de Vanguardia
                </span>
                <p className="text-[#0A2540]/50 italic font-headline text-lg">
                  La precisión quirúrgica que redefine estándares.
                </p>
              </div>
              <Link
                href="/equipos/wiser-3"
                className="font-headline text-xl text-[#D4A574] border-b border-[#D4A574]/30 hover:border-[#D4A574] transition-colors"
              >
                Ver Ficha Técnica
              </Link>
            </div>
          </div>

          {/* Product Secondary 1 */}
          <div className="col-span-12 lg:col-span-4 lg:mt-48 mb-16 md:mb-24">
            <div className="hairline-t pt-8">
              <div className="aspect-square bg-[#F8F5F0] mb-8 overflow-hidden group">
                <Image
                  alt="Panel de control de láser dental con interfaz táctil"
                  src="/images/stitch/control-panel.webp"
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 !relative !static !h-auto !w-full aspect-square"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl mb-4">
                Diodo
              </h3>
              <p className="text-sm text-[#0A2540]/70 leading-relaxed mb-6">
                Optimizado para una absorción de hemoglobina superior y cortes
                más rápidos y limpios.
              </p>
              <Link
                href={`/equipos?categoria=diodo`}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1E5A96]"
              >
                Ver Láseres de Diodo
              </Link>
            </div>
          </div>

          {/* Product Secondary 2 */}
          <div className="col-span-12 lg:col-span-6 mb-16 md:mb-24">
            <div className="relative overflow-hidden group mb-8">
              <Image
                alt="Manojo de láser quirúrgico con guante clínico"
                src="/images/stitch/product-handpiece.webp"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 !relative !static !w-full !h-[300px] md:!h-[400px] lg:!h-[500px]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-end border-b border-[#0A2540]/10 pb-8">
              <div>
                <h3 className="font-headline text-2xl md:text-3xl mb-1">
                  Bioestimulación
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#0A2540]/40">
                  Terapia de Baja Potencia
                </p>
              </div>
              <Link href={`/equipos?categoria=terapia`}>
                <span className="material-symbols-outlined text-[#D4A574]" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
                  north_east
                </span>
              </Link>
            </div>
          </div>

          {/* Product Secondary 3 — Dark CTA */}
          <div className="col-span-12 lg:col-span-6 lg:mt-32 mb-16 md:mb-24">
            <div className="bg-[#0A2540] text-white p-12 lg:p-24 h-full flex flex-col justify-center">
              <span className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
                Innovación que respira.
              </span>
              <p className="text-white/60 mb-12 text-base md:text-lg">
                Cada equipo TechPro incluye una certificación técnica de 40 horas
                para su personal clínico, garantizando seguridad y eficiencia desde
                el primer día.
              </p>
              <Link
                href="/contacto"
                className="w-fit px-8 md:px-10 py-4 bg-[#D4A574] text-[#0A2540] uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-[#0A2540] transition-all"
              >
                Solicitar Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EDITORIAL QUOTE — centered
          ═══════════════════════════════════════════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 py-32 md:py-48 text-center">
        <h2 className="font-headline text-4xl md:text-6xl leading-[1.1] mb-12 italic text-[#0A2540]/80">
          &ldquo;El futuro de la odontología no es solo digital, es una
          integración biológica a través de la luz.&rdquo;
        </h2>
        <p className="font-label text-[11px] uppercase tracking-[0.4em] text-[#0A2540]/40">
          &mdash; Dr. Marco Bianchi, Clinical Advisor
        </p>
      </section>
    </div>
  );
}