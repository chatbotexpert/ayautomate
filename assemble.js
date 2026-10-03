const fs = require('fs');
let content = fs.readFileSync('CapabilitiesSection.tsx.part', 'utf8');

// Replace all HTML attributes with React equivalents
content = content.replace(/class=/g, 'className=');
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
content = content.replace(/fill-rule/g, 'fillRule');
content = content.replace(/clip-rule/g, 'clipRule');
content = content.replace(/<img([^>]*[^/])>/g, '<img$1/>');
content = content.replace(/<input([^>]*[^/])>/g, '<input$1/>');
content = content.replace(/<br([^>]*[^/])?>/g, '<br/>');
content = content.replace(/style="[^"]*"/g, '');
content = content.replace(/<!--[\s\S]*?-->/g, '');
content = content.replace(/srcset=/g, 'srcSet=');
content = content.replace(/for=/g, 'htmlFor=');

let final = `import React from 'react';

export default function CapabilitiesSection() {
  return (
    <section id="services" className="bg-[#131319] border-t border-border-strong text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
              </span>
              <span className="text-xs font-medium text-primary-purple uppercase tracking-widest">Our Capabilities</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50 dark:from-white dark:to-white/20">
            ${content}
  );
}
`;

fs.writeFileSync('src/components/CapabilitiesSection.tsx', final);
console.log('Capabilities written successfully.');
