const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const regex = /([a-zA-Z0-9_-]+\.webp)/g;
let match;
const allWebp = new Set();
while ((match = regex.exec(html)) !== null) {
  allWebp.add(match[1]);
}
console.log(Array.from(allWebp).join('\n'));
