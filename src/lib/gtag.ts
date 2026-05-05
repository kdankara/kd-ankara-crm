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

// Track specific events (conversions)
export const event = (action: string, category: string, label: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track Google Ads conversions specifically (Legacy/Label based)
export const conversion = (sendTo: string, transactionId?: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
            'send_to': `${ADS_TRACKING_ID}/${sendTo}`,
            'transaction_id': transactionId
        });
        console.log(`[GTAG] Conversion tracked (label): ${sendTo}`);
    }
};

/**
 * Track WhatsApp button clicks (generate_lead)
 */
export const trackWhatsAppClick = () => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'generate_lead', {
            'event_category': 'Contact',
            'event_label': 'WhatsApp'
        });
        console.log('[GTAG] Event tracked: generate_lead (WhatsApp)');
    }
};

/**
 * Track Form submissions (submit_lead_form)
 */
export const trackFormSubmission = () => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'submit_lead_form', {
            'event_category': 'Engagement',
            'event_label': 'Lead Form'
        });
        console.log('[GTAG] Event tracked: submit_lead_form');
    }
};
