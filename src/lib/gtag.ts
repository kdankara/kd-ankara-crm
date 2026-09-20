/**
 * Google Analytics / Google Ads tracking utility.
 * Safe to use in React components even if the script is not loaded.
 */

export const GA_TRACKING_ID = 'G-31TP8L19HS';
export const ADS_TRACKING_ID = 'AW-17925410465';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track specific custom events
export const event = (action: string, category: string, label: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track Google Ads conversions specifically (Label based)
export const conversion = (sendTo: string, transactionId?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': `${ADS_TRACKING_ID}/${sendTo}`,
      'transaction_id': transactionId
    });
    console.log(`[GTAG] Ads Conversion tracked: ${sendTo}`);
  }
};

/**
 * Track WhatsApp button clicks (generate_lead)
 */
export const trackWhatsAppClick = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      'event_category': 'Contact',
      'event_label': 'WhatsApp',
      'method': 'whatsapp'
    });
    console.log('[GTAG] Event tracked: generate_lead (WhatsApp)');
  }
};

/**
 * Track Phone call button clicks (generate_lead)
 */
export const trackPhoneClick = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      'event_category': 'Contact',
      'event_label': 'Phone Call',
      'method': 'phone'
    });
    window.gtag('event', 'phone_click', {
      'event_category': 'Contact',
      'event_label': 'Phone Call'
    });
    console.log('[GTAG] Event tracked: generate_lead (Phone)');
  }
};

/**
 * Track Form submissions (generate_lead)
 */
export const trackFormSubmission = (formName: string = 'Ön Analiz Formu') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      'event_category': 'Engagement',
      'event_label': formName,
      'method': 'form'
    });
    window.gtag('event', 'submit_lead_form', {
      'event_category': 'Engagement',
      'event_label': formName
    });
    console.log(`[GTAG] Event tracked: generate_lead (${formName})`);
  }
};