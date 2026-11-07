"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080B10]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={siteConfig.logoMarkURL}
            alt={`${siteConfig.agencyName} logo`}
            width={40}
            height={40}
            priority
            className="w-10 h-10 object-contain drop-shadow-[0_0_18px_rgba(201,169,110,0.35)] transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-tight group-hover:text-gold transition-colors">
            {siteConfig.agencyName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-[#A2A9B3] hover:text-[#F5F5F2] transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="primary"
            size="sm"
            href="/contact"
            className="text-xs tracking-wide shadow-[0_0_30px_-12px_rgba(201,169,110,0.9)]"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full glass-strong border-b border-white/10 p-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-[#A2A9B3] hover:text-[#F5F5F2] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
            Let&apos;s Talk
          </Button>
        </motion.div>
      )}
    </header>
  );
};
