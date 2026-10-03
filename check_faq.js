const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

console.log('FAQ:', html.indexOf('FREQUENTLY ASKED'));
