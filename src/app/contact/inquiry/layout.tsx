import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Project Inquiry | Nexora AI Studio',
  description:
    'Tell us about your project. Our detailed inquiry form helps us understand your goals and recommend the most practical solution.',
  path: '/contact/inquiry',
});

export default function InquiryLayout({ children }: { children: ReactNode }) {
  return children;
}
