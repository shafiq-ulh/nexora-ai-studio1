import React from 'react';
import Image from 'next/image';
import ProjectInquiryForm from '@/components/forms/ProjectInquiryForm';
import { images } from '@/config/assets';

export const metadata = {
  title: 'Project Inquiry | Nexora AI Studio',
  description: 'Tell us about your project and goals so we can find the right solution.',
};

export default function InquiryPage() {
  return (
    <div className="relative bg-[#080B10]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={images.circuit}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/80 via-[#080B10]/90 to-[#080B10]" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>
      <div className="relative">
        <ProjectInquiryForm />
      </div>
    </div>
  );
}
