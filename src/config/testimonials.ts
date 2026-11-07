export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Nexora rebuilt our website from scratch and it now brings in enquiries every week. The process was clear, fast and completely founder-led.',
    name: 'Sample Client',
    role: 'Owner',
    company: 'Sample Restaurant',
    placeholder: true,
  },
  {
    quote:
      'The automation workflow removed hours of repetitive admin every week. Communication was direct and every step was explained clearly.',
    name: 'Sample Client',
    role: 'Operations Manager',
    company: 'Sample Business',
    placeholder: true,
  },
  {
    quote:
      'We wanted practical AI, not hype. Nexora delivered a chatbot that actually answers our customers and saves the team real time.',
    name: 'Sample Client',
    role: 'Founder',
    company: 'Sample Startup',
    placeholder: true,
  },
];
