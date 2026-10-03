const fs = require('fs');
let html = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');

// Fix JSX attributes
html = html.replace(/srcset=/g, 'srcSet=');
html = html.replace(/ readonly="/gi, ' readOnly="');
html = html.replace(/ disabled="[^"]*"/g, ' disabled');
html = html.replace(/ checked="[^"]*"/g, ' defaultChecked');
html = html.replace(/ required="[^"]*"/g, ' required');
html = html.replace(/ hidden="[^"]*"/g, ' hidden');
html = html.replace(/ autocomplete="/gi, ' autoComplete="');

fs.writeFileSync('src/components/FooterSection.tsx', html);
console.log('Fixed JSX attributes in FooterSection');
