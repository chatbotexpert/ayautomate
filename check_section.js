const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const sectionStartStr = '<section id="ai-agent-booking"';
console.log('Index:', html.indexOf(sectionStartStr));
