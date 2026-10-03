const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const t1 = html.indexOf('walid-boulanouar"');
console.log(html.substring(t1 - 100, t1 + 3000));
