const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const startStr = 'lucide-quote';
const start = html.lastIndexOf('<svg', html.indexOf(startStr));
const videoCallStr = 'Video Call';

// The buttons div looks like `<div className="mt-6 flex gap-1.5 pl-8"><button...` or similar?
// Let's find the closing of the `figure` tag, which contains the dots.
// Or just let's see what's between `start` and the `Video Call` text!
console.log(html.substring(start, html.indexOf(videoCallStr)).substr(-200));
