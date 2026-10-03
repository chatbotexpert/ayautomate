const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const sectionStartStr = '<section id="ai-agent-booking"';
const startIndex = html.indexOf(sectionStartStr);

// Let's just find the `</section>` that closes it by finding the NEXT section.
// The next section is the FAQ section. We can just find `<section id="faq"` or similar.
const nextSection = html.indexOf('<section', startIndex + 10);
if (nextSection !== -1) {
    const before = html.substring(0, startIndex);
    const after = html.substring(nextSection);
    
    let finalCode = before + '<FreeConsultationSection />\n' + after;
    
    if (!finalCode.includes('import FreeConsultationSection')) {
        finalCode = finalCode.replace("import Navbar from '@/components/Navbar';", "import Navbar from '@/components/Navbar';\nimport FreeConsultationSection from '@/components/FreeConsultationSection';");
    }
    
    html = finalCode;
    fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
    console.log('Successfully replaced booking section!');
}
