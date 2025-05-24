export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features?: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "$250",
    period: "Per month",
    description: "12 sessions per month",
    features: [
      "12 sessions per month",
      "Initial Fitness Assessment",
      "Basic Nutrition Guide",
      "Progress Tracking",
      "Email Support",
    ],
  },
  {
    id: 2,
    name: "Advanced",
    price: "$300",
    period: "Per month",
    description: "16 sessions per month",
    isPopular: true,
    features: [
      "16 sessions per month",
      "Comprehensive Fitness Assessment",
      "Detailed Nutrition Plan",
      "Weekly Progress Reviews",
      "Mobile App Access",
      "Priority Scheduling",
    ],
  },
  {
    id: 3,
    name: "Strong",
    price: "$350",
    period: "Per month",
    description: "20 sessions per month",
    features: [
      "20 sessions per month",
      "Advanced Fitness Assessment",
      "Custom Meal Planning",
      "24/7 Trainer Support",
      "Recovery Guidance",
      "Quarterly Body Composition Analysis",
    ],
  },
];
