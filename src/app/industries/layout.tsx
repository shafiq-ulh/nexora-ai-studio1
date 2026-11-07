import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Industries | Nexora AI Studio',
  description:
    'How Nexora AI Studio applies websites, AI chatbots and automation across restaurants, retail, healthcare, real estate and more.',
  path: '/industries',
});

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return children;
}
