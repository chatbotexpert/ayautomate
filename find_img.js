const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const match1 = html.match(/src="([^"]+ai-consulting[^"]+)"/i);
const match2 = html.match(/src="([^"]+ai-implementation[^"]+)"/i);
const match3 = html.match(/src="([^"]+ai-training[^"]+)"/i);
console.log(match1 ? match1[1] : 'Not found 1');
console.log(match2 ? match2[1] : 'Not found 2');
console.log(match3 ? match3[1] : 'Not found 3');
