"use client";

import React from 'react';
  import { motion } from 'framer-motion';
  import { siteConfig } from '@/config/siteConfig';

export const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hello Nexora AI Studio, I'm interested in discussing a digital or AI solution for my business."
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      <span className="absolute right-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap font-medium">
        Chat with us
      </span>
    </motion.a>
  );
};
