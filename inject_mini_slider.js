const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const startStr = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute -left-2 sm:left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 text-primary-purple/30 -z-10 rotate-180">';
const startIndex = html.indexOf(startStr);

if (startIndex !== -1) {
    // The dots div starts here
    const dotsDiv = '<div className="mt-6 flex gap-1.5 pl-8">';
    const dotsIndex = html.indexOf(dotsDiv, startIndex);
    if (dotsIndex !== -1) {
        // Find the closing </div> of the dots div. 
        // Inside the dots div there are 6 <button>s. We can just search for the end of the 6th button or the next `<div className="flex items-center gap-2 sm:gap-4 flex-wrap mt-8">` (which is the Video Call / Phone Call / In-Person buttons).
        const nextContent = '<div className="flex items-center gap-2 sm:gap-4 flex-wrap mt-8">';
        const endIndex = html.indexOf(nextContent, dotsIndex);
        
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
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
