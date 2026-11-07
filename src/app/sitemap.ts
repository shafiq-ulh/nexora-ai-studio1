import type { MetadataRoute } from 'next';
import { services } from '@/config/services';
import { projectsWithCaseStudy } from '@/config/projects';
import { siteConfig } from '@/config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.websiteURL.replace(/\/$/, '');
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/process`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact/inquiry`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/book-consultation`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}${service.href}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsWithCaseStudy.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
