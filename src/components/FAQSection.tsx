'use client';
import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background group transition-all duration-200 border-b border-border-strong last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex items-start justify-between text-left transition-colors hover:bg-muted/30"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors pr-4 flex-1 ${isOpen ? 'text-primary-purple' : 'text-foreground group-hover:text-primary-purple'}`}>
          {question}
        </span>
        <span className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary-purple transition-colors">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 md:p-8 pt-0 text-base text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of processes can you automate?",
      answer: "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic. Examples include lead qualification, invoice processing, customer onboarding, and data synchronization between systems. We've worked with government agencies (Saudi Arabia, Morocco) and private enterprises across 15+ industries to automate complex processes with enterprise-grade security."
    },
    {
      question: "Do I need technical knowledge to use your service?",
      answer: "No technical knowledge is required. We handle the full implementation from discovery to deployment. You'll simply communicate your business goals and workflows, and our team will build, test, and maintain the automation for you. We also offer training sessions so your team can understand how the systems work."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Yes. We integrate with virtually any tool that has an API, including Salesforce, HubSpot, Notion, Slack, Microsoft Teams, Google Workspace, Airtable, and hundreds more. We use platforms like n8n and Make.com to build connections between your existing stack without requiring you to replace anything."
    },
    {
      question: "How long does implementation take?",
      answer: "Most automation projects are delivered within 2–4 weeks. Complex enterprise deployments with custom AI models or strict security requirements may take 6–8 weeks. We always begin with a scoped roadmap during the free consultation so you know what to expect before any work begins."
    },
    {
      question: "Can you self-host n8n or other automation platforms for us?",
      answer: "Yes. We offer full self-hosted deployments of n8n, Flowise, and other open-source automation platforms on your own cloud infrastructure (AWS, GCP, Azure, DigitalOcean). This keeps your data fully within your environment and eliminates any dependency on third-party SaaS platforms."
    },
    {
      question: "How do you build AI agents without using external ML models?",
      answer: "We primarily use API-based LLMs (OpenAI, Anthropic, Gemini) configured with zero-data-retention agreements. For clients with strict data sovereignty requirements, we can deploy open-source models (Llama, Mistral) on your private infrastructure so no data ever leaves your systems."
    },
    {
      question: "Is your AI secure and compliant?",
      answer: "Yes. Security is built into every project from the start. We use enterprise-grade encryption, role-based access controls, and audit logging. We can work within your existing compliance frameworks (GDPR, SOC 2, HIPAA) and have experience deploying for regulated industries including healthcare, finance, and government."
    }
  ];

  return (
    <section className="bg-background py-24 sm:py-32 w-full overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">

        <div className="text-center mb-16 flex flex-col items-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
              </span>
              <span className="text-xs font-medium text-primary-purple uppercase tracking-widest">
                FAQ's
              </span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium mb-6 tracking-tight text-foreground">
            Get Your Questions <span className="text-primary-purple italic">Answered</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            Get answers to common questions about our automation process, pricing, and results.
          </p>
        </div>

        <div className="w-full">
          <div className="border border-border-strong overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-4 bg-card border border-border-strong p-8 hover:border-primary-purple/50 transition-all duration-300">
            <h3 className="text-foreground text-xl font-bold tracking-tight mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm">Feel free to get in touch with us today!</p>
            <a
              href="mailto:contact@ayautomate.com"
              className="inline-flex items-center gap-2 bg-background border border-border-strong text-foreground px-6 py-3 text-sm font-semibold hover:border-primary-purple hover:bg-muted transition-all duration-300"
            >
              Ask A Question
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
