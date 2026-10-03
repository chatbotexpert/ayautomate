const fs = require('fs');

let html = fs.readFileSync('agent_page_content.html', 'utf8');

// Convert class to className
html = html.replace(/class="/g, 'className="');
// Convert for to htmlFor
html = html.replace(/for="/g, 'htmlFor="');
// Fix self-closing tags (img, input, br, hr, meta)
html = html.replace(/<(img|input|br|hr|meta)([^>]*?)(?<!\/)>/g, '<$1$2/>');

// Convert style="xxx: yyy; zzz: aaa" to style={{ xxx: 'yyy', zzz: 'aaa' }}
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim().length > 0);
  const styleObj = {};
  styles.forEach(s => {
    const parts = s.split(':');
    if (parts.length >= 2) {
      let key = parts[0].trim();
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      styleObj[key] = value;
    }
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Replace HTML entities that break JSX
html = html.replace(/&#x27;/g, "'");

// Fix opacity issues
html = html.replace(/"opacity"\s*:\s*"0"/g, '"opacity":"1"');
html = html.replace(/"opacity"\s*:\s*0/g, '"opacity":1');
html = html.replace(/"transform"\s*:\s*"translateY\([^)]+\)"/g, '"transform":"translateY(0)"');

// Remove grid background classes explicitly requested by the user
html = html.replace(/bg-\[linear-gradient[^\]]*\]/g, '');

// Fix SVG attributes
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
  html = html.replace(new RegExp(k + '=', 'g'), svgAttrs[k] + '=');
});

// Remove script tags and HTML comments that break JSX (like <!--$-->)
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
html = html.replace(/<!--[\s\S]*?-->/g, '');

// Wrap in a React component
const component = `import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function AIAgentDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="pt-20"> {/* Add padding for navbar */}
        ${html}
      </div>
      <FooterSection />
    </div>
  );
}
`;

fs.mkdirSync('src/app/services/ai-agent-development', { recursive: true });
fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', component);
console.log('Created perfectly restored AIAgentDevelopmentPage component!');
