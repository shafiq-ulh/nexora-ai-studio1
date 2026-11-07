import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';

const currentYear = new Date().getFullYear();

const Instagram = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z" />
  </svg>
);

const Facebook = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 22v-8h2.7l.4-3H14V9.1c0-.87.24-1.46 1.49-1.46H17V5c-.26-.03-1.15-.1-2.19-.1-2.17 0-3.66 1.32-3.66 3.75V11H8.5v3H11v8z" />
  </svg>
);

export const Footer = () => {
  const socials = [
    { name: 'Instagram', href: siteConfig.instagramURL, icon: Instagram },
    { name: 'LinkedIn', href: siteConfig.linkedinURL, icon: Linkedin },
    { name: 'Facebook', href: siteConfig.facebookURL, icon: Facebook },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#060810] border-t border-white/10">
      <div className="hairline absolute top-0 left-0 right-0" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute -top-24 right-0 text-[16rem] font-serif leading-none text-white/[0.02] select-none">
        N
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="py-16 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Start a conversation</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-balance max-w-xl">
              Let&apos;s build something <span className="gold-text">exceptional.</span>
            </h2>
          </div>
          <Button variant="primary" href="/contact" className="flex items-center gap-2 shrink-0">
            Book a Consultation <ArrowUpRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={siteConfig.logoMarkURL}
                alt={`${siteConfig.agencyName} logo`}
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight">{siteConfig.agencyName}</span>
            </div>
            <p className="text-[#A2A9B3] text-sm mb-8 max-w-xs leading-relaxed">
              {siteConfig.agencyTagline}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#A2A9B3] hover:text-gold hover:border-gold/60 transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-4 text-[#A2A9B3] text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/process" className="hover:text-gold transition-colors">Process</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
              <li><Link href="/industries" className="hover:text-gold transition-colors">Industries</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-4 text-[#A2A9B3] text-sm">
              <li><Link href="/services" className="hover:text-gold transition-colors">All Services</Link></li>
              <li><Link href="/services/website-development" className="hover:text-gold transition-colors">Website Development</Link></li>
              <li><Link href="/services/ai-chatbots" className="hover:text-gold transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-gold transition-colors">AI Automation</Link></li>
              <li><Link href="/services/ai-consulting" className="hover:text-gold transition-colors">AI Consulting</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="flex flex-col gap-4 text-[#A2A9B3] text-sm">
              <li>
                <a href={`mailto:${siteConfig.businessEmail}`} className="hover:text-gold transition-colors flex items-center gap-2">
                  <Mail size={14} className="text-gold" /> {siteConfig.businessEmail}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact/inquiry" className="hover:text-gold transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A2A9B3] text-xs">
          <p>© {currentYear} {siteConfig.agencyName}. All rights reserved.</p>
          <p className="tracking-wide">{siteConfig.agencyTagline}</p>
        </div>
      </div>
    </footer>
  );
};
