const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const sectionStart = '<section id="ai-agent-booking"';
const startIndex = html.indexOf(sectionStart);

if (startIndex !== -1) {
    // Find the end of this section. It ends right before the FAQ section.
    // The FAQ section starts with `<section className="bg-background relative py-24 sm:py-32">`
    // Let's just find the `</section>` that closes ai-agent-booking.
    // Or we can just find "FREQUENTLY ASKED" and work backwards to the `<section` tag.
    const faqIndex = html.indexOf('FREQUENTLY ASKED');
    if (faqIndex !== -1) {
        const nextSectionStart = html.lastIndexOf('<section', faqIndex);
        if (nextSectionStart !== -1) {
            const before = html.substring(0, startIndex);
            const after = html.substring(nextSectionStart);
            
            let finalCode = before + '<FreeConsultationSection />\n' + after;
            
            if (!finalCode.includes('import FreeConsultationSection')) {
                finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport FreeConsultationSection from '@/components/FreeConsultationSection';");
            }
            
            html = finalCode;
            console.log('Successfully replaced booking section with FreeConsultationSection');
        }
    }
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
