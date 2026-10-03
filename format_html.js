const fs = require('fs');
const contentPath = 'C:\\Users\\Hassaan\\.gemini\\antigravity-ide\\brain\\29170f68-2622-4a7d-b398-20e413f8b9c6\\.system_generated\\steps\\28\\content.md';
let html = fs.readFileSync(contentPath, 'utf8');

// Strip markdown wrapper if present
html = html.replace(/^Title:.*?\n---\n+/s, '');

// Format HTML by adding newlines before tags
const formatted = html.replace(/></g, '>\n<');

fs.mkdirSync('scratch', { recursive: true });
fs.writeFileSync('scratch/formatted.html', formatted, 'utf8');
console.log('Formatted HTML saved to scratch/formatted.html');
