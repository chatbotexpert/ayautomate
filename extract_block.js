const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const startIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));

const videoCallStr = 'Video Call';
const endIndex = html.lastIndexOf('<div', html.indexOf(videoCallStr));

console.log(html.substring(startIndex, endIndex));
