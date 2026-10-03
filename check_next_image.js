const fs = require('fs');
const html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');
const matches = html.match(/_next\/image[^"']*/g);
console.log('Matches:', matches ? matches.length : 0);
if (matches) {
    console.log(matches.slice(0, 5));
}
