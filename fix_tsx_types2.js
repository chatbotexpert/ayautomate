const fs = require('fs');

let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// 1. autocomplete -> autoComplete
html = html.replace(/autocomplete="/gi, 'autoComplete="');

// 2. fix remaining boolean errors. The easiest way is to just look for all boolean attributes in standard HTML
html = html.replace(/ (required|disabled|checked|readOnly|hidden|multiple|selected)="[^"]*"/g, ' $1');

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed more TSX types');
