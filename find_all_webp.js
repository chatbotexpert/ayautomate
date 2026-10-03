const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const matches = html.match(/['"\/]([^'"\/]+\.webp)['"\/?]/g) || [];
const uniqueMatches = [...new Set(matches.map(m => m.replace(/['"\/]/g, '').replace('?', '')))];
console.log(uniqueMatches.join('\n'));
