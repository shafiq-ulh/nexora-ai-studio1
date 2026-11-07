import { Cpu, Globe, Zap, Bot, Layout, BarChart } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: typeof Globe;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    description:
      'Professional, responsive websites designed to establish credibility, attract customers, and generate business opportunities.',
    href: '/services/website-development',
    icon: Globe,
    features: [
      'Business & portfolio websites',
      'Landing pages built to convert',
      'E-commerce storefronts',
      'Responsive, accessible design',
      'Performance and SEO foundations',
    ],
  },
  {
    slug: 'ai-chatbots',
    title: 'AI Chatbot Development',
    description:
      'Intelligent conversational assistants that help businesses answer customer questions, provide information, and improve customer support.',
    href: '/services/ai-chatbots',
    icon: Bot,
    features: [
      'Website chat assistants',
      'WhatsApp AI assistants',
      'Customer support automation',
      'Lead qualification flows',
      'Knowledge-base driven answers',
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI Workflow Automation',
    description:
      'Automate repetitive tasks and connect business tools to reduce manual work and improve operational efficiency.',
    href: '/services/ai-automation',
    icon: Zap,
    features: [
      'Repetitive task automation',
      'Document and data processing',
      'Lead and follow-up automation',
      'CRM and tool integrations',
      'Custom automated workflows',
    ],
  },
  {
    slug: 'custom-ai-tools',
    title: 'Custom AI Tools',
    description:
      'Purpose-built AI-powered tools and systems designed around specific business requirements.',
    href: '/services/custom-ai-tools',
    icon: Cpu,
    features: [
      'Internal AI assistants',
      'Custom dashboards and tools',
      'Content and data pipelines',
      'Retrieval-augmented (RAG) systems',
      'API-driven AI features',
    ],
  },
  {
    slug: 'business-automation',
    title: 'Business Process Automation',
    description:
      'Connect applications, streamline business operations, and create efficient automated workflows.',
    href: '/services/business-automation',
    icon: Layout,
    features: [
      'Process mapping and audits',
      'Application integrations',
      'Automated reporting',
      'Approval and notification flows',
      'Efficiency optimisation',
    ],
  },
  {
    slug: 'ai-consulting',
    title: 'AI Integration & Consulting',
    description:
      'Identify practical AI opportunities and integrate suitable technologies into existing business operations.',
    href: '/services/ai-consulting',
    icon: BarChart,
    features: [
      'AI opportunity assessment',
      'Technology selection',
      'Integration planning',
      'Implementation guidance',
      'Ongoing support',
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
