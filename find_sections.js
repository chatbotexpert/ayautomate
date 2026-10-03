const fs = require('fs');
const html = fs.readFileSync('ayautomate.html', 'utf8');

// Find all section tags with their IDs
const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Found section:', match[1]);
}
