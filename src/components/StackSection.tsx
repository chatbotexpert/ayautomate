const stackData = {
  header: {
    badge: "Inside the stack · 15 tools, zero glue code",
    title: "Every tool your engineer arrives with, and",
    titleAccent: "who pays for what",
    description: "No surprise SaaS bills. Half the stack is open source, the other half plugs into accounts you already have. The agent runtime is on us."
  },
  categories: [
    {
      name: "Agent runtime",
      emoji: "🎁",
      badge: "Included with every retainer",
      tools: [
        { name: "Claude Code", icon: "/clients/claude.png", desc: "The brain. Subagents, hooks, MCP." },
        { name: "Anthropic", icon: "/clients/anthropic.png", desc: "Managed agents in production." },
        { name: "Cursor", icon: "/clients/cursor.png", desc: "IDE pair-programming with agents." }
      ]
    },
    {
      name: "Orchestration",
      emoji: "🔓",
      badge: "Open source · free forever",
      tools: [
        { name: "n8n", icon: "/clients/n8n.png", desc: "Cron, webhooks, integration glue." },
        { name: "MCP", icon: "/clients/mcp.svg", desc: "One protocol, every tool you own." },
        { name: "Zapier", icon: "/clients/zapier.png", desc: "Quick triggers when n8n is overkill." }
      ]
    },
    {
      name: "Compute & infra",
      emoji: "💰",
      badge: "Pay per use · your account",
      tools: [
        { name: "E2B", icon: "/clients/e2b.png", desc: "Sandboxed micro-VMs per agent call." },
        { name: "Supabase", icon: "/clients/supabase.png", desc: "Postgres + auth in one." },
        { name: "Vercel", icon: "/clients/vercel.png", desc: "Edge deploys in seconds." }
      ]
    },
    {
      name: "Outbound & CRM",
      emoji: "🔌",
      badge: "Plug into your accounts",
      tools: [
        { name: "HubSpot", icon: "/clients/hubspot.png", desc: "CRM hygiene, deal pipelines." },
        { name: "Clay", icon: "/clients/clay.png", desc: "Lead enrichment at scale." },
        { name: "Apollo", icon: "/clients/apollo.png", desc: "Outbound contact discovery." }
      ]
    },
    {
      name: "Where work happens",
      emoji: "🤝",
      badge: "Your team's already there",
      tools: [
        { name: "Slack", icon: "/clients/slack.png", desc: "Alerts, approvals, daily standups." },
        { name: "Linear", icon: "/clients/linear.png", desc: "Tickets, sprints, roadmap." },
        { name: "GitHub", icon: "/clients/github.png", desc: "Every PR shipped is yours." }
      ]
    }
  ]
};

export default function StackSection() {
  return (
    <section className="mb-20 pt-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold mb-5">
              {stackData.header.badge}
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
              {stackData.header.title}{" "}
              <span className="italic text-primary-purple">{stackData.header.titleAccent}</span>.
            </h3>
          </div>
          <div className="lg:col-span-5 flex items-end pb-2">
            <p className="text-base md:text-lg text-text-muted leading-snug">
              {stackData.header.description}
            </p>
          </div>
        </div>

        {/* Categories */}
        <ul className="divide-y divide-white/5 border-y border-white/5">
          {stackData.categories.map((category, catIdx) => (
            <li key={catIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-12">
              {/* Left side: Category info */}
              <div className="lg:col-span-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a89db0] font-bold mb-3">
                  Category
                </p>
                <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em] mb-4">
                  {category.name}
                </h4>
                <div className="inline-flex items-center gap-2 mt-4 bg-primary-purple/10 border border-primary-purple/25 px-2.5 py-1 rounded-sm">
                  <span className="text-sm">{category.emoji}</span>
                  <span className="text-[11px] font-semibold text-primary-purple">{category.badge}</span>
                </div>
              </div>

              {/* Right side: Tool cards */}
              <ul className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {category.tools.map((tool, toolIdx) => (
                  <li
                    key={toolIdx}
                    className="group relative bg-card border border-border-strong p-5 transition-colors hover:border-primary-purple/40 rounded-none"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-7 h-7 shrink-0 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={tool.name}
                          loading="lazy"
                          decoding="async"
                          className={`object-contain max-w-full max-h-full ${tool.name === 'GitHub' ? 'dark:invert brightness-110' : ''}`}
                          src={tool.icon}
                        />
                      </div>
                      <span className="text-base font-bold text-foreground leading-tight">
                        {tool.name}
                      </span>
                    </div>
                    <p className="text-[13px] text-text-muted leading-snug">
                      {tool.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
