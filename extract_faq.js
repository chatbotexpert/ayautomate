const fs = require('fs');
const html = fs.readFileSync('full_site.html', 'utf8');
const q = ['What types of processes can you automate?', 'Do I need technical knowledge to use your service?', 'Can you integrate with our existing tools?', 'How long does implementation take?', 'Can you self-host n8n or other automation platforms for us?', 'How do you build AI agents without using external ML models?', 'Is your AI secure and compliant?'];
q.forEach(question => {
  const t1 = html.indexOf(question);
  if(t1 > -1) {
    const start = html.indexOf('<div class="p-6', t1);
    const end = html.indexOf('</div>', start);
    console.log('Q:', question);
    console.log('A:', html.substring(start, end+6).replace(/<[^>]+>/g, '').trim());
  }
});
