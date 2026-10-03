const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// The errors are strings not assignable to booleans.
html = html.replace(/ required="[^"]*"/g, ' required');
html = html.replace(/ disabled="[^"]*"/g, ' disabled');
html = html.replace(/ checked="[^"]*"/g, ' defaultChecked');
html = html.replace(/ readOnly="[^"]*"/gi, ' readOnly');
html = html.replace(/ hidden="[^"]*"/g, ' hidden');
html = html.replace(/ autocomplete="/gi, ' autoComplete="');
html = html.replace(/ open="[^"]*"/gi, ' open');

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed bools');
