const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');

const s1 = html.indexOf('OUR SOLUTIONS');
if (s1 !== -1) {
  const end1 = html.indexOf('</section>', s1);
  fs.writeFileSync('temp_solutions.html', html.substring(s1 - 500, end1 + 10));
}

const s2 = html.indexOf('HOW WE WORK');
if (s2 !== -1) {
  const end2 = html.indexOf('</section>', s2);
  fs.writeFileSync('temp_how_we_work.html', html.substring(s2 - 500, end2 + 10));
}
