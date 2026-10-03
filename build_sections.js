const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;
  // Convert class to className
  jsx = jsx.replace(/class=/g, 'className=');
  // Remove Next.js optimized URLs
  jsx = jsx.replace(/src="\/_next\/image\?url=([^"&]+)[^"]*"/g, (match, p1) => {
    return `src="${decodeURIComponent(p1)}"`;
  });
  jsx = jsx.replace(/srcSet="\/_next\/image\?url=([^"&]+)[^"]*"/g, (match, p1) => {
    return `srcSet="${decodeURIComponent(p1)} 1x"`;
  });
  // Remove grids (linear-gradient backgrounds)
  jsx = jsx.replace(/<div className="absolute inset-0 bg-\[linear-gradient[^>]+><\/div>/g, '');
  
  // Self close img, br, hr, input
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
  jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
  
  // Fix inline styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (!styleString.trim()) return 'style={{}}';
    const styles = styleString.split(';').filter(s => s.trim());
    const styleObj = {};
    styles.forEach(s => {
      const [key, value] = s.split(':');
      if (key && value) {
        const camelKey = key.trim().replace(/-([a-z])/g, (m, p1) => p1.toUpperCase());
        styleObj[camelKey] = value.trim().replace(/&quot;/g, "'");
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  return jsx;
}

// 1. Build OurSolutionsSection.tsx
const solutionsHtml = fs.readFileSync('solutions-full.html', 'utf8');
const solutionsJsx = htmlToJsx(solutionsHtml);
const solutionsCode = `import React from 'react';

export default function OurSolutionsSection() {
  return (
    ${solutionsJsx}
  );
}
`;
fs.writeFileSync('src/components/OurSolutionsSection.tsx', solutionsCode);
console.log('Built OurSolutionsSection.tsx');

// 2. Build CapabilitiesSection.tsx
const capabilitiesHtml = fs.readFileSync('capabilities.html', 'utf8');
const capabilitiesJsx = htmlToJsx(capabilitiesHtml);
const capabilitiesCode = `import React from 'react';

export default function CapabilitiesSection() {
  return (
    ${capabilitiesJsx}
  );
}
`;
fs.writeFileSync('src/components/CapabilitiesSection.tsx', capabilitiesCode);
console.log('Built CapabilitiesSection.tsx');

