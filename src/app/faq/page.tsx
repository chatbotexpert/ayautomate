'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CallToActionSection from '@/components/CallToActionSection';

const faqSections = [
  {
    category: "Working With AY Automate",
    questions: [
      {
        question: "What makes AY Automate different from other agencies?",
        answer: "We do not just write code. We learn your domain first, then build the AI product around what your team already knows. Most agencies build what you spec. We help you figure out what is worth building, then ship it with the right automation, AI agent, and product architecture."
      },
      {
        question: "How long does it take to launch?",
        answer: "Most AI products and automation systems go from idea to live in 8-12 weeks. We usually start with a focused 2-week discovery and prototype sprint, so you see progress quickly before committing to a larger build."
      },
      {
        question: "I have already built something. Can you improve or rebuild it?",
        answer: "Yes. Many clients come to us with an existing product, internal tool, or automation that needs AI features, better reliability, or a full rebuild. We audit what you have and recommend the fastest path: improve, rebuild, or replace only the parts that are slowing you down."
      },
      {
        question: "Do you offer post-launch support?",
        answer: "Yes. Every client gets post-launch support included. Most teams stay with us on a monthly retainer because AI products need iteration after launch. The first version proves the workflow, then we improve accuracy, reliability, integrations, and adoption."
      },
      {
        question: "Do you work with early-stage startups?",
        answer: "We work best with teams that have real domain expertise, existing customer insight, and a clear problem they want to solve with AI. That includes funded startups, service businesses, SaaS teams, and operators who already understand the workflow they want to improve."
      }
    ]
  },
  {
    category: "AI Workflow Automation",
    questions: [
      {
        question: "What is AI workflow automation?",
        answer: "AI workflow automation uses artificial intelligence to streamline and automate repetitive business processes - from data entry and document processing to customer support and marketing operations. Unlike traditional automation (RPA), AI-powered workflows can handle unstructured data, make decisions, and adapt to new inputs without manual reprogramming."
      },
      {
        question: "What is the difference between RPA and AI automation?",
        answer: "RPA (Robotic Process Automation) follows rigid, rule-based scripts - it clicks buttons and fills forms exactly as programmed. AI automation adds intelligence: it can understand natural language, interpret documents, make decisions based on context, and learn from data. RPA handles structured, repeatable tasks. AI automation handles messy, unstructured, and judgment-based workflows. Most modern implementations use both."
      },
      {
        question: "What ROI can I expect from AI automation?",
        answer: "Most of our clients see a full return on investment within 4-8 months. ROI typically comes from three areas: 1) Reduced operational costs (often 30-50% in automated departments), 2) Increased capacity without adding headcount, and 3) Faster response times leading to better customer retention and sales conversion."
      },
      {
        question: "How long does AI automation implementation take?",
        answer: "Simple workflows can be deployed in 2-4 weeks. Complex, multi-system automations with custom AI models typically take 6-12 weeks. We use an agile approach, delivering working components every sprint so you see value quickly."
      },
      {
        question: "Which businesses benefit most from AI automation?",
        answer: "Information-heavy businesses see the highest ROI. This includes agencies, professional services, e-commerce, real estate, and healthcare. If your team spends more than 20% of their time moving data between systems, reading documents to extract information, or answering repetitive questions, you will benefit significantly from AI automation."
      },
      {
        question: "How much does AI automation consulting cost?",
        answer: "Project costs vary based on complexity. Small, focused automations start around $5,000-$10,000. Comprehensive enterprise workflow transformations typically range from $25,000 to $75,000+. We provide exact scoping and fixed-price proposals after our initial discovery phase."
      },
      {
        question: "n8n vs Dify: which one should I use for automation?",
        answer: "Use n8n when your primary goal is connecting different software systems, moving data, and triggering actions based on events. It excels at complex logic and has hundreds of built-in integrations. Use Dify when you are primarily building AI agents, RAG applications, or LLM-powered tools. Dify provides a much better interface for managing prompts, knowledge bases, and model testing. Often, the best solution uses both: Dify for the AI logic, called by n8n for the workflow orchestration."
      },
      {
        question: "Are you an n8n agency? Do you build custom n8n workflows?",
        answer: "Yes, we are experts in n8n and use it extensively for our clients' automation needs. As a leading n8n agency, we build, deploy, and maintain custom n8n workflows. We can handle complex integrations, custom node development, and self-hosted n8n deployments for enterprise security requirements."
      }
    ]
  },
  {
    category: "AI Staff Augmentation & Dedicated Teams",
    questions: [
      {
        question: "What is AI staff augmentation?",
        answer: "AI staff augmentation is a service where we provide specialized AI engineers, automation experts, and data scientists to work directly alongside your existing team. This allows you to rapidly scale your AI capabilities without the long hiring cycles, training costs, or long-term commitments of full-time hires."
      },
      {
        question: "What is a dedicated AI team model?",
        answer: "A dedicated AI team is a complete, cross-functional unit (typically comprising an AI architect, engineers, and a project manager) assigned exclusively to your company. Unlike staff augmentation where individuals join your team, a dedicated team operates as a cohesive unit managed by us but focused entirely on your strategic roadmap."
      },
      {
        question: "How do I hire AI engineers for my business?",
        answer: "You can hire AI engineers through traditional recruitment (which often takes 3-6 months), or you can use our staff augmentation service to have vetted, experienced AI engineers integrated into your team within 1-2 weeks. We handle the technical vetting, training, and HR overhead."
      },
      {
        question: "What is the difference between staff augmentation and outsourcing?",
        answer: "In staff augmentation, our engineers act as an extension of your team - they attend your standups, use your communication tools, and report to your managers. You retain full control over the project. In traditional outsourcing, you hand off an entire project to an external vendor who manages the execution and delivers the final result."
      },
      {
        question: "How does AI team augmentation work at AY Automate?",
        answer: "1) We analyze your technical needs and team culture. 2) We match you with specific engineers from our pre-vetted pool. 3) You interview them to ensure a good fit. 4) They integrate seamlessly into your daily workflows and tools. 5) We provide ongoing support, training, and replacement guarantees."
      },
      {
        question: "What is a forward deployed engineer (FDE)?",
        answer: "A Forward Deployed Engineer (FDE) is a highly technical engineer who operates at the intersection of product, engineering, and the customer. Originally popularized by Palantir, an FDE embeds directly with the client to understand their complex problems and rapidly build, configure, or customize software solutions to solve them in real-time."
      },
      {
        question: "Can I hire a forward deployed engineer (FDE) through AY Automate?",
        answer: "Yes. Our Forward Deployed Engineers are our most versatile technical operators. When you hire an FDE from AY Automate, you get an engineer who doesn't just wait for Jira tickets - they actively identify workflow bottlenecks, architect solutions, and build the AI integrations needed to solve your specific business challenges."
      }
    ]
  },
  {
    category: "Our Services & Process",
    questions: [
      {
        question: "What services does AY Automate offer?",
        answer: "We offer end-to-end AI workflow automation, custom AI product development, RAG (Retrieval-Augmented Generation) system implementation, and AI staff augmentation. We help companies modernize their operations and build intelligent software."
      },
      {
        question: "What tools and platforms do you work with?",
        answer: "We are platform-agnostic but have deep expertise in OpenAI, Anthropic, n8n, Make, LangChain, Pinecone, Next.js, and Python. We choose the right stack based on your specific security, scalability, and budget requirements."
      },
      {
        question: "Do you work with companies globally?",
        answer: "Yes, we work with clients worldwide. Our team is distributed across multiple time zones, allowing us to provide overlapping working hours for clients in North America, Europe, and the Middle East."
      },
      {
        question: "What does a typical engagement look like?",
        answer: "We start with a discovery phase to map your workflows and identify AI opportunities. We then present a technical architecture and project plan. Once approved, we build in 2-week sprints, providing regular demos. After launch, we offer ongoing maintenance and optimization."
      },
      {
        question: "What is generative AI development?",
        answer: "Generative AI development is the process of building applications that use foundational AI models (like GPT-4 or Claude) to create new content, code, data, or insights. This includes building custom chatbots, automated writing tools, code assistants, and dynamic data synthesis platforms tailored to your specific business data."
      }
    ]
  },
  {
    category: "Pricing & Getting Started",
    questions: [
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer a free 30-minute discovery call where we discuss your business challenges, explore potential AI applications, and determine if we're a good fit to work together."
      },
      {
        question: "What is your pricing model?",
        answer: "We offer fixed-price projects for clear, scoped deliverables (like a specific automation workflow). For ongoing development, staff augmentation, and complex evolving projects, we offer flexible monthly retainers based on team size and commitment level."
      },
      {
        question: "Can I start with a small pilot project?",
        answer: "Absolutely. We encourage starting with a high-impact, low-complexity \"Proof of Concept\" (POC) project. This usually takes 2-4 weeks, proves the value of the technology, and builds trust before committing to a larger transformation."
      },
      {
        question: "What if the automation doesn't deliver expected results?",
        answer: "We tie our success to yours. During the discovery phase, we define clear success metrics. If a solution isn't meeting those metrics, we iterate and refine it. Our phased approach ensures we prove the concept's viability before making large investments."
      }
    ]
  }
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <h3 className="flex">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-1 items-center justify-between py-4 transition-all hover:underline text-left text-foreground font-medium"
        >
          {question}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        className={`overflow-hidden text-sm transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-muted-foreground leading-relaxed pt-1">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 pt-28 pb-16">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-purple mb-4">AY Automate</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about AI workflow automation, staff augmentation, dedicated teams, and working with AY Automate.
            </p>
          </div>

          <div className="space-y-12">
            {faqSections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {section.category}
                </h2>
                <div className="w-full">
                  {section.questions.map((q, qIdx) => (
                    <AccordionItem key={qIdx} question={q.question} answer={q.answer} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-card border border-border p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Still have questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Book a free 30-minute discovery call. We&#39;ll assess your automation opportunities and recommend next steps - no obligation.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://cal.com/walidboulanouar/consultation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all hover:bg-primary-purple/90 bg-primary-purple text-white rounded-none h-12 px-8 font-bold uppercase tracking-widest">
                  Book a Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="mailto:contact@ayautomate.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all hover:bg-muted border border-border bg-transparent text-foreground rounded-none h-12 px-8 font-bold uppercase tracking-widest">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
