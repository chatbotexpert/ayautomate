const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// The problematic fixed dots background
const target = `<div className="fixed inset-0 z-0 pointer-events-none"><div className="absolute inset-0 z-0" style={{'backgroundImage': 'radial-gradient(circle, var(--hero-dot-color, #333) 1px, transparent 1px)', 'backgroundSize': '24px 24px', 'opacity': '1'}}></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]"></div></div>`;

if (html.includes(target)) {
    html = html.replace(target, '');
    fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
    console.log('Removed global dots background');
} else {
    // If exact match fails, let's try a regex for `<div className="fixed inset-0 z-0 pointer-events-none">...</div>` before the first `<section`
    const regex = /<div className="fixed inset-0 z-0 pointer-events-none">.*?<\/div><\/div>/s;
    html = html.replace(regex, '');
    fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
    console.log('Removed global dots background via regex');
}
