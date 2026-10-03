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
    if (line.includes('OurSolutionsSection.tsx') && line.includes('"type":"TOOL_RESPONSE"')) {
      const data = JSON.parse(line);
      if (data.content && data.content.includes('OurSolutionsSection.tsx')) {
        foundContent = data.content;
      }
    }
  }

  if (foundContent) {
    const lines = foundContent.split('\n');
    const sourceLines = [];
    let startParsing = false;
    for (const l of lines) {
      if (l.match(/^\d+:/)) {
        startParsing = true;
        sourceLines.push(l.substring(l.indexOf(':') + 2));
      } else if (startParsing && !l.match(/^\d+:/)) {
        if (!l.includes('The above content does NOT show')) {
           sourceLines.push(l);
        }
      }
    }
    fs.writeFileSync('src/components/OurSolutionsSection.tsx', sourceLines.join('\n'));
    console.log('Recovered OurSolutionsSection.tsx, length:', sourceLines.length);
  } else {
    console.log('Not found');
  }
}

recover();
