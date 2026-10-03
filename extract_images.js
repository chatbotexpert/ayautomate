const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');

const servicesIdx = html.indexOf('5 Ways We Automate Your');
const sectionHtml = html.substring(servicesIdx, servicesIdx + 40000); 

const links = sectionHtml.match(/src="([^"]+)"/g);
if (links) {
  console.log(links.filter(l => !l.includes('.js') && !l.includes('.css')));
} else {
  console.log("No links found");
}
