const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');
const cssLinks = html.match(/href="([^"]+\.css[^"]*)"/g);
if (cssLinks) {
  console.log(cssLinks.join('\n'));
} else {
  console.log("No CSS found");
}
