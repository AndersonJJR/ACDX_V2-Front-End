export interface HomeKpi {
  label: string;
  value: string;
  detail: string;
}

export interface HomeFeature {
  title: string;
  description: string;
  tag: string;
}

export interface HomeTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface HomeFaq {
  question: string;
  answer: string;
}

export interface HomeLinkCard {
  title: string;
  description: string;
  link: string;
}

export interface HomeViewModel {
  heroTitle: string;
  heroSubtitle: string;
  partnerLogos: string[];
  kpis: HomeKpi[];
  highlights: HomeFeature[];
  productCards: HomeLinkCard[];
  serviceCards: HomeLinkCard[];
  testimonials: HomeTestimonial[];
  faqs: HomeFaq[];
  ctaTitle: string;
  ctaText: string;
}
