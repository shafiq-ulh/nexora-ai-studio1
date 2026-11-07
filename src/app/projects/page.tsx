import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { liveProjects, comingSoonProjects, type Project } from '@/config/projects';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: 'Projects | Nexora AI Studio',
  description:
    'Real websites and AI solutions built by Nexora AI Studio for businesses, plus projects coming soon.',
  path: '/projects',
});

function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === 'live';

  return (
    <div className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-gold/60 transition-colors card-sheen">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-45 transition-all duration-700 group-hover:opacity-70 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E141C] via-[#0E141C]/50 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        <span className="absolute top-5 left-5 inline-block px-3 py-1 bg-[#080B10]/70 backdrop-blur border border-gold/30 text-gold text-[10px] uppercase tracking-widest">
          {project.category}
        </span>
        <span
          className={`absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 bg-[#080B10]/70 backdrop-blur border text-[10px] uppercase tracking-widest ${
            isLive
              ? 'border-emerald-400/40 text-emerald-400'
              : 'border-white/20 text-[#A2A9B3]'
          }`}
        >
          {isLive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
          {isLive ? 'Live' : 'Coming Soon'}
        </span>
      </div>
      <div className="relative p-8 bg-[#0E141C]/90 -mt-12">
        <h2 className="text-xl font-medium mb-3">{project.title}</h2>
        <p className="text-[#A2A9B3] text-sm leading-relaxed mb-6">{project.description}</p>
        {isLive && project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest hover:underline"
          >
            View Live Site <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="text-[#A2A9B3] text-xs uppercase tracking-widest">
            Case study coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-[#080B10]">
      <Section className="text-center">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Selected Work</p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 text-balance">
            Work That Solves <br />
            <span className="gold-text">Real Problems.</span>
          </h1>
          <p className="text-[#A2A9B3] text-lg max-w-2xl mx-auto">
            Real websites designed and built for restaurants and local businesses. More AI and
            automation projects are on the way.
          </p>
        </Container>
      </Section>

      <Section className="bg-[#0A0F16] border-y border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-20 mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Coming Soon</p>
            <h2 className="text-2xl md:text-3xl font-serif">More Work In Progress</h2>
            <p className="text-[#A2A9B3] text-sm max-w-xl mx-auto mt-3">
              AI chatbots, automation systems and custom AI tools currently in development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoonProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" href="/contact/inquiry">
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
