import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { getProjectBySlug, projectsWithCaseStudy } from '@/config/projects';

export function generateStaticParams() {
  return projectsWithCaseStudy.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Nexora AI Studio`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Nexora AI Studio`,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const study = project.caseStudy;
  const hasPlaceholder = study.result.includes('[PLACEHOLDER]');
  const related = projectsWithCaseStudy.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <div className="bg-[#080B10]">
      <Section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[130px] pointer-events-none" />
        <Container className="relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A2A9B3] hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                {project.category} · {study.year}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">{project.title}</h1>
              <p className="text-[#A2A9B3] text-lg leading-relaxed mb-8">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.href ? (
                  <Button variant="primary" href={project.href} className="flex items-center gap-2">
                    View Live Site <ArrowUpRight size={16} />
                  </Button>
                ) : null}
                <Button variant="outline" href="/contact/inquiry">
                  Start a Similar Project
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            {[
              { label: 'The challenge', body: study.challenge },
              { label: 'The solution', body: study.solution },
              { label: 'The result', body: study.result },
            ].map((block) => (
              <div key={block.label}>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{block.label}</p>
                <p className="text-[#A2A9B3] text-lg leading-relaxed">{block.body}</p>
              </div>
            ))}
            {hasPlaceholder ? (
              <p className="text-xs text-gold/80 border border-gold/30 bg-gold/5 px-4 py-3">
                Placeholder content — replace the result and metrics in
                <span className="text-white"> src/config/projects.ts</span>.
              </p>
            ) : null}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="glass rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Services</p>
              <ul className="space-y-3">
                {study.services.map((service) => (
                  <li key={service} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                    <span className="text-sm text-[#A2A9B3]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Highlights</p>
              <ul className="space-y-3">
                {study.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 bg-gold shrink-0" />
                    <span className="text-sm text-[#A2A9B3]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section>
          <Container>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">More work</p>
              <h2 className="text-3xl md:text-4xl font-serif">Explore Other Case Studies</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group p-6 bg-[#0E141C]/80 border border-white/10 hover:border-gold/60 rounded-sm hover-lift card-sheen"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-3">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-[#A2A9B3] text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="text-gold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read case study <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </div>
  );
}
