import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Process | Nexora AI Studio',
  description:
    'Our clear, founder-led process for delivering websites, AI automation and custom tools — from discovery to launch and support.',
  path: '/process',
});

export default function ProcessLayout({ children }: { children: ReactNode }) {
  return children;
}
