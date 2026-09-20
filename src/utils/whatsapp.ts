import { ContactFormData } from '../types';

export const BUSINESS_CONFIG = {
  brandName: 'THE SMART FILMS',
  studioName: 'The Smart Films',
  subName: 'Smart Studio',
  businessType: 'Photography Studio',
  focus: 'Professional photography and cinematic videography',
  phoneDisplay: '082106 11923',
  phoneTel: 'tel:+918210611923',
  whatsappDisplay: '+91 82106 11923',
  whatsappNumber: '918210611923',
  address: {
    line1: 'Smart Gift & Studio',
    line2: 'Bandh, Majhauwa',
    cityStateZip: 'Arrah, Bihar 802301',
    country: 'India',
    full: 'Smart Gift & Studio, Bandh, Majhauwa, Arrah, Bihar 802301, India',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Smart+Gift+%26+Studio,+Bandh,+Majhauwa,+Arrah,+Bihar+802301,+India',
  rating: 4.9,
  ratingMax: 5,
  reviewCount: 10,
};

export const CATEGORY_MESSAGES: Record<string, string> = {
  BRIDE: 'Hi, I want to know more about your bridal photography and pricing.',
  GROOM: 'Hi, I want to know more about your groom photography and pricing.',
  WEDDING: 'Hi, I want to know more about your wedding photography and pricing.',
  'PRE-WEDDING': 'Hi, I want to know more about your pre-wedding photography and pricing.',
  MATERNITY: 'Hi, I want to know more about your maternity photography and pricing.',
  COUPLE: 'Hi, I want to know more about your couple photography and pricing.',
  EVENT: 'Hi, I want to know more about your event photography and pricing.',
  VIDEOGRAPHY: 'Hi, I want to know more about your cinematic videography and pricing.',
  CINEMATIC: 'Hi, I want to know more about your cinematic videography and pricing.',
};

export const INQUIRY_MESSAGES = {
  general: 'Hi, I want to know more about The Smart Films photography and videography services, pricing and packages.',
  pricing: 'Hi, I want to know about The Smart Films photography and videography pricing and packages.',
  availability: 'Hi, I want to check availability for photography/videography services.',
  services: 'Hi, I want to know more about The Smart Films photography and videography services.',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || INQUIRY_MESSAGES.general;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCategoryWhatsAppUrl(category: string): string {
  const normalized = category.trim().toUpperCase();
  const matchedKey = Object.keys(CATEGORY_MESSAGES).find(
    (k) => normalized.includes(k) || k.includes(normalized)
  );
  const message = matchedKey ? CATEGORY_MESSAGES[matchedKey] : INQUIRY_MESSAGES.general;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getContactFormWhatsAppUrl(data: ContactFormData): string {
  const lines = [
    'Hi, I would like to enquire about The Smart Films photography/videography services.',
    '',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Event Type: ${data.eventType}`,
    `Preferred Date: ${data.preferredDate?.trim() || 'Flexible / To be discussed'}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }

  const text = lines.join('\n');
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
