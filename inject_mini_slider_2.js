const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const startIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));

if (startIndex !== -1) {
    const videoCallStr = 'Video Call';
    // The Video call button is inside `<div className="flex items-center gap-2 sm:gap-4 flex-wrap mt-8">`
    const endIndex = html.lastIndexOf('<div', html.indexOf(videoCallStr));
    
    if (endIndex !== -1) {
        const before = html.substring(0, startIndex);
        const after = html.substring(endIndex);
        
        let finalCode = before + '<MiniTestimonialSlider />\n' + after;
        
        if (!finalCode.includes('import MiniTestimonialSlider')) {
            finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport MiniTestimonialSlider from '@/components/MiniTestimonialSlider';");
        }
        
        html = finalCode;
        console.log('Successfully injected MiniTestimonialSlider');
    }
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
