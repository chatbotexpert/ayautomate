const fs = require('fs');
let content = fs.readFileSync('execution.html', 'utf8');

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

export default function ScrollExecutionSection() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`\${content}\` }} />
  );
}
`;

// Wait, doing dangerouslySetInnerHTML requires proper HTML, but I just converted to JSX!
// I should just wrap it in a proper component directly.

let finalJSX = `import React from 'react';

export default function ScrollExecutionSection() {
  return (
    ${content}
  );
}
`;

fs.writeFileSync('src/components/ScrollExecutionSection.tsx', finalJSX);
console.log('Execution written successfully.');
