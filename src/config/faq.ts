export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'How long does a project take?',
    answer:
      'Most websites take 1–3 weeks. AI chatbots and automation projects typically take 2–4 weeks depending on scope and integrations. You receive a clear timeline before we start.',
  },
  {
    question: 'Do you work with clients worldwide?',
    answer:
      'Yes. Nexora is an independent, remote-first studio and works with businesses in any timezone. Communication happens over email, WhatsApp and scheduled calls.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Websites start from around $300 depending on the number of pages, features and integrations. Every project is quoted after a short discovery so the price reflects exactly what you need.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. After launch you can request updates, fixes and enhancements. Ongoing support can be arranged as a simple retainer or on a per-project basis.',
  },
  {
    question: 'Can you add AI to my existing website?',
    answer:
      'In most cases, yes. We can integrate chatbots, automation and AI features into an existing site or connect them through APIs, without rebuilding everything from scratch.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'A short description of your business and goals, any brand assets you already have, and access to relevant accounts (domain, hosting) if changes are needed. The inquiry form covers the essentials.',
  },
];
