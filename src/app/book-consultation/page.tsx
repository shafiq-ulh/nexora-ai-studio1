import React from 'react';
import Image from 'next/image';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { images } from '@/config/assets';

export const metadata = {
  title: 'Book a Consultation | Nexora AI Studio',
  description: 'Schedule a 1:1 consultation to discuss your business challenges and goals.',
};

export default function BookConsultationPage() {
  return (
    <div className="relative bg-[#080B10]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={images.cyber}
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
        <ConsultationForm />
      </div>
    </div>
  );
}
