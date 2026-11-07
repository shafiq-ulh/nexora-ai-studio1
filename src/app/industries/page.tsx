import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { images } from '@/config/assets';

const industries = [
  {
    name: 'Restaurants & Cafes',
    description: 'Reservation flows, online menus, ordering automation and customer engagement.',
    image: images.restaurant,
  },
  {
    name: 'Hotels & Hospitality',
    description: 'Guest enquiry handling, booking support and streamlined front-desk operations.',
    image: images.hotel,
  },
  {
    name: 'E-commerce',
    description: 'Storefront experiences, order automation and AI-assisted customer support.',
    image: images.ecommerce,
  },
  {
    name: 'Real Estate',
    description: 'Lead capture, property showcase websites and automated follow-up systems.',
    image: images.realestate,
  },
  {
    name: 'Healthcare',
    description: 'Appointment requests, patient communications and internal workflow automation.',
    image: images.healthcare,
  },
  {
    name: 'Education',
    description: 'Enrolment enquiries, course information assistants and administrative automation.',
    image: images.education,
  },
  {
    name: 'Retail Stores',
    description: 'Digital catalogues, local visibility and customer support automation.',
    image: images.retail,
  },
  {
    name: 'Agencies & Startups',
    description: 'Product websites, custom tooling and AI features delivered efficiently.',
    image: images.agency,
  },
  {
    name: 'Personal Brands',
    description: 'Portfolio websites, content workflows and audience engagement systems.',
    image: images.team,
  },
];

export const metadata = {
  title: 'Industries | Nexora AI Studio',
  description:
    'Practical digital and AI solutions for restaurants, hotels, e-commerce, real estate, healthcare, education and more.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#080B10]">
      <Section className="text-center">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Industries</p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
            Technology That Fits <br />
            <span className="gold-text">Your Industry.</span>
          </h1>
          <p className="text-[#A2A9B3] text-lg max-w-2xl mx-auto">
            We adapt proven digital and AI solutions to the realities of your sector, so the
            technology feels natural to your customers and your team.
          </p>
        </Container>
      </Section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-gold/60 transition-colors"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E141C] via-[#0E141C]/60 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
                <div className="relative p-6 bg-[#0E141C]/90 -mt-10">
                  <div className="w-10 h-1 bg-gold mb-5 group-hover:w-16 transition-all" />
                  <h2 className="text-xl font-medium mb-2">{industry.name}</h2>
                  <p className="text-[#A2A9B3] text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" href="/contact">
              Discuss Your Industry
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
