const fs = require('fs');

function fixSection(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix opacities and transforms in inline styles
  content = content.replace(/style=\{\{\s*"opacity"\s*:\s*"0"\s*,\s*"transform"\s*:\s*"[^"]+"\s*\}\}/g, '');
  content = content.replace(/style=\{\{\s*"opacity"\s*:\s*"0"\s*\}\}/g, '');

  // Fix image paths
  // Any src starting with /images/downloaded or /n8n- or /cursor- or /workflow or /vercel
  content = content.replace(/src="(\/(?:images\/downloaded|n8n-|cursor-|workflow|vercel)[^"]+)"/g, 'src="https://www.ayautomate.com$1"');
  
  // Make sure we didn't add it twice
  content = content.replace(/src="https:\/\/www\.ayautomate\.comhttps:\/\/www\.ayautomate\.com/g, 'src="https://www.ayautomate.com');

  fs.writeFileSync(filePath, content);
  console.log('Fixed', filePath);
}

fixSection('src/components/CapabilitiesSection.tsx');
fixSection('src/components/ToolsMarqueeSection.tsx');
fixSection('src/components/OurSolutionsSection.tsx');
