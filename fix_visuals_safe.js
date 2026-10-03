const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// 1. Add `dark:invert dark:brightness-0` to all client logos, but NOT `/faces/`
// Find all images:
html = html.replace(/<img([^>]*)src="([^"]+)"([^>]*)>/g, (match, before, src, after) => {
    if (src.includes('/clients/') && !src.includes('/faces/')) {
        let fullTag = match;
        // Inject classes if not there
        if (!fullTag.includes('dark:invert')) {
            fullTag = fullTag.replace(/className="/, 'className="dark:invert dark:brightness-0 ');
        }
        return fullTag;
    } else if (src.includes('/faces/')) {
        // Strip the invert classes if they are there
        let fullTag = match.replace(/dark:invert/g, '').replace(/dark:brightness-0/g, '');
        return fullTag;
    }
    return match;
});

// 2. Replace the video section with TestimonialCarousel
const startString = 'Hear it from the <span className="italic text-primary-purple">operators we shipped for</span>';
const startIndex = html.indexOf(startString);

if (startIndex !== -1) {
    // Look backwards for `<section`
    const sectionStart = html.lastIndexOf('<section', startIndex);
    if (sectionStart !== -1) {
        // Look forwards for the end of this section. 
        // This section ends where the next section (the Free Consultation one) begins.
        // We know the Free Consultation section starts with `<section id="ai-agent-booking"` or similar.
        const nextSectionStart = html.indexOf('<section id="ai-agent-booking"', startIndex);
        
        if (nextSectionStart !== -1) {
            // BUT wait! There is a closing `</section>` for the CURRENT section right before `nextSectionStart`!
            // Let's find the `</section>` immediately before `nextSectionStart`.
            let actualSectionEnd = html.lastIndexOf('</section>', nextSectionStart);
            if (actualSectionEnd > sectionStart) {
                actualSectionEnd += '</section>'.length; // include the closing tag
                
                const beforeSection = html.substring(0, sectionStart);
                const afterSection = html.substring(actualSectionEnd);
                
                let finalHtml = beforeSection + '\n        <TestimonialCarousel />\n' + afterSection;
                
                if (!finalHtml.includes('import TestimonialCarousel')) {
                    finalHtml = finalHtml.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport TestimonialCarousel from '@/components/TestimonialCarousel';");
                }
                
                html = finalHtml;
                console.log('Successfully replaced video section with TestimonialCarousel');
            } else {
                console.log('Could not find closing section tag');
            }
        } else {
            console.log('Could not find next section start');
        }
    }
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
