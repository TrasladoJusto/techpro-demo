import { Resend } from 'resend';

let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

const FROM_EMAIL = 'TechPro <notificaciones@techpro-demo.com>';
const TO_EMAIL = 'demo@techpro-demo.com';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  sourcePage?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResend();
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `[Contacto] ${escapeHtml(data.subject || 'Nuevo mensaje')} - ${escapeHtml(data.name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 120px;">Nombre:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.email)}</td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Teléfono:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.phone)}</td>
            </tr>` : ''}
            ${data.subject ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Asunto:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.subject)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Mensaje:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.message)}</td>
            </tr>
            ${data.sourcePage ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Página:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.sourcePage)}</td>
            </tr>` : ''}
          </table>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            Este email fue enviado desde el formulario de contacto de techpro-demo.com
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error sending email',
    };
  }
}

export async function sendSupportEmail(data: {
  name: string;
  email: string;
  phone: string;
  equipmentModel: string;
  serialNumber?: string;
  issueDescription: string;
  urgency?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResend();
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `[SOPORTE TÉCNICO] [${(data.urgency || 'medium').toUpperCase()}] ${escapeHtml(data.equipmentModel)} - ${escapeHtml(data.name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #fecaca; padding-bottom: 8px;">
            Solicitud de soporte técnico
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 140px;">Nombre:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Teléfono:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Equipo:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.equipmentModel)}</td>
            </tr>
            ${data.serialNumber ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Serial:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.serialNumber)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Problema:</td>
              <td style="padding: 8px; color: #1f2937;">${escapeHtml(data.issueDescription)}</td>
            </tr>
          </table>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            Responder a este email para contactar directamente al cliente.
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error sending email',
    };
  }
}
