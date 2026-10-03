const fs = require('fs');

function fixSection(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix ALL inline style objects that contain "opacity":"0" or "opacity":0
  // e.g. style={{"left":"0%","top":"5%","transform":"scale(0.8)","opacity":"0"}}
  content = content.replace(/"opacity"\s*:\s*"0"/g, '"opacity":"1"');
  content = content.replace(/"opacity"\s*:\s*0/g, '"opacity":1');
  // Also transform scale(0.8) might be hiding elements by making them small, but opacity 1 is enough.

  // Fix ANY image path starting with /images/ or /n8n- or /cursor- or /workflow or /vercel
  content = content.replace(/src="(\/(?:images|n8n-|cursor-|workflow|vercel)[^"]+)"/g, 'src="https://www.ayautomate.com$1"');
  
  // Make sure we didn't add it twice
  content = content.replace(/src="https:\/\/www\.ayautomate\.comhttps:\/\/www\.ayautomate\.com/g, 'src="https://www.ayautomate.com');

  fs.writeFileSync(filePath, content);
  console.log('Fixed opacities and ALL images in', filePath);
}

fixSection('src/components/CapabilitiesSection.tsx');
fixSection('src/components/ToolsMarqueeSection.tsx');
