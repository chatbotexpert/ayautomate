const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');
const match = html.match(/<div[^>]*style="[^"]*radial-gradient[^"]*"[^>]*><\/div>/gi);
console.log(match);
