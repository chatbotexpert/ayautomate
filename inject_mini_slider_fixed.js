const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const startIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));
const nextContainer = '<div className="flex flex-wrap gap-3 mb-8">';
const endIndex = html.indexOf(nextContainer, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const before = html.substring(0, startIndex);
    const after = html.substring(endIndex);
    
    let finalCode = before + '<MiniTestimonialSlider />\n' + after;
    
    if (!finalCode.includes('import MiniTestimonialSlider')) {
        finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport MiniTestimonialSlider from '@/components/MiniTestimonialSlider';");
    }
    
    html = finalCode;
    console.log('Successfully injected MiniTestimonialSlider correctly');
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
