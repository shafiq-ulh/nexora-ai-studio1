"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, Container } from '@/components/ui/Layout';
import { testimonials } from '@/config/testimonials';

export function Testimonials({ compact = false }: { compact?: boolean }) {
  return (
    <Section className={compact ? 'border-y border-white/10 bg-[#0A0F16]' : ''}>
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Client feedback</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">What Clients Say</h2>
          <p className="text-[#A2A9B3]">Real outcomes from businesses we&apos;ve worked with.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-8 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm card-sheen hover-lift flex flex-col"
            >
              {testimonial.placeholder ? (
                <span className="absolute top-5 right-5 px-2 py-0.5 border border-white/15 text-[9px] uppercase tracking-widest text-[#A2A9B3]">
                  Sample
                </span>
              ) : null}
              <Quote className="text-gold/60 mb-5 shrink-0" size={24} />
              <blockquote className="text-[#F5F5F2]/90 text-sm leading-relaxed flex-1">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <p className="text-sm font-medium text-white">{testimonial.name}</p>
                <p className="text-xs text-[#A2A9B3] mt-0.5">
                  {testimonial.role} · {testimonial.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
