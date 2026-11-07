import type { ReactNode } from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Privacy Policy | Nexora AI Studio',
  description:
    'How Nexora AI Studio collects, uses and protects the information you share through our website and forms.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children;
}
