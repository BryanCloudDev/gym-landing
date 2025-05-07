// src/types/index.ts
export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
