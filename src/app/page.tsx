"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { services } from '@/config/services';
import { images } from '@/config/assets';
import { siteConfig } from '@/config/siteConfig';

const stats = [
  { value: '06', label: 'Service Areas' },
  { value: '24h', label: 'Response Time' },
  { value: '1:1', label: 'Founder Access' },
  { value: '100%', label: 'Practical Focus' },
];

const principles = [
  {
    title: 'Founder-led collaboration',
    description: 'You work directly with the person building your solution. No layers, no filtered updates.',
  },
  {
    title: 'AI-first thinking',
    description: 'We look for where intelligent automation can genuinely save time and unlock growth.',
  },
  {
    title: 'Transparent communication',
    description: 'Clear scope, honest timelines and updates you can actually act on.',
  },
  {
    title: 'Built to last',
    description: 'Clean foundations, thoughtful design and systems that grow with your business.',
  },
];

const capabilities = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'OpenAI',
  'Anthropic',
  'RAG Systems',
  'Workflow Automation',
  'API Integration',
  'Cloud Deployment',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteConfig.videoPosterURL}
            aria-hidden="true"
            className="h-full w-full object-cover opacity-55"
          >
            <source src={siteConfig.heroVideoURL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/75 via-[#080B10]/80 to-[#080B10]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B10] via-[#080B10]/40 to-[#080B10]/70" />
          <div className="absolute inset-0 grid-lines opacity-70" />
          <div className="absolute inset-0 noise" />
        </div>

        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-gold/10 blur-[130px] rounded-full animate-glow" />
        <div className="absolute bottom-10 -right-24 w-96 h-96 bg-secondary-accent/10 blur-[130px] rounded-full" />

        <Container className="relative z-10 pt-10 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full glass text-xs text-gold tracking-[0.2em] uppercase mb-8">
              <Sparkles size={13} />
              Independent AI &amp; Digital Solutions Studio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
              Build Smarter.<br />
              <span className="gold-text">Operate Faster.</span><br />
              Grow Beyond Limits.
            </h1>
            <p className="text-[#A2A9B3] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              We design intelligent digital experiences and AI-powered systems that help businesses
              simplify operations, elevate customer experiences, and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/services"
                className="flex items-center gap-2 shadow-[0_0_50px_-12px_rgba(201,169,110,0.8)]"
              >
                Explore Our Services <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/book-consultation">
                Book a Free Consultation
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 max-w-3xl">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#080B10]/70 backdrop-blur-md px-6 py-5">
                  <p className="text-2xl md:text-3xl font-serif text-gold">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A2A9B3] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A2A9B3]">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-scrollcue" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8 bg-[#0A0F16] border-y border-white/10 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex gap-10 items-center text-xs tracking-[0.25em] uppercase text-[#A2A9B3]/60 font-medium"
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Intelligent Automation</span>
              <span className="text-gold">◆</span>
              <span>Digital Experiences</span>
              <span className="text-gold">◆</span>
              <span>Custom AI Solutions</span>
              <span className="text-gold">◆</span>
              <span>Business Innovation</span>
              <span className="text-gold">◆</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* INTRODUCTION */}
      <Section className="relative">
        <Container className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Who we are</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-balance">
              Technology should work for your business.<br />
              <span className="gold-text">Not the other way around.</span>
            </h2>
            <p className="text-[#A2A9B3] text-lg mb-8 leading-relaxed">
              Every business has processes that can be improved, opportunities that can be unlocked,
              and customers who deserve better digital experiences. We bring those possibilities to
              life through thoughtful design, intelligent automation and modern technology.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Premium, responsive web experiences',
                'AI automation that saves real time',
                'Custom tools built around your needs',
                'Direct, founder-led collaboration',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-[#A2A9B3] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" href="/about" className="flex items-center gap-2">
              Discover Nexora <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={images.circuit}
                alt="Close-up of dark circuit board technology"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/20 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 right-10 glass rounded-sm p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] animate-floaty">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">The studio</p>
              <p className="text-sm text-[#F5F5F2] leading-relaxed">
                A focused, independent studio building intelligent systems with intention.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section className="relative bg-[#0A0F16] border-y border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[130px]" />
        <Container className="relative">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">What we do</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Expert Solutions</h2>
            <p className="text-[#A2A9B3]">
              From high-end web design to cutting-edge AI automation, we provide the tools you need
              to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col p-8 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm card-sheen hover-lift"
                >
                  <span className="absolute top-6 right-6 text-xs font-serif text-white/15 group-hover:text-gold/40 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-[#080B10] group-hover:shadow-[0_0_40px_-8px_rgba(201,169,110,0.9)] transition-all">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-[#A2A9B3] text-sm mb-8 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="text-gold text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="primary" href="/services">
              Explore All Services
            </Button>
          </div>
        </Container>
      </Section>

      {/* WHY NEXORA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.cyber}
            alt="Dark cyber security visualization"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10] via-[#080B10]/85 to-[#080B10]" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>
        <Container className="relative py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Why Nexora</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-balance">
                A studio built on <span className="gold-text">substance.</span>
              </h2>
              <p className="text-[#A2A9B3] leading-relaxed max-w-md">
                We believe the best technology is the kind that solves real problems without
                unnecessary complexity. That principle guides every decision we make.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {principles.map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-sm p-6 hover-lift"
                >
                  <span className="block text-gold font-serif text-2xl mb-4">0{i + 1}</span>
                  <h3 className="text-base font-medium mb-2">{principle.title}</h3>
                  <p className="text-[#A2A9B3] text-sm leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <div className="border-y border-white/10 bg-[#0A0F16] py-10 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A2A9B3] shrink-0">
              Powered by modern technology
            </p>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="px-3 py-1.5 border border-white/10 bg-white/[0.03] text-xs text-[#A2A9B3] hover:text-gold hover:border-gold/40 transition-colors"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.office}
            alt="Modern dark office interior"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10] via-[#080B10]/90 to-[#060810]" />
        </div>
        <Container className="relative py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Ready when you are</p>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
              Let&apos;s build the next version of <span className="gold-text">your business.</span>
            </h2>
            <p className="text-[#A2A9B3] text-lg mb-10 max-w-2xl mx-auto">
              Tell us what you want to achieve. We&apos;ll help you find the most practical way to
              get there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact/inquiry"
                className="flex items-center gap-2 shadow-[0_0_50px_-12px_rgba(201,169,110,0.8)]"
              >
                Start Your Project <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/book-consultation">
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
