const fs = require('fs');

function extractImgSrc(file) {
  try {
    const html = fs.readFileSync(file, 'utf8');
    const regex = /<img[^>]*src="([^"]+)"/g;
    let match;
    console.log(`--- Images in ${file} ---`);
    while ((match = regex.exec(html)) !== null) {
      console.log(match[1]);
    }
  } catch (e) {
    console.log(`Failed to read ${file}`);
  }
}

extractImgSrc('src/components/ToolsMarqueeSection.tsx');
extractImgSrc('src/components/CapabilitiesSection.tsx');
extractImgSrc('src/components/OurSolutionsSection.tsx');
