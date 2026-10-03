const fs = require('fs');
let content = fs.readFileSync('src/components/ToolsMarqueeSection.tsx', 'utf8');

content = content.replace(/<div className="absolute inset-0 bg-\[linear-gradient[a-zA-Z0-9_,#()]+\] bg-\[size:[^\]]+\] pointer-events-none" ><\/div>/g, '');
content = content.replace(/<div className="absolute inset-0 bg-\[linear-gradient[^>]+><\/div>/g, '');
content = content.replace(/src="\/_next\/image\?url=[^"]+"/g, 'src="/vercel.svg"');
content = content.replace(/srcSet="\/_next\/image\?url=[^"]+"/g, 'srcSet="/vercel.svg 1x"');

fs.writeFileSync('src/components/ToolsMarqueeSection.tsx', content);

let exec = fs.readFileSync('src/components/ScrollExecutionSection.tsx', 'utf8');
exec = exec.replace(/<div className="absolute inset-0 bg-\[linear-gradient[^>]+><\/div>/g, '');
exec = exec.replace(/src="\/_next\/image\?url=[^"]+"/g, 'src="/vercel.svg"');
exec = exec.replace(/srcSet="\/_next\/image\?url=[^"]+"/g, 'srcSet="/vercel.svg 1x"');
fs.writeFileSync('src/components/ScrollExecutionSection.tsx', exec);
console.log('Fixed');
