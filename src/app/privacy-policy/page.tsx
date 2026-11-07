import React from 'react';
import { Section, Container } from '@/components/ui/Layout';

export const metadata = {
  title: 'Privacy Policy | Nexora AI Studio',
  description: 'How Nexora AI Studio collects, uses and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#080B10]">
      <Section>
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-[#A2A9B3] mb-10">Last updated: November 2026</p>

          <div className="glass rounded-sm p-8 md:p-10 text-[#A2A9B3] space-y-8 leading-relaxed">
            <div>
              <h2 className="text-xl text-white font-medium mb-3">1. Information Collection</h2>
              <p>
                Nexora AI Studio collects information that you provide directly to us through our
                project inquiry and consultation booking forms. This may include your name, email,
                business details, and project requirements.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-medium mb-3">2. Use of Information</h2>
              <p>
                We use the collected information solely to communicate with you regarding your
                project inquiry or consultation request. We do not sell, rent, or share your
                personal information with third parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-medium mb-3">3. Data Storage</h2>
              <p>
                Form submissions are processed through Netlify Forms. We encourage you to review
                Netlify&apos;s privacy policy to understand how they handle data at the
                infrastructure level.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-medium mb-3">4. Your Rights</h2>
              <p>
                You may request the deletion of your data at any time by contacting us at the email
                provided on our contact page.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-medium mb-3">5. Changes to This Policy</h2>
              <p>
                We reserve the right to update this policy periodically. Any changes will be
                reflected on this page.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
