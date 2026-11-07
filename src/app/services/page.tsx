import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { services } from '@/config/services';
import { images } from '@/config/assets';
import { createPageMetadata } from '@/config/metadata';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';

export const metadata = createPageMetadata({
  title: 'Services | Nexora AI Studio',
  description:
    'Web development, AI chatbots, workflow automation, custom AI tools and consulting for modern businesses.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="bg-[#080B10]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.circuit}
            alt="Dark circuit board background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/70 via-[#080B10]/85 to-[#080B10]" />
          <div className="absolute inset-0 grid-lines opacity-50" />
        </div>
        <Container className="relative text-center py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Services</p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
            Solutions Built Around <br />
            <span className="gold-text">Your Business Goals.</span>
          </h1>
          <p className="text-[#A2A9B3] text-lg max-w-2xl mx-auto">
            From high-end web experiences to practical AI automation, every service is designed to
            help you operate smarter and grow with confidence.
          </p>
        </Container>
      </section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group relative flex h-full flex-col p-8 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm card-sheen hover-lift"
              >
                <span className="absolute top-6 right-6 text-xs font-serif text-white/15 group-hover:text-gold/40 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-[#080B10] group-hover:shadow-[0_0_40px_-8px_rgba(201,169,110,0.9)] transition-all">
                  <service.icon size={24} />
                </div>
                <h2 className="text-xl font-medium mb-3">{service.title}</h2>
                <p className="text-[#A2A9B3] text-sm mb-8 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="text-gold text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" href="/contact/inquiry">
              Start Your Project
            </Button>
          </div>
        </Container>
      </Section>

      <Pricing />

      <FAQ />
    </div>
  );
}
