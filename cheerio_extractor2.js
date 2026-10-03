const fs = require('fs');
const cheerio = require('cheerio');

const rawHtml = fs.readFileSync('ai-agent.html', 'utf8');

// Load full HTML
const $ = cheerio.load(rawHtml);

// Find the main h1
let h1 = $('h1').first();

// Go up to find the main container wrapping the whole page content (but not the navbar/footer)
// Usually it's the `main` tag or a sibling of `nav` and `footer`.
let mainContainer = h1.closest('.relative.min-h-screen');
if (mainContainer.length === 0) mainContainer = h1.closest('main');
if (mainContainer.length === 0) mainContainer = $('main');

// Wait, the RSC payload has templates. Let's look inside `template#B:0` or wherever the real content is.
let realContent = $('template#B\\:0').html();
if (!realContent) {
    // Maybe it's not in a template, maybe it's just in the body.
    // Let's just find the div that contains h1 and go up until its parent is body or main.
    let current = h1;
    while (current.parent().length > 0 && current.parent()[0].name !== 'body' && current.parent()[0].name !== 'main') {
        current = current.parent();
    }
    mainContainer = current;
} else {
    // If it's in a template, we load the template content.
    const $t = cheerio.load(realContent);
    mainContainer = $t('body').children().first();
}

// Let's just do string extraction based on h1 but carefully find matching tags, 
// OR just use cheerio to grab all sections before the footer!
const $body = cheerio.load(rawHtml);
$body('nav').remove();
$body('footer').remove();
$body('script').remove();
$body('template').remove();
$body('section[aria-label="Notifications"]').remove();
$body('#contact').remove(); // This is the footer id often
$body('style').remove();
$body('iframe').remove();
// Also remove the "Loading service..." CSR fallback
$body('.animate-spin').closest('.min-h-screen').remove();

// Get the cleaned HTML
let extractedHtml = $body('main').html();
if (!extractedHtml || extractedHtml.trim().length < 1000) {
    // fallback if main is empty
    extractedHtml = $body('body').html();
}

const $ext = cheerio.load(extractedHtml, null, false);

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
finalHtml = finalHtml.replace(/tabindex="/g, 'tabIndex="');
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
  'stroke-miterlimit': 'strokeMiterlimit',
  'clip-path': 'clipPath'
};
Object.keys(svgAttrs).forEach(k => {
  finalHtml = finalHtml.replace(new RegExp(k + '=', 'g'), svgAttrs[k] + '=');
});

finalHtml = finalHtml.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2/>');

// Strip out any weird Next.js injected stuff that could break JSX
finalHtml = finalHtml.replace(/<html[^>]*>/g, '').replace(/<\/html>/g, '');
finalHtml = finalHtml.replace(/<body[^>]*>/g, '').replace(/<\/body>/g, '');
finalHtml = finalHtml.replace(/<head[^>]*>[\s\S]*?<\/head>/g, '');

const component = `import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function AIAgentDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-background">
        ${finalHtml}
      </div>
      <FooterSection />
    </div>
  );
}
`;

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', component);
console.log('Successfully extracted full service page using clean cheerio logic');
