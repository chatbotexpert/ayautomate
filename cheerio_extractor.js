const fs = require('fs');
const cheerio = require('cheerio');

const rawHtml = fs.readFileSync('ai-agent.html', 'utf8');
const h1Idx = rawHtml.indexOf('<h1');
let startIdx = rawHtml.lastIndexOf('<div class="relative min-h-screen', h1Idx);
if (startIdx === -1) startIdx = rawHtml.lastIndexOf('<section', h1Idx);
if (startIdx === -1) startIdx = rawHtml.lastIndexOf('<div', h1Idx);

let endIdx = rawHtml.indexOf('<footer', h1Idx);

let extractedHtml = rawHtml.substring(startIdx, endIdx);

const $ext = cheerio.load(extractedHtml, null, false);

// REMOVE ALL SCRIPTS
$ext('script').remove();

// 1. Fix opacity: 0 and translate that hide elements
$ext('[style*="opacity:0"], [style*="opacity: 0"]').each((i, el) => {
    let style = $ext(el).attr('style');
    style = style.replace(/opacity:\s*0;?/g, 'opacity: 1;');
    style = style.replace(/transform:\s*translateY\([^)]+\);?/g, 'transform: translateY(0);');
    $ext(el).attr('style', style);
});

// 2. Fix images, videos, posters
$ext('img, video, source').each((i, el) => {
    const $el = $ext(el);
    let src = $el.attr('src');
    if (src) {
        if (src.includes('/_next/image?url=')) {
            const urlMatch = src.match(/url=([^&]+)/);
            if (urlMatch) {
                try {
                    src = decodeURIComponent(urlMatch[1]);
                } catch (e) {}
            }
        }
        if (src.startsWith('/')) {
            $el.attr('src', 'https://www.ayautomate.com' + src);
        }
    }
    
    let poster = $el.attr('poster');
    if (poster && poster.startsWith('/')) {
        $el.attr('poster', 'https://www.ayautomate.com' + poster);
    }

    $el.removeAttr('srcset');
    $el.removeAttr('sizes');
    $el.removeAttr('data-nimg');
});

// 3. Fix background images in inline styles
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
finalHtml = finalHtml.replace(/<!--[\s\S]*?-->/g, ''); // Comments

// Convert inline styles to objects
finalHtml = finalHtml.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim().length > 0);
  const styleObj = {};
  styles.forEach(s => {
    const parts = s.split(':');
    if (parts.length >= 2) {
      let key = parts[0].trim();
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      // Only keep strings wrapped in single quotes properly
      // Actually simpler:
      styleObj[key] = value.replace(/'/g, "\\'");
    }
  });
  
  let objStr = Object.entries(styleObj)
      .map(([k, v]) => `'${k}': '${v}'`)
      .join(', ');
  return `style={{${objStr}}}`;
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

export default function AIAgentDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-background"> {/* Add padding for navbar */}
        ${finalHtml}
      </div>
      <FooterSection />
    </div>
  );
}
`;

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', component);
console.log('Successfully extracted full service page using cheerio');
