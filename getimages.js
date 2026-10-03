const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');
const matches = html.match(/[a-zA-Z0-9_\-\/]+\.webp/gi);
console.log([...new Set(matches)]);
