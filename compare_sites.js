const fs = require('fs');

// Read the live site HTML  
const liveHtml = fs.readFileSync('ayautomate.html', 'utf8');

// Extract all major sections by finding h2/h3 headings
const headingRegex = /<h[23][^>]*>([^<]+(?:<[^>]+>[^<]*)*)<\/h[23]>/gi;
let match;
const sections = [];
while ((match = headingRegex.exec(liveHtml)) !== null) {
  // Clean HTML tags from the heading text
  const text = match[1].replace(/<[^>]+>/g, '').trim();
  if (text.length > 3 && text.length < 100) {
    sections.push({ text, pos: match.index });
  }
}

console.log('=== LIVE SITE SECTIONS (in order) ===');
sections.forEach((s, i) => {
  console.log(`${i + 1}. ${s.text} (pos: ${s.pos})`);
});

// Now check our local components
console.log('\n=== LOCAL COMPONENTS (in page.tsx order) ===');
const pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');
const componentRegex = /<(\w+Section)\s*\/>/g;
const localComponents = [];
while ((match = componentRegex.exec(pageTsx)) !== null) {
  localComponents.push(match[1]);
}
localComponents.forEach((c, i) => {
  console.log(`${i + 1}. ${c}`);
});

// Check which images exist in public/
console.log('\n=== PUBLIC IMAGES ===');
function listDir(dir, prefix = '') {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = dir + '/' + item;
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        listDir(fullPath, prefix + item + '/');
      } else {
        console.log(prefix + item);
      }
    });
  } catch(e) {}
}
listDir('public');
