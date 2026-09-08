"use client";

import { useState } from 'react';
import { Spinner, CheckCircle } from '@/components/Icons';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ source = 'contacto', defaultValue }: { source?: string; defaultValue?: string }) {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): boolean {
    const errors: Record<string, string> = {};
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const mensaje = formData.get('mensaje') as string;

    if (!nombre || nombre.trim().length < 2) {
      errors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Ingresa un email válido';
    }
    if (telefono && !/^\d{9}$/.test(telefono.replace(/\s/g, ''))) {
      errors.telefono = 'El teléfono debe tener 9 dígitos';
    }
    if (!mensaje || mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    setState('sending');

    formData.set('source', source);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al enviar. Intenta de nuevo.');
        setState('error');
        return;
      }

      setState('success');
    } catch {
      setError('Error de conexión. Verifica tu internet e intenta de nuevo.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-[var(--color-success)]" />
        </div>
        <h3 className="font-display text-2xl text-[var(--color-navy)] mb-3">
          ¡Mensaje enviado!
        </h3>
        <p className="font-body text-[14px] text-[var(--color-muted)]">
          Te contactaremos en menos de 24 horas. Revisa tu correo electrónico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="space-y-2">
        <label htmlFor="contacto-nombre" className="field-label">Nombre *</label>
        <input
          id="contacto-nombre"
          name="nombre"
          type="text"
          required
          className={`field-input ${fieldErrors.nombre ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="Tu nombre"
        />
        {fieldErrors.nombre && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.nombre}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-email" className="field-label">Email *</label>
        <input
          id="contacto-email"
          name="email"
          type="email"
          required
          className={`field-input ${fieldErrors.email ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="tu@email.com"
        />
        {fieldErrors.email && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-telefono" className="field-label">Teléfono</label>
        <input
          id="contacto-telefono"
          name="telefono"
          type="tel"
          className={`field-input ${fieldErrors.telefono ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="999 888 777"
        />
        {fieldErrors.telefono && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.telefono}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-asunto" className="field-label">Asunto *</label>
        <select
          id="contacto-asunto"
          name="asunto"
          required
          className="field-input appearance-none"
          defaultValue={defaultValue}
        >
          <option value="">Seleccionar asunto</option>
          <option value="cotizacion">Cotización de equipo</option>
          <option value="capacitacion">Información de capacitación</option>
          <option value="soporte">Soporte técnico</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="contacto-mensaje" className="field-label">Mensaje *</label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          required
          rows={5}
          className={`field-input resize-none ${fieldErrors.mensaje ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="¿En qué podemos ayudarte?"
        />
        {fieldErrors.mensaje && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.mensaje}</p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="opt_in"
          value="true"
          className="mt-1 w-4 h-4 border-[var(--color-rule-strong)] text-[var(--color-blue)] focus:ring-[var(--color-blue)]"
        />
        <span className="font-body text-[13px] text-[var(--color-muted)] leading-relaxed">
          Acepto recibir información sobre productos, capacitaciones y novedades
          de TechPro por email.
        </span>
      </label>

      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {error && (
        <div className="flex items-center gap-2 py-3 px-4 bg-[var(--color-danger)]/10 text-[var(--color-danger)] text-[13px]">
          {error}
          {state === 'error' && (
            <button
              type="button"
              onClick={() => { setState('idle'); setError(''); }}
              className="ml-auto font-medium underline"
            >
              Reintentar
            </button>
          )}
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="cta-link text-[15px]"
        >
          {state === 'sending' ? (
            <>
              <Spinner size={14} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <span className="arrow">→</span>
            </>
          )}
        </button>
      </div>

      <div className="pt-4 border-t border-[var(--color-rule)] flex flex-wrap gap-x-4 gap-y-1">
        <span className="font-label text-[10px] tracking-[0.15em] text-[var(--color-subtle)]">50+ clínicas</span>
        <span className="font-label text-[10px] tracking-[0.15em] text-[var(--color-subtle)]">Garantía de fábrica</span>
        <span className="font-label text-[10px] tracking-[0.15em] text-[var(--color-subtle)]">Respuesta en 24h</span>
      </div>
    </form>
  );
}
