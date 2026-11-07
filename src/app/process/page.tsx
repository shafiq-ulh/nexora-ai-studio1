import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { images } from '@/config/assets';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, your goals, and the problems that are slowing you down.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Together we define the right solution, the scope, and a realistic plan that fits your priorities.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We shape the experience and structure of the solution with clarity, consistency and purpose.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Development happens in focused iterations, with transparent updates and no unnecessary complexity.',
  },
  {
    number: '05',
    title: 'Integrate',
    description:
      'We connect the solution to your existing tools, data and workflows so it works in the real world.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description:
      'After launch we monitor, refine and support your solution as your business continues to grow.',
  },
];

export const metadata = {
  title: 'Process | Nexora AI Studio',
  description:
    'A clear, practical process from discovery to launch — designed to keep projects focused and transparent.',
};

export default function ProcessPage() {
  return (
    <div className="bg-[#080B10]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.office}
            alt="Dark modern office"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/70 via-[#080B10]/85 to-[#080B10]" />
          <div className="absolute inset-0 grid-lines opacity-50" />
        </div>
        <Container className="relative text-center py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Process</p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
            A Process Built On <br />
            <span className="gold-text">Clarity And Trust.</span>
          </h1>
          <p className="text-[#A2A9B3] text-lg max-w-2xl mx-auto">
            No account managers, no filtered updates. You work directly with the founder at every
            stage of the project.
          </p>
        </Container>
      </section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container className="max-w-4xl">
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative sm:pl-20 p-8 glass rounded-sm hover-lift card-sheen"
                >
                  <span className="hidden sm:flex absolute left-0 top-8 w-14 h-14 items-center justify-center rounded-full bg-[#0A0F16] border border-gold/40 text-gold font-serif text-lg group-hover:bg-gold group-hover:text-[#080B10] transition-all">
                    {step.number}
                  </span>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="sm:hidden text-2xl font-serif text-gold/70">{step.number}</span>
                    <h2 className="text-xl font-medium">{step.title}</h2>
                  </div>
                  <p className="text-[#A2A9B3] text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" href="/book-consultation">
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
