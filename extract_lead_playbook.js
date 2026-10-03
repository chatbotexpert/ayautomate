const fs = require('fs');
const cheerio = require('cheerio');

const rawHtml = fs.readFileSync('C:\\Users\\Hassaan\\Desktop\\Ayautomate\\ayautomate-web\\lead_playbook.html', 'utf8');
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

const component = `import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import { ArrowUpRight, BookOpen, Clock, Users, Zap, Mail, Bot, LineChart, Target, Building2, CheckCircle2, Settings2, FileText, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LeadQualificationPlaybookPage() {
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

fs.mkdirSync('C:\\Users\\Hassaan\\Desktop\\Ayautomate\\ayautomate-web\\src\\app\\resources\\lead-qualification-playbook', { recursive: true });
fs.writeFileSync('C:\\Users\\Hassaan\\Desktop\\Ayautomate\\ayautomate-web\\src\\app\\resources\\lead-qualification-playbook\\page.tsx', component);
console.log('Successfully extracted lead playbook page');
