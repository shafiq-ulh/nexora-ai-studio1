"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { images } from '@/config/assets';
import { Send, Calendar, Smartphone, Mail, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#080B10]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroAlt}
            alt="Dark abstract technology background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/70 via-[#080B10]/85 to-[#080B10]" />
          <div className="absolute inset-0 grid-lines opacity-50" />
        </div>
        <Container className="relative text-center py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Contact</p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
              Let&apos;s Start A <span className="gold-text">Conversation.</span>
            </h1>
            <p className="text-[#A2A9B3] text-lg max-w-2xl mx-auto">
              Have a project in mind? Tell us about your business and what you want to achieve.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass rounded-sm flex flex-col justify-between group hover-lift card-sheen"
          >
            <div>
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-[#080B10] transition-all">
                <Send size={24} />
              </div>
              <h2 className="text-2xl font-serif mb-4">Submit Project Inquiry</h2>
              <p className="text-[#A2A9B3] mb-8 leading-relaxed">
                Tell us what you need — websites, AI chatbots, automation, custom AI tools, or a
                combination. Our detailed form helps us understand your goals.
              </p>
            </div>
            <Button variant="primary" className="w-full" href="/contact/inquiry">
              Start Your Project
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass rounded-sm flex flex-col justify-between group hover-lift card-sheen"
          >
            <div>
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-[#080B10] transition-all">
                <Calendar size={24} />
              </div>
              <h2 className="text-2xl font-serif mb-4">Book a Consultation</h2>
              <p className="text-[#A2A9B3] mb-8 leading-relaxed">
                Schedule a 1:1 call to discuss your business challenges and explore potential
                solutions.
              </p>
            </div>
            <Button variant="outline" className="w-full" href="/book-consultation">
              Request a Meeting
            </Button>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`mailto:${siteConfig.businessEmail}`}
              className="p-6 glass rounded-sm flex items-center gap-4 hover:border-gold/50 transition-colors group"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-[#080B10] transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-[#A2A9B3] uppercase tracking-[0.2em]">Email</p>
                <p className="text-sm truncate group-hover:text-gold transition-colors">{siteConfig.businessEmail}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-sm flex items-center gap-4 hover:border-gold/50 transition-colors group"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-[#080B10] transition-colors">
                <Smartphone size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-[#A2A9B3] uppercase tracking-[0.2em]">WhatsApp</p>
                <p className="text-sm truncate group-hover:text-gold transition-colors">{siteConfig.whatsappNumber}</p>
              </div>
            </a>
            <a
              href={siteConfig.linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-sm flex items-center gap-4 hover:border-gold/50 transition-colors group"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0">
                <ArrowUpRight size={18} />
              </div>
              <div>
                <p className="text-[10px] text-[#A2A9B3] uppercase tracking-[0.2em]">LinkedIn</p>
                <p className="text-sm">Connect with Nexora</p>
              </div>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
