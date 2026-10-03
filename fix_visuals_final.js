const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// 1. Fix the avatar images inside FreeConsultationSection block by removing `dark:invert dark:brightness-0 dark:invert`
html = html.replace(/dark:invert dark:brightness-0 dark:invert/g, '');

// 2. Replace the native video slider block with <TestimonialCarousel />
const searchStr = 'Hear it from the <span className="italic text-primary-purple">operators we shipped for</span>.';
const hearIndex = html.indexOf(searchStr);

if (hearIndex !== -1) {
    const sectionStart = html.lastIndexOf('<section', hearIndex);
    // The section ends right before `<section className="bg-background py-24 sm:py-32 w-full overflow-hidden border-t border-border-strong relative min-h-screen">` which is the FreeConsultationSection.
    // Let's find the next <section
    const nextSectionStart = html.indexOf('<section', hearIndex);
    
    if (sectionStart !== -1 && nextSectionStart !== -1) {
        const before = html.substring(0, sectionStart);
        const after = html.substring(nextSectionStart);
        
        let finalCode = before + '\n        <TestimonialCarousel />\n' + after;
        if (!finalCode.includes('import TestimonialCarousel')) {
            finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport TestimonialCarousel from '@/components/TestimonialCarousel';");
        }
        
        html = finalCode;
        console.log('Replaced video section');
    }
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
