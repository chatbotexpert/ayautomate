const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// Fix open="" -> open
html = html.replace(/ open=""/g, ' open');
html = html.replace(/ open="true"/gi, ' open');

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed details open tag');
