const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const startIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));
const videoCallStr = 'Video Call';
const endIndex = html.lastIndexOf('<div', html.indexOf(videoCallStr));

const blockToReplace = html.substring(startIndex, endIndex);

let newHtml = html.replace(blockToReplace, '<MiniTestimonialSlider />\n');
if (!newHtml.includes('import MiniTestimonialSlider')) {
    newHtml = newHtml.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport MiniTestimonialSlider from '@/components/MiniTestimonialSlider';");
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', newHtml);
console.log('Replaced block successfully');
