const fs = require('fs');

let tsx = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// 1. Invert SVG logos in the marquee/grid section
// We can find the block that has clients/justrussel.svg, clients/neoday.svg, etc.
// And add dark:invert class to the img tags.
// Let's just add dark:invert to all img tags whose src includes '/clients/'
tsx = tsx.replace(/(<img[^>]*src="[^"]*\/clients\/[^"]*"[^>]*className=")([^"]*)(")/g, (match, prefix, classes, suffix) => {
    if (!classes.includes('dark:invert')) {
        return `${prefix}${classes} dark:invert${suffix}`;
    }
    return match;
});

// Also there is `filter invert` needed maybe. Let's just use dark:invert dark:brightness-0 dark:contrast-200.
tsx = tsx.replace(/(<img[^>]*src="[^"]*\/clients\/[^"]*"[^>]*className=")([^"]*)(")/g, (match, prefix, classes, suffix) => {
    if (!classes.includes('dark:brightness-0')) {
        return `${prefix}${classes} dark:brightness-0 dark:invert${suffix}`;
    }
    return match;
});

// 2. Replace the video testimonial static section with <TestimonialCarousel />
// The section starts with <section ...> containing "Hear it from the operators we shipped for."
// We need to carefully find the <section> boundary.
const hearIndex = tsx.indexOf('Hear it from the operators we shipped for.');
if (hearIndex !== -1) {
    const sectionStart = tsx.lastIndexOf('<section', hearIndex);
    const sectionEnd = tsx.indexOf('</section>', hearIndex) + 10;
    
    const before = tsx.substring(0, sectionStart);
    const after = tsx.substring(sectionEnd);
    
    // Check if TestimonialCarousel is imported
    let finalCode = before + '\n        <TestimonialCarousel />\n' + after;
    if (!finalCode.includes('import TestimonialCarousel')) {
        finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport TestimonialCarousel from '@/components/TestimonialCarousel';");
    }
    
    tsx = finalCode;
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', tsx);
console.log('Fixed logos and video testimonials');
