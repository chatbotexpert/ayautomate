const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');

// extract standard Next.js CSS files
const links = html.match(/href="\/_next\/static\/css\/[^"]+\.css"/g);
if (links) {
    const urls = [...new Set(links.map(l => 'https://www.ayautomate.com' + l.replace('href="', '').replace('"', '')))];
    fs.writeFileSync('css_urls.txt', urls.join('\n'));
    console.log("CSS URLs found:", urls);
} else {
    console.log("No CSS links found.");
}
