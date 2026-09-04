"use client";

import { useState } from 'react';
import { Spinner, CheckCircle } from '@/components/Icons';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function SupportForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): boolean {
    const errors: Record<string, string> = {};
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const descripcion = formData.get('descripcion') as string;

    if (!nombre || nombre.trim().length < 2) {
      errors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Ingresa un email válido';
    }
    if (!telefono || !/^\d{9}$/.test(telefono.replace(/\s/g, ''))) {
      errors.telefono = 'El teléfono debe tener 9 dígitos';
    }
    if (!descripcion || descripcion.trim().length < 10) {
      errors.descripcion = 'Describe el problema con más detalle';
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

    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al enviar. Intenta de nuevo.');
        setState('error');
        return;
      }

      setTicketId(data.ticketId || '');
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
          Solicitud enviada
        </h3>
        {ticketId && (
          <p className="font-label text-[12px] tracking-[0.15em] text-[var(--color-blue)] mb-3">
            Ticket #{ticketId}
          </p>
        )}
        <p className="font-body text-[14px] text-[var(--color-muted)]">
          Te contactaremos pronto. Para emergencias, escríbenos por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="space-y-2">
        <label htmlFor="soporte-nombre" className="field-label">Nombre *</label>
        <input
          id="soporte-nombre"
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
        <label htmlFor="soporte-email" className="field-label">Email *</label>
        <input
          id="soporte-email"
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
        <label htmlFor="soporte-telefono" className="field-label">Teléfono *</label>
        <input
          id="soporte-telefono"
          name="telefono"
          type="tel"
          required
          className={`field-input ${fieldErrors.telefono ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="999 888 777"
        />
        {fieldErrors.telefono && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.telefono}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="soporte-modelo" className="field-label">Modelo del equipo *</label>
        <select
          id="soporte-modelo"
          name="modelo"
          required
          className="field-input appearance-none"
        >
          <option value="">Seleccionar modelo</option>
          <option value="precision-3w">Precision 3W</option>
          <option value="simpler-980">SIMPLER 980</option>
          <option value="biostim-635">BioStim 635</option>
          <option value="dual-pro">Dual Pro</option>
          <option value="duo-810-980">Duo 810/980</option>
          <option value="otro">Otro (especificar abajo)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="soporte-urgencia" className="field-label">Urgencia</label>
        <select
          id="soporte-urgencia"
          name="urgencia"
          className="field-input appearance-none"
          defaultValue="medium"
        >
          <option value="low">Baja — Puedo esperar</option>
          <option value="medium">Media — Necesito respuesta pronto</option>
          <option value="high">Alta — El equipo está parado</option>
          <option value="emergency">Emergencia — Urgente</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="soporte-descripcion" className="field-label">Describe el problema *</label>
        <textarea
          id="soporte-descripcion"
          name="descripcion"
          required
          rows={5}
          className={`field-input resize-none ${fieldErrors.descripcion ? '!border-[var(--color-danger)]' : ''}`}
          placeholder="Cuéntanos qué está pasando con tu equipo. Incluye detalles como cuándo empezó el problema, si muestra algún mensaje de error, etc."
        />
        {fieldErrors.descripcion && (
          <p className="text-[11px] text-[var(--color-danger)]">{fieldErrors.descripcion}</p>
        )}
      </div>

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
              Enviar solicitud
              <span className="arrow">→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
