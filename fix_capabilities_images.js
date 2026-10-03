const fs = require('fs');

// Fix CapabilitiesSection - replace data-nimg="fill" img tags with proper sizing
const filePath = 'src/components/CapabilitiesSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all img tags that have data-nimg="fill" - add absolute positioning and full size
content = content.replace(
  /data-nimg="fill" className="object-cover"/g,
  'className="object-cover w-full h-full absolute inset-0"'
);

// Also fix data-nimg="fill" with object-contain
content = content.replace(
  /data-nimg="fill" className="object-contain"/g,
  'className="object-contain w-full h-full absolute inset-0"'
);

// Remove any remaining data-nimg attributes
content = content.replace(/\s*data-nimg="fill"/g, '');
content = content.replace(/\s*data-nimg="1"/g, '');

// Remove srcSet attributes that point to vercel.svg (useless placeholders)
content = content.replace(/\s*srcSet="[^"]*vercel[^"]*"/g, '');

// Fix sizes attributes
content = content.replace(/\s*sizes="[^"]*"/g, '');

fs.writeFileSync(filePath, content);
console.log('Fixed CapabilitiesSection data-nimg and sizing!');
