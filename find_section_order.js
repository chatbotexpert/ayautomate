const fs = require('fs');
const liveHtml = fs.readFileSync('ayautomate.html', 'utf8');

// Find section IDs
const sectionIdRegex = /id="([^"]+)"/g;
let match;
const ids = [];
while ((match = sectionIdRegex.exec(liveHtml)) !== null) {
  if (!match[1].startsWith('radix') && !match[1].startsWith(':') && match[1].length > 2) {
    ids.push({ id: match[1], pos: match.index });
  }
}

// Unique IDs in order
const seen = new Set();
console.log('=== Section IDs in live site (order) ===');
ids.forEach(item => {
  if (!seen.has(item.id)) {
    seen.add(item.id);
    console.log(`  ${item.id} (pos: ${item.pos})`);
  }
});

// Find key text markers to understand section order
const markers = [
  'Deploy Automation',
  'Scale Your Business',
  'Real Results, Real Clients',
  'Weeks, not slide decks',
  'Built to Ship',
  '5 Ways We Automate',
  'Powerful Tools',
  'Innovation Level',
  'Everything You Need',
  'The Minds Behind',
  'Fix what',
  'Get Your Questions',
  'BOOK A CALL',
  'footer'
];

console.log('\n=== Key content markers (order) ===');
markers.forEach(m => {
  const pos = liveHtml.indexOf(m);
  console.log(`  "${m}" => pos: ${pos}`);
});
