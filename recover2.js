const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Hassaan/.gemini/antigravity-ide/brain/dd3a1c0e-5132-4ca2-b738-51a11fb74256/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');

const components = [
  'ScrollExecutionSection',
  'ToolsMarqueeSection'
];

for (let comp of components) {
  let foundCode = null;
  // search backwards so we get the LAST write before my massive replacements
  for (let i = lines.length - 1; i >= 0; i--) {
    try {
      const data = JSON.parse(lines[i]);
      if (data.tool_calls) {
        for (let call of data.tool_calls) {
          if (call.name === 'default_api:write_to_file') {
            if (call.arguments.TargetFile && call.arguments.TargetFile.includes(comp + '.tsx')) {
               foundCode = call.arguments.CodeContent;
               break;
            }
          }
        }
      }
      if (foundCode) break;
    } catch(e) {}
  }
  
  if (foundCode) {
    fs.writeFileSync(`src/components/${comp}.tsx.bak`, foundCode);
    console.log(`Recovered ${comp} from write_to_file!`);
  } else {
    console.log(`Could not find write_to_file for ${comp}`);
  }
}
