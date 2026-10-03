const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.ayautomate.com/resources/tech-stack', (res) => {
  let rawHtml = '';
  res.on('data', (chunk) => rawHtml += chunk);
  res.on('end', () => {
    processHtml(rawHtml);
  });
}).on('error', (e) => console.error(e));

function processHtml(rawHtml) {
    const $ = cheerio.load(rawHtml);
    let mainContent = $('main').html();
    if (!mainContent) {
        const $container = $('.relative.flex.min-h-screen.flex-col');
        if ($container.length) {
            $container.children().each((i, el) => {
                const tag = el.tagName.toLowerCase();
                if (tag !== 'nav' && tag !== 'footer' && tag !== 'script' && !$(el).hasClass('toaster')) {
                    mainContent = (mainContent || '') + $.html(el);
                }
            });
        }
    }

    if (!mainContent) {
        console.error('Could not find main content');
        process.exit(1);
    }

    const $ext = cheerio.load(mainContent, null, false);
    $ext('script').remove();

    $ext('[style*="opacity:0"], [style*="opacity: 0"]').each((i, el) => {
        let style = $ext(el).attr('style');
        style = style.replace(/opacity:\s*0;?/g, 'opacity: 1;');
        style = style.replace(/transform:\s*translateY\([^)]+\);?/g, 'transform: translateY(0);');
        $ext(el).attr('style', style);
    });

    $ext('img, video, source').each((i, el) => {
        const $el = $ext(el);
        let src = $el.attr('src');
        if (src) {
            if (src.includes('/_next/image?url=')) {
                const urlMatch = src.match(/url=([^&]+)/);
                if (urlMatch) {
                    try { src = decodeURIComponent(urlMatch[1]); } catch (e) {}
                }
            }
            if (src.startsWith('/')) $el.attr('src', 'https://www.ayautomate.com' + src);
        }
        let poster = $el.attr('poster');
        if (poster && poster.startsWith('/')) $el.attr('poster', 'https://www.ayautomate.com' + poster);
        $el.removeAttr('srcset');
        $el.removeAttr('sizes');
        $el.removeAttr('data-nimg');
    });

    $ext('[style*="background-image"], [style*="background"]').each((i, el) => {
        let style = $ext(el).attr('style');
        style = style.replace(/url\(&#x27;\\?\/([^&]+)&#x27;\)/g, "url('https://www.ayautomate.com/$1')");
        style = style.replace(/url\(&#x27;([^&]+)&#x27;\)/g, (match, p1) => {
            if (p1.startsWith('/')) return `url('https://www.ayautomate.com${p1}')`;
            return match;
        });
        style = style.replace(/url\('([^']+)'\)/g, (match, p1) => {
            if (p1.startsWith('/')) return `url('https://www.ayautomate.com${p1}')`;
            return match;
        });
        style = style.replace(/url\((?![&'])([^)]+)\)/g, (match, p1) => {
            let clean = p1.replace(/["']/g, '');
            if (clean.startsWith('/')) return `url('https://www.ayautomate.com${clean}')`;
            return match;
        });
        $ext(el).attr('style', style);
    });

    let finalHtml = $ext.html();
    finalHtml = finalHtml.replace(/class="/g, 'className="');
    finalHtml = finalHtml.replace(/for="/g, 'htmlFor="');
    finalHtml = finalHtml.replace(/<!--[\s\S]*?-->/g, '');

    finalHtml = finalHtml.replace(/style="([^"]*)"/g, (match, p1) => {
      const styles = p1.split(';').filter(s => s.trim().length > 0);
      const styleObj = {};
      styles.forEach(s => {
        const parts = s.split(':');
        if (parts.length >= 2) {
          let key = parts[0].trim();
          key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          const value = parts.slice(1).join(':').trim();
          styleObj[key] = value.replace(/'/g, "\\'");
        }
      });
      let objStr = Object.entries(styleObj)
          .map(([k, v]) => `'${k}': '${v}'`)
          .join(', ');
      return `style={{ ${objStr} }}`;
    });

    const svgAttrs = {
      'stroke-width': 'strokeWidth',
      'stroke-linecap': 'strokeLinecap',
      'stroke-linejoin': 'strokeLinejoin',
      'fill-rule': 'fillRule',
      'clip-rule': 'clipRule',
      'stroke-miterlimit': 'strokeMiterlimit'
    };
    Object.keys(svgAttrs).forEach(k => {
      finalHtml = finalHtml.replace(new RegExp(k + '=', 'g'), svgAttrs[k] + '=');
    });

    finalHtml = finalHtml.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2/>');

    const ctaRegex = /<section className="border-y border-border bg-primary-purple\/\[0\.03\]">[\s\S]*?<\/section>/;
    const newCta = `<section className="border-t border-border py-24 sm:py-32 text-center">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-[2.5rem] font-bold tracking-tight text-white mb-6">
          Want the full setup?
        </h2>
        <p className="text-base sm:text-[17px] text-muted-foreground max-w-[620px] mx-auto mb-10 leading-[1.6]">
          Includes the agent prompt, the Clay + HubSpot field map, and the n8n flow JSON.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact?topic=tech-stack" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#8082C1] px-6 py-2.5 text-[13px] sm:text-sm font-semibold text-white transition-all hover:bg-[#8082C1]/90">
            Get the kit
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#ffffff1a] bg-[#13131a] px-6 py-2.5 text-[13px] sm:text-sm font-semibold text-white transition-all hover:bg-[#1c1c28]">
            Book a strategy call
          </Link>
        </div>
      </div>
    </section>`;
    finalHtml = finalHtml.replace(ctaRegex, newCta);

    const keepReadingRegex = /<section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16">[\s\S]*?<\/section>/;
    const newKeepReading = `<section className="w-full border-t border-border">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 xl:px-4 py-16 sm:py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8082c1] mb-5">KEEP READING</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link className="group flex items-center justify-between rounded-xl border border-[#ffffff14] bg-[#1a1a24] px-6 py-5 hover:bg-[#1e1e2d] transition-all" href="/resources/ai-automation-playbook">
            <span className="text-[13px] font-bold text-white">The AI Automation Playbook</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white transition-colors" aria-hidden="true" />
          </Link>
          <Link className="group flex items-center justify-between rounded-xl border border-[#ffffff14] bg-[#1a1a24] px-6 py-5 hover:bg-[#1e1e2d] transition-all" href="/resources/customer-support-workflow">
            <span className="text-[13px] font-bold text-white">Customer Support Workflow</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white transition-colors" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>`;
    finalHtml = finalHtml.replace(keepReadingRegex, newKeepReading);

    const component = `import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import { ArrowUpRight, BookOpen, Clock, Users, Zap, Mail, Bot, LineChart, Target, Building2, CheckCircle2, Settings2, FileText, ShieldCheck, Download, Code2, Database } from 'lucide-react';
import Link from 'next/link';

export default function TechStackPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary-purple/30">
      <Navbar />
      <main className="flex-1">
        ${finalHtml}
      </main>
      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
`;

    fs.mkdirSync('src/app/resources/tech-stack', { recursive: true });
    fs.writeFileSync('src/app/resources/tech-stack/page.tsx', component);
    console.log('Successfully extracted tech stack page');
}
