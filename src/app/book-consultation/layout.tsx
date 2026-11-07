import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Book a Consultation | Nexora AI Studio',
  description:
    'Schedule a 1:1 consultation to discuss your business challenges and explore practical AI and web solutions.',
  path: '/book-consultation',
});

export default function BookConsultationLayout({ children }: { children: ReactNode }) {
  return children;
}
