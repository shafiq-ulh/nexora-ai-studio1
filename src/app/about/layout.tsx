import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'About | Nexora AI Studio',
  description:
    'Meet Shafiq Ullah, the independent founder behind Nexora AI Studio, and learn how we build practical AI and digital solutions.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
