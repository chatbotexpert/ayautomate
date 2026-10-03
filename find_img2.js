const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');

const s1 = html.indexOf('Expert guidance on where and how to start');
if (s1 !== -1) {
  console.log(html.substring(s1 - 400, s1 + 100));
}
