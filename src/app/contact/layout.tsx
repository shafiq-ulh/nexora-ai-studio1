import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Contact | Nexora AI Studio',
  description:
    'Get in touch with Nexora AI Studio to discuss a website, AI chatbot, automation or a custom AI tool for your business.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
