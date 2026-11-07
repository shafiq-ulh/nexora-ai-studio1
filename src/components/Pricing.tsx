import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { pricingPackages } from '@/config/pricing';

export function Pricing() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Clear Starting Points</h2>
          <p className="text-[#A2A9B3]">
            Indicative starting prices. Every project is quoted after a short discovery so you only
            pay for what you actually need.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 rounded-sm border card-sheen ${
                pkg.highlighted
                  ? 'bg-[#0E141C] border-gold/60 shadow-[0_30px_80px_-40px_rgba(201,169,110,0.6)]'
                  : 'bg-[#0E141C]/80 border-white/10'
              }`}
            >
              {pkg.highlighted ? (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-gold text-[#080B10] text-[10px] uppercase tracking-widest font-semibold">
                  Popular
                </span>
              ) : null}
              <h3 className="text-lg font-medium mb-2">{pkg.name}</h3>
              <p className="text-3xl font-serif text-gold mb-1">{pkg.priceFrom}</p>
              <p className="text-[#A2A9B3] text-sm leading-relaxed mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                    <span className="text-sm text-[#A2A9B3] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.highlighted ? 'primary' : 'outline'}
                href="/contact/inquiry"
                className="w-full flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
