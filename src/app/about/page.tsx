"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Practical innovation over unnecessary complexity.',
    description:
      'The best solution is the one that solves the problem most efficiently, not the one with the most features.',
  },
  {
    title: 'Quality over rushed delivery.',
    description:
      'Digital assets are investments. We prioritise precision and longevity over shortcuts.',
  },
  {
    title: 'Honest communication.',
    description:
      'You work directly with the founder. No account managers, no filtered updates, just transparency.',
  },
  {
    title: 'Solutions that solve actual problems.',
    description:
      "Technology for technology's sake is a waste. Every line of code must serve a business goal.",
  },
];

const skills = {
  'Frontend Development': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'Backend Development': ['Node.js', 'API Design', 'Database Management'],
  'AI Automation': ['Custom GPTs', 'Workflow Automation', 'AI Chatbot Integration'],
  'AI Integration': ['OpenAI API', 'Anthropic API', 'Vector Databases', 'RAG Systems'],
  'Workflow Design': ['Business Process Mapping', 'Efficiency Audits', 'CRM Automation'],
};

export default function AboutPage() {
  return (
    <div className="bg-[#080B10]">
      <Section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[130px] pointer-events-none" />
        <Container className="grid lg:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">About the studio</p>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.08] mb-6 text-balance">
              Technology is powerful. <br />
              <span className="gold-text">Knowing how to use it is what matters.</span>
            </h1>
            <p className="text-[#A2A9B3] text-lg mb-6 leading-relaxed">
              Hello, I&apos;m{' '}
              <span className="text-white font-medium">{siteConfig.founderName}</span>, the
              independent founder behind Nexora AI Studio.
            </p>
            <p className="text-[#A2A9B3] text-lg mb-8 leading-relaxed">{siteConfig.founderBio}</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/contact" className="flex items-center gap-2">
                Get In Touch <ArrowRight size={18} />
              </Button>
              <Button variant="outline" href="/projects">
                View Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={siteConfig.founderPhoto}
                alt={`${siteConfig.founderName}, founder of ${siteConfig.agencyName}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 right-10 glass rounded-sm p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Founder-led</p>
              <p className="text-sm text-[#F5F5F2] leading-relaxed">
                {siteConfig.founderName} · {siteConfig.founderTitle}
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Introduction</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">A short introduction</h2>
            <p className="text-[#A2A9B3]">Get to know the studio and how we work.</p>
          </div>
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0E141C]">
            <video
              src={siteConfig.profileIntroductionVideo}
              poster={siteConfig.videoPosterURL}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">What I Believe In</h2>
            <p className="text-[#A2A9B3]">The principles guiding every project at Nexora.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm card-sheen hover-lift"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                    <p className="text-[#A2A9B3] text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative">
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Skills &amp; Technologies</h2>
            <p className="text-[#A2A9B3]">The technical foundation of the studio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, tech], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 glass rounded-sm hover-lift"
              >
                <h3 className="text-lg font-medium text-gold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-white/[0.03] border border-white/10 text-xs text-[#A2A9B3] hover:text-gold hover:border-gold/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
