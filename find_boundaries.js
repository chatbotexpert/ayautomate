const fs = require('fs');
const html = fs.readFileSync('ai-agent.html', 'utf8');

const h1 = html.indexOf('<h1');
let start = html.lastIndexOf('<div class="relative min-h-screen', h1);
if (start === -1) start = html.lastIndexOf('<section', h1);
if (start === -1) start = html.lastIndexOf('<div', h1);

// We want to grab everything up to the Free Consultation or Footer.
// Let's find "AI Agent Audit" (which is the consultation form title in this page)
// Or simply just look for `<footer` but we know it's rendered by RSC so it might not exist in the exact same format.
let end = html.indexOf('id="contact"', h1);
if (end === -1) end = html.indexOf('<footer', h1);
if (end === -1) {
    // Look for "AI Agent Audit" and cut right before its parent section
    const auditIdx = html.indexOf('AI Agent Audit', h1);
    if (auditIdx !== -1) {
        end = html.lastIndexOf('<section', auditIdx);
    }
}

if (start !== -1 && end !== -1 && end > start) {
  const content = html.substring(start, end);
  fs.writeFileSync('agent_page_content.html', content);
  console.log('Extracted', content.length, 'bytes');
} else {
  console.log('Could not find boundaries');
}
