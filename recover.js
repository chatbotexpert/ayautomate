const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Hassaan/.gemini/antigravity-ide/brain/dd3a1c0e-5132-4ca2-b738-51a11fb74256/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');

const components = [
  'CapabilitiesSection',
  'OurSolutionsSection',
  'ScrollExecutionSection',
  'StackSection',
  'ToolsMarqueeSection'
];

for (let comp of components) {
  let foundContent = null;
  for (let line of lines) {
    try {
      const data = JSON.parse(line);
      // We are looking for view_file output which contains the original file content
      if (data.content && data.content.includes(`export default function ${comp}`) && data.content.includes('<original_line>')) {
        foundContent = data.content;
        break; // grab the first occurrence!
      }
    } catch(e) {}
  }

  if (foundContent) {
    try {
      // It has format: ... <original_line>.\n1: ...
      const parts = foundContent.split('. Please note that any changes targeting the original code should remove the line number, colon, and leading space.\\n');
      if (parts.length > 1) {
        let code = parts[1].split('\\nThe above content shows the entire, complete file contents')[0];
        code = code.split('\n').map(line => line.replace(/^\\d+: /, '')).join('\n');
        // also replace any escaped newlines if they are literal \n
        code = code.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        // Actually, if it's from JSON.parse, the string is already unescaped! So we don't need to replace \\n.
        // Wait, the string is unescaped by JSON.parse, so it actually contains real newlines!
      } else {
        // Try real newlines
        let code = foundContent.split('. Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n')[1];
        if (code) {
           code = code.split('\nThe above content shows the entire, complete file contents')[0];
           code = code.split('\n').map(line => line.replace(/^\d+: /, '')).join('\n');
           fs.writeFileSync(`src/components/${comp}.tsx.bak`, code);
           console.log(`Recovered ${comp}`);
        }
      }
    } catch (err) {
      console.log(`Error recovering ${comp}:`, err.message);
    }
  } else {
    console.log(`${comp} not found in transcript`);
  }
}
