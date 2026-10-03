const fs = require('fs');
const html = fs.readFileSync('temp_html.txt', 'utf8');
const links = Array.from(html.matchAll(/href=\"(\/_next\/static\/css\/[^\"]+\.css)\"/g)).map(m => m[1]);
console.log(links);
