const fs = require('fs');
const readline = require('readline');

async function recover() {
  const fileStream = fs.createReadStream('C:/Users/Hassaan/.gemini/antigravity-ide/brain/dd3a1c0e-5132-4ca2-b738-51a11fb74256/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let foundContent = null;
  for await (const line of rl) {
    if (line.includes('OurSolutionsSection.tsx') && line.includes('"type":"PLANNER_RESPONSE"')) {
      const data = JSON.parse(line);
      const tools = data.tool_calls || [];
      for (const t of tools) {
        if (t.function && t.function.name === 'view_file' && t.response && t.response.output) {
          if (t.response.output.includes('OurSolutionsSection.tsx')) {
            foundContent = t.response.output;
            // Get the LAST one since we want the latest state before it got corrupted
          }
        }
      }
    }
  }

  if (foundContent) {
    // Extract the lines
    const lines = foundContent.split('\n');
    const sourceLines = [];
    let startParsing = false;
    for (const l of lines) {
      if (l.match(/^\d+:/)) {
        startParsing = true;
        sourceLines.push(l.substring(l.indexOf(':') + 2));
      } else if (startParsing && !l.includes('The above content does NOT show')) {
        // Stop parsing if we hit non-line stuff
        break;
      }
    }
    fs.writeFileSync('src/components/OurSolutionsSection.tsx', sourceLines.join('\n'));
    console.log('Recovered OurSolutionsSection.tsx');
  } else {
    console.log('Not found');
  }
}

recover();
