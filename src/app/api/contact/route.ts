import { NextRequest, NextResponse } from 'next/server';

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const message = formData.get('mensaje') as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Demo mode - return success
    return NextResponse.json({ success: true, leadId: Date.now() });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
