"use client";

import React from 'react';
import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const MotionLink = motion.create(Link);

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-[#C9A96E] text-[#080B10] hover:bg-[#b89a62] font-medium',
    secondary: 'bg-[#141B24] text-[#F5F5F2] hover:bg-[#1c242e] border border-white/10',
    outline: 'bg-transparent text-[#F5F5F2] border border-[#C9A96E] hover:bg-[#C9A96E]/10'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `inline-flex items-center justify-center rounded-none transition-all duration-300 ease-in-out ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <MotionLink
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
};
