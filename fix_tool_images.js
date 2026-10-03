const fs = require('fs');

const filePath = 'src/components/ToolsMarqueeSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The real tool screenshot images from the live site
const toolImages = {
  'N8n Automation': 'https://www.ayautomate.com/images/downloaded/tool-n8n.webp',
  'Make Integration': 'https://www.ayautomate.com/images/downloaded/tool-make.webp',
  'Cursor IDE': 'https://www.ayautomate.com/images/downloaded/tool-cursor.webp',
  'Claude Code': 'https://www.ayautomate.com/images/downloaded/tool-claude-code.webp',
};

// Fix each card's main image:
// Pattern: <img alt="TOOLNAME screenshot" ... data-nimg="fill" ... src="...vercel.svg"/>
// Replace with proper img tag with correct src and proper sizing
for (const [toolName, imgUrl] of Object.entries(toolImages)) {
  const altText = `${toolName} screenshot`;
  // Match the broken img tags for this tool
  const regex = new RegExp(
    `<img alt="${altText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" loading="lazy" decoding="async" data-nimg="fill" className="object-cover"\\s*sizes="[^"]*" srcSet="[^"]*" src="[^"]*"/>`,
    'g'
  );
  
  const replacement = `<img alt="${altText}" loading="lazy" decoding="async" className="object-cover w-full h-full absolute inset-0" src="${imgUrl}"/>`;
  
  const before = content.length;
  content = content.replace(regex, replacement);
  const after = content.length;
  console.log(`${toolName}: ${before !== after ? 'FIXED' : 'NOT FOUND'}`);
}

fs.writeFileSync(filePath, content);
console.log('Done!');
