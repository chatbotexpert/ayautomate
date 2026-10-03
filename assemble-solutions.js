const fs = require('fs');
let content = fs.readFileSync('solutions.html', 'utf8');

// Convert attributes
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

export default function OurSolutionsSection() {
  return (
    <section id="our-solutions" className="bg-[#131319] border-t border-border-strong text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
              <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
            </span>
            <span className="text-[11px] font-bold text-primary-purple uppercase tracking-widest">
              OUR SOLUTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold mb-6 tracking-tight leading-[1.05]">
            ${content}
  );
}
`;

fs.writeFileSync('src/components/OurSolutionsSection.tsx', final);
console.log('Solutions written successfully.');
