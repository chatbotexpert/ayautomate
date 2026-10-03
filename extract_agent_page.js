const fs = require('fs');
const html = fs.readFileSync('ai-agent.html', 'utf8');

// Find the start of the hero content
const h1Index = html.indexOf('<h1');

// Let's back up to find the container div. It's likely a div with a section or main wrapper.
// We'll just look for the first <div class="relative min-h-screen"> or similar.
const minHScreenIndex = html.lastIndexOf('<div', h1Index);
const sectionIndex = html.lastIndexOf('<section', h1Index);

const startIndex = Math.max(minHScreenIndex, sectionIndex);

// Find the start of the footer
const footerIndex = html.indexOf('<footer');

// The main content we need to extract is between startIndex and footerIndex
const content = html.substring(startIndex, footerIndex);

console.log('Extracted content length:', content.length);
fs.writeFileSync('agent_page_content.html', content);
