import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { services, getServiceBySlug } from '@/config/services';
import { images } from '@/config/assets';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Nexora AI Studio`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-[#080B10]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.cyber}
            alt="Dark abstract technology background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/70 via-[#080B10]/85 to-[#080B10]" />
          <div className="absolute inset-0 grid-lines opacity-50" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/10 blur-[130px] rounded-full" />
        </div>
        <Container className="relative grid lg:grid-cols-2 gap-16 items-center py-24 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A2A9B3] mb-5">
              Services / <span className="text-gold">{service.title}</span>
            </p>
            <div className="w-14 h-14 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-6">
              <service.icon size={28} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">{service.title}</h1>
            <p className="text-[#A2A9B3] text-lg mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                href="/contact/inquiry"
                className="flex items-center gap-2 shadow-[0_0_50px_-12px_rgba(201,169,110,0.8)]"
              >
                Start Your Project <ArrowRight size={18} />
              </Button>
              <Button variant="outline" href="/book-consultation">
                Book a Consultation
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm border border-white/10">
            <Image
              src={images.circuit}
              alt="Gold circuit board detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-70 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#080B10] via-[#080B10]/30 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-sm p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Focused delivery</p>
              <p className="text-sm text-[#F5F5F2] leading-relaxed">
                Purpose-built, practical and designed to last.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">What we deliver</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Everything you need to <span className="gold-text">move forward.</span>
            </h2>
            <p className="text-[#A2A9B3] leading-relaxed mb-8">
              Every engagement is tailored to your business. We focus on practical outcomes, clear
              communication, and solutions that are built to last.
            </p>
            <Button variant="outline" href="/process">
              See Our Process
            </Button>
          </div>
          <div className="lg:col-span-7">
            <div className="glass rounded-sm p-8">
              <ul className="grid sm:grid-cols-2 gap-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                    <span className="text-[#A2A9B3] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Explore more</p>
              <h2 className="text-3xl md:text-4xl font-serif">Related Services</h2>
            </div>
            <Link href="/services" className="text-gold text-sm hidden sm:flex items-center gap-2">
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group p-6 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm hover-lift card-sheen"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-[#080B10] transition-all">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-[#A2A9B3] text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="text-gold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
