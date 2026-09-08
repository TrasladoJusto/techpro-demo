import Image from 'next/image';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | TechPro',
  description:
    'Solicita diagnóstico de inversión técnica para equipos láser dentales. Respondemos en menos de 24 horas hábiles.',
  alternates: {
    canonical: 'https://techpro-demo.com/contacto',
  },
};

interface PageProps {
  searchParams: Promise<{ asunto?: string }>;
}

export default async function ContactoPage({ searchParams }: PageProps) {
  const { asunto } = await searchParams;
  return (
    <div className="bg-[var(--color-canvas)] overflow-x-hidden">
      {/* Background watermark numeral */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <span className="font-display text-[35rem] font-bold text-[var(--color-navy)]/[0.02] leading-none select-none">
          04
        </span>
      </div>

      <section className="relative z-10 pt-[72px] md:pt-[80px] pb-16 md:pb-24 min-h-screen">
        <div className="container-editorial grid grid-cols-12 gap-0 items-start">
          {/* LEFT — Narrative + Contact Info */}
          <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
            <header className="mb-16">
              <h1
                data-reveal
                className="font-display leading-[0.9] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
              >
                Conversemos.
                <br />
                <em className="italic">Sin formulario genérico.</em>
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-[var(--color-navy)]/80 max-w-xl">
                Solicitud de diagnóstico de inversión técnica. Respondemos en menos de
                24 horas hábiles.
              </p>
            </header>

            {/* Contact details — tabular rows */}
            <div className="space-y-0 border-t border-[var(--color-rule)]">
              {[
                { label: 'Teléfono', value: '+51 900 000 000', href: 'tel:+51900000000' },
                {
                  label: 'Email',
                  value: 'demo@techpro-demo.com',
                  href: 'mailto:demo@techpro-demo.com',
                },
                { label: 'Dirección', value: 'Av. Ejemplo 456', sub: 'San Isidro, Lima, Perú' },
                { label: 'Horario', value: 'L-V 9:00 — 18:00' },
              ].map((item) => (
                <div
                  key={item.label}
                  data-reveal
                  className="grid grid-cols-12 py-6 border-b border-[var(--color-rule)] group hover:bg-[var(--color-navy)]/[0.01] transition-colors"
                >
                  <span className="col-span-4 md:col-span-4 font-label text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy)]/50 pt-1">
                    {item.label}
                  </span>
                  <div className="col-span-8 md:col-span-8">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-[15px] underline underline-offset-4 decoration-[var(--color-navy)]/20 hover:decoration-[var(--color-navy)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div>
                        <span className="font-body text-[15px] block">{item.value}</span>
                        {item.sub && (
                          <span className="font-body text-[13px] text-[var(--color-navy)]/60 block mt-1">
                            {item.sub}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Fiber-optic abstract image */}
            <div className="pt-12 w-full max-w-[280px] grayscale opacity-80 mix-blend-multiply">
              <Image src="/images/stitch/contact-fiber.webp" alt="Fibra óptica láser dental" width={280} height={350} sizes="280px" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>

          {/* RIGHT — Minimalist Form */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-24 pt-8 md:pt-0">
            <ContactForm defaultValue={asunto} />

            <div className="mt-24 pt-8 border-t border-[var(--color-rule)]">
              <p className="font-label text-[10px] leading-relaxed text-[var(--color-navy)]/40 max-w-xs">
                Al enviar este formulario, usted solicita una asesoría personalizada. Un
                especialista de TechPro evaluará su perfil para proponer la solución
                técnica más adecuada a su práctica clínica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
