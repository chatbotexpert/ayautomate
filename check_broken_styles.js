const fs = require('fs');
const html = fs.readFileSync('src/components/OurSolutionsSection.tsx', 'utf8');
const matches = html.match(/style=\{\{"backgroundImage"[^}]+\}\}/g);
console.log(matches);
