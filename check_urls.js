const https = require('https');

const urls = [
  'https://www.ayautomate.com/cursor-logo.webp',
  'https://www.ayautomate.com/n8n-color.webp',
  'https://www.ayautomate.com/vercel.svg',
  'https://www.ayautomate.com/images/downloaded/services-logos/service-make.webp',
  'https://www.ayautomate.com/images/downloaded/tool-claude-code.webp',
  'https://www.ayautomate.com/images/downloaded/services-logos/service-notion.webp',
  'https://www.ayautomate.com/workflowmobile.webp',
  'https://www.ayautomate.com/images/ai-strategy-5-ways-we-automate.webp',
  'https://www.ayautomate.com/images/generated/browserbase-consulting.webp',
];

urls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(res.statusCode, url);
  }).on('error', (e) => {
    console.log('ERROR', url, e.message);
  });
});
