"use client";

import Script from 'next/script';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'endovitatechnology.com';

export function Analytics() {
  return (
    <>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}
      <Script
        defer
        data-domain={PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.tagged-events.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: 'whatsapp',
    });
  }
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('WhatsApp Click', { props: { location: 'header' } });
  }
}

export function trackFormSubmit(formType: 'contact' | 'support') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
    });
  }
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Form Submit', { props: { form: formType } });
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    plausible: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}
