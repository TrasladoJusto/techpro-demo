import { NextRequest, NextResponse } from 'next/server';
import { insertSupportTicket, insertLog } from '@/lib/db';
import { sendSupportEmail } from '@/lib/email';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { success, retryAfter } = rateLimit(ip, 3, 60_000);
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
    const equipmentModel = formData.get('modelo') as string;
    const issueDescription = formData.get('descripcion') as string;
    const urgency = formData.get('urgencia') as string || 'medium';
    const honeypot = formData.get('website_url') as string;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !phone || !equipmentModel || !issueDescription) {
      return NextResponse.json(
        { error: 'Todos los campos marcados con * son requeridos' },
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

    if (phone.replace(/\D/g, '').length < 9) {
      return NextResponse.json(
        { error: 'Teléfono debe tener al menos 9 dígitos' },
        { status: 400 }
      );
    }

    if (issueDescription.length < 10) {
      return NextResponse.json(
        { error: 'La descripción del problema debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    const { leadId, ticketId } = await insertSupportTicket({
      name,
      email,
      phone,
      equipmentModel,
      issueDescription,
      urgency,
      sourcePage: request.headers.get('referer') || undefined,
    });

    await insertLog('INFO', `Support ticket #${ticketId} created for lead #${leadId}`);

    const emailResult = await sendSupportEmail({
      name,
      email,
      phone,
      equipmentModel,
      issueDescription,
    });

    if (!emailResult.success) {
      await insertLog('WARN', `Support email failed for ticket #${ticketId}: ${emailResult.error}`);
    }

    return NextResponse.json({ success: true, leadId, ticketId });
  } catch (error) {
    await insertLog('ERROR', 'Support form error', error instanceof Error ? error.stack : undefined);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
