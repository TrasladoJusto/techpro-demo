# Endovita Technology

Sitio web oficial de Endovita Technology S.A.C. — Distribuidor oficial de equipos láser odontológicos en Perú.

## Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Estilo:** Tailwind CSS v4
- **Tipografía:** Newsreader (serif) + Geist (sans-serif)
- **Animaciones:** GSAP + ScrollTrigger
- **Formularios:** Resend (email)
- **Analytics:** Google Analytics 4 + Plausible

## Estructura

```
src/
├── app/              # Páginas (App Router)
│   ├── page.tsx      # Home
│   ├── equipos/      # Catálogo de productos
│   ├── contacto/     # Formulario de contacto
│   ├── testimonios/  # Testimonios
│   ├── capacitaciones/ # Capacitaciones
│   ├── servicio-tecnico/ # Soporte técnico
│   ├── nosotros/     # Sobre nosotros
│   ├── terminos/     # Términos y condiciones
│   └── privacidad/   # Política de privacidad
├── components/       # Componentes React
├── lib/              # Utilidades y datos
└── data/             # Datos de productos (JSON)
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y configurar:

```env
RESEND_API_KEY=re_xxx          # API key de Resend
DB_HOST=localhost              # Host de MySQL
DB_USER=u_endovita             # Usuario de MySQL
DB_PASSWORD=xxx                # Contraseña de MySQL
DB_NAME=endovita               # Nombre de la base de datos
NEXT_PUBLIC_GA4_ID=G-XXX       # Google Analytics 4 ID
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=endovitatechnology.com
```

## Despliegue

El proyecto está configurado para desplegarse en Vercel o cualquier plataforma compatible con Next.js.

## Licencia

© 2026 Endovita Technology S.A.C. Todos los derechos reservados.
