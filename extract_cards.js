const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const start = html.indexOf('animate-infinite-scroll');
const section = html.substring(start, start + 30000);

const regex = /<h3 class="text-lg font-semibold text-foreground[^"]*">([^<]+)<\/h3><p class="text-sm text-muted-foreground">([^<]+)<\/p>/g;
const imgRegex = /src="(\/_next\/image\?url=[^"]+|[^"]+\.webp|[^"]+\.png|[^"]+\.svg)"/g;

let match;
while((match = regex.exec(section)) !== null) {
  console.log("TITLE:", match[1]);
  console.log("DESC:", match[2]);
}

let imgMatch;
let imgCount = 0;
while((imgMatch = imgRegex.exec(section)) !== null && imgCount < 20) {
  console.log("IMG:", imgMatch[1]);
  imgCount++;
}
