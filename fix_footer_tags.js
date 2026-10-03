const fs = require('fs');
let html = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');

// Fix unclosed img tags
html = html.replace(/<img([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1}/>`;
});

// Fix unclosed input tags
html = html.replace(/<input([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1}/>`;
});

// Fix unclosed br tags
html = html.replace(/<br([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<br${p1}/>`;
});

// Fix viewBox capitalization
html = html.replace(/viewbox=/g, 'viewBox=');

fs.writeFileSync('src/components/FooterSection.tsx', html);
console.log('Fixed self-closing tags');
