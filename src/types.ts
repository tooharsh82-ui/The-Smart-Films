export type PhotographyCategory = string;

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: PhotographyCategory;
  categoryKey: string;
  tags: string[];
  description: string;
  imageUrl: string;
  inquiryMessage?: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  badgeColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  highlight: string;
  sentiment: string;
  location: string;
  verified: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  eventType: string;
  preferredDate?: string;
  message?: string;
}
