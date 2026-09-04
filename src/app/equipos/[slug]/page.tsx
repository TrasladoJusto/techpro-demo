import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, getAllProducts, getRelatedProducts } from '@/lib/data';
import { ProductJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: 'Equipo no encontrado' };
  return {
    title: `${product.name} | LaserTech`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://lasertech-demo.com/equipos/${product.id}`,
    },
  };
}

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.id }));
}

const specLabelMap: Record<string, string> = {
  longitudDeOnda: 'Longitud de onda',
  potencia: 'Potencia',
  tamanoDelSpot: 'Tamaño del spot',
  peso: 'Peso',
  dimensiones: 'Dimensiones',
};

export default async function EquipoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.id);

  const specEntries = Object.entries(product.specs).map(([key, value]) => ({
    label: specLabelMap[key] || key,
    value,
  }));

  return (
    <div className="bg-[#FAFBFC] overflow-x-hidden selection:bg-[#D4A574]/30 custom-cursor">
      <ProductJsonLd
        name={product.name}
        description={product.shortDescription}
        brand={product.brand}
        image={`https://lasertech-demo.com${product.image}`}
        url={`https://lasertech-demo.com/equipos/${product.id}`}
      />

      {/* Ghost numeral "03" — Stitch exact */}
      <div className="fixed top-32 left-4 md:left-12 pointer-events-none z-0 opacity-5 select-none hidden md:block">
        <span className="font-headline font-bold text-[20rem] md:text-[30rem] leading-none">03</span>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — 7/5 split, sticky dual images
          ═══════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[100dvh] md:min-h-screen relative">
        <div className="col-span-1 md:col-span-7 relative h-[60vh] md:h-auto">
          <div className="sticky top-0 h-[100dvh] md:h-screen flex flex-col gap-1 p-4 md:p-8">
            <div className="w-full h-1/2 overflow-hidden bg-[#F8F5F0]">
              <Image
                src="/images/stitch/control-panel.webp"
                alt={`${product.name} — interfaz clínica`}
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 !relative !static !h-1/2 !w-full"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="w-full h-1/2 overflow-hidden bg-[#F8F5F0]">
              <Image
                src="/images/stitch/home-hero-product.webp"
                alt={`${product.name} — equipo en estudio`}
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 !relative !static !h-1/2 !w-full"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-5 px-8 md:px-16 pt-32 pb-24 flex flex-col justify-start relative z-10">
          <div className="max-w-md">
            <span className="font-label text-[11px] tracking-[0.3em] uppercase text-[#D4A574] mb-8 block">
              Dental Laser Series
            </span>
            <h1 className="font-headline text-huge mb-6 text-[#0A2540]">
              {product.name}
            </h1>
            <p className="font-headline text-2xl italic font-light text-[#0A2540]/80 leading-relaxed mb-16">
              {product.shortDescription}
            </p>

            <div className="mb-20 space-y-0">
              {specEntries.map((spec) => (
                <div
                  key={spec.label}
                  className="hairline py-4 flex justify-between items-baseline group hover:bg-[#F8F5F0]/50 transition-colors"
                >
                  <span className="font-label text-[11px] tracking-widest uppercase text-[#0A2540]/60">
                    {spec.label}
                  </span>
                  <span className="font-body text-sm font-medium tracking-tight">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-24 space-y-6">
              <h3 className="font-headline text-lg font-bold mb-4">
                Precision clinical capability
              </h3>
              {product.features.map((feature) => (
                <div key={feature} className="hairline py-4">
                  <p className="font-body text-[15px] leading-relaxed text-[#0A2540]/80">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-10 items-start">
              <Link
                href="/contacto?asunto=cotizacion"
                className="group relative inline-block"
              >
                <span className="font-headline text-2xl text-[#1E5A96] font-medium border-b border-[#1E5A96]/30 group-hover:border-[#1E5A96] transition-all duration-300">
                  Solicitar cotización
                </span>
                <span className="material-symbols-outlined ml-2 align-middle text-[#1E5A96] opacity-0 group-hover:opacity-100 transition-opacity text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contacto?asunto=demo"
                className="group relative inline-block"
              >
                <span className="font-headline text-2xl text-[#0A2540] font-medium border-b border-[#0A2540]/30 group-hover:border-[#0A2540] transition-all duration-300">
                  Agendar demo de 30 minutos
                </span>
                <span className="material-symbols-outlined ml-2 align-middle text-[#0A2540] opacity-0 group-hover:opacity-100 transition-opacity text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>
                  calendar_today
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECONDARY IMAGERY — 3-col staggered
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F8F5F0] py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-[#FAFBFC] mb-8 overflow-hidden">
              <Image
                src="/images/stitch/product-fiber.webp"
                alt="Fibra óptica láser — precisión clínica"
                fill
                className="object-cover !relative !static !h-auto !w-full aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h4 className="font-headline text-xl mb-2 text-[#0A2540]">
              Alta Eficiencia Energética
            </h4>
            <p className="font-body text-sm text-[#0A2540]/80">
              Distribución óptima de potencia para gestión mínimamente invasiva
              de tejidos blandos.
            </p>
          </div>
          <div className="flex flex-col md:mt-24">
            <div className="aspect-[4/5] bg-[#FAFBFC] mb-8 overflow-hidden">
              <Image
                src="/images/stitch/product-handpiece.webp"
                alt="Manojo ergonómico de láser dental"
                fill
                className="object-cover !relative !static !h-auto !w-full aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h4 className="font-headline text-xl mb-2 text-[#0A2540]">
              Diseño Ergonómico
            </h4>
            <p className="font-body text-sm text-[#0A2540]/80">
              Handpiece equilibrado para sesiones quirúrgicas extendidas sin
              fatiga.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-[#FAFBFC] mb-8 overflow-hidden">
              <Image
                src="/images/stitch/product-wavelength.webp"
                alt="Triple longitud de onda — tecnología láser"
                fill
                className="object-cover !relative !static !h-auto !w-full aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h4 className="font-headline text-xl mb-2 text-[#0A2540]">
              Triple Longitud de Onda
            </h4>
            <p className="font-body text-sm text-[#0A2540]/80">
              Versatilidad en diferentes profundidades de tejido y coeficientes
              de absorción.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RELATED PRODUCTS
          ═══════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-24 md:py-32 border-t border-[#0A2540]/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <p className="font-label text-[11px] uppercase tracking-[0.3em] text-[#0A2540]/40 mb-12">
              Otros equipos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/equipos/${rel.id}`}
                  className="group hairline py-8 flex flex-col gap-2 hover:bg-[#F8F5F0]/40 transition-colors"
                >
                  <h3 className="font-headline text-2xl text-[#0A2540] group-hover:italic transition-all">
                    {rel.name}
                  </h3>
                  <span className="font-label text-[11px] tracking-[0.1em] text-[#5a6373]">
                    {rel.brand}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          DARK CTA
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0A2540] text-[#FAFBFC] py-40 px-6 md:px-12 relative text-center flex flex-col items-center justify-center">
        <h2 className="font-display text-6xl md:text-[100px] leading-none tracking-tight mb-16 editorial-spacing italic">
          Conversemos
        </h2>
        <div>
          <Link
            href="/contacto?asunto=cotizacion"
            className="group relative py-4 inline-flex items-center"
          >
            <span className="font-headline text-xl md:text-3xl text-[#FAFBFC]">
              Solicitar Diagnóstico Clínico
            </span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4A574] scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
          </Link>
        </div>
      </section>
    </div>
  );
}