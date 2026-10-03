const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');
const idx = html.indexOf('Production agents that ship');

// Find the closest parent div that starts the dropdown
const start = html.lastIndexOf('<div class="absolute top-[100%]', idx);
const featuredIdx = html.indexOf('Embed senior AI-Native engineers', idx);
const end = html.indexOf('</div></div></div>', featuredIdx) + 18;

if (start !== -1 && end > start) {
  fs.writeFileSync('megamenu.html', html.substring(start, end));
  console.log('Wrote megamenu.html successfully.');
} else {
  console.log('Failed to find start or end bounds. start:', start, 'end:', end);
}
