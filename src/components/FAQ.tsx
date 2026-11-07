import React from 'react';
import { Plus } from 'lucide-react';
import { Section, Container } from '@/components/ui/Layout';
import { faqs } from '@/config/faq';

export function FAQ() {
  return (
    <Section className="bg-[#0A0F16] border-y border-white/10">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Questions, Answered</h2>
          <p className="text-[#A2A9B3]">The things clients usually ask before starting.</p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-base md:text-lg font-medium text-[#F5F5F2] group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <Plus
                  size={18}
                  className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 text-sm text-[#A2A9B3] leading-relaxed pr-10">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
