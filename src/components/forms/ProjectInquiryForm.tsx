"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, useWatch, type Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Layout';
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';

const PRIMARY_SERVICE_OPTIONS = [
  'Website Development',
  'Website Redesign',
  'AI Chatbot Development',
  'WhatsApp AI Assistant',
  'AI Workflow Automation',
  'Business Process Automation',
  'Custom AI Tool Development',
  'AI Integration & Consulting',
  'Multiple Services',
  'Not Sure Yet',
] as const;

const SERVICE_OPTIONS = [
  'Professional Website Development',
  'Website Redesign',
  'AI Chatbot Development',
  'WhatsApp AI Assistant',
  'Customer Support Automation',
  'Lead Generation Automation',
  'Business Workflow Automation',
  'Custom AI Tool Development',
  'AI Integration',
  'API Integration',
  'E-commerce Automation',
  'Other',
] as const;

const formSchema = z.object({
  // Step 1: Client Info
  fullName: z.string().min(2, 'Full name is required'),
  businessName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().optional(),
  country: z.string().optional(),
  contactMethod: z.enum(['Email', 'WhatsApp', 'Phone Call']),

  // Step 2: Business Info
  businessType: z.enum(['Restaurant', 'Cafe', 'Hotel', 'E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Retail Store', 'Agency', 'Startup', 'Personal Brand', 'Other']),
  primaryService: z.enum(PRIMARY_SERVICE_OPTIONS, { error: 'Please select the service you need' }),
  businessWebsiteStatus: z.enum(['None', 'Existing', 'Redesign', 'New']),
  businessDescription: z.string().min(10, 'Please provide a brief description'),

  // Step 3: Required Services
  services: z.array(z.string()).min(1, 'Select at least one service'),
  otherService: z.string().optional(),

  // Step 4: Project Requirements
  websiteType: z.string().optional(),
  chatbotType: z.string().optional(),
  automationType: z.string().optional(),
  customToolType: z.string().optional(),
  projectDetails: z.string().min(10, 'Please provide more details about your requirements'),
  existingTools: z.string().optional(),
  requiredIntegrations: z.string().optional(),
  referenceWebsites: z.string().optional(),

  // Step 5: Budget and Timeline
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),

  // Step 6: Legal
  privacyAccepted: z.literal(true, {
    error: 'You must accept the privacy policy',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: 'Client Information' },
  { id: 2, title: 'Business Details' },
  { id: 3, title: 'Required Services' },
  { id: 4, title: 'Project Requirements' },
  { id: 5, title: 'Budget & Timeline' },
  { id: 6, title: 'Final Review' },
];

export default function ProjectInquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      contactMethod: 'Email',
    },
  });

  const selectedServices = useWatch({ control, name: 'services' }) || [];
  const formData = useWatch({ control });

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep) as Path<FormValues>[];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep((s) => Math.min(s + 1, 6));
  };

  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('form-name', 'project-inquiry');
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => body.append(`${key}[]`, String(item)));
        } else if (value !== undefined && value !== null) {
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
      alert('Something went wrong while submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1: return ['fullName', 'email', 'contactMethod'];
      case 2: return ['businessType', 'primaryService', 'businessWebsiteStatus', 'businessDescription'];
      case 3: return ['services'];
      case 4: return ['projectDetails'];
      case 5: return ['budget', 'timeline'];
      case 6: return ['privacyAccepted'];
      default: return [];
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
              Thank you for reaching out to Nexora AI Studio. We have received your project inquiry and will review it carefully. Expect a response within 24-48 hours.
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
      <Container className="max-w-4xl">
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${currentStep >= step.id ? 'bg-gold text-[#080B10]' : 'bg-white/10 text-[#A2A9B3]'}`}>
                  {currentStep > step.id ? <CheckCircle2 size={14} /> : step.id}
                </div>
                <span className="hidden md:block text-[10px] uppercase tracking-widest text-[#A2A9B3]">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-sm border border-white/10 p-8 md:p-12">
          <input type="hidden" name="form-name" value="project-inquiry" />
          <input type="text" name="bot-field" style={{ display: 'none' }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Client Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Full Name *</label>
                      <input {...register('fullName')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                      {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Business Name</label>
                      <input {...register('businessName')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="Company Inc." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Email Address *</label>
                      <input {...register('email')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">WhatsApp Number</label>
                      <input {...register('whatsapp')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="+123456789" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Preferred Contact Method *</label>
                    <div className="flex gap-4">
                      {['Email', 'WhatsApp', 'Phone Call'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer p-3 border border-white/10 bg-[#080B10] hover:border-gold transition-colors">
                          <input type="radio" {...register('contactMethod')} value={method} className="accent-gold" />
                          <span className="text-sm">{method}</span>
                        </label>
                      ))}
                    </div>
                    {errors.contactMethod && <p className="text-red-400 text-xs">{errors.contactMethod.message}</p>}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Business Details</h2>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Business Type *</label>
                    <select {...register('businessType')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors appearance-none">
                      <option value="">Select Type</option>
                      {['Restaurant', 'Cafe', 'Hotel', 'E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Retail Store', 'Agency', 'Startup', 'Personal Brand', 'Other'].map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="text-red-400 text-xs">{errors.businessType.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">What Can We Help You With? *</label>
                    <select {...register('primaryService')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors appearance-none">
                      <option value="">Select Service</option>
                      {PRIMARY_SERVICE_OPTIONS.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.primaryService && <p className="text-red-400 text-xs">{errors.primaryService.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Website Status *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['None', 'Existing', 'Redesign', 'New'].map((status) => (
                        <label key={status} className="flex items-center gap-2 cursor-pointer p-3 border border-white/10 bg-[#080B10] hover:border-gold transition-colors">
                          <input type="radio" {...register('businessWebsiteStatus')} value={status} className="accent-gold" />
                          <span className="text-sm">{status === 'None' ? "I don't have a website" : status}</span>
                        </label>
                      ))}
                    </div>
                    {errors.businessWebsiteStatus && <p className="text-red-400 text-xs">{errors.businessWebsiteStatus.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Business Description *</label>
                    <textarea {...register('businessDescription')} rows={4} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="Tell us about your business..."></textarea>
                    {errors.businessDescription && <p className="text-red-400 text-xs">{errors.businessDescription.message}</p>}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Required Services</h2>
                  <p className="text-[#A2A9B3] text-sm mb-4">Select all that apply:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {SERVICE_OPTIONS.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer p-4 border border-white/10 bg-[#080B10] hover:border-gold transition-all group">
                        <input
                          type="checkbox"
                          {...register('services')}
                          value={service}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="text-sm group-hover:text-white transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                  {selectedServices.includes('Other') && (
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Please specify other service</label>
                      <input {...register('otherService')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" />
                    </div>
                  )}
                  {errors.services && <p className="text-red-400 text-xs">{errors.services.message}</p>}
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Project Requirements</h2>

                  {(selectedServices.includes('Professional Website Development') || selectedServices.includes('Website Redesign')) && (
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Website Type</label>
                      <select {...register('websiteType')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors">
                        <option value="">Select Website Type</option>
                        <option value="Business">Business Website</option>
                        <option value="Portfolio">Portfolio Website</option>
                        <option value="Ecommerce">E-commerce Website</option>
                        <option value="Landing">Landing Page</option>
                        <option value="Blog">Blog / Content Website</option>
                        <option value="WebApp">Web Application</option>
                      </select>
                    </div>
                  )}

                  {(selectedServices.includes('AI Chatbot Development') || selectedServices.includes('WhatsApp AI Assistant')) && (
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Chatbot Focus</label>
                      <select {...register('chatbotType')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors">
                        <option value="">Select Focus</option>
                        <option value="Website">Website Chatbot</option>
                        <option value="WhatsApp">WhatsApp Chatbot</option>
                        <option value="Support">Customer Support</option>
                        <option value="LeadGen">Lead Qualification</option>
                        <option value="Sales">Sales Assistant</option>
                        <option value="Booking">Appointment Booking</option>
                        <option value="Internal">Internal Team Assistant</option>
                      </select>
                    </div>
                  )}

                  {selectedServices.some((service) =>
                    ['AI Workflow Automation', 'Business Workflow Automation', 'Customer Support Automation', 'Lead Generation Automation', 'E-commerce Automation'].includes(service)
                  ) && (
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Automation Type</label>
                      <select {...register('automationType')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors">
                        <option value="">Select Automation Type</option>
                        <option value="Workflow">Workflow Automation</option>
                        <option value="LeadFollowUp">Lead Capture &amp; Follow-up</option>
                        <option value="Support">Customer Support Automation</option>
                        <option value="DataProcessing">Document &amp; Data Processing</option>
                        <option value="Reporting">Automated Reporting</option>
                        <option value="Notifications">Alerts &amp; Notifications</option>
                        <option value="Ecommerce">E-commerce Operations</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}

                  {(selectedServices.includes('Custom AI Tool Development') || selectedServices.includes('AI Integration')) && (
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Custom Tool Type</label>
                      <select {...register('customToolType')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors">
                        <option value="">Select Tool Type</option>
                        <option value="InternalAssistant">Internal AI Assistant</option>
                        <option value="Dashboard">Custom Dashboard</option>
                        <option value="RAG">Knowledge Base / RAG System</option>
                        <option value="ContentPipeline">Content Generation Pipeline</option>
                        <option value="DataPipeline">Data Processing Pipeline</option>
                        <option value="API">API / AI Integration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Detailed Project Description *</label>
                    <textarea {...register('projectDetails')} rows={4} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="What are your goals? What should the system actually do?"></textarea>
                    {errors.projectDetails && <p className="text-red-400 text-xs">{errors.projectDetails.message}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Existing Tools/Software</label>
                      <input {...register('existingTools')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="e.g. Shopify, HubSpot" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#A2A9B3]">Required Integrations</label>
                      <input {...register('requiredIntegrations')} className="w-full bg-[#080B10] border border-white/10 p-3 text-white focus:border-gold outline-none transition-colors" placeholder="e.g. Stripe, Google Calendar" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Budget & Timeline</h2>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Estimated Budget *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Under $100', '$100–$300', '$300–$500', '$500–$1,000', '$1,000–$3,000', '$3,000+', 'Not Sure Yet'].map((range) => (
                        <label key={range} className="flex items-center gap-2 cursor-pointer p-3 border border-white/10 bg-[#080B10] hover:border-gold transition-colors">
                          <input type="radio" {...register('budget')} value={range} className="accent-gold" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                    {errors.budget && <p className="text-red-400 text-xs">{errors.budget.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#A2A9B3]">Project Timeline *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Immediately', 'Within 1–2 Weeks', 'Within One Month', 'Within 2–3 Months', 'Flexible'].map((time) => (
                        <label key={time} className="flex items-center gap-2 cursor-pointer p-3 border border-white/10 bg-[#080B10] hover:border-gold transition-colors">
                          <input type="radio" {...register('timeline')} value={time} className="accent-gold" />
                          <span className="text-sm">{time}</span>
                        </label>
                      ))}
                    </div>
                    {errors.timeline && <p className="text-red-400 text-xs">{errors.timeline.message}</p>}
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif mb-6">Final Review</h2>
                  <div className="bg-[#080B10] p-6 border border-white/10 space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[#A2A9B3] uppercase text-[10px]">Full Name</p>
                        <p className="text-white">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-[#A2A9B3] uppercase text-[10px]">Email</p>
                        <p className="text-white">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-[#A2A9B3] uppercase text-[10px]">Business</p>
                        <p className="text-white">{formData.businessName || 'Not provided'}</p>
                      </div>
                      <div>
                        <p className="text-[#A2A9B3] uppercase text-[10px]">Budget</p>
                        <p className="text-white">{formData.budget}</p>
                      </div>
                      <div>
                        <p className="text-[#A2A9B3] uppercase text-[10px]">Primary Service</p>
                        <p className="text-white">{formData.primaryService || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[#A2A9B3] uppercase text-[10px] mb-2">Requested Services</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map(s => (
                          <span key={s} className="px-2 py-1 bg-gold/10 text-gold text-xs border border-gold/20">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[#A2A9B3] uppercase text-[10px] mb-2">Project Notes</p>
                      <p className="text-white italic line-clamp-3">&quot;{formData.projectDetails}&quot;</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                    <input {...register('privacyAccepted')} type="checkbox" className="mt-1 w-4 h-4 accent-gold" />
                    <p className="text-xs text-[#A2A9B3]">
                      I agree to the <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>. I understand that my information will be used solely for the purpose of discussing my project with Nexora AI Studio.
                    </p>
                  </div>
                  {errors.privacyAccepted && <p className="text-red-400 text-xs">{errors.privacyAccepted.message}</p>}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
            <Button
              variant="secondary"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={18} /> Previous
            </Button>

            {currentStep < 6 ? (
              <Button variant="primary" onClick={nextStep} className="flex items-center gap-2">
                Next Step <ChevronRight size={18} />
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                className="flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : 'Submit Project Inquiry'}
              </Button>
            )}
          </div>
        </form>
      </Container>
    </Section>
  );
}
