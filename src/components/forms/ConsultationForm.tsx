"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { CheckCircle2, Loader2 } from 'lucide-react';

const consultationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  businessName: z.string().optional(),
  country: z.string().optional(),
  whatsapp: z.string().optional(),
  topic: z.enum(['Website Development', 'AI Chatbots', 'AI Automation', 'Custom AI Tools', 'General Business Consultation']),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  timezone: z.string().min(1, 'Please select your timezone'),
  notes: z.string().optional(),
});

type ConsultationValues = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationValues>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationValues) => {
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('form-name', 'consultation-booking');
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          body.append(key, String(value));
        }
      });

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section>
        <Container className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto p-12 glass rounded-sm border border-gold/50"
          >
            <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-serif mb-4">Request Received</h2>
            <p className="text-[#A2A9B3] mb-8">
              Your consultation request has been received. We&apos;ll review your preferred schedule and contact you to confirm the meeting.
            </p>
            <Button variant="primary" href="/" className="w-full">
              Return Home
            </Button>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Book a Consultation</h1>
          <p className="text-[#A2A9B3]">Let&apos;s find the right solution for your business.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-sm border border-white/10 p-8 md:p-12 grid md:grid-cols-2 gap-6">
          <input type="hidden" name="form-name" value="consultation-booking" />
          <input type="text" name="bot-field" style={{ display: 'none' }} />
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">Full Name *</label>
            <input {...register('fullName')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
            {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">Email Address *</label>
            <input {...register('email')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
            {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">Business Name</label>
            <input {...register('businessName')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">WhatsApp Number</label>
            <input {...register('whatsapp')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-[#A2A9B3]">Consultation Topic *</label>
            <select {...register('topic')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors appearance-none">
              <option value="">Select Topic</option>
              <option value="Website Development">Website Development</option>
              <option value="AI Chatbots">AI Chatbots</option>
              <option value="AI Automation">AI Automation</option>
              <option value="Custom AI Tools">Custom AI Tools</option>
              <option value="General Business Consultation">General Business Consultation</option>
            </select>
            {errors.topic && <p className="text-red-400 text-xs">{errors.topic.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">Preferred Date *</label>
            <input type="date" {...register('preferredDate')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
            {errors.preferredDate && <p className="text-red-400 text-xs">{errors.preferredDate.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[#A2A9B3]">Preferred Time *</label>
            <input type="time" {...register('preferredTime')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
            {errors.preferredTime && <p className="text-red-400 text-xs">{errors.preferredTime.message}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-[#A2A9B3]">Time Zone *</label>
            <input {...register('timezone')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="e.g. GMT+5, EST" />
            {errors.timezone && <p className="text-red-400 text-xs">{errors.timezone.message}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-[#A2A9B3]">Additional Notes</label>
            <textarea {...register('notes')} rows={4} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="Anything else we should know?"></textarea>
          </div>
          <div className="md:col-span-2 text-center pt-6">
            <Button
              variant="primary"
              type="submit"
              className="w-full md:w-auto px-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : 'Request Consultation'}
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
