import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { siteConfig } from '@/config/siteConfig';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const siteTitle = `${siteConfig.agencyName} | ${siteConfig.agencyTagline}`;
const siteDescription =
  'An independent AI and digital solutions studio building intelligent websites, AI chatbots, automation and custom tools for modern businesses.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteURL),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteConfig.websiteURL,
    siteName: siteConfig.agencyName,
    type: 'website',
    images: [
      {
        url: '/images/hero-bg2.jpg',
        width: 1366,
        height: 768,
        alt: siteConfig.agencyName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/hero-bg2.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#080B10] text-white`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-48 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[150px] animate-glow" />
          <div className="absolute -bottom-56 right-0 h-[40rem] w-[40rem] rounded-full bg-secondary-accent/[0.05] blur-[150px]" />
          <div className="absolute inset-0 noise" />
        </div>
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
