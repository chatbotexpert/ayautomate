const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');

// Find the "our-services" section in the live site
const idx = html.indexOf('id="our-services"');
if (idx === -1) {
  console.log('Section not found');
  process.exit(1);
}

// Extract a good chunk around it
const chunk = html.substring(idx, idx + 10000);

// Find all image sources in this chunk
const imgRegex = /src="([^"]+)"/g;
let match;
console.log('=== Images in our-services section ===');
while ((match = imgRegex.exec(chunk)) !== null) {
  console.log(match[1]);
}

// Also find the _next/image patterns
const nextImgRegex = /\/_next\/image\?url=([^&"]+)/g;
while ((match = nextImgRegex.exec(chunk)) !== null) {
  console.log('Next.js image:', decodeURIComponent(match[1]));
}
