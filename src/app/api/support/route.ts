import { NextRequest, NextResponse } from 'next/server';

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('telefono') as string;
    const equipmentModel = formData.get('modelo') as string;
    const issueDescription = formData.get('descripcion') as string;

    if (!name || !email || !phone || !equipmentModel || !issueDescription) {
      return NextResponse.json(
        { error: 'Todos los campos marcados con * son requeridos' },
        { status: 400 }
      );
    }

    // Demo mode - return success
    return NextResponse.json({ success: true, leadId: Date.now(), ticketId: Date.now() });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
