import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { services } from '@/config/services';

const absolute = (path: string) => new URL(path, `${siteConfig.websiteURL}/`).toString();

export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.websiteURL}/#organization`,
    name: siteConfig.agencyName,
    url: siteConfig.websiteURL,
    logo: absolute(siteConfig.logoMarkURL),
    image: absolute('/images/hero-bg2.jpg'),
    description:
      'An independent AI and digital solutions studio building intelligent websites, AI chatbots, automation and custom tools for modern businesses.',
    email: siteConfig.businessEmail,
    telephone: `+${siteConfig.whatsappNumber}`,
    founder: {
      '@type': 'Person',
      name: siteConfig.founderName,
      jobTitle: siteConfig.founderTitle,
    },
    sameAs: [siteConfig.instagramURL, siteConfig.facebookURL, siteConfig.linkedinURL],
    areaServed: 'Worldwide',
    priceRange: '$$',
    knowsAbout: [
      'Website Development',
      'AI Chatbots',
      'AI Automation',
      'Custom AI Tools',
      'Business Process Automation',
      'AI Consulting',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.websiteURL}/#website`,
    url: siteConfig.websiteURL,
    name: siteConfig.agencyName,
    description: siteConfig.agencyTagline,
    publisher: { '@id': `${siteConfig.websiteURL}/#organization` },
  };

  const serviceList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: absolute(service.href),
        provider: { '@id': `${siteConfig.websiteURL}/#organization` },
      },
    })),
  };

  const data = [organization, website, serviceList];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
