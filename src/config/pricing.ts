export type PricingPackage = {
  name: string;
  priceFrom: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: 'Website',
    priceFrom: 'From $300',
    description: 'A professional, conversion-focused website that establishes credibility and generates enquiries.',
    features: [
      'Responsive multi-page design',
      'SEO foundations',
      'Contact / inquiry form',
      'Performance optimisation',
    ],
  },
  {
    name: 'AI Chatbot',
    priceFrom: 'From $500',
    description: 'An intelligent assistant that answers customer questions and captures leads around the clock.',
    features: [
      'Website or WhatsApp chatbot',
      'Knowledge-base driven answers',
      'Lead qualification flows',
      'Handover to a human',
    ],
    highlighted: true,
  },
  {
    name: 'Automation',
    priceFrom: 'From $400',
    description: 'Connect your tools and remove repetitive manual work from your day-to-day operations.',
    features: [
      'Process mapping',
      'Tool integrations',
      'Automated notifications',
      'Reporting workflows',
    ],
  },
];
