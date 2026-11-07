import { images } from '@/config/assets';

export type CaseStudy = {
  challenge: string;
  solution: string;
  result: string;
  services: string[];
  highlights: string[];
  year: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  status: 'live' | 'coming-soon';
  caseStudy?: CaseStudy;
};

export const liveProjects: Project[] = [
  {
    slug: 'beejan-restaurant',
    title: 'Beejan Restaurant',
    category: 'Client Project — Restaurant Website',
    description:
      'A luxury multi-page website built for Beejan Restaurant, a Chitrali restaurant founded by Anwar Aman. Includes a working reservation system on Netlify Forms, a tabbed menu, a filterable gallery with lightbox, and custom scroll animations — built solo, front to back, including client handover.',
    image: images.beejan,
    href: 'https://beejan-demo.netlify.app/',
    status: 'live',
    caseStudy: {
      year: '2025',
      challenge:
        'Beejan needed a premium online presence that reflected the quality of its Chitrali dining experience and made reservations effortless for customers.',
      solution:
        'A luxury multi-page website with a working reservation system, a tabbed menu, a filterable gallery with lightbox and custom scroll animations — designed and built solo, front to back, including client handover.',
      result:
        '[PLACEHOLDER] Add a measurable outcome here, such as increased reservations, more direct bookings, or reduced phone-call volume.',
      services: ['Website Development', 'Reservation System', 'Motion & Interaction'],
      highlights: [
        'Built solo, front to back',
        'Working reservation system',
        'Custom scroll animations',
        'Filterable gallery with lightbox',
      ],
    },
  },
  {
    slug: 'elite-rooftop-restaurant',
    title: 'Elite Rooftop Restaurant',
    category: 'Client Project — Restaurant Website',
    description:
      'A modern restaurant website built for Elite Rooftop Restaurant in Multan, showcasing its rooftop dining experience, Pakistani and international cuisine, BBQ, buffet, and city views through a polished digital presence.',
    image: images.eliteRooftop,
    href: 'https://elite-rooftop-restaurant.netlify.app/',
    status: 'live',
    caseStudy: {
      year: '2025',
      challenge:
        'Elite Rooftop needed a modern digital presence that could communicate its rooftop dining experience, wide menu and city views to attract new diners.',
      solution:
        'A polished restaurant website showcasing rooftop dining, Pakistani and international cuisine, BBQ, buffet and city views through a clean, responsive layout.',
      result:
        '[PLACEHOLDER] Add a measurable outcome here, such as more table bookings or increased menu views.',
      services: ['Website Development', 'Responsive Design', 'Content Presentation'],
      highlights: [
        'Rooftop experience showcase',
        'Menu & cuisine presentation',
        'Mobile-first responsive design',
        'Fast, image-led layout',
      ],
    },
  },
  {
    slug: 'b-biryani-restaurant',
    title: 'B Biryani Restaurant',
    category: 'Client Project — Restaurant Website',
    description:
      'A modern restaurant website for B Biryani in Mingora, Swat, built as a React single-page app with multi-page routing. Includes a full filterable menu across categories like biryani, BBQ, karahi and steaks, a photo gallery, location and contact details, and one-tap WhatsApp ordering — plus SEO structured data for local search.',
    image: images.bBiryani,
    href: 'https://b-biryani-restaurant.pages.dev/',
    status: 'live',
    caseStudy: {
      year: '2025',
      challenge:
        'B Biryani needed a fast, modern site that made its full menu easy to browse and ordering effortless for a busy local audience.',
      solution:
        'A React single-page app with multi-page routing, a full filterable menu across biryani, BBQ, karahi and steaks, a photo gallery, location and contact details, one-tap WhatsApp ordering and local SEO structured data.',
      result:
        '[PLACEHOLDER] Add a measurable outcome here, such as more WhatsApp orders or higher local search visibility.',
      services: ['Website Development', 'WhatsApp Ordering', 'Local SEO'],
      highlights: [
        'Multi-page React application',
        'Filterable menu across categories',
        'One-tap WhatsApp ordering',
        'Local SEO structured data',
      ],
    },
  },
  {
    slug: 'royal-feast-restaurant',
    title: 'Royal Feast Restaurant',
    category: 'Demo Project — Restaurant Website',
    description:
      'A demo restaurant website crafted for Royal Feast Restaurant, featuring an elegant dining experience with a modern layout, polished menu presentation, and responsive design across all devices.',
    image: images.royalFeast,
    href: 'https://royal-feast-res.netlify.app/',
    status: 'live',
  },
];

export const comingSoonProjects: Project[] = [
  {
    slug: 'ai-customer-support-assistant',
    title: 'AI Customer Support Assistant',
    category: 'AI Chatbots',
    description:
      'A conversational assistant designed to answer common customer questions and reduce support workload.',
    image: images.analytics,
    status: 'coming-soon',
  },
  {
    slug: 'business-workflow-automation',
    title: 'Business Workflow Automation',
    category: 'Automation',
    description:
      'Connected tools and automated hand-offs that reduce repetitive manual work across teams.',
    image: images.dashboard,
    status: 'coming-soon',
  },
  {
    slug: 'conversion-focused-business-website',
    title: 'Conversion-Focused Business Website',
    category: 'Website Development',
    description:
      'A fast, responsive website built to establish credibility and turn visitors into enquiries.',
    image: images.webdesign,
    status: 'coming-soon',
  },
  {
    slug: 'custom-internal-ai-tool',
    title: 'Custom Internal AI Tool',
    category: 'Custom AI Tools',
    description:
      'A purpose-built tool that helps a team process information faster and make better decisions.',
    image: images.team,
    status: 'coming-soon',
  },
];

export const allProjects = [...liveProjects, ...comingSoonProjects];

export const projectsWithCaseStudy = liveProjects.filter((project) => project.caseStudy);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);
