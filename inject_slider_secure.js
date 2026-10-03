const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const svgIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));

const startIndex = html.lastIndexOf('<figure', svgIndex);
const afterFigure = '</figure>';
const endIndex = html.indexOf(afterFigure, svgIndex) + afterFigure.length;

if (startIndex !== -1 && endIndex !== -1) {
    const before = html.substring(0, startIndex);
    const after = html.substring(endIndex);

    let finalCode = before + '<MiniTestimonialSlider />\n' + after;

    if (!finalCode.includes('import MiniTestimonialSlider')) {
        finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport MiniTestimonialSlider from '@/components/MiniTestimonialSlider';");
    }

    fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', finalCode);
    console.log('Successfully replaced figure with MiniTestimonialSlider!');
} else {
    console.log('Failed to find figure boundaries.');
}
