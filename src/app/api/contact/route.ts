import { NextRequest, NextResponse } from 'next/server';
import { insertLead, insertLog } from '@/lib/db';
import { sendContactEmail } from '@/lib/email';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { success, retryAfter } = rateLimit(ip, 5, 60_000);
    if (!success) {
      return NextResponse.json(
        { error: `Demasiadas solicitudes. Intente en ${retryAfter}s` },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
      );
    }
    const formData = await request.formData();

    const name = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('telefono') as string;
    const subject = formData.get('asunto') as string;
    const message = formData.get('mensaje') as string;
    const optIn = formData.get('opt_in') === 'true';
    const honeypot = formData.get('website_url') as string;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      );
    }

    if (phone && phone.replace(/\D/g, '').length < 9) {
      return NextResponse.json(
        { error: 'Teléfono debe tener al menos 9 dígitos' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    const leadId = await insertLead({
      name,
      email,
      phone,
      subject,
      message,
      sourcePage: request.headers.get('referer') || undefined,
      optIn,
    });

    await insertLog('INFO', `Lead #${leadId} created from contact form`);

    const emailResult = await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
      sourcePage: request.headers.get('referer') || undefined,
    });

    if (!emailResult.success) {
      await insertLog('WARN', `Email send failed for lead #${leadId}: ${emailResult.error}`);
    }

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    await insertLog('ERROR', 'Contact form error', error instanceof Error ? error.stack : undefined);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
