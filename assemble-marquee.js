const fs = require('fs');
let content = fs.readFileSync('marquee.html', 'utf8');

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

let finalJSX = `import React from 'react';

export default function ToolsMarqueeSection() {
  return (
    ${content}
  );
}
`;

fs.writeFileSync('src/components/ToolsMarqueeSection.tsx', finalJSX);
console.log('Marquee written successfully.');
